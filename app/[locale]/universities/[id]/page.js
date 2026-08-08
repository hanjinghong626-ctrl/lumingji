'use client';

import { useI18n } from '../../../../i18n-context';
import { getUniversityById, universities } from '../universityData';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function UniversityDetailPage() {
  const { locale, t } = useI18n();
  const l = locale;
  const params = useParams();
  const router = useRouter();
  const uni = getUniversityById(params.id);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!uni || typeof window === 'undefined') return;
    
    // Load Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    
    // Load Leaflet JS and init map
    const initMap = () => {
      const L = window.L;
      if (!L || !mapRef.current) return;
      
      const map = L.map(mapRef.current, {
        center: [uni.lat, uni.lng],
        zoom: 15,
        zoomControl: true
      });
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 18
      }).addTo(map);
      
      L.marker([uni.lat, uni.lng]).addTo(map)
        .bindPopup(`<b>${uni.name[l]}</b>`)
        .openPopup();
    };
    
    if (window.L) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [uni, l]);

  if (!uni) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">University not found</h1>
          <button onClick={() => router.push(`/${l}/universities`)} className="text-emerald-600 hover:text-emerald-700">
            ← Back to universities
          </button>
        </div>
      </div>
    );
  }

  const navigate = (url) => window.open(url, '_blank');
  
  const getNavUrl = (type) => {
    const { lat, lng, name } = uni;
    const uniName = name.zh;
    switch(type) {
      case 'amap': return `https://uri.amap.com/marker?position=${lng},${lat}&name=${encodeURIComponent(uniName)}`;
      case 'apple': return `maps://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`;
      case 'google': return `https://maps.google.com/maps?q=${lat},${lng}`;
      default: return '#';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-800"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-emerald-400 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-teal-300 blur-3xl"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <button onClick={() => router.push(`/${l}/universities`)} className="absolute top-6 left-6 flex items-center text-white/80 hover:text-white">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('universities.back')}
          </button>
          <span className="text-6xl md:text-7xl font-bold mb-4">{uni.shortName[l]}</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{uni.name[l]}</h1>
          <div className="flex flex-wrap justify-center gap-2">
            {uni.tags[l].map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('universities.overview')}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{uni.description[l]}</p>
        </div>

        {/* Map & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600">
              <h3 className="text-lg font-bold text-white">{t('universities.location')}</h3>
            </div>
            <div ref={mapRef} className="h-80 w-full"></div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{t('universities.navigation')}</h3>
            <p className="text-gray-600 mb-6">{uni.address[l]}</p>
            <div className="space-y-3">
              <a href={getNavUrl('amap')} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <span className="font-medium text-blue-700">{t('universities.amap')}</span>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href={getNavUrl('apple')} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="font-medium text-gray-700">{t('universities.appleMaps')}</span>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a href={getNavUrl('google')} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <span className="font-medium text-green-700">{t('universities.googleMaps')}</span>
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">{t('universities.officialWebsite')}</h4>
              <a href={uni.website} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm break-all">
                {uni.website}
              </a>
              <h4 className="font-medium text-gray-900 mb-2 mt-4">{t('universities.intlAdmission')}</h4>
              <a href={uni.intlWebsite} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm break-all">
                {uni.intlWebsite}
              </a>
            </div>
          </div>
        </div>

        {/* Disciplines */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {t('universities.disciplines')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uni.disciplines[l].map((disc, idx) => (
              <div key={idx} className="flex items-start p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-lg font-bold text-lg mr-4">
                  {disc.level.replace('+', '')}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{disc.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{disc.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tuition */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('universities.tuition')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.bachelorChinese')}</h4>
              <p className="text-2xl font-bold text-emerald-600">{uni.tuition[l].bachelor_zh}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.bachelorEnglish')}</h4>
              <p className="text-2xl font-bold text-emerald-600">{uni.tuition[l].bachelor_en}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.master')}</h4>
              <p className="text-2xl font-bold text-emerald-600">{uni.tuition[l].master}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.doctor')}</h4>
              <p className="text-2xl font-bold text-emerald-600">{uni.tuition[l].doctor}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg md:col-span-2">
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.dormitory')}</h4>
              <p className="text-xl font-bold text-emerald-600">{uni.tuition[l].dorm}</p>
            </div>
          </div>
        </div>

        {/* Scholarships */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            {t('universities.scholarships')}
          </h2>
          <div className="space-y-3">
            {uni.scholarships[l].map((sch, idx) => (
              <div key={idx} className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg">
                <svg className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-800 font-medium">{sch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Admission */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {t('universities.admission')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.applicationDeadline')}</h4>
              <p className="text-xl font-bold text-emerald-600">{uni.admission[l].deadline}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.languageRequirement')}</h4>
              <p className="text-xl font-bold text-emerald-600">{uni.admission[l].language}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.ageRange')}</h4>
              <p className="text-xl font-bold text-emerald-600">{uni.admission[l].age}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">{t('universities.educationBackground')}</h4>
              <p className="text-xl font-bold text-emerald-600">{uni.admission[l].degree}</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            {t('universities.highlights')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uni.features[l].map((feat, idx) => (
              <div key={idx} className="flex items-start p-4 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg">
                <svg className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-800">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

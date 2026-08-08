'use client';

import { useI18n } from '../../../i18n-context';
import { universities } from './universityData';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function UniversitiesPage() {
  const { locale, t } = useI18n();
  const l = locale;
  const router = useRouter();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Load Leaflet CSS and JS
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Load Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    
    // Load Leaflet JS
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => setMapLoaded(true);
      document.head.appendChild(script);
    } else {
      setMapLoaded(true);
    }
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || mapInstanceRef.current) return;
    
    const L = window.L;
    const map = L.map(mapRef.current, {
      center: [36.15, 120.40],
      zoom: 10,
      zoomControl: true,
      scrollWheelZoom: false
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 18
    }).addTo(map);
    
    // Add markers
    universities.forEach(uni => {
      const marker = L.marker([uni.lat, uni.lng]).addTo(map);
      marker.bindPopup(`<b>${uni.name[l]}</b><br/>${uni.address[l]}`);
      marker.on('click', () => {
        router.push(`/${l}/universities/${uni.id}`);
      });
    });
    
    mapInstanceRef.current = map;
  }, [mapLoaded, l]);

  const tagColors = {
    '985': 'bg-red-100 text-red-700',
    '211': 'bg-blue-100 text-blue-700',
    '双一流': 'bg-purple-100 text-purple-700',
    '省属重点': 'bg-green-100 text-green-700',
    '省属': 'bg-gray-100 text-gray-700',
    'Двойной первый класс': 'bg-purple-100 text-purple-700',
    'Провинциальный ключевой': 'bg-green-100 text-green-700',
    'Провинциальный': 'bg-gray-100 text-gray-700',
    'Double First-Class': 'bg-purple-100 text-purple-700',
    'Provincial Key': 'bg-green-100 text-green-700',
    'Provincial': 'bg-gray-100 text-gray-700'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-800"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-emerald-400 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-300 blur-3xl"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('universities.title')}</h1>
            <p className="text-lg md:text-xl opacity-90">{t('universities.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600">
            <h2 className="text-2xl font-bold text-white">{t('universities.mapTitle')}</h2>
          </div>
          <div ref={mapRef} className="h-96 md:h-[500px] w-full"></div>
        </div>

        {/* University Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {universities.map(uni => (
            <div
              key={uni.id}
              onClick={() => router.push(`/${l}/universities/${uni.id}`)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className="h-32 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white blur-2xl"></div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{uni.shortName[l]}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {uni.name[l]}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {uni.tags[l].map((tag, idx) => (
                    <span key={idx} className={`px-2 py-0.5 rounded text-xs font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{uni.address[l]}</p>
                <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700">
                  <span>{t('universities.viewDetails')}</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useI18n } from '../../../i18n-context';
import { universities } from './universityData';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SEO from '../../components/SEO.js';

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
    
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => setMapLoaded(true);
      document.head.appendChild(script);
    } else {
      setMapLoaded(true);
    }
  }, []);

  // Initialize map with all campus markers
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || mapInstanceRef.current) return;
    
    const L = window.L;
    const map = L.map(mapRef.current, {
      center: [36.1, 120.3],
      zoom: 9,
      zoomControl: true,
      scrollWheelZoom: false
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 18
    }).addTo(map);
    
    // Create custom icons for different university types
    const createIcon = (color) => L.divIcon({
      className: 'custom-marker',
      html: `<div style="width:12px;height:12px;border-radius:50%;background:${color};border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
    
    const iconPublic = createIcon('#059669');    // emerald-600 for public
    const iconPrivate = createIcon('#0284c7');   // blue-600 for private
    const iconSpecial = createIcon('#d97706');   // amber-600 for special
    
    // Add markers for ALL campuses
    universities.forEach(uni => {
      const isPrivate = uni.tags[l].some(tag => 
        tag.includes('民办') || tag.includes('Private') || tag.includes('Частный')
      );
      const isSpecial = uni.tags[l].some(tag => 
        tag.includes('K12') || tag.includes('音乐学校') || tag.includes('Music') || tag.includes('Музыкальная')
      );
      const icon = isSpecial ? iconSpecial : (isPrivate ? iconPrivate : iconPublic);
      
      if (uni.campuses && uni.campuses.length > 0) {
        uni.campuses.forEach((campus, idx) => {
          const campusName = campus.name ? campus.name[l] : uni.name[l];
          const campusAddr = campus.address ? campus.address[l] : '';
          const marker = L.marker([campus.lat, campus.lng], { icon }).addTo(map);
          const popupContent = `<div style="min-width:160px;"><b style="font-size:13px;">${campusName}</b><br/><span style="color:#666;font-size:11px;">${uni.name[l]}</span><br/><span style="color:#888;font-size:11px;">${campusAddr}</span></div>`;
          marker.bindPopup(popupContent);
          marker.on('click', () => {
            router.push(`/${l}/universities/${uni.id}`);
          });
        });
      }
    });
    
    // Add a custom legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
      const div = L.DomUtil.create('div', 'leaflet-control');
      div.style.cssText = 'background:white;padding:8px 12px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.15);font-size:12px;line-height:1.8;';
      const labels = {
        zh: ['公办高校', '民办高校', '特别标注'],
        ru: ['Гос. вузы', 'Частные вузы', 'Особые'],
        en: ['Public', 'Private', 'Special']
      };
      const colors = ['#059669', '#0284c7', '#d97706'];
      const currentLabels = labels[l] || labels.en;
      div.innerHTML = currentLabels.map((label, i) => 
        `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${colors[i]};margin-right:6px;vertical-align:middle;"></span>${label}`
      ).join('<br/>');
      return div;
    };
    legend.addTo(map);
    
    mapInstanceRef.current = map;
  }, [mapLoaded, l]);

  const tagColors = {
    '985': 'bg-red-100 text-red-700',
    '211': 'bg-blue-100 text-blue-700',
    '双一流': 'bg-purple-100 text-purple-700',
    '省属重点': 'bg-green-100 text-green-700',
    '省属': 'bg-gray-100 text-gray-700',
    '新建大学': 'bg-amber-100 text-amber-700',
    '民办本科': 'bg-cyan-100 text-cyan-700',
    '国家示范高职': 'bg-orange-100 text-orange-700',
    '省属高职': 'bg-teal-100 text-teal-700',
    '市属高职': 'bg-indigo-100 text-indigo-700',
    '公办专科': 'bg-emerald-100 text-emerald-700',
    '民办专科': 'bg-sky-100 text-sky-700',
    '音乐学校': 'bg-pink-100 text-pink-700',
    'K12': 'bg-rose-100 text-rose-700',
    'Двойной первый класс': 'bg-purple-100 text-purple-700',
    'Провинциальный ключевой': 'bg-green-100 text-green-700',
    'Провинциальный': 'bg-gray-100 text-gray-700',
    'Новый университет': 'bg-amber-100 text-amber-700',
    'Частный': 'bg-cyan-100 text-cyan-700',
    'Гос. образцовый колледж': 'bg-orange-100 text-orange-700',
    'Провинциальный': 'bg-teal-100 text-teal-700',
    'Музыкальная школа': 'bg-pink-100 text-pink-700',
    'Double First-Class': 'bg-purple-100 text-purple-700',
    'Provincial Key': 'bg-green-100 text-green-700',
    'Provincial': 'bg-gray-100 text-gray-700',
    'New University': 'bg-amber-100 text-amber-700',
    'Private': 'bg-cyan-100 text-cyan-700',
    'National Model Vocational': 'bg-orange-100 text-orange-700',
    'Provincial Vocational': 'bg-teal-100 text-teal-700',
    'Municipal Vocational': 'bg-indigo-100 text-indigo-700',
    'Public College': 'bg-emerald-100 text-emerald-700',
    'Music School': 'bg-pink-100 text-pink-700',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <SEO title={`${t('universities.title')} — 鹿鸣集`} description="青岛高校数据库：查看28所高校的优势专业、学费、奖学金、地理位置等信息，交互式地图一目了然。" />
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
            <p className="text-sm opacity-75 mt-2">
              {l === 'zh' ? `共 ${universities.length} 所高校 · ${universities.reduce((sum, u) => sum + (u.campuses?.length || 0), 0)} 个校区` :
               l === 'ru' ? `${universities.length} вузов · ${universities.reduce((sum, u) => sum + (u.campuses?.length || 0), 0)} кампусов` :
               `${universities.length} universities · ${universities.reduce((sum, u) => sum + (u.campuses?.length || 0), 0)} campuses`}
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600">
            <h2 className="text-2xl font-bold text-white">{t('universities.mapTitle')}</h2>
          </div>
          <div ref={mapRef} className="h-96 md:h-[550px] w-full"></div>
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
                <div className="relative h-full flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-white text-center px-2 leading-tight">{uni.name[l]}</span>
                  {uni.campuses && uni.campuses.length > 1 && (
                    <span className="text-xs text-white/80 mt-1">
                      {l === 'zh' ? `${uni.campuses.length}个校区` : l === 'ru' ? `${uni.campuses.length} кампуса` : `${uni.campuses.length} campuses`}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {uni.tags[l].map((tag, idx) => (
                    <span key={idx} className={`px-2 py-0.5 rounded text-xs font-medium ${tagColors[tag] || 'bg-gray-100 text-gray-700'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {uni.campuses && uni.campuses[0] ? uni.campuses[0].address[l] : ''}
                </p>
                <div className="mt-3 flex items-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700">
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

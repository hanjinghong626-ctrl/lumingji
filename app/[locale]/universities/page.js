'use client';

import { useI18n } from '../../../i18n-context';

const universities = [
  {
    name: { zh: '中国海洋大学', ru: 'Университет Оукейан', en: 'Ocean University of China' },
    type: { zh: '985/211', ru: '985/211', en: '985/211' },
    address: { zh: '青岛市崂山区松岭路23号', ru: '23 Songling Rd, Laoshan', en: '23 Songling Road, Laoshan District' },
  },
  {
    name: { zh: '中国石油大学（华东）', ru: 'Университет нефти Китая (Восток)', en: 'China University of Petroleum (East China)' },
    type: { zh: '211', ru: '211', en: '211' },
    address: { zh: '青岛市黄岛区长江西路66号', ru: '66 Changjiang West Rd, Huangdao', en: '66 Changjiang West Road, Huangdao' },
  },
  {
    name: { zh: '山东大学（青岛）', ru: 'Университет Шаньдун (Циндао)', en: 'Shandong University (Qingdao)' },
    type: { zh: '985/211', ru: '985/211', en: '985/211' },
    address: { zh: '青岛市即墨区滨海路72号', ru: '72 Binhai Rd, Jimo', en: '72 Binhai Road, Jimo District' },
  },
  {
    name: { zh: '青岛大学', ru: 'Циндаоский университет', en: 'Qingdao University' },
    type: { zh: '省属重点', ru: 'Провинциальный', en: 'Provincial Key' },
    address: { zh: '青岛市崂山区宁夏路308号', ru: '308 Ningxia Rd, Laoshan', en: '308 Ningxia Road, Laoshan District' },
  },
  {
    name: { zh: '青岛科技大学', ru: 'Университет науки и технологий Циндао', en: 'Qingdao University of Science & Technology' },
    type: { zh: '省属重点', ru: 'Провинциальный', en: 'Provincial Key' },
    address: { zh: '青岛市崂山区松岭路99号', ru: '99 Songling Rd, Laoshan', en: '99 Songling Road, Laoshan District' },
  },
  {
    name: { zh: '山东科技大学', ru: 'Университет науки и техники Шаньдун', en: 'Shandong University of Science and Technology' },
    type: { zh: '省属重点', ru: 'Провинциальный', en: 'Provincial Key' },
    address: { zh: '青岛市黄岛区前湾港路579号', ru: '579 Qianwan Port Rd, Huangdao', en: '579 Qianwan Port Road, Huangdao' },
  },
  {
    name: { zh: '青岛理工大学', ru: 'Технологический университет Циндао', en: 'Qingdao University of Technology' },
    type: { zh: '省属', ru: 'Провинциальный', en: 'Provincial' },
    address: { zh: '青岛市市北区抚顺路11号', ru: '11 Fushun Rd, Shibei', en: '11 Fushun Road, Shibei District' },
  },
  {
    name: { zh: '青岛农业大学', ru: 'Сельскохозяйственный университет Циндао', en: 'Qingdao Agricultural University' },
    type: { zh: '省属', ru: 'Провинциальный', en: 'Provincial' },
    address: { zh: '青岛市城阳区长城路700号', ru: '700 Changcheng Rd, Chengyang', en: '700 Changcheng Road, Chengyang' },
  },
];

export default function UniversitiesPage() {
  const { locale, t } = useI18n();
  const l = locale;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="section-title">{t('universities.title')}</h1>
        <p className="section-subtitle">{t('universities.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {universities.map((uni, idx) => (
          <div key={idx} className="card">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-serif font-bold text-gray-800">
                {uni.name[l]}
              </h3>
              <span className="text-xs px-2 py-1 bg-accent-100 text-accent-700 rounded-full font-medium whitespace-nowrap ml-2">
                {uni.type[l]}
              </span>
            </div>
            <p className="text-sm text-gray-500 flex items-start gap-1">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {uni.address[l]}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm">{t('universities.placeholder')}</p>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useI18n } from '../../../i18n-context';

export default function StepGuide({ data, locale }) {
  const { t } = useI18n();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [showAllSteps, setShowAllSteps] = useState(false);

  const lang = locale || 'zh';
  const steps = data.steps || [];
  const totalSteps = steps.length;

  const markComplete = (idx) => {
    const next = new Set(completedSteps);
    next.add(idx);
    setCompletedSteps(next);
    if (idx < totalSteps - 1) setCurrentStep(idx + 1);
  };

  const progress = totalSteps > 0 ? Math.round((completedSteps.size / totalSteps) * 100) : 0;

  return (
    <div className="step-guide">
      {/* 进度条 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 font-wenkai">
            {completedSteps.size}/{totalSteps} {t('life.guide.steps_completed') || 'steps completed'}
          </span>
          <span className="text-sm font-bold text-primary-600">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 步骤列表 */}
      <div className="space-y-4">
        {steps.map((step, idx) => {
          const isCompleted = completedSteps.has(idx);
          const isCurrent = idx === currentStep;
          const isVisible = showAllSteps || isCurrent || isCompleted || idx === 0;
          if (!isVisible) return null;

          return (
            <div
              key={idx}
              className={`relative pl-12 pb-6 border-l-2 transition-all duration-300 ${
                isCompleted ? 'border-green-400' : isCurrent ? 'border-primary-400' : 'border-gray-200'
              }`}
            >
              <div
                className={`absolute -left-4 top-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  isCompleted ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : isCurrent ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? '✓' : idx + 1}
              </div>
              <div className={`rounded-xl p-4 transition-all ${
                isCurrent ? 'bg-primary-50/80 border border-primary-200/50' : 'bg-white/60'
              }`}>
                <h4 className="font-wenkai font-bold text-gray-800 mb-2">
                  {step.title?.[lang] || step.title?.zh}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {step.desc?.[lang] || step.desc?.zh}
                </p>
                {step.tip && (
                  <div className="px-3 py-2 bg-amber-50 rounded-lg border border-amber-200/50 mb-3">
                    <p className="text-xs text-amber-700">💡 {step.tip?.[lang] || step.tip?.zh}</p>
                  </div>
                )}
                {!isCompleted && isCurrent && (
                  <button
                    onClick={() => markComplete(idx)}
                    className="mt-2 px-4 py-1.5 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-all shadow-md"
                  >
                    {t('life.guide.mark_done') || '完成 ✓'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {totalSteps > 3 && (
        <button
          onClick={() => setShowAllSteps(!showAllSteps)}
          className="mt-4 w-full py-2 text-sm text-primary-600 font-wenkai hover:text-primary-700"
        >
          {showAllSteps ? (t('life.guide.collapse') || '收起 ↑') : (t('life.guide.show_all') || `查看全部 ${totalSteps} 步 ↓`)}
        </button>
      )}

      {progress === 100 && (
        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200/50 text-center">
          <p className="text-green-700 font-wenkai font-bold text-lg">
            🎉 {t('life.guide.congrats') || '恭喜完成所有步骤！'}
          </p>
        </div>
      )}
    </div>
  );
}

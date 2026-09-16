import React from 'react';
import { PACKAGES } from '../data/tourData';
import { KERALA_DURATION_OPTIONS } from '../../../constants/crm';
import { CrmLeadForm } from '../../../components/CrmLeadForm';

interface QuoteFormProps {
  preselectedPackageId?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ preselectedPackageId }) => {
  const selectedPkg = PACKAGES.find((p) => p.id === preselectedPackageId);
  const selectedDuration = selectedPkg
    ? KERALA_DURATION_OPTIONS.find((d) => d.includes(`${selectedPkg.nights}N`)) ||
      KERALA_DURATION_OPTIONS[2]
    : KERALA_DURATION_OPTIONS[2];

  return (
    <section id="quote-section" className="py-12 sm:py-16 bg-rose-50 border-t border-b border-rose-200 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-rose-200 relative overflow-hidden">
          <CrmLeadForm
            destination="Kerala Honeymoon"
            durations={KERALA_DURATION_OPTIONS}
            selectedDuration={selectedDuration}
            formTitle="Request Your Romantic Kerala Honeymoon Quote"
            formSubtitle="Flowerbed Decoration • Candlelight Dinner • 100% Couple Privacy"
            submitButtonText="Get Honeymoon Quote"
            badgeText="Honeymoon Special"
          />
        </div>
      </div>
    </section>
  );
};

// synchronized export

export default QuoteForm;

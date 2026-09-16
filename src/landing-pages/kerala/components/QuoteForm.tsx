import React from 'react';
import { PACKAGES } from '../../../data/tourData';
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
    <section id="quote-section" className="py-12 sm:py-16 bg-[#EBF2FF] border-t border-b border-[#0B3996]/20 font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-[#0B3996]/20 relative overflow-hidden">
          <CrmLeadForm
            destination="Kerala"
            durations={KERALA_DURATION_OPTIONS}
            selectedDuration={selectedDuration}
            formTitle="Request Your Custom Kerala Itinerary"
            formSubtitle="100% Customized • Best Price Guaranteed • Verified Partner Resorts"
            submitButtonText="Get My Free Kerala Quote"
            badgeText="Fast Quote Request"
          />
        </div>
      </div>
    </section>
  );
};

// synchronized export

export default QuoteForm;

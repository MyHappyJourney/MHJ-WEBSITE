import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PACKAGES } from '../data/tourData';
import { KERALA_DURATION_OPTIONS } from '../../../constants/crm';
import { Logo } from './Logo';
import { CrmLeadForm } from '../../../components/CrmLeadForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedPackageId,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedPkg = PACKAGES.find((p) => p.id === preselectedPackageId);
  const selectedDuration = selectedPkg
    ? KERALA_DURATION_OPTIONS.find((d) => d.includes(`${selectedPkg.nights}N`)) ||
      KERALA_DURATION_OPTIONS[2]
    : KERALA_DURATION_OPTIONS[2];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto animate-fade-in font-sans">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-teal-100 my-auto text-left">
        <div className="bg-gradient-to-r from-teal-900 to-[#0B3996] px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-auto brightness-0 invert" />
            <div className="h-4 w-px bg-white/20" />
            <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
              Senior Citizen Tour Quote
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-7 max-h-[85vh] overflow-y-auto">
          <CrmLeadForm
            destination="Kerala Senior Citizen Tours"
            durations={KERALA_DURATION_OPTIONS}
            selectedDuration={selectedDuration}
            formTitle="Plan Your Kerala Senior Tour"
            formSubtitle="Personalized holiday plan crafted with accessible stays and leisurely pace."
            submitButtonText="Get Senior Tour Quote"
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
};

// synchronized export

export default QuoteModal;

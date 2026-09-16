import { LeadFormData } from '../types';
import { submitLead as mainSubmitLead, LeadSubmissionResult } from '../../../services/leadService';

export type { LeadSubmissionResult };

export async function submitLead(formData: LeadFormData): Promise<LeadSubmissionResult> {
  return mainSubmitLead(
    {
      ...formData,
      destination: 'Kerala Family',
    },
    'Kerala Family'
  );
}

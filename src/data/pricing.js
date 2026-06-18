// Mock data for the "Help Is One Click Away" pricing section.
export const plans = [
  {
    id: 'free',
    name: 'Free',
    tier: 'Basic',
    price: null,
    featured: false,
    features: [
      { label: '1 Active Job', included: true },
      { label: 'Basic List Placement', included: true },
      { label: 'Unlimited Job Applicants', included: false },
      { label: 'Invite Anyone to Apply to Your Jobs', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tier: 'Premium',
    price: { amount: '$79.99', cadence: 'Per Month' },
    featured: true,
    features: [
      { label: 'Unlimited Job Posts', included: true },
      { label: 'Instant Job Post Approval', included: true },
      { label: 'Premium List Placement', included: true },
      { label: 'Unlimited Job Applicants', included: true },
    ],
  },
]

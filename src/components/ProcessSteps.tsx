import { Reveal } from '@/components/motion/Reveal';

const steps = [
  {
    number: '1',
    title: 'Submit Photos and Details',
    description:
      'Use our form or text photos to 213-770-9463. Include a bottle list and clear images.',
  },
  {
    number: '2',
    title: 'Receive an Offer',
    description:
      'We review submissions and respond with an offer, typically within one business day.',
  },
  {
    number: '3',
    title: 'Ship with Our Kit',
    description:
      'Accept the offer and we provide shipping instructions and packing guidance. Drop-off may be available locally.',
  },
  {
    number: '4',
    title: 'Get Paid',
    description:
      'Payment is issued after we receive and inspect the items.',
  },
];

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <Reveal key={step.number} delay={index * 0.12}>
          <div className="relative">
            {/* Heritage design: Restrained circle with border, no bright fills */}
            <div className="flex items-center justify-center w-10 h-10 rounded-md border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-lg font-semibold mb-4">
              {step.number}
            </div>
            <h3 className="mb-2">{step.title}</h3>
            <p className="text-[var(--color-text-muted)] text-sm">{step.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

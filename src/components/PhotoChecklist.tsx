const checklistItems = [
  'Bottle list with names, sizes, and vintages',
  'Photo of front label',
  'Photo of back label',
  'Photo of capsule or seal',
  'Photo showing fill level',
  'Photo of original box (if available)',
  'Photo of any flaws or damage',
];

export default function PhotoChecklist() {
  return (
    <ul className="space-y-3">
      {checklistItems.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <svg
            className="h-5 w-5 text-[var(--color-success)] flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          <span className="text-[var(--color-text)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

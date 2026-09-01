export default function PawIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 55c9 0 16 8 16 16 0 6-5 10-11 10-3 0-4-2-5-2s-2 2-5 2c-6 0-11-4-11-10 0-8 7-16 16-16z"
        fill={color}
      />
      <circle cx="34" cy="42" r="7" fill={color} />
      <circle cx="66" cy="42" r="7" fill={color} />
      <circle cx="42" cy="28" r="6" fill={color} />
      <circle cx="58" cy="28" r="6" fill={color} />
    </svg>
  );
}

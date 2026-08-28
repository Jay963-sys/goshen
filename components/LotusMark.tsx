export function LotusMark({
  className,
  title = "LotusCare",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label={title}>
      {/* outer petals */}
      <path
        d="M20 6c4.5 5.2 6.8 10.4 6.8 15.2A6.8 6.8 0 0 1 20 28a6.8 6.8 0 0 1-6.8-6.8C13.2 16.4 15.5 11.2 20 6Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M9.4 13.6c5.9 1.8 10 4.9 12.3 8.6a6.3 6.3 0 0 1-2.1 8.7 6.3 6.3 0 0 1-8.7-2.1C8.2 23.9 8 18.7 9.4 13.6Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M30.6 13.6c-5.9 1.8-10 4.9-12.3 8.6a6.3 6.3 0 0 0 2.1 8.7 6.3 6.3 0 0 0 8.7-2.1c2.7-4.9 2.9-10.1 1.5-15.2Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

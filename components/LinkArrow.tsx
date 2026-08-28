/**
 * Small drawn arrow for editorial links — replaces the ↗ / → glyphs.
 * Pairs with the `.editorial-link` class (which animates it on hover).
 *
 * You can also swap the local copy in app/page.tsx for this import.
 */
export function LinkArrow() {
  return (
    <svg
      className="editorial-link-arrow"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function isDarkColor(hex: string): boolean {
  if (hex.substr(0, 1) != "#") return false;
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2 < 127;
}

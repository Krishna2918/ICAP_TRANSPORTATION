const GH_PUBLIC =
  "https://raw.githubusercontent.com/Krishna2918/ICAP_TRANSPORTATION/main/public";

/** Local paths in preview; GitHub-hosted binaries on Vercel production builds. */
export function asset(path: string): string {
  const file = (path.startsWith("/") ? path : `/${path}`).replace(/\?.*$/, "");
  if (import.meta.env.PROD) return `${GH_PUBLIC}${file}`;
  return file;
}

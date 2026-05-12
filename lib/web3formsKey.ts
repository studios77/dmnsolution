/**
 * Web3Forms public access key.
 * Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local (local) and
 * Cloudflare Pages → Settings → Environment variables (production build).
 */
export function getWeb3FormsAccessKey(): string {
  return (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '').trim()
}

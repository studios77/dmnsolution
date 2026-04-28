/** Production site origin (trailing slash 없음) */
export const SITE_ORIGIN = 'https://dmns.co.kr'

export function serviceCanonicalUrl(slug: string): string {
  return `${SITE_ORIGIN}/services/${slug}/`
}

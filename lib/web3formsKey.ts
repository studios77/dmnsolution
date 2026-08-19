/**
 * Web3Forms 접근 키 (브라우저 노출).
 *
 * `NEXT_PUBLIC_` 접두사가 붙어 있으므로 이 값은 **빌드 결과에 그대로 실립니다.**
 * 원래 이런 키는 서버에만 둬야 하지만, Web3Forms 무료 플랜은 서버 호출을
 * 403 으로 막고 브라우저에서 부르는 것만 허용합니다("Use our API in client
 * side"). 무료 플랜을 쓰는 동안에는 노출이 불가피한 구조입니다.
 *
 * Web3Forms 도 이 키를 공개 값으로 전제하고 자체 스팸 필터를 겁니다. 여기서도
 * 캡차와 허니팟을 함께 씁니다. 그래도 키를 아는 누구나 이 폼 주소로 메일을
 * 보낼 수 있다는 점은 남습니다.
 *
 * **없애는 방법**: Cloudflare Secret 에 `RESEND_API_KEY` 와 `CONTACT_TO_EMAIL`
 * 을 넣고 `ContactForm.tsx` 의 `DELIVERY_MODE` 를 'server' 로 바꾸면, 전달이
 * Pages Function 을 거치게 되어 이 키가 번들에서 사라집니다.
 */
export function getWeb3FormsKey(): string {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ''
}

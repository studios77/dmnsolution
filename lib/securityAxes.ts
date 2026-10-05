import { listedServices, type ServiceData } from '@/lib/servicesData'

/**
 * 홈의 보안 4축.
 *
 * 분류의 정본은 `servicesData` 의 `cat` 입니다. 여기서는 그 값을 그대로 키로
 * 써서 묶기만 하므로, 서비스를 새로 추가해도 `cat` 만 맞으면 홈에 자동으로
 * 들어옵니다 — 홈에 서비스 이름을 다시 적어 두지 않습니다.
 */
export type SecurityAxis = {
  cat: string
  n: string
  title: string
  desc: string
  /** 이 축에서 특히 내세우는 근거. 서비스 본문에 있는 값만 씁니다. */
  proof: string
}

export const SECURITY_AXES: SecurityAxis[] = [
  {
    cat: '보안 / 네트워크',
    n: '01',
    title: '네트워크 보안',
    desc: '네트워크 경계와 내부 세그먼트에서 침입 시도를 실시간으로 탐지·차단하고, 제로트러스트 원칙으로 모든 접근을 검증합니다. 스트리밍 트래픽의 이상 행위도 AI가 잡아냅니다.',
    proof: 'IDS/IPS · 제로트러스트 · 이상 감지 후 5초 이내 차단',
  },
  {
    cat: '보안 / 클라우드',
    n: '02',
    title: '클라우드 보안',
    desc: '설정 오류와 과도하게 부여된 권한을 식별해 정비하고, 컨테이너·쿠버네티스 워크로드를 실행 시점에 보호합니다.',
    proof: 'CSPM 형상 진단 · CWPP 워크로드 보호',
  },
  {
    cat: '보안 / AI·데이터',
    n: '03',
    title: 'AI · 데이터 보안',
    desc: '생성형 AI 도입 과정에서 발생하는 정보 유출과 프롬프트 인젝션을 점검하고, 합성된 영상·음성을 실시간으로 판별합니다.',
    proof: '딥페이크 탐지 정확도 95%+',
  },
  {
    cat: '보안 / 운영',
    n: '04',
    title: '보안 운영 · 관제',
    desc: '탐지에서 분석, 대응까지 자동화합니다. 담당자가 상주하지 않는 시간에도 동일한 기준으로 판단합니다.',
    proof: '24시간 무인 관제 · SOAR 플레이북 50+',
  },
]

export function servicesOfAxis(axis: SecurityAxis): ServiceData[] {
  return listedServices.filter(s => s.cat === axis.cat)
}

/** 보안 외 사업 축. 홈에서 부차 띠로 한 번에 보여 줍니다. */
export const NON_SECURITY = [
  {
    id: 'infra',
    label: 'IDC · 서버 인프라',
    catPrefix: 'IDC',
    desc: '코로케이션과 서버 임대, AIDC GPU 전용 호스팅, 위탁운영, 서버·DB 이중화와 장애 복구를 아우릅니다.',
    metrics: ['99.99% SLA', '30초 자동 페일오버', '24시간 장애 대응'],
  },
  {
    id: 'streaming',
    label: '라이브 스트리밍',
    catPrefix: '스트리밍',
    desc: 'LL-HLS 기반 초저지연 라이브 송출과 VOD·멀티 플랫폼 동시 송출을 제공합니다.',
    metrics: ['LL-HLS 1~2초', 'ABR 4단계', '멀티 플랫폼 송출'],
  },
]

export function servicesByPrefix(prefix: string): ServiceData[] {
  return listedServices.filter(s => s.cat.startsWith(prefix))
}

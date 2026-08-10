import { servicesData, type ServiceData } from '@/lib/servicesData'

/**
 * 홈에서 쓰는 3축 분류.
 *
 * 서비스의 정본은 `servicesData` 의 `cat` 이고, 여기서는 그 값을 큰 축으로
 * 묶기만 합니다. 서비스를 새로 추가할 때 이 파일을 고칠 필요가 없도록
 * 목록을 하드코딩하지 않고 `cat` 접두사로 걸러냅니다 — 예전 홈은 서비스
 * 이름을 다시 적어 두는 구조라, 서비스가 늘어도 홈은 그대로였습니다.
 *
 * DMN솔루션은 세 축을 묶음 상품으로 팔지 않습니다. 각각 별도로 견적하고
 * 별도로 계약합니다. 홈 구성이 "하나의 주력 제품"이 아니라 "세 개의 독립된
 * 영역"으로 가는 이유입니다.
 */
export type Pillar = {
  id: string
  /** 목록 앞에 붙는 순번. 화면에서 축의 개수를 세게 해 줍니다. */
  index: string
  label: string
  tagline: string
  desc: string
  /** `servicesData.cat` 이 이 접두사로 시작하면 이 축에 속합니다. */
  catPrefix: string
  /** 축을 대표하는 수치. 과장 없이 서비스 본문에 있는 값만 씁니다. */
  metrics: { value: string; unit?: string; label: string }[]
  /** 이 축에서 먼저 보여 줄 서비스. 나머지는 개수로만 표시합니다. */
  featured: string[]
  tone: 'emerald' | 'indigo' | 'cyan'
}

export const PILLARS: Pillar[] = [
  {
    id: 'infra',
    index: '01',
    label: 'IDC · 서버 인프라',
    tagline: '맡기면 끝나는 운영',
    desc: '코로케이션과 서버 임대부터 GPU 전용 호스팅, 위탁운영, 이중화까지. 장비를 어디에 두든 운영은 저희가 맡습니다.',
    catPrefix: 'IDC',
    metrics: [
      { value: '99.99', unit: '%', label: '가용성 SLA' },
      { value: '30', unit: '초', label: '자동 페일오버' },
      { value: '24/7', label: '장애 대응' },
    ],
    featured: ['server-rental', 'aidc', 'managed-service'],
    tone: 'cyan',
  },
  {
    id: 'security',
    index: '02',
    label: 'AI 보안',
    tagline: '자체 개발 방화벽과 무인 관제',
    desc: '네트워크·클라우드·AI 데이터 보안을 한 팀이 봅니다. 중심에는 직접 만든 차세대 방화벽 DMN Guard 가 있습니다.',
    catPrefix: '보안',
    metrics: [
      { value: '51,977', label: 'IDS 시그니처' },
      { value: '105', unit: '개', label: '자체 WAF 규칙' },
      { value: '0', label: '외부 전송' },
    ],
    featured: ['dmn-guard', 'ai-security', 'deepfake-detection'],
    tone: 'emerald',
  },
  {
    id: 'streaming',
    index: '03',
    label: '라이브 스트리밍',
    tagline: '초저지연 송출 엔진',
    desc: 'UltraStreamingEngine 으로 LL-HLS 초저지연 라이브를 운영하고, VOD 와 멀티 플랫폼 동시 송출까지 처리합니다.',
    catPrefix: '스트리밍',
    metrics: [
      { value: '1~2', unit: '초', label: 'LL-HLS 지연' },
      { value: '4', unit: '단계', label: 'ABR 트랜스코딩' },
      { value: '다중', label: '플랫폼 동시 송출' },
    ],
    featured: ['ultrastream', 'vod-multistream'],
    tone: 'indigo',
  },
]

export function servicesOfPillar(p: Pillar): ServiceData[] {
  return servicesData.filter(s => s.cat.startsWith(p.catPrefix))
}

export function featuredOfPillar(p: Pillar): ServiceData[] {
  // featured 에 적힌 순서를 그대로 지킵니다. filter 로 뽑으면
  // servicesData 의 배열 순서를 따라가 의도한 순서가 흐트러집니다.
  return p.featured
    .map(slug => servicesData.find(s => s.slug === slug))
    .filter((s): s is ServiceData => Boolean(s))
}

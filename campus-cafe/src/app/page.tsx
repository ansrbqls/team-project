import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            캠퍼스 카페에 오신 것을 환영합니다
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            맛있는 음료와 푸드를 즐기세요. 주문부터 결제까지 한 번에 해결하세요.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/menu"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              메뉴 보기
            </Link>
            <Link
              href="/coupons"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              내 쿠폰 확인하기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

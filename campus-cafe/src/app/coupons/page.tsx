'use client'

import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function CouponsPage() {
    const { currentUser, getUserCoupons, getUserStamps, useCoupon } = useStore()
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push('/login')
        }
    }, [currentUser, router])

    if (!currentUser) {
        return null
    }

    const userCoupons = getUserCoupons(currentUser.id)
    const userStamps = getUserStamps(currentUser.id)
    const stampCount = userStamps.length
    const remainingStamps = stampCount % 10
    const freeCouponCount = Math.floor(stampCount / 10)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">스탬프 & 쿠폰</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">스탬프 현황</h2>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-2xl font-bold text-blue-600">
                                {remainingStamps}/10
                            </p>
                            <p className="text-sm text-gray-500">
                                {10 - remainingStamps}개 더 모으면 무료 음료 쿠폰으로 교환됩니다!
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            {Array(10)
                                .fill(null)
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${index < remainingStamps
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'border-gray-300 text-gray-300'
                                            }`}
                                    >
                                        ✓
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded">
                        <p className="text-sm text-gray-600">
                            • 메뉴 1개 주문 시 스탬프 1개가 적립됩니다.
                            <br />
                            • 스탬프 10개가 모이면 자동으로 무료 음료 쿠폰으로 교환됩니다.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">무료 음료 쿠폰</h2>
                    {userCoupons.length === 0 ? (
                        <p className="text-gray-500">사용 가능한 무료 음료 쿠폰이 없습니다.</p>
                    ) : (
                        <div className="space-y-4">
                            {userCoupons.map((coupon) => (
                                <div
                                    key={coupon.id}
                                    className="flex justify-between items-center p-4 bg-gray-50 rounded"
                                >
                                    <div>
                                        <p className="font-medium">무료 음료 쿠폰</p>
                                        <p className="text-sm text-gray-500">
                                            발급일:{' '}
                                            {new Date(
                                                coupon.createdAt
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => useCoupon(coupon.id)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        사용하기
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 
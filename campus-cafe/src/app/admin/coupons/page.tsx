'use client'

import { useStore } from '@/store/useStore'
import Link from 'next/link'

export default function CouponsPage() {
    const { coupons } = useStore()

    const regularCoupons = coupons.filter((coupon) => coupon.type === 'regular')
    const freeCoupons = coupons.filter((coupon) => coupon.type === 'free')

    // Get today's coupons
    const getTodayCoupons = () => {
        const today = new Date()
        return coupons.filter(
            (coupon) =>
                new Date(coupon.createdAt).toDateString() === today.toDateString()
        )
    }

    // Get this week's coupons
    const getThisWeekCoupons = () => {
        const today = new Date()
        const startOfWeek = new Date(today)
        startOfWeek.setDate(today.getDate() - today.getDay())
        startOfWeek.setHours(0, 0, 0, 0)

        return coupons.filter(
            (coupon) => new Date(coupon.createdAt) >= startOfWeek
        )
    }

    const todayCoupons = getTodayCoupons()
    const thisWeekCoupons = getThisWeekCoupons()

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            쿠폰 관리
                        </h1>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <Link
                            href="/admin"
                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            대시보드로 돌아가기
                        </Link>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">전체 일반 쿠폰</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {regularCoupons.length}장
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">전체 무료 음료 쿠폰</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {freeCoupons.length}장
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">오늘 발급된 쿠폰</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {todayCoupons.length}장
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">이번 주 발급된 쿠폰</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {thisWeekCoupons.length}장
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-medium text-gray-900">쿠폰 발급 내역</h2>
                    <div className="mt-4 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                쿠폰 종류
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                발급일
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {coupons.map((coupon) => (
                                            <tr key={coupon.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                    {coupon.type === 'regular' ? '일반 쿠폰' : '무료 음료 쿠폰'}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {new Date(coupon.createdAt).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
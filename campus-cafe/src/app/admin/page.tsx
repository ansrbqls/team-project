'use client'

import { useStore } from '@/store/useStore'
import { useState } from 'react'
import Link from 'next/link'

export default function AdminPage() {
    const { orders, completeOrder, clearOrders, menu, setMenu } = useStore()
    const [activeTab, setActiveTab] = useState('orders')

    const pendingOrders = orders.filter((order) => order.status === 'pending')
    const completedOrders = orders.filter((order) => order.status === 'completed')

    const totalSales = orders.reduce((sum, order) => sum + order.total, 0)
    const todaySales = orders
        .filter(
            (order) =>
                new Date(order.createdAt).toDateString() === new Date().toDateString()
        )
        .reduce((sum, order) => sum + order.total, 0)

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            관리자 대시보드
                        </h1>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                            onClick={clearOrders}
                            className="block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                            주문 전체 초기화
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">전체 주문</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {orders.length}건
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">대기 중</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {pendingOrders.length}건
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">오늘 매출</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {todaySales.toLocaleString()}원
                        </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900">전체 매출</h3>
                        <p className="mt-2 text-3xl font-bold text-indigo-600">
                            {totalSales.toLocaleString()}원
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="sm:hidden">
                        <label htmlFor="tabs" className="sr-only">
                            탭 선택
                        </label>
                        <select
                            id="tabs"
                            name="tabs"
                            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value)}
                        >
                            <option value="orders">들어온 주문</option>
                            <option value="menu">메뉴 관리</option>
                            <option value="sales">주간 판매 보고서</option>
                            <option value="coupons">쿠폰 관리</option>
                        </select>
                    </div>
                    <div className="hidden sm:block">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className={`${activeTab === 'orders'
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                                >
                                    들어온 주문
                                </button>
                                <button
                                    onClick={() => setActiveTab('menu')}
                                    className={`${activeTab === 'menu'
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                                >
                                    메뉴 관리
                                </button>
                                <button
                                    onClick={() => setActiveTab('sales')}
                                    className={`${activeTab === 'sales'
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                                >
                                    주간 판매 보고서
                                </button>
                                <button
                                    onClick={() => setActiveTab('coupons')}
                                    className={`${activeTab === 'coupons'
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                                >
                                    쿠폰 관리
                                </button>
                            </nav>
                        </div>
                    </div>

                    <div className="mt-8">
                        {activeTab === 'orders' && (
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">대기 중인 주문</h2>
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
                                                            주문 번호
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            주문 시간
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            금액
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            상태
                                                        </th>
                                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                            <span className="sr-only">액션</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {pendingOrders.map((order) => (
                                                        <tr key={order.id}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                                {order.id}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                {new Date(order.createdAt).toLocaleString()}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                {order.total.toLocaleString()}원
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                대기 중
                                                            </td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                <button
                                                                    onClick={() => completeOrder(order.id)}
                                                                    className="text-indigo-600 hover:text-indigo-900"
                                                                >
                                                                    제조 완료
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'menu' && (
                            <div>
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto">
                                        <h2 className="text-lg font-medium text-gray-900">메뉴 관리</h2>
                                    </div>
                                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                                        <button
                                            type="button"
                                            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            메뉴 추가
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-8 flow-root">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                                        >
                                                            메뉴명
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            카테고리
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                        >
                                                            가격
                                                        </th>
                                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                            <span className="sr-only">액션</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {menu.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                                {item.name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                {item.category === 'drink' ? '음료' : '푸드'}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                                {item.price.toLocaleString()}원
                                                            </td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                <button
                                                                    onClick={() => { }}
                                                                    className="text-indigo-600 hover:text-indigo-900"
                                                                >
                                                                    수정
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'sales' && (
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">주간 판매 보고서</h2>
                                <div className="mt-4">
                                    <Link
                                        href="/admin/sales-report"
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        자세한 판매 보고서 보기 →
                                    </Link>
                                </div>
                            </div>
                        )}

                        {activeTab === 'coupons' && (
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">쿠폰 관리</h2>
                                <div className="mt-4">
                                    <Link
                                        href="/admin/coupons"
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        자세한 쿠폰 현황 보기 →
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 
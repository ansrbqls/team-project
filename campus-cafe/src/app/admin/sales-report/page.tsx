'use client'

import { useStore } from '@/store/useStore'
import { useState } from 'react'
import Link from 'next/link'

export default function SalesReportPage() {
    const { orders } = useStore()
    const [selectedDate, setSelectedDate] = useState(new Date())

    // Get the start of the week (Monday)
    const getWeekStart = (date: Date) => {
        const day = date.getDay()
        const diff = date.getDate() - day + (day === 0 ? -6 : 1)
        return new Date(date.setDate(diff))
    }

    // Get all days of the week
    const getWeekDays = (startDate: Date) => {
        const days = []
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate)
            date.setDate(date.getDate() + i)
            days.push(date)
        }
        return days
    }

    const weekStart = getWeekStart(selectedDate)
    const weekDays = getWeekDays(weekStart)

    // Get sales for a specific date
    const getSalesForDate = (date: Date) => {
        return orders.filter(
            (order) =>
                new Date(order.createdAt).toDateString() === date.toDateString()
        )
    }

    // Calculate total sales for a date
    const getTotalSalesForDate = (date: Date) => {
        return getSalesForDate(date).reduce((sum, order) => sum + order.total, 0)
    }

    // Calculate total sales for the week
    const getTotalSalesForWeek = () => {
        return weekDays.reduce((sum, date) => sum + getTotalSalesForDate(date), 0)
    }

    // Get sales by item for a date
    const getSalesByItemForDate = (date: Date) => {
        const sales = getSalesForDate(date)
        const itemSales = new Map()

        sales.forEach((order) => {
            order.items.forEach((item) => {
                const key = item.item.id
                const current = itemSales.get(key) || {
                    name: item.item.name,
                    quantity: 0,
                    total: 0,
                }
                itemSales.set(key, {
                    name: item.item.name,
                    quantity: current.quantity + item.quantity,
                    total: current.total + item.item.price * item.quantity,
                })
            })
        })

        return Array.from(itemSales.values())
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            주간 판매 보고서
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

                <div className="mt-8">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => {
                                const newDate = new Date(selectedDate)
                                newDate.setDate(newDate.getDate() - 7)
                                setSelectedDate(newDate)
                            }}
                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            이전 주
                        </button>
                        <h2 className="text-lg font-medium text-gray-900">
                            {weekStart.toLocaleDateString()} ~{' '}
                            {new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                        </h2>
                        <button
                            onClick={() => {
                                const newDate = new Date(selectedDate)
                                newDate.setDate(newDate.getDate() + 7)
                                setSelectedDate(newDate)
                            }}
                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            다음 주
                        </button>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-7">
                        {weekDays.map((date) => (
                            <button
                                key={date.toISOString()}
                                onClick={() => setSelectedDate(date)}
                                className={`rounded-lg border p-4 text-center ${date.toDateString() === selectedDate.toDateString()
                                        ? 'border-indigo-500 bg-indigo-50'
                                        : 'border-gray-200'
                                    }`}
                            >
                                <div className="text-sm font-medium text-gray-900">
                                    {date.toLocaleDateString('ko-KR', { weekday: 'short' })}
                                </div>
                                <div className="mt-2 text-2xl font-bold text-indigo-600">
                                    {getTotalSalesForDate(date).toLocaleString()}원
                                </div>
                                <div className="mt-1 text-sm text-gray-500">
                                    {getSalesForDate(date).length}건
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">
                            {selectedDate.toLocaleDateString()} 판매 내역
                        </h3>
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
                                                    메뉴
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    판매 수량
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    판매 금액
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {getSalesByItemForDate(selectedDate).map((item) => (
                                                <tr key={item.name}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                                        {item.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {item.quantity}개
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {item.total.toLocaleString()}원
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th
                                                    scope="row"
                                                    colSpan={2}
                                                    className="py-4 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-0"
                                                >
                                                    주간 총 매출
                                                </th>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900">
                                                    {getTotalSalesForWeek().toLocaleString()}원
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
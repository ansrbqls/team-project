'use client'

import { useStore } from '@/store/useStore'
import { useState } from 'react'

export default function OrdersPage() {
    const { orders, completeOrder } = useStore()
    const [showNotification, setShowNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('')

    const handleCompleteOrder = (orderId: string) => {
        completeOrder(orderId)
        setNotificationMessage('주문이 완료 처리되었습니다.')
        setShowNotification(true)
        setTimeout(() => {
            setShowNotification(false)
        }, 2000)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* 알림 메시지 */}
            {showNotification && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
                    {notificationMessage}
                </div>
            )}

            <h1 className="text-2xl font-bold mb-6">주문 관리</h1>
            <div className="grid gap-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white p-4 rounded-lg shadow"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-sm text-gray-500">
                                    주문 번호: {order.id}
                                </p>
                                <p className="text-sm text-gray-500">
                                    주문 시간: {new Date(order.createdAt).toLocaleString()}
                                </p>
                            </div>
                            <span
                                className={`px-2 py-1 rounded text-sm ${order.status === 'completed'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}
                            >
                                {order.status === 'completed' ? '제조 완료' : '대기 중'}
                            </span>
                        </div>
                        <div className="space-y-2">
                            {order.items.map(({ item, quantity }) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center"
                                >
                                    <span>
                                        {item.name} x {quantity}
                                    </span>
                                    <span className="text-gray-600">
                                        {(item.price * quantity).toLocaleString()}원
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t flex justify-between items-center">
                            <span className="font-semibold">
                                총액: {order.total.toLocaleString()}원
                            </span>
                            {order.status === 'pending' && (
                                <button
                                    onClick={() => handleCompleteOrder(order.id)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                >
                                    제조 완료
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 
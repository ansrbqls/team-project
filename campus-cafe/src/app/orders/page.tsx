'use client'

import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function OrdersPage() {
    const { currentUser, getUserOrders } = useStore()
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push('/login')
        }
    }, [currentUser, router])

    if (!currentUser) {
        return null
    }

    const userOrders = getUserOrders(currentUser.id)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">주문 내역</h1>

            {userOrders.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500">주문 내역이 없습니다.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {userOrders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-lg shadow p-6"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        주문일시:{' '}
                                        {new Date(order.createdAt).toLocaleString()}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        주문번호: {order.id}
                                    </p>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${order.status === 'completed'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                        }`}
                                >
                                    {order.status === 'completed'
                                        ? '완료'
                                        : '대기중'}
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
                                        <span>
                                            {(item.price * quantity).toLocaleString()}원
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">총 금액:</span>
                                    <span className="text-lg font-bold">
                                        {order.total.toLocaleString()}원
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
} 
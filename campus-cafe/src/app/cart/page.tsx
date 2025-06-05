'use client'

import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, addOrder, currentUser } = useStore()
    const [notification, setNotification] = useState('')
    const router = useRouter()

    const total = cart.reduce(
        (sum, item) => sum + item.item.price * item.quantity,
        0
    )

    const handleOrder = () => {
        if (!currentUser) {
            router.push('/login')
            return
        }

        if (cart.length === 0) {
            setNotification('장바구니가 비어있습니다.')
            setTimeout(() => setNotification(''), 2000)
            return
        }

        const order = {
            id: `order-${Date.now()}`,
            userId: currentUser.id,
            items: cart,
            total,
            status: 'pending',
            createdAt: new Date(),
        }

        addOrder(order)
        setNotification('주문이 완료되었습니다.')
        setTimeout(() => setNotification(''), 2000)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">장바구니</h1>

            {notification && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                    {notification}
                </div>
            )}

            {cart.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500">장바구니가 비어있습니다.</p>
                </div>
            ) : (
                <>
                    <div className="space-y-4">
                        {cart.map(({ item, quantity }) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
                            >
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">{item.price}원</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    Math.max(0, quantity - 1)
                                                )
                                            }
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{quantity}</span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    Math.min(10, quantity + 1)
                                                )
                                            }
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        삭제
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-white rounded-lg shadow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold">총 금액:</span>
                            <span className="text-xl font-bold">
                                {total.toLocaleString()}원
                            </span>
                        </div>
                        <button
                            onClick={handleOrder}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            주문하기
                        </button>
                    </div>
                </>
            )}
        </div>
    )
} 
'use client'

import { useStore } from '@/store/useStore'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const categories = [
    { id: 'COFFEE', name: '커피' },
    { id: 'LATTE', name: '라떼' },
    { id: 'JUICE', name: '주스' },
    { id: 'ADE', name: '에이드' },
    { id: 'TEA', name: '차' },
    { id: 'SMOOTHIE', name: '스무디' },
    { id: 'FRAPE', name: '프라페' },
    { id: 'DESSERT', name: '디저트' },
]

export default function MenuPage() {
    const { menu, addToCart, currentUser } = useStore()
    const [selectedCategory, setSelectedCategory] = useState<string>('COFFEE')
    const [notification, setNotification] = useState('')
    const router = useRouter()

    const filteredMenu = menu.filter((item) => item.category === selectedCategory)

    const handleAddToCart = (item: any) => {
        if (!currentUser) {
            router.push('/login')
            return
        }
        addToCart(item)
        setNotification(`${item.name}이(가) 장바구니에 추가되었습니다.`)
        setTimeout(() => setNotification(''), 2000)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {notification && (
                <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
                    {notification}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMenu.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <div className="relative h-48">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-gray-600 mb-4">{item.price.toLocaleString()}원</p>
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                장바구니 담기
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 
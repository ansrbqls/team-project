'use client'

import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const { isAdmin, setIsAdmin, currentUser, setCurrentUser } = useStore()
    const router = useRouter()

    const handleLogout = () => {
        setIsAdmin(false)
        setCurrentUser(null)
        router.push('/login')
    }

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold">
                                캠퍼스 카페
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                href="/menu"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                메뉴
                            </Link>
                            <Link
                                href="/cart"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                장바구니
                            </Link>
                            <Link
                                href="/orders"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                주문 내역
                            </Link>
                            <Link
                                href="/coupons"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                쿠폰
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {currentUser && (
                            <span className="text-gray-600 mr-4">
                                {currentUser.name}님 환영합니다
                            </span>
                        )}
                        {isAdmin ? (
                            <Link
                                href="/admin"
                                className="ml-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
                            >
                                관리자
                            </Link>
                        ) : !currentUser ? (
                            <Link
                                href="/login"
                                className="ml-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
                            >
                                로그인
                            </Link>
                        ) : null}
                        {(isAdmin || currentUser) && (
                            <button
                                onClick={handleLogout}
                                className="ml-4 px-4 py-2 text-sm text-red-600 hover:text-red-800"
                            >
                                로그아웃
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
} 
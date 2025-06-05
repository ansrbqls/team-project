'use client'

import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { isAdmin, setIsAdmin } = useStore()
    const router = useRouter()

    useEffect(() => {
        if (!isAdmin) {
            router.push('/login')
        }
    }, [isAdmin, router])

    const handleLogout = () => {
        setIsAdmin(false)
        router.push('/login')
    }

    if (!isAdmin) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-xl font-bold">관리자 페이지</h1>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                <a
                                    href="/admin/orders"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    주문 관리
                                </a>
                                <a
                                    href="/admin/report"
                                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                >
                                    주간 보고서
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={handleLogout}
                                className="ml-4 px-4 py-2 text-sm text-red-600 hover:text-red-800"
                            >
                                로그아웃
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
    )
} 
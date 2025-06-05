import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface MenuItem {
    id: string
    name: string
    price: number
    category: 'COFFEE' | 'LATTE' | 'JUICE' | 'ADE' | 'TEA' | 'SMOOTHIE' | 'FRAPE' | 'DESSERT'
    image: string
}

export interface Order {
    id: string
    userId: string
    items: { item: MenuItem; quantity: number }[]
    total: number
    status: 'pending' | 'completed'
    createdAt: Date
}

export interface Coupon {
    id: string
    userId: string
    type: 'free'
    createdAt: Date
}

export interface Stamp {
    id: string
    userId: string
    createdAt: Date
}

export interface User {
    id: string
    username: string
    password: string
    name: string
    createdAt: Date
}

// Sample menu data를 useStore보다 위에 선언
export const sampleMenu: MenuItem[] = [
    // COFFEE
    { id: 'coffee-1', name: '에스프레소', price: 2000, category: 'COFFEE', image: '/images/에스프레소.jpeg' },
    { id: 'coffee-2', name: '아메리카노', price: 2500, category: 'COFFEE', image: '/images/아메리카노.jpg' },
    { id: 'coffee-3', name: '헤이즐넛아메리카노', price: 3200, category: 'COFFEE', image: '/images/헤이즐넛아메리카노.avif' },
    { id: 'coffee-4', name: '카라멜마끼아또', price: 4000, category: 'COFFEE', image: '/images/카라멜마키아또.jpg' },
    { id: 'coffee-5', name: '둘체(연유)라떼', price: 4000, category: 'COFFEE', image: '/images/돌체라떼.webp' },
    { id: 'coffee-6', name: '바닐라라떼', price: 4000, category: 'COFFEE', image: '/images/바닐라라떼.jpeg' },
    { id: 'coffee-7', name: '헤이즐넛라떼', price: 4000, category: 'COFFEE', image: '/images/헤이즐넛라떼.jpeg' },
    { id: 'coffee-8', name: '카라멜라떼', price: 4000, category: 'COFFEE', image: '/images/카라멜라떼.jpeg' },
    { id: 'coffee-9', name: '카페모카', price: 4000, category: 'COFFEE', image: '/images/카페모카.jpeg' },
    { id: 'coffee-10', name: '코코넛밀크커피', price: 4000, category: 'COFFEE', image: '/images/코코넛밀크커피.jpeg' },

    // LATTE
    { id: 'latte-1', name: '스팀우유', price: 3000, category: 'LATTE', image: '/images/스팀우유.jpeg' },
    { id: 'latte-2', name: '초코라떼', price: 4000, category: 'LATTE', image: '/images/초코라떼.jpeg' },
    { id: 'latte-3', name: '미숫가루라떼', price: 4000, category: 'LATTE', image: '/images/미숫가루라떼.jpeg' },
    { id: 'latte-4', name: '토피넛라떼', price: 4000, category: 'LATTE', image: '/images/토피넛라떼.jpeg' },
    { id: 'latte-5', name: '녹차라떼', price: 4000, category: 'LATTE', image: '/images/녹차라떼.jpeg' },
    { id: 'latte-6', name: '고구마라떼', price: 4000, category: 'LATTE', image: '/images/고구마라떼.jpeg' },
    { id: 'latte-7', name: '밀크티', price: 4000, category: 'LATTE', image: '/images/밀크티.jpeg' },
    { id: 'latte-8', name: '리얼딸기우유', price: 5500, category: 'LATTE', image: '/images/리얼딸기우유.jpeg' },

    // JUICE
    { id: 'juice-1', name: '딸기', price: 4000, category: 'JUICE', image: '/images/딸기.jpeg' },
    { id: 'juice-2', name: '딸기바나나', price: 4000, category: 'JUICE', image: '/images/딸기바나나.jpeg' },
    { id: 'juice-3', name: '토마토', price: 4000, category: 'JUICE', image: '/images/토마토.jpeg' },
    { id: 'juice-4', name: '바나나', price: 4000, category: 'JUICE', image: '/images/바나나.jpeg' },

    // ADE
    { id: 'ade-1', name: '레몬에이드', price: 3700, category: 'ADE', image: '/images/레몬에이드.jpeg' },
    { id: 'ade-2', name: '자몽에이드', price: 3700, category: 'ADE', image: '/images/자몽에이드.jpeg' },
    { id: 'ade-3', name: '청포도에이드', price: 3700, category: 'ADE', image: '/images/청포도에이드.jpeg' },
    { id: 'ade-4', name: '유자에이드', price: 3700, category: 'ADE', image: '/images/유자에이드.jpeg' },
    { id: 'ade-5', name: '체리에이드', price: 3700, category: 'ADE', image: '/images/체리에이드.jpeg' },
    { id: 'ade-6', name: '메론에이드', price: 3700, category: 'ADE', image: '/images/메론에이드.jpeg' },
    { id: 'ade-7', name: '복숭아에이드', price: 3700, category: 'ADE', image: '/images/복숭아에이드.jpeg' },
    { id: 'ade-8', name: '청포도자몽에이드', price: 4200, category: 'ADE', image: '/images/청포도자몽에이드.jpeg' },
    { id: 'ade-9', name: '체리콕에이드', price: 4200, category: 'ADE', image: '/images/체리콕에이드.jpeg' },
    { id: 'ade-10', name: '히비스커스에이드', price: 4200, category: 'ADE', image: '/images/히비스커스에이드.jpeg' },
    { id: 'ade-11', name: '히비스유자에이드', price: 4200, category: 'ADE', image: '/images/히비스커스유자에이드.jpeg' },

    // TEA
    { id: 'tea-1', name: '유자/자몽/레몬', price: 3700, category: 'TEA', image: '/images/유자자몽레몬.jpeg' },
    { id: 'tea-2', name: '대추/생강/7곡생강', price: 3700, category: 'TEA', image: '/images/대추생강7곡생각.jpeg' },
    { id: 'tea-3', name: '쌍화차', price: 4200, category: 'TEA', image: '/images/쌍화차.jpeg' },
    { id: 'tea-4', name: '유자애플티/자몽애플티', price: 4200, category: 'TEA', image: '/images/유자애플티자몽애플티.jpeg' },
    { id: 'tea-5', name: '루이보스/캐모마일', price: 3200, category: 'TEA', image: '/images/루이보스캐모마일.jpeg' },
    { id: 'tea-6', name: '페퍼민트/레몬그라스', price: 3200, category: 'TEA', image: '/images/페퍼민트레몬그라스.jpg' },
    { id: 'tea-7', name: '히비스커스', price: 3200, category: 'TEA', image: '/images/히비스커스.jpeg' },
    { id: 'tea-8', name: '아이스티', price: 3200, category: 'TEA', image: '/images/아이스티.jpeg' },

    // SMOOTHIE
    { id: 'smoothie-1', name: '플레인요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/플레인요거트스무디.avif' },
    { id: 'smoothie-2', name: '딸기요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/딸기요거트스무디.jpeg' },
    { id: 'smoothie-3', name: '청포도요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/청포도요거트스무디.jpeg' },
    { id: 'smoothie-4', name: '블루베리요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/블루베리요거트스무디.jpeg' },
    { id: 'smoothie-5', name: '유자요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/유자요거트스무디.jpeg' },
    { id: 'smoothie-6', name: '키위요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/키위요거트스무디.jpeg' },
    { id: 'smoothie-7', name: '딸기스무디', price: 4500, category: 'SMOOTHIE', image: '/images/딸기스무디.jpeg' },
    { id: 'smoothie-8', name: '망고스무디', price: 4500, category: 'SMOOTHIE', image: '/images/망고스무디.jpeg' },
    { id: 'smoothie-9', name: '파인애플요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/파인애플요거트스무디.jpeg' },
    { id: 'smoothie-10', name: '멜론요거트스무디', price: 4500, category: 'SMOOTHIE', image: '/images/멜론요거트스무디.jpeg' },
    { id: 'smoothie-11', name: '코코넛밀크망고스무디', price: 5000, category: 'SMOOTHIE', image: '/images/코코넛밀크망고스무디.jpeg' },
    { id: 'smoothie-12', name: '코코넛밀크커피스무디', price: 5000, category: 'SMOOTHIE', image: '/images/코코넛밀크커피스무디.jpeg' },

    // FRAPE
    { id: 'frape-1', name: '홍콩프라페', price: 5000, category: 'FRAPE', image: '/images/홍콩프라페.jpeg' },
    { id: 'frape-2', name: '녹차프라페', price: 5000, category: 'FRAPE', image: '/images/녹차프라페.jpeg' },
    { id: 'frape-3', name: '코코넛프라페', price: 5000, category: 'FRAPE', image: '/images/코코넛프라페.jpeg' },
    { id: 'frape-4', name: '쿠앤크프라페', price: 5000, category: 'FRAPE', image: '/images/쿠앤크프라페.jpeg' },

    // DESSERT
    { id: 'dessert-1', name: '구운계란', price: 600, category: 'DESSERT', image: '/images/구운계란.jpeg' },
    { id: 'dessert-2', name: '구운계란(2p)', price: 1000, category: 'DESSERT', image: '/images/구운계란(2p).jpeg' },
    { id: 'dessert-3', name: '휘낭시에', price: 2900, category: 'DESSERT', image: '/images/휘낭시에.jpeg' },
    { id: 'dessert-4', name: '초코휘낭시에', price: 2900, category: 'DESSERT', image: '/images/초코휘낭시에.jpeg' },
    { id: 'dessert-5', name: '레몬휘낭시에', price: 2900, category: 'DESSERT', image: '/images/레몬휘낭시에.jpeg' },
    { id: 'dessert-6', name: '무화과휘낭시에', price: 2900, category: 'DESSERT', image: '/images/무화과휘낭시에.jpeg' },
    { id: 'dessert-7', name: '플레인스콘', price: 3200, category: 'DESSERT', image: '/images/플레인스콘.jpeg' },
    { id: 'dessert-8', name: '초코스콘', price: 3200, category: 'DESSERT', image: '/images/초코스콘.jpeg' },
    { id: 'dessert-9', name: '레몬스콘', price: 3200, category: 'DESSERT', image: '/images/레몬스콘.jpeg' },
    { id: 'dessert-10', name: '말차스콘', price: 3200, category: 'DESSERT', image: '/images/말차스콘.jpeg' },
    { id: 'dessert-11', name: '수제햄치즈샌드위치', price: 3700, category: 'DESSERT', image: '/images/수제햄치즈샌드위치.jpeg' },
    { id: 'dessert-12', name: '수제테리버거', price: 3700, category: 'DESSERT', image: '/images/수제데리버거.jpeg' },
    { id: 'dessert-13', name: '수제불고기버거', price: 4200, category: 'DESSERT', image: '/images/수제불고기버거.jpeg' }
]

interface Store {
    // Menu
    menu: MenuItem[]
    setMenu: (menu: MenuItem[]) => void

    // Cart
    cart: { item: MenuItem; quantity: number }[]
    addToCart: (item: MenuItem) => void
    removeFromCart: (itemId: string) => void
    updateQuantity: (itemId: string, quantity: number) => void
    clearCart: () => void

    // Orders
    orders: Order[]
    addOrder: (order: Order) => void
    completeOrder: (orderId: string) => void
    clearOrders: () => void
    getUserOrders: (userId: string) => Order[]

    // Coupons
    coupons: Coupon[]
    addCoupon: (coupon: Coupon) => void
    useCoupon: (couponId: string) => void
    getUserCoupons: (userId: string) => Coupon[]

    // Weekly Report
    weeklySales: { date: string; total: number }[]
    addToWeeklySales: (amount: number) => void
    clearWeeklySales: () => void

    // Auth
    isAdmin: boolean
    setIsAdmin: (isAdmin: boolean) => void
    currentUser: User | null
    setCurrentUser: (user: User | null) => void
    users: User[]
    addUser: (user: User) => void

    // Stamps
    stamps: Stamp[]
    addStamps: (userId: string, count: number) => void
    getUserStamps: (userId: string) => Stamp[]
}

export const useStore = create<Store>()(
    persist(
        (set, get) => ({
            // Menu
            menu: sampleMenu,
            setMenu: (menu) => set({ menu }),

            // Cart
            cart: [],
            addToCart: (item) =>
                set((state) => {
                    const existingItem = state.cart.find((i) => i.item.id === item.id)
                    if (existingItem) {
                        return {
                            cart: state.cart.map((i) =>
                                i.item.id === item.id
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i
                            ),
                        }
                    }
                    return { cart: [...state.cart, { item, quantity: 1 }] }
                }),
            removeFromCart: (itemId) =>
                set((state) => ({
                    cart: state.cart.filter((i) => i.item.id !== itemId),
                })),
            updateQuantity: (itemId, quantity) =>
                set((state) => ({
                    cart: state.cart.map((i) =>
                        i.item.id === itemId ? { ...i, quantity } : i
                    ),
                })),
            clearCart: () => set({ cart: [] }),

            // Orders
            orders: [],
            addOrder: (order) =>
                set((state) => {
                    // 주문한 메뉴 개수만큼 스탬프 추가
                    const stampCount = order.items.reduce(
                        (sum, { quantity }) => sum + quantity,
                        0
                    )
                    const newStamps = Array(stampCount)
                        .fill(null)
                        .map(() => ({
                            id: `stamp-${Date.now()}-${Math.random()}`,
                            userId: order.userId,
                            createdAt: new Date(),
                        }))

                    // 스탬프 10개당 무료 음료 쿠폰 1개 발급
                    const userStamps = [...state.stamps, ...newStamps].filter(
                        (s) => s.userId === order.userId
                    )
                    const freeCouponCount = Math.floor(userStamps.length / 10)
                    const remainingStamps = userStamps.slice(freeCouponCount * 10)

                    const newFreeCoupons = Array(freeCouponCount)
                        .fill(null)
                        .map(() => ({
                            id: `free-${Date.now()}-${Math.random()}`,
                            userId: order.userId,
                            type: 'free' as const,
                            createdAt: new Date(),
                        }))

                    return {
                        orders: [...state.orders, order],
                        cart: [], // Clear cart after order
                        stamps: [
                            ...state.stamps.filter((s) => s.userId !== order.userId),
                            ...remainingStamps,
                        ],
                        coupons: [...state.coupons, ...newFreeCoupons],
                    }
                }),
            completeOrder: (orderId) =>
                set((state) => {
                    const order = state.orders.find((o) => o.id === orderId);
                    if (!order) return state;

                    // 주문 완료 시 주간 매출에 추가
                    const today = new Date().toISOString().split('T')[0];
                    const existingDay = state.weeklySales.find((sale) => sale.date === today);

                    return {
                        orders: state.orders.map((order) =>
                            order.id === orderId
                                ? { ...order, status: 'completed' }
                                : order
                        ),
                        weeklySales: existingDay
                            ? state.weeklySales.map((sale) =>
                                sale.date === today
                                    ? { ...sale, total: sale.total + order.total }
                                    : sale
                            )
                            : [...state.weeklySales, { date: today, total: order.total }],
                    };
                }),
            clearOrders: () => set({ orders: [] }),
            getUserOrders: (userId) => get().orders.filter(order => order.userId === userId),

            // Weekly Report
            weeklySales: [],
            addToWeeklySales: (amount) =>
                set((state) => {
                    const today = new Date().toISOString().split('T')[0];
                    const existingDay = state.weeklySales.find((sale) => sale.date === today);

                    return {
                        weeklySales: existingDay
                            ? state.weeklySales.map((sale) =>
                                sale.date === today
                                    ? { ...sale, total: sale.total + amount }
                                    : sale
                            )
                            : [...state.weeklySales, { date: today, total: amount }],
                    };
                }),
            clearWeeklySales: () => set({ weeklySales: [] }),

            // Coupons
            coupons: [],
            addCoupon: (coupon) =>
                set((state) => ({
                    coupons: [...state.coupons, coupon],
                })),
            useCoupon: (couponId) =>
                set((state) => ({
                    coupons: state.coupons.filter((c) => c.id !== couponId),
                })),
            getUserCoupons: (userId) => get().coupons.filter((coupon) => coupon.userId === userId),

            // Stamps
            stamps: [],
            addStamps: (userId, count) =>
                set((state) => {
                    const newStamps = Array(count)
                        .fill(null)
                        .map(() => ({
                            id: `stamp-${Date.now()}-${Math.random()}`,
                            userId,
                            createdAt: new Date(),
                        }))

                    const userStamps = [...state.stamps, ...newStamps].filter(
                        (s) => s.userId === userId
                    )
                    const freeCouponCount = Math.floor(userStamps.length / 10)
                    const remainingStamps = userStamps.slice(freeCouponCount * 10)

                    const newFreeCoupons = Array(freeCouponCount)
                        .fill(null)
                        .map(() => ({
                            id: `free-${Date.now()}-${Math.random()}`,
                            userId,
                            type: 'free' as const,
                            createdAt: new Date(),
                        }))

                    return {
                        stamps: [
                            ...state.stamps.filter((s) => s.userId !== userId),
                            ...remainingStamps,
                        ],
                        coupons: [...state.coupons, ...newFreeCoupons],
                    }
                }),
            getUserStamps: (userId) => get().stamps.filter((stamp) => stamp.userId === userId),

            // Auth
            isAdmin: false,
            setIsAdmin: (isAdmin) => set({ isAdmin }),
            currentUser: null,
            setCurrentUser: (user) => set({ currentUser: user }),
            users: [],
            addUser: (user) =>
                set((state) => ({
                    users: [...state.users, user],
                })),
        }),
        {
            name: 'campus-cafe-storage',
        }
    )
) 
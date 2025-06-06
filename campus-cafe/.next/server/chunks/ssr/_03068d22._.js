module.exports = {

"[project]/src/store/useStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "sampleMenu": (()=>sampleMenu),
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const sampleMenu = [
    // COFFEE
    {
        id: 'coffee-1',
        name: '에스프레소',
        price: 2000,
        category: 'COFFEE',
        image: '/images/에스프레소.jpeg'
    },
    {
        id: 'coffee-2',
        name: '아메리카노',
        price: 2500,
        category: 'COFFEE',
        image: '/images/아메리카노.jpg'
    },
    {
        id: 'coffee-3',
        name: '헤이즐넛아메리카노',
        price: 3200,
        category: 'COFFEE',
        image: '/images/헤이즐넛아메리카노.avif'
    },
    {
        id: 'coffee-4',
        name: '카라멜마끼아또',
        price: 4000,
        category: 'COFFEE',
        image: '/images/카라멜마키아또.jpg'
    },
    {
        id: 'coffee-5',
        name: '둘체(연유)라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/돌체라떼.webp'
    },
    {
        id: 'coffee-6',
        name: '바닐라라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/바닐라라떼.jpeg'
    },
    {
        id: 'coffee-7',
        name: '헤이즐넛라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/헤이즐넛라떼.jpeg'
    },
    {
        id: 'coffee-8',
        name: '카라멜라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/카라멜라떼.jpeg'
    },
    {
        id: 'coffee-9',
        name: '카페모카',
        price: 4000,
        category: 'COFFEE',
        image: '/images/카페모카.jpeg'
    },
    {
        id: 'coffee-10',
        name: '코코넛밀크커피',
        price: 4000,
        category: 'COFFEE',
        image: '/images/코코넛밀크커피.jpeg'
    },
    // LATTE
    {
        id: 'latte-1',
        name: '스팀우유',
        price: 3000,
        category: 'LATTE',
        image: '/images/스팀우유.jpeg'
    },
    {
        id: 'latte-2',
        name: '초코라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/초코라떼.jpeg'
    },
    {
        id: 'latte-3',
        name: '미숫가루라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/미숫가루라떼.jpeg'
    },
    {
        id: 'latte-4',
        name: '토피넛라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/토피넛라떼.jpeg'
    },
    {
        id: 'latte-5',
        name: '녹차라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/녹차라떼.jpeg'
    },
    {
        id: 'latte-6',
        name: '고구마라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/고구마라떼.jpeg'
    },
    {
        id: 'latte-7',
        name: '밀크티',
        price: 4000,
        category: 'LATTE',
        image: '/images/밀크티.jpeg'
    },
    {
        id: 'latte-8',
        name: '리얼딸기우유',
        price: 5500,
        category: 'LATTE',
        image: '/images/리얼딸기우유.jpeg'
    },
    // JUICE
    {
        id: 'juice-1',
        name: '딸기',
        price: 4000,
        category: 'JUICE',
        image: '/images/딸기.jpeg'
    },
    {
        id: 'juice-2',
        name: '딸기바나나',
        price: 4000,
        category: 'JUICE',
        image: '/images/딸기바나나.jpeg'
    },
    {
        id: 'juice-3',
        name: '토마토',
        price: 4000,
        category: 'JUICE',
        image: '/images/토마토.jpeg'
    },
    {
        id: 'juice-4',
        name: '바나나',
        price: 4000,
        category: 'JUICE',
        image: '/images/바나나.jpeg'
    },
    // ADE
    {
        id: 'ade-1',
        name: '레몬에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/레몬에이드.jpeg'
    },
    {
        id: 'ade-2',
        name: '자몽에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/자몽에이드.jpeg'
    },
    {
        id: 'ade-3',
        name: '청포도에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/청포도에이드.jpeg'
    },
    {
        id: 'ade-4',
        name: '유자에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/유자에이드.jpeg'
    },
    {
        id: 'ade-5',
        name: '체리에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/체리에이드.jpeg'
    },
    {
        id: 'ade-6',
        name: '메론에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/메론에이드.jpeg'
    },
    {
        id: 'ade-7',
        name: '복숭아에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/복숭아에이드.jpeg'
    },
    {
        id: 'ade-8',
        name: '청포도자몽에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/청포도자몽에이드.jpeg'
    },
    {
        id: 'ade-9',
        name: '체리콕에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/체리콕에이드.jpeg'
    },
    {
        id: 'ade-10',
        name: '히비스커스에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/히비스커스에이드.jpeg'
    },
    {
        id: 'ade-11',
        name: '히비스유자에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/히비스커스유자에이드.jpeg'
    },
    // TEA
    {
        id: 'tea-1',
        name: '유자/자몽/레몬',
        price: 3700,
        category: 'TEA',
        image: '/images/유자자몽레몬.jpeg'
    },
    {
        id: 'tea-2',
        name: '대추/생강/7곡생강',
        price: 3700,
        category: 'TEA',
        image: '/images/대추생강7곡생각.jpeg'
    },
    {
        id: 'tea-3',
        name: '쌍화차',
        price: 4200,
        category: 'TEA',
        image: '/images/쌍화차.jpeg'
    },
    {
        id: 'tea-4',
        name: '유자애플티/자몽애플티',
        price: 4200,
        category: 'TEA',
        image: '/images/유자애플티자몽애플티.jpeg'
    },
    {
        id: 'tea-5',
        name: '루이보스/캐모마일',
        price: 3200,
        category: 'TEA',
        image: '/images/루이보스캐모마일.jpeg'
    },
    {
        id: 'tea-6',
        name: '페퍼민트/레몬그라스',
        price: 3200,
        category: 'TEA',
        image: '/images/페퍼민트레몬그라스.jpg'
    },
    {
        id: 'tea-7',
        name: '히비스커스',
        price: 3200,
        category: 'TEA',
        image: '/images/히비스커스.jpeg'
    },
    {
        id: 'tea-8',
        name: '아이스티',
        price: 3200,
        category: 'TEA',
        image: '/images/아이스티.jpeg'
    },
    // SMOOTHIE
    {
        id: 'smoothie-1',
        name: '플레인요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/플레인요거트스무디.avif'
    },
    {
        id: 'smoothie-2',
        name: '딸기요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/딸기요거트스무디.jpeg'
    },
    {
        id: 'smoothie-3',
        name: '청포도요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/청포도요거트스무디.jpeg'
    },
    {
        id: 'smoothie-4',
        name: '블루베리요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/블루베리요거트스무디.jpeg'
    },
    {
        id: 'smoothie-5',
        name: '유자요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/유자요거트스무디.jpeg'
    },
    {
        id: 'smoothie-6',
        name: '키위요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/키위요거트스무디.jpeg'
    },
    {
        id: 'smoothie-7',
        name: '딸기스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/딸기스무디.jpeg'
    },
    {
        id: 'smoothie-8',
        name: '망고스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/망고스무디.jpeg'
    },
    {
        id: 'smoothie-9',
        name: '파인애플요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/파인애플요거트스무디.jpeg'
    },
    {
        id: 'smoothie-10',
        name: '멜론요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/멜론요거트스무디.jpeg'
    },
    {
        id: 'smoothie-11',
        name: '코코넛밀크망고스무디',
        price: 5000,
        category: 'SMOOTHIE',
        image: '/images/코코넛밀크망고스무디.jpeg'
    },
    {
        id: 'smoothie-12',
        name: '코코넛밀크커피스무디',
        price: 5000,
        category: 'SMOOTHIE',
        image: '/images/코코넛밀크커피스무디.jpeg'
    },
    // FRAPE
    {
        id: 'frape-1',
        name: '홍콩프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/홍콩프라페.jpeg'
    },
    {
        id: 'frape-2',
        name: '녹차프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/녹차프라페.jpeg'
    },
    {
        id: 'frape-3',
        name: '코코넛프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/코코넛프라페.jpeg'
    },
    {
        id: 'frape-4',
        name: '쿠앤크프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/쿠앤크프라페.jpeg'
    },
    // DESSERT
    {
        id: 'dessert-1',
        name: '구운계란',
        price: 600,
        category: 'DESSERT',
        image: '/images/구운계란.jpeg'
    },
    {
        id: 'dessert-2',
        name: '구운계란(2p)',
        price: 1000,
        category: 'DESSERT',
        image: '/images/구운계란(2p).jpeg'
    },
    {
        id: 'dessert-3',
        name: '휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/휘낭시에.jpeg'
    },
    {
        id: 'dessert-4',
        name: '초코휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/초코휘낭시에.jpeg'
    },
    {
        id: 'dessert-5',
        name: '레몬휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/레몬휘낭시에.jpeg'
    },
    {
        id: 'dessert-6',
        name: '무화과휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/무화과휘낭시에.jpeg'
    },
    {
        id: 'dessert-7',
        name: '플레인스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/플레인스콘.jpeg'
    },
    {
        id: 'dessert-8',
        name: '초코스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/초코스콘.jpeg'
    },
    {
        id: 'dessert-9',
        name: '레몬스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/레몬스콘.jpeg'
    },
    {
        id: 'dessert-10',
        name: '말차스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/말차스콘.jpeg'
    },
    {
        id: 'dessert-11',
        name: '수제햄치즈샌드위치',
        price: 3700,
        category: 'DESSERT',
        image: '/images/수제햄치즈샌드위치.jpeg'
    },
    {
        id: 'dessert-12',
        name: '수제테리버거',
        price: 3700,
        category: 'DESSERT',
        image: '/images/수제데리버거.jpeg'
    },
    {
        id: 'dessert-13',
        name: '수제불고기버거',
        price: 4200,
        category: 'DESSERT',
        image: '/images/수제불고기버거.jpeg'
    }
];
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        // Menu
        menu: sampleMenu,
        setMenu: (menu)=>set({
                menu
            }),
        // Cart
        cart: [],
        addToCart: (item)=>set((state)=>{
                const existingItem = state.cart.find((i)=>i.item.id === item.id);
                if (existingItem) {
                    return {
                        cart: state.cart.map((i)=>i.item.id === item.id ? {
                                ...i,
                                quantity: i.quantity + 1
                            } : i)
                    };
                }
                return {
                    cart: [
                        ...state.cart,
                        {
                            item,
                            quantity: 1
                        }
                    ]
                };
            }),
        removeFromCart: (itemId)=>set((state)=>({
                    cart: state.cart.filter((i)=>i.item.id !== itemId)
                })),
        updateQuantity: (itemId, quantity)=>set((state)=>({
                    cart: state.cart.map((i)=>i.item.id === itemId ? {
                            ...i,
                            quantity
                        } : i)
                })),
        clearCart: ()=>set({
                cart: []
            }),
        // Orders
        orders: [],
        addOrder: (order)=>set((state)=>{
                // 주문한 각 메뉴마다 쿠폰 1개씩 추가
                const newCoupons = order.items.flatMap(({ item, quantity })=>Array(quantity).fill(null).map(()=>({
                            id: `regular-${Date.now()}-${Math.random()}`,
                            type: 'regular',
                            createdAt: new Date()
                        })));
                return {
                    orders: [
                        ...state.orders,
                        order
                    ],
                    cart: [],
                    coupons: [
                        ...state.coupons,
                        ...newCoupons
                    ]
                };
            }),
        completeOrder: (orderId)=>set((state)=>{
                const order = state.orders.find((o)=>o.id === orderId);
                if (!order) return state;
                // 주문 완료 시 주간 매출에 추가
                const today = new Date().toISOString().split('T')[0];
                const existingDay = state.weeklySales.find((sale)=>sale.date === today);
                return {
                    orders: state.orders.map((order)=>order.id === orderId ? {
                            ...order,
                            status: 'completed'
                        } : order),
                    weeklySales: existingDay ? state.weeklySales.map((sale)=>sale.date === today ? {
                            ...sale,
                            total: sale.total + order.total
                        } : sale) : [
                        ...state.weeklySales,
                        {
                            date: today,
                            total: order.total
                        }
                    ]
                };
            }),
        clearOrders: ()=>set({
                orders: []
            }),
        // Weekly Report
        weeklySales: [],
        addToWeeklySales: (amount)=>set((state)=>{
                const today = new Date().toISOString().split('T')[0];
                const existingDay = state.weeklySales.find((sale)=>sale.date === today);
                return {
                    weeklySales: existingDay ? state.weeklySales.map((sale)=>sale.date === today ? {
                            ...sale,
                            total: sale.total + amount
                        } : sale) : [
                        ...state.weeklySales,
                        {
                            date: today,
                            total: amount
                        }
                    ]
                };
            }),
        clearWeeklySales: ()=>set({
                weeklySales: []
            }),
        // Coupons
        coupons: [],
        addCoupon: (coupon)=>set((state)=>{
                const newCoupons = [
                    ...state.coupons,
                    coupon
                ];
                // Check if we need to convert regular coupons to a free coupon
                const regularCoupons = newCoupons.filter((c)=>c.type === 'regular');
                if (regularCoupons.length >= 10) {
                    // Remove 10 regular coupons and add 1 free coupon
                    const remainingCoupons = newCoupons.filter((c)=>!regularCoupons.slice(0, 10).includes(c));
                    return {
                        coupons: [
                            ...remainingCoupons,
                            {
                                id: `free-${Date.now()}`,
                                type: 'free',
                                createdAt: new Date()
                            }
                        ]
                    };
                }
                return {
                    coupons: newCoupons
                };
            }),
        useCoupon: (couponId)=>set((state)=>({
                    coupons: state.coupons.filter((c)=>c.id !== couponId)
                })),
        // Auth
        isAdmin: false,
        setIsAdmin: (isAdmin)=>set({
                isAdmin
            })
    }), {
    name: 'campus-cafe-storage'
}));
}}),
"[project]/src/app/admin/sales-report/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SalesReportPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SalesReportPage() {
    const { orders } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // Get the start of the week (Monday)
    const getWeekStart = (date)=>{
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    };
    // Get all days of the week
    const getWeekDays = (startDate)=>{
        const days = [];
        for(let i = 0; i < 7; i++){
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            days.push(date);
        }
        return days;
    };
    const weekStart = getWeekStart(selectedDate);
    const weekDays = getWeekDays(weekStart);
    // Get sales for a specific date
    const getSalesForDate = (date)=>{
        return orders.filter((order)=>new Date(order.createdAt).toDateString() === date.toDateString());
    };
    // Calculate total sales for a date
    const getTotalSalesForDate = (date)=>{
        return getSalesForDate(date).reduce((sum, order)=>sum + order.total, 0);
    };
    // Calculate total sales for the week
    const getTotalSalesForWeek = ()=>{
        return weekDays.reduce((sum, date)=>sum + getTotalSalesForDate(date), 0);
    };
    // Get sales by item for a date
    const getSalesByItemForDate = (date)=>{
        const sales = getSalesForDate(date);
        const itemSales = new Map();
        sales.forEach((order)=>{
            order.items.forEach((item)=>{
                const key = item.item.id;
                const current = itemSales.get(key) || {
                    name: item.item.name,
                    quantity: 0,
                    total: 0
                };
                itemSales.set(key, {
                    name: item.item.name,
                    quantity: current.quantity + item.quantity,
                    total: current.total + item.item.price * item.quantity
                });
            });
        });
        return Array.from(itemSales.values());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:flex sm:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm:flex-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-tight text-gray-900",
                                children: "주간 판매 보고서"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                className: "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                children: "대시보드로 돌아가기"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const newDate = new Date(selectedDate);
                                        newDate.setDate(newDate.getDate() - 7);
                                        setSelectedDate(newDate);
                                    },
                                    className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
                                    children: "이전 주"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: [
                                        weekStart.toLocaleDateString(),
                                        " ~",
                                        ' ',
                                        new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        const newDate = new Date(selectedDate);
                                        newDate.setDate(newDate.getDate() + 7);
                                        setSelectedDate(newDate);
                                    },
                                    className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
                                    children: "다음 주"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-7",
                            children: weekDays.map((date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedDate(date),
                                    className: `rounded-lg border p-4 text-center ${date.toDateString() === selectedDate.toDateString() ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: date.toLocaleDateString('ko-KR', {
                                                weekday: 'short'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-2xl font-bold text-indigo-600",
                                            children: [
                                                getTotalSalesForDate(date).toLocaleString(),
                                                "원"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-gray-500",
                                            children: [
                                                getSalesForDate(date).length,
                                                "건"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, date.toISOString(), true, {
                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                            lineNumber: 121,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-medium text-gray-900",
                                    children: [
                                        selectedDate.toLocaleDateString(),
                                        " 판매 내역"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flow-root",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "min-w-full divide-y divide-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    scope: "col",
                                                                    className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",
                                                                    children: "메뉴"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    scope: "col",
                                                                    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                                                    children: "판매 수량"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    scope: "col",
                                                                    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                                                    children: "판매 금액"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y divide-gray-200",
                                                        children: getSalesByItemForDate(selectedDate).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                                                        children: [
                                                                            item.quantity,
                                                                            "개"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                                                        children: [
                                                                            item.total.toLocaleString(),
                                                                            "원"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, item.name, true, {
                                                                fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    scope: "row",
                                                                    colSpan: 2,
                                                                    className: "py-4 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-0",
                                                                    children: "주간 총 매출"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-900",
                                                                    children: [
                                                                        getTotalSalesForWeek().toLocaleString(),
                                                                        "원"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/sales-report/page.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/sales-report/page.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/sales-report/page.tsx",
            lineNumber: 76,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/sales-report/page.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createStore": (()=>createStore)
});
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}}),
"[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "create": (()=>create),
    "useStore": (()=>useStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, ()=>selector(api.getState()), ()=>selector(api.getInitialState()));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}}),
"[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "combine": (()=>combine),
    "createJSONStorage": (()=>createJSONStorage),
    "devtools": (()=>devtools),
    "persist": (()=>persist),
    "redux": (()=>redux),
    "subscribeWithSelector": (()=>subscribeWithSelector)
});
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/zustand/esm/middleware.mjs")}`;
    }
};
const reduxImpl = (reducer, initial)=>(set, _get, api)=>{
        api.dispatch = (action)=>{
            set((state)=>reducer(state, action), false, action);
            return action;
        };
        api.dispatchFromDevtools = true;
        return {
            dispatch: (...args)=>api.dispatch(...args),
            ...initial
        };
    };
const redux = reduxImpl;
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name)=>{
    const api = trackedConnections.get(name);
    if (!api) return {};
    return Object.fromEntries(Object.entries(api.stores).map(([key, api2])=>[
            key,
            api2.getState()
        ]));
};
const extractConnectionInformation = (store, extensionConnector, options)=>{
    if (store === void 0) {
        return {
            type: "untracked",
            connection: extensionConnector.connect(options)
        };
    }
    const existingConnection = trackedConnections.get(options.name);
    if (existingConnection) {
        return {
            type: "tracked",
            store,
            ...existingConnection
        };
    }
    const newConnection = {
        connection: extensionConnector.connect(options),
        stores: {}
    };
    trackedConnections.set(options.name, newConnection);
    return {
        type: "tracked",
        store,
        ...newConnection
    };
};
const removeStoreFromTrackedConnections = (name, store)=>{
    if (store === void 0) return;
    const connectionInfo = trackedConnections.get(name);
    if (!connectionInfo) return;
    delete connectionInfo.stores[store];
    if (Object.keys(connectionInfo.stores).length === 0) {
        trackedConnections.delete(name);
    }
};
const findCallerName = (stack)=>{
    var _a, _b;
    if (!stack) return void 0;
    const traceLines = stack.split("\n");
    const apiSetStateLineIndex = traceLines.findIndex((traceLine)=>traceLine.includes("api.setState"));
    if (apiSetStateLineIndex < 0) return void 0;
    const callerLine = ((_a = traceLines[apiSetStateLineIndex + 1]) == null ? void 0 : _a.trim()) || "";
    return (_b = /.+ (.+) .+/.exec(callerLine)) == null ? void 0 : _b[1];
};
const devtoolsImpl = (fn, devtoolsOptions = {})=>(set, get, api)=>{
        const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
        let extensionConnector;
        try {
            extensionConnector = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (e) {}
        if (!extensionConnector) {
            return fn(set, get, api);
        }
        const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
        let isRecording = true;
        api.setState = (state, replace, nameOrAction)=>{
            const r = set(state, replace);
            if (!isRecording) return r;
            const inferredActionType = findCallerName(new Error().stack);
            const action = nameOrAction === void 0 ? {
                type: anonymousActionType || inferredActionType || "anonymous"
            } : typeof nameOrAction === "string" ? {
                type: nameOrAction
            } : nameOrAction;
            if (store === void 0) {
                connection == null ? void 0 : connection.send(action, get());
                return r;
            }
            connection == null ? void 0 : connection.send({
                ...action,
                type: `${store}/${action.type}`
            }, {
                ...getTrackedConnectionState(options.name),
                [store]: api.getState()
            });
            return r;
        };
        api.devtools = {
            cleanup: ()=>{
                if (connection && typeof connection.unsubscribe === "function") {
                    connection.unsubscribe();
                }
                removeStoreFromTrackedConnections(options.name, store);
            }
        };
        const setStateFromDevtools = (...a)=>{
            const originalIsRecording = isRecording;
            isRecording = false;
            set(...a);
            isRecording = originalIsRecording;
        };
        const initialState = fn(api.setState, get, api);
        if (connectionInformation.type === "untracked") {
            connection == null ? void 0 : connection.init(initialState);
        } else {
            connectionInformation.stores[connectionInformation.store] = api;
            connection == null ? void 0 : connection.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2])=>[
                    key,
                    key === connectionInformation.store ? initialState : store2.getState()
                ])));
        }
        if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
            let didWarnAboutReservedActionType = false;
            const originalDispatch = api.dispatch;
            api.dispatch = (...args)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && args[0].type === "__setState" && !didWarnAboutReservedActionType) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    didWarnAboutReservedActionType = true;
                }
                originalDispatch(...args);
            };
        }
        connection.subscribe((message)=>{
            var _a;
            switch(message.type){
                case "ACTION":
                    if (typeof message.payload !== "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return;
                    }
                    return parseJsonThen(message.payload, (action)=>{
                        if (action.type === "__setState") {
                            if (store === void 0) {
                                setStateFromDevtools(action.state);
                                return;
                            }
                            if (Object.keys(action.state).length !== 1) {
                                console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            }
                            const stateFromDevtools = action.state[store];
                            if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                                return;
                            }
                            if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                                setStateFromDevtools(stateFromDevtools);
                            }
                            return;
                        }
                        if (!api.dispatchFromDevtools) return;
                        if (typeof api.dispatch !== "function") return;
                        api.dispatch(action);
                    });
                case "DISPATCH":
                    switch(message.payload.type){
                        case "RESET":
                            setStateFromDevtools(initialState);
                            if (store === void 0) {
                                return connection == null ? void 0 : connection.init(api.getState());
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "COMMIT":
                            if (store === void 0) {
                                connection == null ? void 0 : connection.init(api.getState());
                                return;
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "ROLLBACK":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    connection == null ? void 0 : connection.init(api.getState());
                                    return;
                                }
                                setStateFromDevtools(state[store]);
                                connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    return;
                                }
                                if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                                    setStateFromDevtools(state[store]);
                                }
                            });
                        case "IMPORT_STATE":
                            {
                                const { nextLiftedState } = message.payload;
                                const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
                                if (!lastComputedState) return;
                                if (store === void 0) {
                                    setStateFromDevtools(lastComputedState);
                                } else {
                                    setStateFromDevtools(lastComputedState[store]);
                                }
                                connection == null ? void 0 : connection.send(null, // FIXME no-any
                                nextLiftedState);
                                return;
                            }
                        case "PAUSE_RECORDING":
                            return isRecording = !isRecording;
                    }
                    return;
            }
        });
        return initialState;
    };
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, fn)=>{
    let parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e);
    }
    if (parsed !== void 0) fn(parsed);
};
const subscribeWithSelectorImpl = (fn)=>(set, get, api)=>{
        const origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options)=>{
            let listener = selector;
            if (optListener) {
                const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
                let currentSlice = selector(api.getState());
                listener = (state)=>{
                    const nextSlice = selector(state);
                    if (!equalityFn(currentSlice, nextSlice)) {
                        const previousSlice = currentSlice;
                        optListener(currentSlice = nextSlice, previousSlice);
                    }
                };
                if (options == null ? void 0 : options.fireImmediately) {
                    optListener(currentSlice, currentSlice);
                }
            }
            return origSubscribe(listener);
        };
        const initialState = fn(set, get, api);
        return initialState;
    };
const subscribeWithSelector = subscribeWithSelectorImpl;
function combine(initialState, create) {
    return (...args)=>Object.assign({}, initialState, create(...args));
}
function createJSONStorage(getStorage, options) {
    let storage;
    try {
        storage = getStorage();
    } catch (e) {
        return;
    }
    const persistStorage = {
        getItem: (name)=>{
            var _a;
            const parse = (str2)=>{
                if (str2 === null) {
                    return null;
                }
                return JSON.parse(str2, options == null ? void 0 : options.reviver);
            };
            const str = (_a = storage.getItem(name)) != null ? _a : null;
            if (str instanceof Promise) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (name, newValue)=>storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
        removeItem: (name)=>storage.removeItem(name)
    };
    return persistStorage;
}
const toThenable = (fn)=>(input)=>{
        try {
            const result = fn(input);
            if (result instanceof Promise) {
                return result;
            }
            return {
                then (onFulfilled) {
                    return toThenable(onFulfilled)(result);
                },
                catch (_onRejected) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then (_onFulfilled) {
                    return this;
                },
                catch (onRejected) {
                    return toThenable(onRejected)(e);
                }
            };
        }
    };
const persistImpl = (config, baseOptions)=>(set, get, api)=>{
        let options = {
            storage: createJSONStorage(()=>localStorage),
            partialize: (state)=>state,
            version: 0,
            merge: (persistedState, currentState)=>({
                    ...currentState,
                    ...persistedState
                }),
            ...baseOptions
        };
        let hasHydrated = false;
        const hydrationListeners = /* @__PURE__ */ new Set();
        const finishHydrationListeners = /* @__PURE__ */ new Set();
        let storage = options.storage;
        if (!storage) {
            return config((...args)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
                set(...args);
            }, get, api);
        }
        const setItem = ()=>{
            const state = options.partialize({
                ...get()
            });
            return storage.setItem(options.name, {
                state,
                version: options.version
            });
        };
        const savedSetState = api.setState;
        api.setState = (state, replace)=>{
            savedSetState(state, replace);
            void setItem();
        };
        const configResult = config((...args)=>{
            set(...args);
            void setItem();
        }, get, api);
        api.getInitialState = ()=>configResult;
        let stateFromStorage;
        const hydrate = ()=>{
            var _a, _b;
            if (!storage) return;
            hasHydrated = false;
            hydrationListeners.forEach((cb)=>{
                var _a2;
                return cb((_a2 = get()) != null ? _a2 : configResult);
            });
            const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
            return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue)=>{
                if (deserializedStorageValue) {
                    if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                        if (options.migrate) {
                            const migration = options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
                            if (migration instanceof Promise) {
                                return migration.then((result)=>[
                                        true,
                                        result
                                    ]);
                            }
                            return [
                                true,
                                migration
                            ];
                        }
                        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
                    } else {
                        return [
                            false,
                            deserializedStorageValue.state
                        ];
                    }
                }
                return [
                    false,
                    void 0
                ];
            }).then((migrationResult)=>{
                var _a2;
                const [migrated, migratedState] = migrationResult;
                stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
                set(stateFromStorage, true);
                if (migrated) {
                    return setItem();
                }
            }).then(()=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
                stateFromStorage = get();
                hasHydrated = true;
                finishHydrationListeners.forEach((cb)=>cb(stateFromStorage));
            }).catch((e)=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
            });
        };
        api.persist = {
            setOptions: (newOptions)=>{
                options = {
                    ...options,
                    ...newOptions
                };
                if (newOptions.storage) {
                    storage = newOptions.storage;
                }
            },
            clearStorage: ()=>{
                storage == null ? void 0 : storage.removeItem(options.name);
            },
            getOptions: ()=>options,
            rehydrate: ()=>hydrate(),
            hasHydrated: ()=>hasHydrated,
            onHydrate: (cb)=>{
                hydrationListeners.add(cb);
                return ()=>{
                    hydrationListeners.delete(cb);
                };
            },
            onFinishHydration: (cb)=>{
                finishHydrationListeners.add(cb);
                return ()=>{
                    finishHydrationListeners.delete(cb);
                };
            }
        };
        if (!options.skipHydration) {
            hydrate();
        }
        return stateFromStorage || configResult;
    };
const persist = persistImpl;
;
}}),

};

//# sourceMappingURL=_03068d22._.js.map
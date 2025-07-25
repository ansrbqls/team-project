(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/store/useStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useStore": (()=>useStore)
});
(()=>{
    const e = new Error("Cannot find module 'zustand'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'zustand/middleware'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const useStore = create()(persist((set)=>({
        // Menu
        menu: [],
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
        addOrder: (order)=>set((state)=>({
                    orders: [
                        ...state.orders,
                        order
                    ],
                    cart: []
                })),
        completeOrder: (orderId)=>set((state)=>({
                    orders: state.orders.map((order)=>order.id === orderId ? {
                            ...order,
                            status: 'completed'
                        } : order)
                })),
        clearOrders: ()=>set({
                orders: []
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
// Sample menu data
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/menu/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MenuPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// Sample menu data
const sampleMenu = [
    {
        id: '1',
        name: '아메리카노',
        price: 4000,
        category: 'drink',
        image: '/images/americano.jpg'
    },
    {
        id: '2',
        name: '카페라떼',
        price: 4500,
        category: 'drink',
        image: '/images/latte.jpg'
    },
    {
        id: '3',
        name: '카푸치노',
        price: 4500,
        category: 'drink',
        image: '/images/cappuccino.jpg'
    },
    {
        id: '4',
        name: '샌드위치',
        price: 6000,
        category: 'food',
        image: '/images/sandwich.jpg'
    },
    {
        id: '5',
        name: '케이크',
        price: 5000,
        category: 'food',
        image: '/images/cake.jpg'
    }
];
const categories = [
    {
        id: 'COFFEE',
        name: '커피'
    },
    {
        id: 'LATTE',
        name: '라떼'
    },
    {
        id: 'JUICE',
        name: '주스'
    },
    {
        id: 'ADE',
        name: '에이드'
    },
    {
        id: 'TEA',
        name: '차'
    },
    {
        id: 'SMOOTHIE',
        name: '스무디'
    },
    {
        id: 'FRAPE',
        name: '프라페'
    },
    {
        id: 'DESSERT',
        name: '디저트'
    }
];
function MenuPage() {
    _s();
    const { menu, setMenu, addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('COFFEE');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuPage.useEffect": ()=>{
            // Set sample menu data
            setMenu(sampleMenu);
        }
    }["MenuPage.useEffect"], [
        setMenu
    ]);
    const filteredMenu = menu.filter((item)=>item.category === selectedCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold tracking-tight text-gray-900",
                    children: "메뉴"
                }, void 0, false, {
                    fileName: "[project]/src/app/menu/page.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 border-b border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "-mb-px flex space-x-8",
                        "aria-label": "Tabs",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedCategory(category.id),
                                className: `${selectedCategory === category.id ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`,
                                children: category.name
                            }, category.id, false, {
                                fileName: "[project]/src/app/menu/page.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/menu/page.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/menu/page.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
                    children: filteredMenu.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.image,
                                        alt: item.name,
                                        className: "h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/menu/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/menu/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm text-gray-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                className: "absolute inset-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/menu/page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 45
                                                            }, this),
                                                            item.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/menu/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/menu/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-gray-500",
                                                    children: categories.find((c)=>c.id === item.category)?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/menu/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/menu/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: [
                                                item.price.toLocaleString(),
                                                "원"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/menu/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/menu/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>addToCart(item),
                                    className: "mt-4 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                                    children: "장바구니에 담기"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/menu/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/menu/page.tsx",
                            lineNumber: 92,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/menu/page.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/menu/page.tsx",
            lineNumber: 69,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/menu/page.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}
_s(MenuPage, "kkwZHarXsO6eSOja1hp1m9SEO9s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = MenuPage;
var _c;
__turbopack_context__.k.register(_c, "MenuPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_4fbeea25._.js.map
module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
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
        image: '/images/에스프레소.jpeg',
        description: '진한 에스프레소'
    },
    {
        id: 'coffee-2',
        name: '아메리카노',
        price: 2500,
        category: 'COFFEE',
        image: '/images/아메리카노.jpg',
        description: '깔끔한 아메리카노'
    },
    {
        id: 'coffee-3',
        name: '헤이즐넛아메리카노',
        price: 3200,
        category: 'COFFEE',
        image: '/images/헤이즐넛아메리카노.avif',
        description: '헤이즐넛 풍미의 아메리카노'
    },
    {
        id: 'coffee-4',
        name: '카라멜마끼아또',
        price: 4000,
        category: 'COFFEE',
        image: '/images/카라멜마키아또.jpg',
        description: '달콤한 카라멜 마끼아또'
    },
    {
        id: 'coffee-5',
        name: '둘체(연유)라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/돌체라떼.webp',
        description: '부드러운 연유 라떼'
    },
    {
        id: 'coffee-6',
        name: '바닐라라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/바닐라라떼.jpeg',
        description: '달콤한 바닐라 라떼'
    },
    {
        id: 'coffee-7',
        name: '헤이즐넛라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/헤이즐넛라떼.jpeg',
        description: '헤이즐넛 풍미의 라떼'
    },
    {
        id: 'coffee-8',
        name: '카라멜라떼',
        price: 4000,
        category: 'COFFEE',
        image: '/images/카라멜라떼.jpeg',
        description: '달콤한 카라멜 라떼'
    },
    {
        id: 'coffee-9',
        name: '카페모카',
        price: 4000,
        category: 'COFFEE',
        image: '/images/카페모카.jpeg',
        description: '초콜릿 풍미의 모카'
    },
    {
        id: 'coffee-10',
        name: '코코넛밀크커피',
        price: 4000,
        category: 'COFFEE',
        image: '/images/코코넛밀크커피.jpeg',
        description: '코코넛 풍미의 커피'
    },
    // LATTE
    {
        id: 'latte-1',
        name: '스팀우유',
        price: 3000,
        category: 'LATTE',
        image: '/images/스팀우유.jpeg',
        description: '따뜻한 스팀우유'
    },
    {
        id: 'latte-2',
        name: '초코라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/초코라떼.jpeg',
        description: '달콤한 초코라떼'
    },
    {
        id: 'latte-3',
        name: '미숫가루라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/미숫가루라떼.jpeg',
        description: '고소한 미숫가루 라떼'
    },
    {
        id: 'latte-4',
        name: '토피넛라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/토피넛라떼.jpeg',
        description: '달콤한 토피넛 라떼'
    },
    {
        id: 'latte-5',
        name: '녹차라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/녹차라떼.jpeg',
        description: '깔끔한 녹차 라떼'
    },
    {
        id: 'latte-6',
        name: '고구마라떼',
        price: 4000,
        category: 'LATTE',
        image: '/images/고구마라떼.jpeg',
        description: '달콤한 고구마 라떼'
    },
    {
        id: 'latte-7',
        name: '밀크티',
        price: 4000,
        category: 'LATTE',
        image: '/images/밀크티.jpeg',
        description: '부드러운 밀크티'
    },
    {
        id: 'latte-8',
        name: '리얼딸기우유',
        price: 5500,
        category: 'LATTE',
        image: '/images/리얼딸기우유.jpeg',
        description: '신선한 딸기 우유'
    },
    // JUICE
    {
        id: 'juice-1',
        name: '딸기',
        price: 4000,
        category: 'JUICE',
        image: '/images/딸기.jpeg',
        description: '상큼한 딸기 주스'
    },
    {
        id: 'juice-2',
        name: '딸기바나나',
        price: 4000,
        category: 'JUICE',
        image: '/images/딸기바나나.jpeg',
        description: '딸기와 바나나의 조화'
    },
    {
        id: 'juice-3',
        name: '토마토',
        price: 4000,
        category: 'JUICE',
        image: '/images/토마토.jpeg',
        description: '신선한 토마토 주스'
    },
    {
        id: 'juice-4',
        name: '바나나',
        price: 4000,
        category: 'JUICE',
        image: '/images/바나나.jpeg',
        description: '달콤한 바나나 주스'
    },
    // ADE
    {
        id: 'ade-1',
        name: '레몬에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/레몬에이드.jpeg',
        description: '상큼한 레몬에이드'
    },
    {
        id: 'ade-2',
        name: '자몽에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/자몽에이드.jpeg',
        description: '상큼한 자몽에이드'
    },
    {
        id: 'ade-3',
        name: '청포도에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/청포도에이드.jpeg',
        description: '달콤한 청포도에이드'
    },
    {
        id: 'ade-4',
        name: '유자에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/유자에이드.jpeg',
        description: '상큼한 유자에이드'
    },
    {
        id: 'ade-5',
        name: '체리에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/체리에이드.jpeg',
        description: '달콤한 체리에이드'
    },
    {
        id: 'ade-6',
        name: '메론에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/메론에이드.jpeg',
        description: '달콤한 메론에이드'
    },
    {
        id: 'ade-7',
        name: '복숭아에이드',
        price: 3700,
        category: 'ADE',
        image: '/images/복숭아에이드.jpeg',
        description: '달콤한 복숭아에이드'
    },
    {
        id: 'ade-8',
        name: '청포도자몽에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/청포도자몽에이드.jpeg',
        description: '청포도와 자몽의 조화'
    },
    {
        id: 'ade-9',
        name: '체리콕에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/체리콕에이드.jpeg',
        description: '달콤한 체리콕에이드'
    },
    {
        id: 'ade-10',
        name: '히비스커스에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/히비스커스에이드.jpeg',
        description: '상큼한 히비스커스에이드'
    },
    {
        id: 'ade-11',
        name: '히비스유자에이드',
        price: 4200,
        category: 'ADE',
        image: '/images/히비스커스유자에이드.jpeg',
        description: '히비스커스와 유자의 조화'
    },
    // TEA
    {
        id: 'tea-1',
        name: '유자/자몽/레몬',
        price: 3700,
        category: 'TEA',
        image: '/images/유자자몽레몬.jpeg',
        description: '상큼한 과일차'
    },
    {
        id: 'tea-2',
        name: '대추/생강/7곡생강',
        price: 3700,
        category: 'TEA',
        image: '/images/대추생강7곡생각.jpeg',
        description: '따뜻한 생강차'
    },
    {
        id: 'tea-3',
        name: '쌍화차',
        price: 4200,
        category: 'TEA',
        image: '/images/쌍화차.jpeg',
        description: '달콤한 쌍화차'
    },
    {
        id: 'tea-4',
        name: '유자애플티/자몽애플티',
        price: 4200,
        category: 'TEA',
        image: '/images/유자애플티자몽애플티.jpeg',
        description: '과일 풍미의 차'
    },
    {
        id: 'tea-5',
        name: '루이보스/캐모마일',
        price: 3200,
        category: 'TEA',
        image: '/images/루이보스캐모마일.jpeg',
        description: '부드러운 허브차'
    },
    {
        id: 'tea-6',
        name: '페퍼민트/레몬그라스',
        price: 3200,
        category: 'TEA',
        image: '/images/페퍼민트레몬그라스.jpg',
        description: '상쾌한 허브차'
    },
    {
        id: 'tea-7',
        name: '히비스커스',
        price: 3200,
        category: 'TEA',
        image: '/images/히비스커스.jpeg',
        description: '상큼한 히비스커스'
    },
    {
        id: 'tea-8',
        name: '아이스티',
        price: 3200,
        category: 'TEA',
        image: '/images/아이스티.jpeg',
        description: '달콤한 아이스티'
    },
    // SMOOTHIE
    {
        id: 'smoothie-1',
        name: '플레인요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/플레인요거트스무디.avif',
        description: '부드러운 요거트 스무디'
    },
    {
        id: 'smoothie-2',
        name: '딸기요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/딸기요거트스무디.jpeg',
        description: '상큼한 딸기 요거트 스무디'
    },
    {
        id: 'smoothie-3',
        name: '청포도요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/청포도요거트스무디.jpeg',
        description: '달콤한 청포도 요거트 스무디'
    },
    {
        id: 'smoothie-4',
        name: '블루베리요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/블루베리요거트스무디.jpeg',
        description: '상큼한 블루베리 요거트 스무디'
    },
    {
        id: 'smoothie-5',
        name: '유자요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/유자요거트스무디.jpeg',
        description: '상큼한 유자 요거트 스무디'
    },
    {
        id: 'smoothie-6',
        name: '키위요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/키위요거트스무디.jpeg',
        description: '상큼한 키위 요거트 스무디'
    },
    {
        id: 'smoothie-7',
        name: '딸기스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/딸기스무디.jpeg',
        description: '상큼한 딸기 스무디'
    },
    {
        id: 'smoothie-8',
        name: '망고스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/망고스무디.jpeg',
        description: '달콤한 망고 스무디'
    },
    {
        id: 'smoothie-9',
        name: '파인애플요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/파인애플요거트스무디.jpeg',
        description: '상큼한 파인애플 요거트 스무디'
    },
    {
        id: 'smoothie-10',
        name: '멜론요거트스무디',
        price: 4500,
        category: 'SMOOTHIE',
        image: '/images/멜론요거트스무디.jpeg',
        description: '달콤한 멜론 요거트 스무디'
    },
    {
        id: 'smoothie-11',
        name: '코코넛밀크망고스무디',
        price: 5000,
        category: 'SMOOTHIE',
        image: '/images/코코넛밀크망고스무디.jpeg',
        description: '코코넛과 망고의 조화'
    },
    {
        id: 'smoothie-12',
        name: '코코넛밀크커피스무디',
        price: 5000,
        category: 'SMOOTHIE',
        image: '/images/코코넛밀크커피스무디.jpeg',
        description: '코코넛과 커피의 조화'
    },
    // FRAPE
    {
        id: 'frape-1',
        name: '홍콩프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/홍콩프라페.jpeg',
        description: '달콤한 홍콩 프라페'
    },
    {
        id: 'frape-2',
        name: '녹차프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/녹차프라페.jpeg',
        description: '깔끔한 녹차 프라페'
    },
    {
        id: 'frape-3',
        name: '코코넛프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/코코넛프라페.jpeg',
        description: '달콤한 코코넛 프라페'
    },
    {
        id: 'frape-4',
        name: '쿠앤크프라페',
        price: 5000,
        category: 'FRAPE',
        image: '/images/쿠앤크프라페.jpeg',
        description: '달콤한 쿠앤크 프라페'
    },
    // DESSERT
    {
        id: 'dessert-1',
        name: '구운계란',
        price: 600,
        category: 'DESSERT',
        image: '/images/구운계란.jpeg',
        description: '고소한 구운계란'
    },
    {
        id: 'dessert-2',
        name: '구운계란(2p)',
        price: 1000,
        category: 'DESSERT',
        image: '/images/구운계란(2p).jpeg',
        description: '고소한 구운계란 2개'
    },
    {
        id: 'dessert-3',
        name: '휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/휘낭시에.jpeg',
        description: '부드러운 휘낭시에'
    },
    {
        id: 'dessert-4',
        name: '초코휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/초코휘낭시에.jpeg',
        description: '달콤한 초코 휘낭시에'
    },
    {
        id: 'dessert-5',
        name: '레몬휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/레몬휘낭시에.jpeg',
        description: '상큼한 레몬 휘낭시에'
    },
    {
        id: 'dessert-6',
        name: '무화과휘낭시에',
        price: 2900,
        category: 'DESSERT',
        image: '/images/무화과휘낭시에.jpeg',
        description: '달콤한 무화과 휘낭시에'
    },
    {
        id: 'dessert-7',
        name: '플레인스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/플레인스콘.jpeg',
        description: '고소한 플레인 스콘'
    },
    {
        id: 'dessert-8',
        name: '초코스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/초코스콘.jpeg',
        description: '달콤한 초코 스콘'
    },
    {
        id: 'dessert-9',
        name: '레몬스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/레몬스콘.jpeg',
        description: '상큼한 레몬 스콘'
    },
    {
        id: 'dessert-10',
        name: '말차스콘',
        price: 3200,
        category: 'DESSERT',
        image: '/images/말차스콘.jpeg',
        description: '깔끔한 말차 스콘'
    },
    {
        id: 'dessert-11',
        name: '수제햄치즈샌드위치',
        price: 3700,
        category: 'DESSERT',
        image: '/images/수제햄치즈샌드위치.jpeg',
        description: '고소한 햄치즈 샌드위치'
    },
    {
        id: 'dessert-12',
        name: '수제테리버거',
        price: 3700,
        category: 'DESSERT',
        image: '/images/수제데리버거.jpeg',
        description: '달콤한 테리버거'
    },
    {
        id: 'dessert-13',
        name: '수제불고기버거',
        price: 4200,
        category: 'DESSERT',
        image: '/images/수제불고기버거.jpeg',
        description: '매콤한 불고기 버거'
    }
];
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        menu: sampleMenu,
        cart: [],
        orders: [],
        reservations: [],
        currentUser: null,
        users: [],
        stamps: [],
        coupons: [],
        userFavorites: {},
        isAdmin: false,
        addToCart: (item)=>{
            if (!item || !item.id) {
                console.error('Invalid item provided to addToCart:', item);
                return;
            }
            set((state)=>{
                // Validate existing cart items
                const validCart = state.cart.filter((cartItem)=>cartItem && cartItem.item && cartItem.item.id && typeof cartItem.quantity === 'number');
                const existingItem = validCart.find((i)=>i.item.id === item.id);
                if (existingItem) {
                    return {
                        cart: validCart.map((i)=>i.item.id === item.id ? {
                                ...i,
                                quantity: i.quantity + 1
                            } : i)
                    };
                }
                const newItem = {
                    item: {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        category: item.category,
                        image: item.image,
                        description: item.description
                    },
                    quantity: 1
                };
                return {
                    cart: [
                        ...validCart,
                        newItem
                    ]
                };
            });
        },
        removeFromCart: (itemId)=>set((state)=>({
                    cart: state.cart.filter((i)=>i && i.item && i.item.id !== itemId)
                })),
        updateQuantity: (itemId, quantity)=>set((state)=>({
                    cart: state.cart.map((i)=>i && i.item && i.item.id === itemId ? {
                            ...i,
                            quantity
                        } : i).filter(Boolean)
                })),
        clearCart: ()=>set({
                cart: []
            }),
        placeOrder: ()=>{
            const { cart, currentUser } = get();
            if (!currentUser) return;
            // Validate cart items before placing order
            const validCart = cart.filter((item)=>item && item.item && item.item.id && typeof item.quantity === 'number' && typeof item.item.price === 'number');
            const order = {
                id: `order-${Date.now()}`,
                userId: currentUser.id,
                items: validCart,
                total: validCart.reduce((sum, item)=>sum + item.item.price * item.quantity, 0),
                status: 'pending',
                createdAt: new Date()
            };
            // Add stamps for each item in the order
            const newStamps = validCart.flatMap((item)=>Array(item.quantity).fill(null).map(()=>({
                        id: `stamp-${Date.now()}-${Math.random()}`,
                        userId: currentUser.id,
                        createdAt: new Date()
                    })));
            set((state)=>({
                    orders: [
                        ...state.orders,
                        order
                    ],
                    cart: [],
                    stamps: [
                        ...state.stamps,
                        ...newStamps
                    ]
                }));
        },
        makeReservation: (date, time, people)=>{
            const { currentUser } = get();
            if (!currentUser) return;
            const reservation = {
                id: `reservation-${Date.now()}`,
                userId: currentUser.id,
                date,
                time,
                people,
                status: 'pending',
                items: [],
                total: 0,
                createdAt: new Date(),
                pickupTime: new Date(`${date}T${time}`)
            };
            set((state)=>({
                    reservations: [
                        ...state.reservations,
                        reservation
                    ]
                }));
        },
        cancelReservation: (reservationId)=>set((state)=>({
                    reservations: state.reservations.filter((r)=>r.id !== reservationId)
                })),
        login: (email, password)=>{
            const user = get().users.find((u)=>u.username === email && u.password === password);
            if (user) {
                set({
                    currentUser: user
                });
            }
        },
        logout: ()=>{
            set({
                currentUser: null,
                isAdmin: false,
                cart: []
            });
        },
        register: (email, password)=>{
            const existingUser = get().users.find((u)=>u.username === email);
            if (existingUser) return;
            const user = {
                id: `user-${Date.now()}`,
                username: email,
                password,
                name: email.split('@')[0],
                createdAt: new Date()
            };
            set((state)=>({
                    users: [
                        ...state.users,
                        user
                    ],
                    currentUser: user
                }));
        },
        addStamp: (userId)=>{
            set((state)=>({
                    stamps: [
                        ...state.stamps,
                        {
                            id: `stamp-${Date.now()}`,
                            userId,
                            createdAt: new Date()
                        }
                    ]
                }));
        },
        useCoupon: (userId, couponId)=>{
            set((state)=>({
                    coupons: state.coupons.filter((c)=>c.id !== couponId)
                }));
        },
        toggleFavorite: (itemId)=>set((state)=>{
                if (!state.currentUser) return state;
                const userId = state.currentUser.id;
                const userFavorites = state.userFavorites[userId] || [];
                return {
                    userFavorites: {
                        ...state.userFavorites,
                        [userId]: userFavorites.includes(itemId) ? userFavorites.filter((id)=>id !== itemId) : [
                            ...userFavorites,
                            itemId
                        ]
                    }
                };
            }),
        getUserFavorites: (userId)=>{
            return get().userFavorites[userId] || [];
        },
        setIsAdmin: (isAdmin)=>set({
                isAdmin
            }),
        setCurrentUser: (user)=>set({
                currentUser: user
            }),
        getUserOrders: (userId)=>{
            return get().orders.filter((order)=>order.userId === userId);
        },
        getUserCoupons: (userId)=>{
            return get().coupons.filter((coupon)=>coupon.userId === userId);
        },
        getUserStamps: (userId)=>{
            return get().stamps.filter((stamp)=>stamp.userId === userId);
        }
    }), {
    name: 'campus-cafe-storage'
}));
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/components/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Navbar() {
    const { isAdmin, setIsAdmin, currentUser, setCurrentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = ()=>{
        setIsAdmin(false);
        setCurrentUser(null);
        router.push('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-xl font-bold",
                                    children: "Cafe STAY"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.tsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:ml-6 sm:flex sm:space-x-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/menu",
                                        className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                        children: "메뉴"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.tsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/cart",
                                        className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                        children: "장바구니"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/orders",
                                        className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                        children: "주문 내역"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/coupons",
                                        className: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                                        children: "쿠폰"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navbar.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Navbar.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            currentUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600 mr-4",
                                children: [
                                    currentUser.name,
                                    "님 환영합니다"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 56,
                                columnNumber: 29
                            }, this),
                            isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                className: "ml-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800",
                                children: "관리자"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 61,
                                columnNumber: 29
                            }, this) : !currentUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "ml-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800",
                                children: "로그인"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 68,
                                columnNumber: 29
                            }, this) : null,
                            (isAdmin || currentUser) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "ml-4 px-4 py-2 text-sm text-red-600 hover:text-red-800",
                                children: "로그아웃"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Navbar.tsx",
                        lineNumber: 54,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Navbar.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Navbar.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b45000f2._.js.map

export const personalInfo = {
    name: "Darshan Dhameliya",
    role: "Backend Developer",
    experience: "2.5+ Years",
    tagline: "Architecting Scalable & Secure Server-Side Solutions",
    description: "I specialize in building robust backend systems, designing efficient APIs, and optimizing database performance. With over 2.5 years of experience, I ensure your applications are secure, scalable, and lightning fast.",
    email: "darshandhameliya78@gmail.com",
    linkedin: "https://www.linkedin.com/in/darshan-dhameliya-37a1a3342?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/DarshanBackend"
};

export const contactInfo = {
    email: personalInfo.email,
    linkedin: personalInfo.linkedin,
    github: personalInfo.github
};

export const experience = [
    {
        id: 1,
        role: "Backend Developer",
        company: "Kalathiya Infotech",
        period: "2024 - Present",
        description: "Leading backend architecture, optimizing database queries, and managing microservices."
    },
    {
        id: 2,
        role: "Junior Backend Developer",
        company: "SkillQode",
        period: "2022 - 2024",
        description: "Developed RESTful APIs, integrated third-party payment gateways, and handled server deployment."
    }
];

export const skills = [
    {
        name: "Backend Core",
        items: ["Node.js", "Express.js"]
    },
    {
        name: "Databases",
        items: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
        name: "DevOps & Tools",
        items: ["AWS", "Git"]
    },
    {
        name: "Architecture",
        items: ["Microservices", "REST API", "WebSockets", "System Design"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Cafe & Resto - Digital Ordering Platform",
        description: "A comprehensive digital ordering system for cafes and restaurants to streamline the process from menu browsing to plate delivery. Includes category-wise menu listings, real-time order placement, and an administrative dashboard.",
        tags: ["RESTful API", "Real-time Orders", "Admin Dashboard"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Auth",
                description: "User authentication",
                endpoints: [
                    { method: "POST", url: "/new/user", name: "Register User", description: "Register new user", response: { success: true, message: "User registered successfully", data: { _id: "usr_cafe001", name: "Rahul Sharma", phone: "9876543210", role: "customer", createdAt: "2025-01-15T10:30:00Z" } } },
                    { method: "POST", url: "/verfiy/motp", name: "Verify OTP", description: "Verify mobile OTP", response: { success: true, message: "OTP verified", data: { verified: true, phone: "9876543210", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." } } },
                    { method: "POST", url: "/login", name: "Login User", description: "Login with credentials", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_cafe001", name: "Rahul Sharma", email: "rahul@gmail.com", role: "customer" } } } }
                ]
            },
            {
                category: "User & Profile",
                description: "Profile and address management",
                endpoints: [
                    { method: "GET", url: "/user/profile", name: "Get Profile", description: "Fetch user profile", response: { success: true, data: { _id: "usr_cafe001", name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210", addresses: [{ _id: "addr_01", label: "Home", address: "12, MG Road, Surat", isDefault: true }] } } },
                    { method: "POST", url: "/user/address", name: "Add Address", description: "Add delivery address", response: { success: true, message: "Address added successfully", data: { _id: "addr_02", label: "Office", address: "45, Ring Road, Surat", pincode: "395002", isDefault: false } } },
                    { method: "PUT", url: "/users/select-address/:addressId", name: "Select Address", description: "Set delivery address", response: { success: true, message: "Delivery address updated", data: { selectedAddress: { _id: "addr_02", label: "Office", address: "45, Ring Road, Surat" } } } }
                ]
            },
            {
                category: "Products",
                description: "Menu and product listing",
                endpoints: [
                    { method: "GET", url: "/all/products", name: "Get All Products", description: "Fetch all available products", response: { success: true, data: [{ _id: "prod_01", name: "Margherita Pizza", category: "Pizza", price: 249, image: "pizza.jpg", isAvailable: true }, { _id: "prod_02", name: "Chicken Biryani", category: "Main Course", price: 199, image: "biryani.jpg", isAvailable: true }], total: 2 } }
                ]
            },
            {
                category: "Cart",
                description: "Cart management",
                endpoints: [
                    { method: "POST", url: "/add/cart/:productId", name: "Add To Cart", description: "Add item to cart", response: { success: true, message: "Item added to cart", data: { cartId: "cart_01", product: "Margherita Pizza", quantity: 2, itemTotal: 498 } } },
                    { method: "GET", url: "/my/cart", name: "Get My Cart", description: "View current cart", response: { success: true, data: { items: [{ product: { name: "Margherita Pizza", price: 249 }, quantity: 2, itemTotal: 498 }], totalItems: 2, subtotal: 498, gst: 25, deliveryCharge: 30, grandTotal: 553 } } }
                ]
            },
            {
                category: "Order",
                description: "Order processing",
                endpoints: [
                    { method: "POST", url: "/new/order", name: "Place New Order", description: "Create order with items", response: { success: true, message: "Order placed successfully", data: { orderId: "ORD_CAFE_2025001", items: 2, total: 553, status: "confirmed", estimatedDelivery: "30 mins", createdAt: "2025-01-15T12:00:00Z" } } },
                    { method: "GET", url: "/my/order", name: "Get My Orders", description: "Fetch order history", response: { success: true, data: [{ _id: "ORD_CAFE_2025001", items: 2, total: 553, status: "delivered", date: "2025-01-15" }, { _id: "ORD_CAFE_2025002", items: 1, total: 199, status: "preparing", date: "2025-01-16" }] } }
                ]
            },
            {
                category: "Payment",
                description: "Payment integration",
                endpoints: [
                    { method: "POST", url: "/new/payment", name: "Make Payment", description: "Process payment", response: { success: true, message: "Payment successful", data: { paymentId: "pay_cafe001", orderId: "ORD_CAFE_2025001", amount: 553, method: "UPI", status: "completed", paidAt: "2025-01-15T12:05:00Z" } } },
                    { method: "GET", url: "/download/invoice/:paymentId", name: "Download Invoice", description: "Get payment invoice", response: { success: true, data: { invoiceId: "INV_2025001", orderId: "ORD_CAFE_2025001", amount: 553, gst: 25, downloadUrl: "/invoices/INV_2025001.pdf", generatedAt: "2025-01-15T12:06:00Z" } } }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "CoralBay - Multi-Variant E-commerce",
        description: "High-end e-commerce platform for the US market featuring a complex Multi-Variant System where products handle various dynamic combinations of colors and storage. Integrated Stripe Payment Gateway and a custom notification engine.",
        tags: ["E-commerce", "Stripe", "Complex Logic", "Multi-Variant"],
        link: "#",
        github: "#",
        image: "https://loremflickr.com/800/600/shopping,ecommerce",
        apiFlow: [
            {
                category: "Auth",
                description: "User registration and login",
                endpoints: [
                    { method: "POST", url: "/new/user", name: "Register User", description: "Registers a new user", response: { success: true, message: "Registration successful", data: { _id: "usr_coral001", name: "Priya Patel", email: "priya@gmail.com", role: "user", createdAt: "2025-02-10T09:00:00Z" } } },
                    { method: "POST", url: "/login", name: "Login User", description: "Authenticate user and get token", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_coral001", name: "Priya Patel", email: "priya@gmail.com" } } } }
                ]
            },
            {
                category: "Products",
                description: "Product and variant management",
                endpoints: [
                    { method: "GET", url: "/getAllProduct", name: "Get All Products", description: "Retrieve all products", response: { success: true, data: [{ _id: "prod_c01", name: "iPhone 15 Pro", brand: "Apple", basePrice: 1299, category: "Smartphones", variants: 4, rating: 4.8 }, { _id: "prod_c02", name: "MacBook Air M3", brand: "Apple", basePrice: 1099, category: "Laptops", variants: 3, rating: 4.9 }], total: 2 } },
                    { method: "GET", url: "/getProductWiseProductVarientdata/:productId", name: "Get Product Variants", description: "Fetch variants for a product", response: { success: true, data: { productId: "prod_c01", productName: "iPhone 15 Pro", variants: [{ _id: "var_01", color: "Natural Titanium", storage: "256GB", price: 1299, stock: 45 }, { _id: "var_02", color: "Blue Titanium", storage: "512GB", price: 1499, stock: 22 }] } } }
                ]
            },
            {
                category: "Cart",
                description: "Cart management",
                endpoints: [
                    { method: "POST", url: "/add/cart/:productId", name: "Add/Remove Item", description: "Update cart items", response: { success: true, message: "Cart updated", data: { cartId: "cart_c01", product: "iPhone 15 Pro", variant: "Blue Titanium - 512GB", quantity: 1, price: 1499 } } },
                    { method: "GET", url: "/my/cart", name: "Get My Cart", description: "Retrieve current user's cart", response: { success: true, data: { items: [{ product: { name: "iPhone 15 Pro", variant: "Blue Titanium - 512GB" }, price: 1499, quantity: 1 }], subtotal: 1499, tax: 134.91, shipping: 0, total: 1633.91 } } }
                ]
            },
            {
                category: "Order",
                description: "Order processing",
                endpoints: [
                    { method: "POST", url: "/user/billingaddress", name: "Add Billing Address", description: "Save billing information", response: { success: true, message: "Billing address saved", data: { _id: "bill_01", name: "Priya Patel", street: "456 Oak Ave", city: "San Francisco", state: "CA", zip: "94102", country: "US" } } },
                    { method: "POST", url: "/new/order", name: "Place New Order", description: "Create order with COD/Method", response: { success: true, message: "Order created", data: { orderId: "ORD_CRL_2025001", items: 1, subtotal: 1499, tax: 134.91, total: 1633.91, paymentMethod: "Stripe", status: "pending_payment" } } }
                ]
            },
            {
                category: "Payment",
                description: "Transaction handling",
                endpoints: [
                    { method: "POST", url: "/new/payment", name: "Make Payment", description: "Process payment for order", response: { success: true, message: "Payment processed via Stripe", data: { paymentId: "pi_3NkF2Q...", orderId: "ORD_CRL_2025001", amount: 1633.91, currency: "USD", status: "succeeded", stripeReceiptUrl: "https://pay.stripe.com/receipts/..." } } }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "CrickLive - Sports Streaming Backend",
        description: "An OTT-style sports application for live cricket matches. Developed APIs for live score updates, schedules, and archives. Optimized for high-concurrency traffic to handle real-time data flow during live events.",
        tags: ["OTT", "Real-time Data", "High Concurrency", "Live Streaming"],
        link: "#",
        github: "#",
        image: "https://loremflickr.com/800/600/cricket,stadium",
        apiFlow: [
            {
                category: "Auth",
                description: "Authentication via OTP",
                endpoints: [
                    { method: "POST", url: "/api/v1/auth/sendOtp", name: "Send OTP", description: "Send login OTP to mobile", response: { success: true, message: "OTP sent to 9876543210", data: { otpId: "otp_cr001", expiresIn: 300, phone: "9876543210" } } },
                    { method: "POST", url: "/api/v1/auth/verifyOtp", name: "Verify OTP", description: "Verify OTP and get token", response: { success: true, message: "OTP verified", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_cr001", name: "Virat Fan", phone: "9876543210", isPremium: false } } } }
                ]
            },
            {
                category: "Cricket Matches",
                description: "Live and historical match data",
                endpoints: [
                    { method: "GET", url: "/api/v1/matches/live", name: "Get Live Matches", description: "Fetch currently live matches", response: { success: true, data: [{ matchId: "match_01", teams: { home: "India", away: "Australia" }, score: { home: "287/4", away: "Yet to bat" }, overs: "42.3", status: "live", venue: "Wankhede Stadium" }] } },
                    { method: "GET", url: "/api/v1/matches/upcoming", name: "Get Upcoming Matches", description: "Fetch schedule of future matches", response: { success: true, data: [{ matchId: "match_02", teams: { home: "England", away: "India" }, date: "2025-02-20T14:00:00Z", venue: "Lord's", format: "T20I", series: "India Tour of England 2025" }] } },
                    { method: "GET", url: "/api/v1/match/:matchId", name: "Get Match Details", description: "Get comprehensive match info", response: { success: true, data: { matchId: "match_01", teams: { home: "India", away: "Australia" }, toss: "India won, chose to bat", score: { home: "287/4 (42.3)", away: "Yet to bat" }, currentBatsman: { name: "Virat Kohli", runs: 82, balls: 74 }, currentBowler: { name: "Pat Cummins", overs: "8.3", wickets: 1 } } } },
                    { method: "GET", url: "/api/v1/match/:matchId/scorecard", name: "Get Match Scorecard", description: "Get detailed scorecard", response: { success: true, data: { matchId: "match_01", innings: [{ team: "India", runs: 287, wickets: 4, overs: 42.3, batsmen: [{ name: "Rohit Sharma", runs: 78, balls: 62, fours: 8, sixes: 3 }], bowlers: [{ name: "Pat Cummins", overs: 8.3, runs: 48, wickets: 1 }] }] } } }
                ]
            },
            {
                category: "Coupons",
                description: "Discount coupon management",
                endpoints: [
                    { method: "GET", url: "/api/v1/coupon/getAllCoupon", name: "Get All Coupons", description: "List available coupons", response: { success: true, data: [{ _id: "cpn_01", code: "CRICKET25", discount: 25, type: "percentage", validTill: "2025-03-31", minPurchase: 299 }] } },
                    { method: "POST", url: "/api/v1/coupon/apply-plan", name: "Apply Coupon", description: "Validate and apply coupon to plan", response: { success: true, message: "Coupon applied", data: { originalPrice: 499, discount: 124.75, finalPrice: 374.25, couponCode: "CRICKET25" } } }
                ]
            },
            {
                category: "Premium Plans",
                description: "Subscription plan management",
                endpoints: [
                    { method: "GET", url: "/api/v1/auth/getAllPremium", name: "Get All Premium Plans", description: "List subscription tiers", response: { success: true, data: [{ _id: "plan_01", name: "Monthly", price: 199, duration: "30 days", features: ["HD Streaming", "Live Matches", "No Ads"] }, { _id: "plan_02", name: "Annual", price: 1499, duration: "365 days", features: ["4K Streaming", "All Matches", "No Ads", "Highlights"] }] } }
                ]
            },
            {
                category: "Info",
                description: "Static content and support",
                endpoints: [
                    { method: "GET", url: "/api/v1/auth/getAllFaqQuestions", name: "Get FAQs", description: "Fetch frequently asked questions", response: { success: true, data: [{ _id: "faq_01", question: "How to watch live matches?", answer: "Subscribe to any premium plan to access live streaming." }, { _id: "faq_02", question: "Can I cancel my subscription?", answer: "Yes, you can cancel anytime from settings." }] } },
                    { method: "GET", url: "/api/v1/auth/getAllAboutUsQuestions", name: "Get About Us", description: "Fetch about us content", response: { success: true, data: { title: "CrickLive", description: "India's premier cricket streaming platform", foundedYear: 2023, totalUsers: "2M+" } } }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "DanceFitMe - Fitness Progression App",
        description: "Daily health-tracking app guiding users through yoga and fitness routines. Features day-wise activity scheduling, a performance-based scoring system, and a Premium Membership model for exclusive content.",
        tags: ["Health Tech", "Scheduling Logic", "Membership Model"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Authentication",
                description: "User onboarding and access control",
                endpoints: [
                    { method: "POST", url: "/api/createRegister", name: "Register User", description: "Register new user with role", response: { success: true, message: "Registration successful", data: { _id: "usr_df001", name: "Sneha Joshi", email: "sneha@gmail.com", role: "user", createdAt: "2025-01-20T08:00:00Z" } } },
                    { method: "POST", url: "/api/loginUser", name: "Login User", description: "Authenticate user", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_df001", name: "Sneha Joshi", isPremium: true, currentDay: 12 } } } }
                ]
            },
            {
                category: "Plans (Products)",
                description: "Subscription plans and details",
                endpoints: [
                    { method: "GET", url: "/api/getAllPremiumPlans", name: "Get All Premium Plans", description: "Fetch available premium plans", response: { success: true, data: [{ _id: "plan_df01", name: "Yoga Beginner", price: 499, duration: "30 days", sessions: 30, difficulty: "Easy" }, { _id: "plan_df02", name: "Advanced Fitness", price: 999, duration: "90 days", sessions: 90, difficulty: "Hard" }] } },
                    { method: "GET", url: "/api/getAllPlanDetails", name: "Get All Plan Details", description: "Get detailed plan information", response: { success: true, data: { _id: "plan_df01", name: "Yoga Beginner", days: [{ day: 1, title: "Sun Salutation", exercises: 5, duration: "20 mins", calories: 120 }, { day: 2, title: "Flexibility Flow", exercises: 7, duration: "25 mins", calories: 150 }] } } }
                ]
            },
            {
                category: "Payment (Order)",
                description: "Subscription purchase and management",
                endpoints: [
                    { method: "POST", url: "/api/createPayment", name: "Create Payment (Order)", description: "Purchase a premium plan", response: { success: true, message: "Payment successful", data: { paymentId: "pay_df001", planName: "Yoga Beginner", amount: 499, duration: "30 days", startDate: "2025-01-20", endDate: "2025-02-19", status: "active" } } },
                    { method: "GET", url: "/api/getMySubscription", name: "Get My Subscription", description: "View active subscription details", response: { success: true, data: { planName: "Yoga Beginner", status: "active", startDate: "2025-01-20", endDate: "2025-02-19", currentDay: 12, totalDays: 30, completedSessions: 10, score: 850 } } }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Electro-Ecommerce - Flash Sale & EMI",
        description: "Specialized electronics e-commerce platform featuring a 'Time-Limited Flash Sale' engine. Integrated Razorpay with support for EMI, Net Banking, UPI, and Card payments for flexible financing.",
        tags: ["E-commerce", "Razorpay", "Flash Sales", "EMI Integration"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Authentication",
                description: "User identity management",
                endpoints: [
                    { method: "POST", url: "/api/createUser", name: "Register User", description: "Register new user", response: { success: true, message: "User registered", data: { _id: "usr_el001", name: "Amit Kumar", email: "amit@gmail.com", phone: "9123456780", createdAt: "2025-01-10T09:00:00Z" } } },
                    { method: "POST", url: "/api/userLogin", name: "Login User", description: "Login with email/password", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_el001", name: "Amit Kumar", email: "amit@gmail.com" } } } },
                    { method: "POST", url: "/api/verifyOtp", name: "Verify OTP", description: "Verify email OTP", response: { success: true, message: "Email verified successfully", data: { verified: true, email: "amit@gmail.com" } } }
                ]
            },
            {
                category: "Profile & Address",
                description: "User details and shipping info",
                endpoints: [
                    { method: "GET", url: "/api/selectCountry/:country", name: "Select Country", description: "Set location context", response: { success: true, data: { country: "India", currency: "INR", taxRate: 18, shippingZones: ["North", "South", "East", "West"] } } },
                    { method: "POST", url: "/api/addNewAddress", name: "Add Address", description: "Add new shipping address", response: { success: true, message: "Address added", data: { _id: "addr_el01", street: "22, Electronics City", city: "Bengaluru", state: "Karnataka", pincode: "560100", isDefault: true } } },
                    { method: "GET", url: "/api/getUserProfile", name: "Get User Profile", description: "Fetch profile details", response: { success: true, data: { _id: "usr_el001", name: "Amit Kumar", email: "amit@gmail.com", phone: "9123456780", addresses: 2, wishlistCount: 5, ordersCount: 3 } } }
                ]
            },
            {
                category: "Products",
                description: "Catalog and inventory",
                endpoints: [
                    { method: "GET", url: "/api/getAllProduct", name: "Get All Products", description: "List all products", response: { success: true, data: [{ _id: "prod_el01", name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 134999, flashPrice: 119999, isFlashSale: true, flashEndsAt: "2025-02-01T23:59:59Z", stock: 15, rating: 4.7 }, { _id: "prod_el02", name: "Sony WH-1000XM5", brand: "Sony", price: 29990, stock: 42, rating: 4.8 }], total: 2 } },
                    { method: "GET", url: "/api/getProductById/:id", name: "Get Product By ID", description: "Fetch single product details", response: { success: true, data: { _id: "prod_el01", name: "Samsung Galaxy S24 Ultra", brand: "Samsung", price: 134999, flashPrice: 119999, description: "256GB, Titanium Gray", specs: { ram: "12GB", storage: "256GB", display: "6.8\" QHD+" }, emiOptions: [{ months: 6, perMonth: 21666, interest: "0%" }, { months: 12, perMonth: 11250, interest: "12%" }] } } }
                ]
            },
            {
                category: "Cart",
                description: "Shopping cart",
                endpoints: [
                    { method: "POST", url: "/api/cart/add", name: "Add To Cart", description: "Add item to cart", response: { success: true, message: "Added to cart", data: { cartId: "cart_el01", product: "Samsung Galaxy S24 Ultra", price: 119999, quantity: 1 } } },
                    { method: "GET", url: "/api/myCart", name: "Get My Cart", description: "View cart contents", response: { success: true, data: { items: [{ product: { name: "Samsung Galaxy S24 Ultra", price: 119999 }, quantity: 1 }], subtotal: 119999, gst: 21600, total: 141599 } } },
                    { method: "GET", url: "/api/billing/preview", name: "Billing Preview", description: "Get price breakdown", response: { success: true, data: { subtotal: 119999, discount: 15000, gst: 18900, shipping: 0, couponDiscount: 0, total: 123899, emiAvailable: true } } }
                ]
            },
            {
                category: "Order",
                description: "Order management",
                endpoints: [
                    { method: "POST", url: "/api/order/create", name: "Create Order", description: "Initialize new order", response: { success: true, data: { orderId: "ORD_EL_2025001", razorpayOrderId: "order_N5s8VzBh3CQTLM", amount: 123899, currency: "INR", status: "created" } } },
                    { method: "GET", url: "/api/order/my-orders", name: "Get My Orders", description: "List user orders", response: { success: true, data: [{ _id: "ORD_EL_2025001", product: "Samsung Galaxy S24 Ultra", amount: 123899, status: "shipped", trackingId: "TRK_IN2025001", orderedAt: "2025-01-15" }] } },
                    { method: "GET", url: "/api/order/:id", name: "Get Order Details", description: "View specific order", response: { success: true, data: { _id: "ORD_EL_2025001", items: [{ name: "Samsung Galaxy S24 Ultra", quantity: 1, price: 119999 }], subtotal: 119999, gst: 18900, total: 123899, status: "shipped", paymentMethod: "Razorpay - EMI", shippingAddress: "22, Electronics City, Bengaluru" } } }
                ]
            },
            {
                category: "Payment",
                description: "Payment gateway integration",
                endpoints: [
                    { method: "POST", url: "/api/payment/:orderId/initiate", name: "Initiate Payment", description: "Start payment process", response: { success: true, data: { razorpayOrderId: "order_N5s8VzBh3CQTLM", amount: 123899, currency: "INR", keyId: "rzp_live_xxxxx", prefill: { name: "Amit Kumar", email: "amit@gmail.com" }, modes: ["UPI", "Card", "NetBanking", "EMI"] } } },
                    { method: "POST", url: "/api/payment/:orderId/verify", name: "Verify Payment", description: "Confirm payment status", response: { success: true, message: "Payment verified", data: { paymentId: "pay_N5s9AbCdEfGh", orderId: "ORD_EL_2025001", amount: 123899, method: "EMI", emiPlan: "6 months @ ₹21,666/mo", status: "captured", paidAt: "2025-01-15T12:30:00Z" } } }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "FoodyZone - Hybrid Delivery Platform",
        description: "Dual-category platform managing instant Restaurant food and scheduled Grocery deliveries. Built a delivery-time logic engine distinguishing between 20-minute dispatch and 3-4 day logistics cycles. Integrated Stripe.",
        tags: ["Logistics", "Stripe", "Hybrid Platform", "Delivery Logic"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Authentication",
                description: "User login and verification",
                endpoints: [
                    { method: "POST", url: "/api/userLogin", name: "Login/Register", description: "Login or register via phone", response: { success: true, message: "OTP sent", data: { phone: "9876543210", otpSent: true, isNewUser: false } } },
                    { method: "POST", url: "/api/verifyOtp", name: "Verify OTP", description: "Verify phone OTP", response: { success: true, message: "Verified", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_fz001", name: "Ravi Patel", phone: "9876543210" } } } },
                    { method: "POST", url: "/api/createUser", name: "Create User", description: "Register new user details", response: { success: true, message: "Profile created", data: { _id: "usr_fz001", name: "Ravi Patel", email: "ravi@gmail.com", phone: "9876543210" } } }
                ]
            },
            {
                category: "User & Address",
                description: "Profile and delivery location",
                endpoints: [
                    { method: "GET", url: "/api/getUserProfile", name: "Get Profile", description: "Fetch user details", response: { success: true, data: { _id: "usr_fz001", name: "Ravi Patel", email: "ravi@gmail.com", phone: "9876543210", activeAddress: "Home - 15, Garden City, Ahmedabad" } } },
                    { method: "POST", url: "/api/addNewAddress", name: "Add Address", description: "Save new delivery address", response: { success: true, message: "Address saved", data: { _id: "addr_fz01", label: "Home", address: "15, Garden City", city: "Ahmedabad", pincode: "380015", coordinates: { lat: 23.0225, lng: 72.5714 } } } },
                    { method: "POST", url: "/api/selectUserAddress", name: "Select Address", description: "Set active delivery address", response: { success: true, message: "Delivery address set", data: { activeAddress: { _id: "addr_fz01", label: "Home", address: "15, Garden City, Ahmedabad" } } } }
                ]
            },
            {
                category: "Browse",
                description: "Restaurant and product discovery",
                endpoints: [
                    { method: "GET", url: "/api/getAllRestaurants", name: "Get Restaurants", description: "List all restaurants", response: { success: true, data: [{ _id: "rest_01", name: "Spice Garden", cuisine: "North Indian", rating: 4.5, deliveryTime: "20-25 mins", isOpen: true, offer: "20% OFF" }, { _id: "rest_02", name: "Pizza Palace", cuisine: "Italian", rating: 4.3, deliveryTime: "30-35 mins", isOpen: true }] } },
                    { method: "GET", url: "/api/getProductsByRestaurantId/:id", name: "Restaurant Products", description: "Menu for specific restaurant", response: { success: true, data: { restaurant: "Spice Garden", menu: [{ _id: "item_01", name: "Butter Chicken", price: 320, isVeg: false, rating: 4.7 }, { _id: "item_02", name: "Paneer Tikka", price: 240, isVeg: true, rating: 4.5 }] } } },
                    { method: "GET", url: "/api/getAllGroceryProducts", name: "Grocery Products", description: "List grocery items", response: { success: true, data: [{ _id: "groc_01", name: "Amul Butter 500g", price: 270, category: "Dairy", deliveryTime: "3-4 days", stock: 150 }, { _id: "groc_02", name: "Basmati Rice 5kg", price: 450, category: "Grains", deliveryTime: "3-4 days", stock: 80 }] } }
                ]
            },
            {
                category: "Cart",
                description: "Shopping cart operations",
                endpoints: [
                    { method: "POST", url: "/api/cart/add", name: "Add To Cart", description: "Add item to cart", response: { success: true, message: "Added to cart", data: { cartId: "cart_fz01", item: "Butter Chicken", quantity: 1, price: 320, cartType: "restaurant" } } },
                    { method: "GET", url: "/api/myCart", name: "Get My Cart", description: "View cart contents", response: { success: true, data: { cartType: "restaurant", restaurant: "Spice Garden", items: [{ name: "Butter Chicken", quantity: 1, price: 320 }, { name: "Paneer Tikka", quantity: 2, price: 480 }], subtotal: 800, deliveryFee: 30, total: 830 } } },
                    { method: "GET", url: "/api/billing/preview", name: "Billing Preview", description: "Get bill estimation", response: { success: true, data: { subtotal: 800, deliveryFee: 30, gst: 40, packagingCharge: 15, tip: 0, total: 885, estimatedDelivery: "25 mins" } } }
                ]
            },
            {
                category: "Order",
                description: "Order placement and history",
                endpoints: [
                    { method: "POST", url: "/api/order/create", name: "Create Order", description: "Place order", response: { success: true, message: "Order placed", data: { orderId: "ORD_FZ_2025001", restaurant: "Spice Garden", items: 3, total: 885, status: "confirmed", estimatedDelivery: "25 mins", deliveryPartner: "Assigned" } } },
                    { method: "GET", url: "/api/order/:id", name: "Get Order", description: "View order details", response: { success: true, data: { _id: "ORD_FZ_2025001", restaurant: "Spice Garden", items: [{ name: "Butter Chicken", qty: 1 }, { name: "Paneer Tikka", qty: 2 }], total: 885, status: "out_for_delivery", deliveryPartner: { name: "Vikram", phone: "9000000001" } } } },
                    { method: "GET", url: "/api/order/my-orders", name: "My Orders", description: "List user orders", response: { success: true, data: [{ _id: "ORD_FZ_2025001", restaurant: "Spice Garden", total: 885, status: "delivered", type: "food", date: "2025-01-18" }, { _id: "ORD_FZ_2025002", total: 720, status: "shipped", type: "grocery", date: "2025-01-19" }] } }
                ]
            },
            {
                category: "Payment",
                description: "Payment processing",
                endpoints: [
                    { method: "POST", url: "/api/payment/:orderId/initiate", name: "Initiate Payment", description: "Start payment flow", response: { success: true, data: { stripeSessionId: "cs_live_a1b2c3...", amount: 885, currency: "INR", orderId: "ORD_FZ_2025001" } } },
                    { method: "POST", url: "/api/payment/:orderId/verify", name: "Verify Payment", description: "Confirm payment", response: { success: true, message: "Payment confirmed", data: { paymentId: "pi_3Nk...", orderId: "ORD_FZ_2025001", amount: 885, method: "Stripe", status: "succeeded", paidAt: "2025-01-18T12:30:00Z" } } }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "IELTS Master - Exam Simulation Engine",
        description: "Complex Ed-Tech platform simulating the IELTS exam. Features modules for Writing, Speaking (voice recording), Listening (audio-sync), and Reading (MCQs), backed by a detailed Result Analytics Engine.",
        tags: ["Ed-Tech", "Audio Processing", "Analytics", "Exam Engine"],
        link: "#",
        github: "#",
        image: "https://loremflickr.com/800/600/exam,study",
        apiFlow: [
            {
                category: "Auth",
                description: "User registration and login",
                endpoints: [
                    { method: "POST", url: "/api/createRegister", name: "Register User", description: "Register new account", response: { success: true, message: "Registered", data: { _id: "usr_ie001", name: "Ankit Shah", email: "ankit@gmail.com", role: "student", createdAt: "2025-01-05T09:00:00Z" } } },
                    { method: "POST", url: "/api/loginUser", name: "Login User", description: "Authenticate user", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_ie001", name: "Ankit Shah", isPremium: true, lastTestScore: 7.5 } } } }
                ]
            },
            {
                category: "Subscription & Payment",
                description: "Plan management and payments",
                endpoints: [
                    { method: "GET", url: "/api/getAllPremium", name: "Get Premium Plans", description: "List subscription plans", response: { success: true, data: [{ _id: "plan_ie01", name: "IELTS Basic", price: 999, duration: "30 days", modules: ["Reading", "Writing"], mockTests: 5 }, { _id: "plan_ie02", name: "IELTS Complete", price: 2499, duration: "90 days", modules: ["Reading", "Writing", "Listening", "Speaking"], mockTests: 20, analytics: true }] } },
                    { method: "POST", url: "/api/createPayment", name: "Create Payment", description: "Purchase subscription", response: { success: true, message: "Payment successful", data: { paymentId: "pay_ie001", plan: "IELTS Complete", amount: 2499, startDate: "2025-01-05", endDate: "2025-04-05", status: "active" } } },
                    { method: "GET", url: "/api/getMySubscription", name: "Get My Subscription", description: "View active plan", response: { success: true, data: { plan: "IELTS Complete", status: "active", startDate: "2025-01-05", endDate: "2025-04-05", testsCompleted: 8, testsRemaining: 12, averageScore: 7.5, moduleScores: { reading: 8.0, writing: 7.0, listening: 7.5, speaking: 7.5 } } } }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Movie & Web Series - Premium OTT",
        description: "Video-on-demand backend with Multi-Device Login Management and session tracking. Integrated Razorpay for premium content subscriptions to manage exclusive movie and series access.",
        tags: ["OTT", "Session Management", "Razorpay", "Video Streaming"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Auth",
                description: "User authentication and session",
                endpoints: [
                    { method: "POST", url: "/api/users/registerUser", name: "Register User", description: "Register new account", response: { success: true, message: "Registered", data: { _id: "usr_mv001", name: "Karan Mehta", email: "karan@gmail.com", createdAt: "2025-01-12T10:00:00Z" } } },
                    { method: "POST", url: "/api/users/verifyOtp", name: "Verify OTP", description: "Verify email OTP", response: { success: true, message: "Email verified", data: { verified: true, email: "karan@gmail.com" } } },
                    { method: "POST", url: "/api/users/loginUser", name: "Login User", description: "Login and get session", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", sessionId: "sess_mv001", device: "Chrome - Windows", activeSessions: 2, maxSessions: 3 } } },
                    { method: "GET", url: "/api/users/getUserById/:id", name: "Get Profile", description: "Fetch user details", response: { success: true, data: { _id: "usr_mv001", name: "Karan Mehta", email: "karan@gmail.com", isPremium: true, plan: "Annual", activeSessions: [{ device: "Chrome - Windows", lastActive: "2025-01-20T14:00:00Z" }, { device: "iPhone App", lastActive: "2025-01-20T10:00:00Z" }] } } }
                ]
            },
            {
                category: "Plans",
                description: "Subscription options",
                endpoints: [
                    { method: "GET", url: "/api/premium/getAllPremium", name: "Get Premium Plans", description: "List subscription plans", response: { success: true, data: [{ _id: "plan_mv01", name: "Basic", price: 149, duration: "30 days", quality: "720p", screens: 1 }, { _id: "plan_mv02", name: "Premium", price: 499, duration: "30 days", quality: "4K", screens: 4, downloads: true }] } }
                ]
            },
            {
                category: "Payment",
                description: "Transaction processing",
                endpoints: [
                    { method: "POST", url: "/api/payment/createPayment", name: "Create Payment", description: "Process subscription payment", response: { success: true, message: "Payment successful", data: { paymentId: "pay_mv001", plan: "Premium", amount: 499, razorpayId: "pay_N5s9AbCdEfGh", status: "captured", validTill: "2025-02-12T10:00:00Z" } } }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Smart Parking Management System",
        description: "Automated logistics solution for vehicle slots. Developed a Time-Based Slot Automation system where the backend automatically frees slots after booking duration expires. Includes shift management.",
        tags: ["Automation", "Logistics", "Time-Based Logic", "Real-time"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Admin",
                description: "Admin logic and control",
                endpoints: [
                    { method: "POST", url: "/api/Admin/addAdmin", name: "Register Admin", description: "Create admin account", response: { success: true, message: "Admin registered", data: { _id: "adm_pk001", name: "Parking Manager", email: "admin@smartpark.com", role: "admin", shift: "Day" } } },
                    { method: "POST", url: "/api/Admin/loginAdmin", name: "Login Admin", description: "Authenticate admin", response: { success: true, message: "Admin login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", admin: { _id: "adm_pk001", name: "Parking Manager", shift: "Day (6AM-6PM)" } } } }
                ]
            },
            {
                category: "Level & Slot",
                description: "Parking infrastructure",
                endpoints: [
                    { method: "POST", url: "/api/level/addLevelWithSlot", name: "Add Level", description: "Create parking level", response: { success: true, message: "Level created", data: { _id: "lvl_01", levelName: "Ground Floor", totalSlots: 50, slotTypes: { twoWheeler: 20, fourWheeler: 25, heavy: 5 }, status: "active" } } },
                    { method: "GET", url: "/api/level/getAllSlots", name: "Get All Slots", description: "List all parking slots", response: { success: true, data: { totalLevels: 3, totalSlots: 150, available: 87, occupied: 63, slots: [{ slotNo: "G-01", level: "Ground", type: "fourWheeler", status: "available" }, { slotNo: "G-02", level: "Ground", type: "fourWheeler", status: "occupied", vehicle: "GJ-05-AB-1234", expiresAt: "2025-01-20T16:00:00Z" }] } } }
                ]
            },
            {
                category: "Vehicle",
                description: "Vehicle entry management",
                endpoints: [
                    { method: "POST", url: "/api/vehicle/addVehicleDetails", name: "Add Vehicle", description: "Register vehicle entry", response: { success: true, message: "Vehicle registered", data: { _id: "veh_01", numberPlate: "GJ-05-AB-1234", type: "fourWheeler", ownerName: "Jayesh Patel", phone: "9876543210", model: "Honda City" } } }
                ]
            },
            {
                category: "Parking Ops",
                description: "Real-time parking tracking",
                endpoints: [
                    { method: "POST", url: "/api/parkingDetails/addParkingDetail", name: "Vehicle Entry", description: "Log vehicle arrival", response: { success: true, message: "Vehicle parked", data: { _id: "park_01", vehicle: "GJ-05-AB-1234", slot: "G-01", level: "Ground", entryTime: "2025-01-20T10:00:00Z", duration: "4 hours", expiresAt: "2025-01-20T14:00:00Z", rate: 40 } } },
                    { method: "PUT", url: "/api/parkingDetails/updateParkingDetail/:id", name: "Vehicle Exit", description: "Log vehicle exit", response: { success: true, message: "Vehicle exited", data: { _id: "park_01", vehicle: "GJ-05-AB-1234", slot: "G-01", entryTime: "2025-01-20T10:00:00Z", exitTime: "2025-01-20T13:45:00Z", duration: "3h 45m", totalCharge: 40, slotFreed: true } } }
                ]
            },
            {
                category: "Reports",
                description: "Analytics and history",
                endpoints: [
                    { method: "GET", url: "/api/parkingDetails/getCollectionDetails", name: "Collection Report", description: "View revenue details", response: { success: true, data: { today: { totalVehicles: 145, revenue: 5800, twoWheeler: { count: 80, revenue: 1600 }, fourWheeler: { count: 55, revenue: 3300 }, heavy: { count: 10, revenue: 900 } }, thisMonth: { totalVehicles: 3250, revenue: 130000 } } } },
                    { method: "GET", url: "/api/parkingDetails/getParkingHistory", name: "Parking History", description: "View past logs", response: { success: true, data: [{ _id: "park_01", vehicle: "GJ-05-AB-1234", slot: "G-01", entry: "2025-01-20T10:00:00Z", exit: "2025-01-20T13:45:00Z", charge: 40 }, { _id: "park_02", vehicle: "GJ-01-CD-5678", slot: "G-15", entry: "2025-01-20T09:00:00Z", exit: "2025-01-20T17:00:00Z", charge: 80 }] } }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Skill Energy - Multi-Language LMS",
        description: "Comprehensive teaching platform for programming languages. Features multi-instructor support, language-specific course variations, visual progress tracking, and Stripe integration for subscription plans.",
        tags: ["LMS", "Stripe", "Multi-Language", "Progress Tracking"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Auth",
                description: "User registration and login",
                endpoints: [
                    { method: "POST", url: "/api/createRegister", name: "Register User", description: "Create new account", response: { success: true, message: "Registered successfully", data: { _id: "usr_sk001", name: "Dhruv Patel", email: "dhruv@gmail.com", role: "student", createdAt: "2025-01-08T09:00:00Z" } } },
                    { method: "POST", url: "/api/loginUser", name: "Login User", description: "Authenticate and get token", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_sk001", name: "Dhruv Patel", enrolledCourses: 3, progress: "45%" } } } }
                ]
            },
            {
                category: "Courses",
                description: "Course browsing",
                endpoints: [
                    { method: "GET", url: "/api/getAllCourses", name: "Get All Courses", description: "Browse available courses", response: { success: true, data: [{ _id: "crs_01", name: "Node.js Mastery", instructor: "Darshan Dhameliya", language: "English", price: 1299, rating: 4.8, students: 2450, duration: "42 hours", lessons: 156 }, { _id: "crs_02", name: "Python Full Stack", instructor: "Rahul Sharma", language: "Hindi", price: 999, rating: 4.6, students: 1800, duration: "38 hours", lessons: 132 }], total: 2 } }
                ]
            },
            {
                category: "Cart",
                description: "Course cart management",
                endpoints: [
                    { method: "POST", url: "/api/addToCart", name: "Add To Cart", description: "Add course to cart", response: { success: true, message: "Course added to cart", data: { cartId: "cart_sk01", course: "Node.js Mastery", price: 1299 } } },
                    { method: "GET", url: "/api/getCart", name: "Get Cart", description: "View cart contents", response: { success: true, data: { items: [{ course: { name: "Node.js Mastery", instructor: "Darshan Dhameliya" }, price: 1299 }], subtotal: 1299, gst: 234, total: 1533 } } },
                    { method: "DELETE", url: "/api/removeFromCart/:courseId", name: "Remove From Cart", description: "Remove course from cart", response: { success: true, message: "Course removed from cart", data: { remainingItems: 0, total: 0 } } }
                ]
            },
            {
                category: "Order & Payment",
                description: "Billing and course purchase",
                endpoints: [
                    { method: "POST", url: "/api/createbilling", name: "Create Billing Address", description: "Add billing details", response: { success: true, message: "Billing address saved", data: { _id: "bill_sk01", name: "Dhruv Patel", address: "101, Tech Park, Ahmedabad", gstNumber: "24AABCP1234F1Z5" } } },
                    { method: "POST", url: "/api/createCoursePayment", name: "Buy Course", description: "Purchase course subscription", response: { success: true, message: "Course purchased via Stripe", data: { paymentId: "pi_3Nk...", course: "Node.js Mastery", amount: 1533, stripeSessionId: "cs_live_xxx", accessGranted: true, validTill: "Lifetime" } } }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Socius - Social Media Backend",
        description: "Feature-rich social networking platform supporting multi-format uploads (Video, Post, Story), Follow/Unfollow systems, and Friend Requests. Integrated Live Chat and a real-time Notification Engine.",
        tags: ["Social Network", "Real-time Chat", "Notifications", "Media Uploads"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Auth",
                description: "Registration, login, OTP & password",
                endpoints: [
                    { method: "POST", url: "/api/register", name: "Register User", description: "Create user/admin account", response: { success: true, message: "User registered", data: { _id: "usr_sc001", name: "Darshan Dhameliya", email: "darshan@gmail.com", username: "darshan_dev", role: "user", createdAt: "2025-01-10T09:00:00Z" } } },
                    { method: "POST", url: "/api/userLogin", name: "Login", description: "Email & password login", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", user: { _id: "usr_sc001", name: "Darshan Dhameliya", username: "darshan_dev", followers: 1250, following: 340 } } } },
                    { method: "POST", url: "/api/VerifyPhone", name: "Verify Phone OTP", description: "OTP-based phone login", response: { success: true, message: "Phone verified", data: { verified: true, phone: "9876543210", token: "eyJhbGciOiJIUzI1NiIs..." } } },
                    { method: "POST", url: "/api/forgotPassword", name: "Forgot Password", description: "Email/phone reset", response: { success: true, message: "Reset OTP sent to darshan@gmail.com" } },
                    { method: "POST", url: "/api/VerifyEmail", name: "Verify Email OTP", description: "Email OTP verification", response: { success: true, message: "Email verified", data: { verified: true, email: "darshan@gmail.com" } } },
                    { method: "POST", url: "/api/resetPassword", name: "Reset Password", description: "Set new password", response: { success: true, message: "Password reset successfully" } },
                    { method: "POST", url: "/api/changePassword", name: "Change Password", description: "Update current password", response: { success: true, message: "Password changed successfully" } }
                ]
            },
            {
                category: "Users",
                description: "Profile & user management",
                endpoints: [
                    { method: "GET", url: "/api/getAllUsers", name: "Get All Users", description: "Admin user list", response: { success: true, data: [{ _id: "usr_sc001", name: "Darshan Dhameliya", username: "darshan_dev", followers: 1250, posts: 45, isVerified: true }, { _id: "usr_sc002", name: "Priya Shah", username: "priya_s", followers: 890, posts: 32, isVerified: false }], total: 2 } },
                    { method: "GET", url: "/api/getUserById/:id", name: "Get User By ID", description: "View user profile", response: { success: true, data: { _id: "usr_sc001", name: "Darshan Dhameliya", username: "darshan_dev", bio: "Backend Developer 🚀", profilePic: "https://...", followers: 1250, following: 340, posts: 45, isVerified: true, joinedAt: "2025-01-10" } } },
                    { method: "PUT", url: "/api/editProfile/:id", name: "Edit Profile", description: "Update own profile", response: { success: true, message: "Profile updated", data: { name: "Darshan Dhameliya", bio: "Backend Developer 🚀 | Node.js", profilePic: "updated_pic.jpg" } } },
                    { method: "PUT", url: "/api/editUser/:id", name: "Edit User (Admin)", description: "Admin edit user", response: { success: true, message: "User updated by admin", data: { _id: "usr_sc002", isVerified: true, role: "creator" } } },
                    { method: "DELETE", url: "/api/deleteUser/:id", name: "Delete User", description: "Remove account", response: { success: true, message: "User account deleted", data: { deletedUserId: "usr_sc002" } } },
                    { method: "GET", url: "/api/searchUsers", name: "Search Users", description: "Find users by query", response: { success: true, data: [{ _id: "usr_sc003", name: "Rahul Dev", username: "rahul_dev", profilePic: "https://...", isFollowing: false }], total: 1 } },
                    { method: "GET", url: "/api/suggestedUsers", name: "Suggested Users", description: "Discover people", response: { success: true, data: [{ _id: "usr_sc004", name: "Meera Joshi", username: "meera_j", mutualFriends: 5, profilePic: "https://..." }, { _id: "usr_sc005", name: "Arjun Kapoor", username: "arjun_k", mutualFriends: 3, profilePic: "https://..." }] } }
                ]
            },
            {
                category: "Social",
                description: "Follow, block & feed",
                endpoints: [
                    { method: "POST", url: "/api/followOrUnfollow/:id", name: "Follow/Unfollow", description: "Toggle follow status", response: { success: true, message: "Now following Priya Shah", data: { action: "followed", targetUser: "priya_s", yourFollowing: 341 } } },
                    { method: "POST", url: "/api/toggleBlockUser/:id", name: "Block/Unblock", description: "Toggle block status", response: { success: true, message: "User blocked", data: { action: "blocked", blockedUser: "spam_user01" } } },
                    { method: "GET", url: "/api/getFriendsProfile", name: "Friends Profile", description: "View friends list", response: { success: true, data: [{ _id: "usr_sc002", name: "Priya Shah", username: "priya_s", profilePic: "https://...", mutualFollowers: 12 }], total: 1 } },
                    { method: "GET", url: "/api/getFollowingUsersPosts", name: "Following Feed", description: "Posts from followed users", response: { success: true, data: [{ _id: "post_01", user: { name: "Priya Shah", username: "priya_s" }, content: "Beautiful sunset 🌅", image: "https://...", likes: 245, comments: 18, createdAt: "2025-01-20T18:00:00Z" }] } }
                ]
            },
            {
                category: "Posts",
                description: "Content creation & management",
                endpoints: [
                    { method: "POST", url: "/api/addNewPost", name: "Add Post", description: "Create image/video post", response: { success: true, message: "Post created", data: { _id: "post_new01", content: "New project launch! 🚀", mediaType: "image", mediaUrl: "https://...", likes: 0, comments: 0, createdAt: "2025-01-20T14:00:00Z" } } },
                    { method: "GET", url: "/api/getAllPost", name: "Get All Posts", description: "Browse all content", response: { success: true, data: [{ _id: "post_01", user: { name: "Darshan", username: "darshan_dev" }, content: "Coding day 💻", likes: 156, comments: 12 }, { _id: "post_02", user: { name: "Priya", username: "priya_s" }, content: "Travel vibes ✈️", likes: 289, comments: 34 }], total: 2 } },
                    { method: "GET", url: "/api/getUserPost", name: "My Posts", description: "View own posts", response: { success: true, data: [{ _id: "post_01", content: "Coding day 💻", likes: 156, comments: 12, createdAt: "2025-01-20" }], total: 1 } },
                    { method: "PUT", url: "/api/updatePost/:id", name: "Update Post", description: "Edit post content", response: { success: true, message: "Post updated", data: { _id: "post_01", content: "Coding day 💻 #developer", updatedAt: "2025-01-20T15:00:00Z" } } },
                    { method: "DELETE", url: "/api/deletePost/:id", name: "Delete Post", description: "Remove post", response: { success: true, message: "Post deleted", data: { deletedPostId: "post_01" } } },
                    { method: "POST", url: "/api/savePost/:id", name: "Save/Unsave Post", description: "Toggle bookmark", response: { success: true, message: "Post saved to bookmarks", data: { action: "saved", postId: "post_02" } } },
                    { method: "GET", url: "/api/getSavedPosts", name: "Saved Posts", description: "View bookmarks", response: { success: true, data: [{ _id: "post_02", content: "Travel vibes ✈️", user: { name: "Priya", username: "priya_s" }, savedAt: "2025-01-20" }], total: 1 } }
                ]
            },
            {
                category: "Drafts",
                description: "Draft post management",
                endpoints: [
                    { method: "GET", url: "/api/getDrafts", name: "Get Drafts", description: "View saved drafts", response: { success: true, data: [{ _id: "draft_01", content: "Working on something big...", mediaUrl: null, createdAt: "2025-01-19T10:00:00Z" }], total: 1 } },
                    { method: "POST", url: "/api/publishDraft/:id", name: "Publish Draft", description: "Make draft live", response: { success: true, message: "Draft published as post", data: { postId: "post_new02", content: "Working on something big...", status: "published" } } },
                    { method: "POST", url: "/api/removeDraft/:id", name: "Remove Draft", description: "Discard draft", response: { success: true, message: "Draft discarded", data: { deletedDraftId: "draft_01" } } }
                ]
            },
            {
                category: "Likes",
                description: "Post engagement",
                endpoints: [
                    { method: "POST", url: "/api/toggleLikePost/:id", name: "Like/Unlike Post", description: "Toggle like", response: { success: true, message: "Post liked", data: { action: "liked", postId: "post_02", totalLikes: 290 } } },
                    { method: "GET", url: "/api/getLikeOfPost/:id", name: "Post Likes", description: "View post likes", response: { success: true, data: { postId: "post_02", totalLikes: 290, likedBy: [{ _id: "usr_sc001", name: "Darshan", username: "darshan_dev" }] } } },
                    { method: "GET", url: "/api/getLikedPostsByUser", name: "Liked Posts", description: "User's liked posts", response: { success: true, data: [{ _id: "post_02", content: "Travel vibes ✈️", likes: 290, likedAt: "2025-01-20" }], total: 1 } }
                ]
            },
            {
                category: "Comments",
                description: "Threaded commenting system",
                endpoints: [
                    { method: "POST", url: "/api/commentPost/:id", name: "Comment", description: "Add comment", response: { success: true, message: "Comment added", data: { _id: "cmt_01", text: "Amazing work! 🔥", user: { name: "Darshan", username: "darshan_dev" }, createdAt: "2025-01-20T14:30:00Z" } } },
                    { method: "POST", url: "/api/replyComment/:id", name: "Reply", description: "Reply to comment", response: { success: true, message: "Reply added", data: { _id: "reply_01", text: "Thank you! 🙏", parentComment: "cmt_01", user: { name: "Priya" }, createdAt: "2025-01-20T14:35:00Z" } } },
                    { method: "GET", url: "/api/getCommentOfPost/:id", name: "Get Comments", description: "View post comments", response: { success: true, data: [{ _id: "cmt_01", text: "Amazing work! 🔥", user: { name: "Darshan" }, likes: 5, replies: [{ _id: "reply_01", text: "Thank you! 🙏", user: { name: "Priya" } }] }], total: 1 } },
                    { method: "POST", url: "/api/likeComment/:id", name: "Like Comment", description: "Like a comment", response: { success: true, message: "Comment liked", data: { commentId: "cmt_01", totalLikes: 6 } } },
                    { method: "PUT", url: "/api/updateComment/:id", name: "Update Comment", description: "Edit comment", response: { success: true, message: "Comment updated", data: { _id: "cmt_01", text: "Amazing work! Keep it up! 🔥", updatedAt: "2025-01-20T15:00:00Z" } } },
                    { method: "DELETE", url: "/api/deleteComment/:id", name: "Delete Comment", description: "Remove comment", response: { success: true, message: "Comment deleted", data: { deletedCommentId: "cmt_01" } } }
                ]
            },
            {
                category: "Audio",
                description: "Audio management (Admin)",
                endpoints: [
                    { method: "POST", url: "/api/addAudio", name: "Add Audio", description: "Upload audio track", response: { success: true, message: "Audio uploaded", data: { _id: "aud_01", title: "Summer Vibes", artist: "DJ Mix", duration: "3:24", fileUrl: "https://s3.../summer_vibes.mp3", createdAt: "2025-01-15" } } },
                    { method: "GET", url: "/api/getAllAudio", name: "Get All Audio", description: "Browse audio library", response: { success: true, data: [{ _id: "aud_01", title: "Summer Vibes", artist: "DJ Mix", duration: "3:24", usedInPosts: 145 }, { _id: "aud_02", title: "Chill Beats", artist: "Lo-Fi Studio", duration: "2:48", usedInPosts: 89 }], total: 2 } },
                    { method: "PUT", url: "/api/updateAudio/:id", name: "Update Audio", description: "Edit audio details", response: { success: true, message: "Audio updated", data: { _id: "aud_01", title: "Summer Vibes 2.0", updatedAt: "2025-01-20" } } },
                    { method: "DELETE", url: "/api/deleteAudio/:id", name: "Delete Audio", description: "Remove audio", response: { success: true, message: "Audio deleted", data: { deletedAudioId: "aud_01" } } }
                ]
            },
            {
                category: "Reports",
                description: "Content reporting system",
                endpoints: [
                    { method: "POST", url: "/api/addReportCategory", name: "Add Report Category", description: "Define report type", response: { success: true, message: "Category created", data: { _id: "rcat_01", name: "Spam", description: "Unwanted promotional content" } } },
                    { method: "GET", url: "/api/getAllReportCategory", name: "Report Categories", description: "List report types", response: { success: true, data: [{ _id: "rcat_01", name: "Spam" }, { _id: "rcat_02", name: "Harassment" }, { _id: "rcat_03", name: "Inappropriate Content" }] } },
                    { method: "POST", url: "/api/addReport", name: "Submit Report", description: "Report content", response: { success: true, message: "Report submitted", data: { _id: "rpt_01", category: "Spam", reportedPost: "post_99", status: "pending", createdAt: "2025-01-20" } } },
                    { method: "GET", url: "/api/getAllReports", name: "All Reports", description: "Admin report list", response: { success: true, data: [{ _id: "rpt_01", category: "Spam", reportedBy: "darshan_dev", reportedPost: "post_99", status: "pending" }], total: 1 } },
                    { method: "DELETE", url: "/api/deleteReport/:id", name: "Delete Report", description: "Dismiss report", response: { success: true, message: "Report dismissed", data: { deletedReportId: "rpt_01" } } }
                ]
            },
            {
                category: "Legal & Support",
                description: "Terms, privacy & help",
                endpoints: [
                    { method: "POST", url: "/api/addTermsOfServices", name: "Add Terms", description: "Create terms of service", response: { success: true, message: "Terms added", data: { _id: "tos_01", title: "Terms of Service", version: "1.0", effectiveDate: "2025-01-01" } } },
                    { method: "GET", url: "/api/getAllTermsOfServices", name: "Get Terms", description: "View terms", response: { success: true, data: [{ _id: "tos_01", title: "Terms of Service", version: "1.0", lastUpdated: "2025-01-01" }] } },
                    { method: "POST", url: "/api/addPrivacyPolicy", name: "Add Privacy Policy", description: "Create privacy policy", response: { success: true, message: "Privacy policy added", data: { _id: "pp_01", title: "Privacy Policy", version: "1.0" } } },
                    { method: "GET", url: "/api/getAllPrivacyPolicy", name: "Get Privacy Policy", description: "View policy", response: { success: true, data: [{ _id: "pp_01", title: "Privacy Policy", version: "1.0", sections: ["Data Collection", "Data Usage", "User Rights"] }] } },
                    { method: "POST", url: "/api/addHelpSupport", name: "Add Help", description: "Create help content", response: { success: true, message: "Help article added", data: { _id: "help_01", title: "How to create a post?", category: "Getting Started" } } },
                    { method: "GET", url: "/api/getAllHelpSupport", name: "Get Help", description: "View help articles", response: { success: true, data: [{ _id: "help_01", title: "How to create a post?", category: "Getting Started" }, { _id: "help_02", title: "Privacy settings", category: "Account" }] } }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "YoyoWeb - Cross-Platform Game Store",
        description: "Marketplace for digital games across Android, iOS, and Web. Managed digital assets including trailers and screenshots, device-specific pricing, wishlist, and purchase history functionality.",
        tags: ["Marketplace", "Digital Assets", "Cross-Platform", "E-commerce"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Auth",
                description: "Registration, login & security",
                endpoints: [
                    { method: "POST", url: "/api/createUser", name: "Register", description: "Create user account", response: { success: true, message: "Account created", data: { _id: "usr_yy001", name: "Arjun Verma", email: "arjun@gmail.com", username: "arjun_gamer", createdAt: "2025-01-05T09:00:00Z" } } },
                    { method: "POST", url: "/api/userLogin", name: "Login", description: "Email/password login", response: { success: true, message: "Login successful", data: { accessToken: "eyJhbGciOiJIUzI1NiIs...", refreshToken: "eyJhbGciOiJIUzI1NiIs...", user: { _id: "usr_yy001", name: "Arjun Verma", username: "arjun_gamer" } } } },
                    { method: "POST", url: "/api/google-login", name: "Google Login", description: "OAuth login", response: { success: true, message: "Google auth successful", data: { token: "eyJhbGciOiJIUzI1NiIs...", user: { name: "Arjun Verma", email: "arjun@gmail.com", googleId: "1234567890" } } } },
                    { method: "POST", url: "/api/forgotPassword", name: "Forgot Password", description: "Request reset OTP", response: { success: true, message: "OTP sent to arjun@gmail.com" } },
                    { method: "POST", url: "/api/verifyOtp", name: "Verify OTP", description: "Confirm OTP code", response: { success: true, message: "OTP verified", data: { resetToken: "rst_xxx" } } },
                    { method: "POST", url: "/api/resetPassword", name: "Reset Password", description: "Set new password", response: { success: true, message: "Password reset successfully" } },
                    { method: "POST", url: "/api/changePassword", name: "Change Password", description: "Update password", response: { success: true, message: "Password changed" } },
                    { method: "POST", url: "/api/generateNewTokens", name: "Refresh Tokens", description: "JWT token refresh", response: { success: true, data: { accessToken: "new_access_token...", refreshToken: "new_refresh_token..." } } },
                    { method: "POST", url: "/api/logout/:id", name: "Logout", description: "End session", response: { success: true, message: "Logged out successfully" } }
                ]
            },
            {
                category: "Users",
                description: "User management",
                endpoints: [
                    { method: "GET", url: "/api/allUsers", name: "Get All Users", description: "List users (paginated)", response: { success: true, data: [{ _id: "usr_yy001", name: "Arjun Verma", username: "arjun_gamer", gamesOwned: 12, totalSpent: 4500 }], total: 1, page: 1, limit: 10 } },
                    { method: "GET", url: "/api/getUserById/:id", name: "Get User", description: "View user details", response: { success: true, data: { _id: "usr_yy001", name: "Arjun Verma", username: "arjun_gamer", email: "arjun@gmail.com", gamesOwned: 12, wishlistCount: 5, joinedAt: "2025-01-05" } } },
                    { method: "PUT", url: "/api/userUpdate/:id", name: "Update User", description: "Edit profile", response: { success: true, message: "Profile updated", data: { name: "Arjun Verma", username: "arjun_pro_gamer" } } },
                    { method: "DELETE", url: "/api/deleteUser/:id", name: "Delete User", description: "Remove account", response: { success: true, message: "Account deleted" } },
                    { method: "GET", url: "/api/getAllUserNames", name: "All Usernames", description: "List usernames", response: { success: true, data: ["arjun_gamer", "priya_plays", "dev_ninja"] } }
                ]
            },
            {
                category: "Category",
                description: "Game categories",
                endpoints: [
                    { method: "POST", url: "/api/createCategory", name: "Create Category", description: "Add game genre", response: { success: true, message: "Category created", data: { _id: "cat_01", name: "Action", slug: "action", icon: "⚔️" } } },
                    { method: "GET", url: "/api/getAllCategories", name: "All Categories", description: "List categories", response: { success: true, data: [{ _id: "cat_01", name: "Action", slug: "action" }, { _id: "cat_02", name: "RPG", slug: "rpg" }, { _id: "cat_03", name: "Strategy", slug: "strategy" }] } },
                    { method: "GET", url: "/api/getAllCategoriesWithGameCount", name: "Categories + Count", description: "With game count", response: { success: true, data: [{ _id: "cat_01", name: "Action", gameCount: 45 }, { _id: "cat_02", name: "RPG", gameCount: 32 }, { _id: "cat_03", name: "Strategy", gameCount: 28 }] } },
                    { method: "PUT", url: "/api/updateCategory/:id", name: "Update Category", description: "Edit category", response: { success: true, message: "Category updated", data: { _id: "cat_01", name: "Action & Adventure" } } },
                    { method: "DELETE", url: "/api/deleteCategory/:id", name: "Delete Category", description: "Remove category", response: { success: true, message: "Category deleted" } }
                ]
            },
            {
                category: "Games",
                description: "Game marketplace",
                endpoints: [
                    { method: "GET", url: "/api/getAllGames", name: "All Games", description: "Browse full catalog", response: { success: true, data: [{ _id: "game_01", title: "Cyber Warriors", category: "Action", price: { web: 599, android: 399, ios: 499 }, rating: 4.7, platforms: ["Web", "Android", "iOS"] }], total: 1 } },
                    { method: "GET", url: "/api/getNew10Games", name: "New Games", description: "Latest 10 releases", response: { success: true, data: [{ _id: "game_01", title: "Cyber Warriors", releaseDate: "2025-01-15", price: { web: 599 }, rating: 4.7 }] } },
                    { method: "GET", url: "/api/getAllActiveGames", name: "Active Games", description: "Published games", response: { success: true, data: [{ _id: "game_01", title: "Cyber Warriors", status: "active", downloads: 15000 }], total: 1 } },
                    { method: "GET", url: "/api/getGameById/:id", name: "Game Details", description: "View game info", response: { success: true, data: { _id: "game_01", title: "Cyber Warriors", description: "Futuristic action RPG", category: "Action", price: { web: 599, android: 399, ios: 499 }, screenshots: ["https://..."], trailer: "https://...", systemReqs: { min: "4GB RAM, Intel i3", recommended: "8GB RAM, Intel i5" }, rating: 4.7, reviews: 245 } } },
                    { method: "GET", url: "/api/getGamesByCategory/:id", name: "By Category", description: "Filter by genre", response: { success: true, data: [{ _id: "game_01", title: "Cyber Warriors", price: { web: 599 }, rating: 4.7 }], category: "Action", total: 1 } },
                    { method: "POST", url: "/api/createGame", name: "Create Game", description: "Upload new game", response: { success: true, message: "Game published", data: { _id: "game_new01", title: "New Game", status: "active" } } },
                    { method: "PUT", url: "/api/updateGame/:id", name: "Update Game", description: "Edit game", response: { success: true, message: "Game updated" } },
                    { method: "DELETE", url: "/api/deleteGame/:id", name: "Delete Game", description: "Remove game", response: { success: true, message: "Game removed" } }
                ]
            },
            {
                category: "Cart",
                description: "Shopping cart",
                endpoints: [
                    { method: "GET", url: "/api/cart", name: "Get Cart", description: "View cart", response: { success: true, data: { items: [{ game: { title: "Cyber Warriors", platform: "Web" }, price: 599, quantity: 1 }], subtotal: 599, gst: 108, total: 707 } } },
                    { method: "POST", url: "/api/cart/add", name: "Add to Cart", description: "Add game to cart", response: { success: true, message: "Game added to cart", data: { game: "Cyber Warriors", platform: "Web", price: 599 } } },
                    { method: "PUT", url: "/api/cart/update", name: "Update Cart", description: "Change quantity", response: { success: true, message: "Cart updated" } },
                    { method: "POST", url: "/api/cart/remove", name: "Remove Item", description: "Remove from cart", response: { success: true, message: "Item removed from cart" } },
                    { method: "POST", url: "/api/cart/clear", name: "Clear Cart", description: "Empty cart", response: { success: true, message: "Cart cleared" } }
                ]
            },
            {
                category: "Wishlist",
                description: "Saved games",
                endpoints: [
                    { method: "GET", url: "/api/wishlist", name: "Get Wishlist", description: "View saved games", response: { success: true, data: [{ game: { _id: "game_02", title: "Space Odyssey", price: { web: 799 }, rating: 4.5 }, addedAt: "2025-01-18" }], total: 1 } },
                    { method: "POST", url: "/api/wishlist/add", name: "Add to Wishlist", description: "Save game", response: { success: true, message: "Added to wishlist" } },
                    { method: "POST", url: "/api/wishlist/remove", name: "Remove", description: "Unsave game", response: { success: true, message: "Removed from wishlist" } },
                    { method: "GET", url: "/api/wishlist/check/:id", name: "Check Status", description: "Is game wishlisted", response: { success: true, data: { isWishlisted: true, gameId: "game_02" } } }
                ]
            },
            {
                category: "Order & Payment",
                description: "Razorpay purchase flow",
                endpoints: [
                    { method: "POST", url: "/api/order/create", name: "Create Order", description: "Razorpay order", response: { success: true, data: { orderId: "ORD_YY_2025001", razorpayOrderId: "order_N5s8Vz...", amount: 707, currency: "INR", games: ["Cyber Warriors"] } } },
                    { method: "POST", url: "/api/order/verify", name: "Verify Payment", description: "Confirm payment", response: { success: true, message: "Payment verified", data: { paymentId: "pay_N5s9Ab...", orderId: "ORD_YY_2025001", amount: 707, status: "captured", downloadTokens: ["dl_tok_xxx"] } } },
                    { method: "POST", url: "/api/order/retry", name: "Retry Payment", description: "Retry failed order", response: { success: true, data: { newRazorpayOrderId: "order_N5t1Bc...", amount: 707, previousAttempt: "failed" } } },
                    { method: "GET", url: "/api/allorders", name: "My Orders", description: "User order history", response: { success: true, data: [{ _id: "ORD_YY_2025001", games: ["Cyber Warriors"], total: 707, status: "completed", purchasedAt: "2025-01-18" }] } },
                    { method: "GET", url: "/api/getorders", name: "All Orders (Admin)", description: "Admin order list", response: { success: true, data: [{ _id: "ORD_YY_2025001", user: "arjun_gamer", total: 707, status: "completed" }], totalRevenue: 707, totalOrders: 1 } },
                    { method: "GET", url: "/api/download/:token", name: "Download Game", description: "Get game files", response: { success: true, data: { downloadUrl: "https://cdn.yoyoweb.com/games/cyber_warriors.zip", expiresIn: 3600, fileSize: "2.4 GB" } } }
                ]
            },
            {
                category: "Blog & FAQ",
                description: "Content management",
                endpoints: [
                    { method: "POST", url: "/api/createBlog", name: "Create Blog", description: "Publish article", response: { success: true, message: "Blog published", data: { _id: "blog_01", title: "Top 10 Games of 2025", author: "Admin", createdAt: "2025-01-20" } } },
                    { method: "GET", url: "/api/getAllBlogs", name: "All Blogs", description: "Browse articles", response: { success: true, data: [{ _id: "blog_01", title: "Top 10 Games of 2025", author: "Admin", views: 1250 }] } },
                    { method: "POST", url: "/api/createFaq", name: "Create FAQ", description: "Add FAQ entry", response: { success: true, message: "FAQ added", data: { _id: "faq_01", question: "How to download purchased games?", answer: "Go to My Orders and click Download." } } },
                    { method: "GET", url: "/api/getAllFaqs", name: "All FAQs", description: "Browse FAQs", response: { success: true, data: [{ _id: "faq_01", question: "How to download purchased games?", answer: "Go to My Orders and click Download." }] } }
                ]
            },
            {
                category: "Rating",
                description: "Game reviews & ratings",
                endpoints: [
                    { method: "POST", url: "/api/addRating", name: "Add Rating", description: "Rate a game", response: { success: true, message: "Review submitted", data: { _id: "rev_01", gameId: "game_01", rating: 5, review: "Amazing gameplay!", user: "arjun_gamer" } } },
                    { method: "GET", url: "/api/getGameRatings/:id", name: "Game Ratings", description: "View game reviews", response: { success: true, data: { gameId: "game_01", averageRating: 4.7, totalReviews: 245, reviews: [{ user: "arjun_gamer", rating: 5, review: "Amazing gameplay!", date: "2025-01-18" }] } } },
                    { method: "PUT", url: "/api/updateRating/:id", name: "Update Rating", description: "Edit review", response: { success: true, message: "Review updated" } },
                    { method: "DELETE", url: "/api/deleteRating/:id", name: "Delete Rating", description: "Remove review", response: { success: true, message: "Review deleted" } }
                ]
            },
            {
                category: "Dashboard & Analytics",
                description: "Admin insights",
                endpoints: [
                    { method: "GET", url: "/api/getDashboardStats", name: "Dashboard Stats", description: "Key metrics", response: { success: true, data: { totalUsers: 15420, totalGames: 342, totalOrders: 8750, totalRevenue: 4250000, activeUsers: 3200, newUsersToday: 45 } } },
                    { method: "GET", url: "/api/getRecentTransactions", name: "Recent Transactions", description: "Latest payments", response: { success: true, data: [{ _id: "txn_01", user: "arjun_gamer", game: "Cyber Warriors", amount: 707, date: "2025-01-18", status: "completed" }] } },
                    { method: "GET", url: "/api/getTopGames", name: "Top Games", description: "Best sellers", response: { success: true, data: [{ _id: "game_01", title: "Cyber Warriors", sales: 15000, revenue: 8985000 }, { _id: "game_02", title: "Space Odyssey", sales: 12000, revenue: 9588000 }] } },
                    { method: "GET", url: "/api/getTopCategories", name: "Top Categories", description: "Popular genres", response: { success: true, data: [{ name: "Action", games: 45, totalSales: 45000 }, { name: "RPG", games: 32, totalSales: 38000 }] } },
                    { method: "GET", url: "/api/getPlatformWiseOrders", name: "Platform Orders", description: "Sales by platform", response: { success: true, data: { web: { orders: 4500, revenue: 2700000 }, android: { orders: 2800, revenue: 1120000 }, ios: { orders: 1450, revenue: 870000 } } } }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "GroceryStore - Inventory Operations",
        description: "Specialized Admin-only backend for high-level inventory control. Features deep tracking of stock levels, order volume monitoring, user-specific payment history, and detailed revenue reporting.",
        tags: ["Admin Panel", "Inventory", "Analytics", "Reporting"],
        link: "#",
        github: "#",
        image: "https://loremflickr.com/800/600/grocery,store",
        apiFlow: [
            {
                category: "Auth",
                description: "Admin & User Authentication",
                endpoints: [
                    { method: "POST", url: "/api/registerAdmin", name: "Register Admin", description: "Register new admin", response: { success: true, message: "Admin registered", data: { _id: "adm_gr001", name: "Store Manager", email: "admin@grocerystore.com", role: "admin", createdAt: "2025-01-01T09:00:00Z" } } },
                    { method: "POST", url: "/api/registerUser", name: "Register User", description: "Register new user", response: { success: true, message: "User registered", data: { _id: "usr_gr001", name: "Meera Joshi", phone: "9876543210", createdAt: "2025-01-10T09:00:00Z" } } },
                    { method: "POST", url: "/api/verifyPhone", name: "Verify Phone", description: "Verify user OTP", response: { success: true, message: "Phone verified", data: { verified: true, token: "eyJhbGciOiJIUzI1NiIs..." } } },
                    { method: "POST", url: "/api/adminLogin", name: "Admin Login", description: "Admin authentication", response: { success: true, message: "Admin login successful", data: { token: "eyJhbGciOiJIUzI1NiIs...", admin: { _id: "adm_gr001", name: "Store Manager", role: "admin" } } } }
                ]
            },
            {
                category: "Inventory",
                description: "Product management",
                endpoints: [
                    { method: "POST", url: "/api/createCategory", name: "Create Category", description: "Add new product category", response: { success: true, message: "Category created", data: { _id: "cat_gr01", name: "Fruits & Vegetables", icon: "🥬", status: "active" } } },
                    { method: "GET", url: "/api/getAllCategories", name: "Get All Categories", description: "List active categories", response: { success: true, data: [{ _id: "cat_gr01", name: "Fruits & Vegetables", productCount: 45 }, { _id: "cat_gr02", name: "Dairy & Bakery", productCount: 32 }] } },
                    { method: "POST", url: "/api/createSubCategory", name: "Create SubCategory", description: "Add sub-category", response: { success: true, message: "Sub-category created", data: { _id: "sub_gr01", name: "Fresh Fruits", parentCategory: "Fruits & Vegetables" } } },
                    { method: "POST", url: "/api/createUnit", name: "Create Unit", description: "Define measurement units", response: { success: true, message: "Unit created", data: { _id: "unit_01", name: "Kilogram", shortName: "kg", type: "weight" } } }
                ]
            },
            {
                category: "Billing & Address",
                description: "Location and billing info",
                endpoints: [
                    { method: "POST", url: "/api/createbilling", name: "Create Billing Addr", description: "Add billing details", response: { success: true, message: "Billing address saved", data: { _id: "bill_gr01", name: "Meera Joshi", address: "45, MG Road", city: "Mumbai", pincode: "400001", phone: "9876543210" } } },
                    { method: "GET", url: "/api/getAllBillingAddress", name: "Get Addresses", description: "List billing addresses", response: { success: true, data: [{ _id: "bill_gr01", name: "Meera Joshi", address: "45, MG Road, Mumbail", isDefault: true }] } }
                ]
            },
            {
                category: "Marketing",
                description: "Coupons and Offers",
                endpoints: [
                    { method: "POST", url: "/api/addCoupon", name: "Add Coupon", description: "Create discount coupon", response: { success: true, message: "Coupon created", data: { _id: "cpn_gr01", code: "FRESH20", discount: 20, type: "percentage", validTill: "2025-03-31", minOrder: 500 } } },
                    { method: "GET", url: "/api/getAllCoupon", name: "Get Coupons", description: "List all coupons", response: { success: true, data: [{ _id: "cpn_gr01", code: "FRESH20", discount: 20, usageCount: 145, status: "active" }] } },
                    { method: "POST", url: "/api/addOffer", name: "Add Offer", description: "Create promotional offer", response: { success: true, message: "Offer created", data: { _id: "ofr_01", title: "Weekend Sale", discount: 30, category: "Fruits & Vegetables", validTill: "2025-01-26" } } },
                    { method: "GET", url: "/api/getAllOffer", name: "Get Offers", description: "List active offers", response: { success: true, data: [{ _id: "ofr_01", title: "Weekend Sale", discount: 30, category: "Fruits & Vegetables", status: "active" }] } }
                ]
            }
        ]
    },
    {
        id: 14,
        title: "Fitness - Personal Trainer & Diet",
        description: "Structured health management system managing complex data sets for Diet Plans, Body Measurements, and physical endurance tests. Follows a clean Controller-Model-Route architecture.",
        tags: ["Health Tech", "Data Management", "MVC Architecture"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000",
        apiFlow: [
            {
                category: "Auth",
                description: "User authentication and management",
                endpoints: [
                    { method: "POST", url: "/register/createRegister", name: "Register User", description: "Register new user", response: { success: true, message: "Registered", data: { _id: "usr_ft001", name: "Rohit Sharma", email: "rohit@gmail.com", role: "member", createdAt: "2025-01-02T09:00:00Z" } } },
                    { method: "POST", url: "/login/loginUser", name: "Login User", description: "Authenticate and get token", response: { success: true, message: "Login successful", data: { token: "eyJhbGciOiJIUzI1NiIs...", user: { _id: "usr_ft001", name: "Rohit Sharma", role: "member", trainer: "Coach Anil" } } } },
                    { method: "POST", url: "/login/forgotPassword", name: "Forgot Password", description: "Initiate password recovery", response: { success: true, message: "Reset link sent to rohit@gmail.com" } },
                    { method: "POST", url: "/login/changePassword/:userId", name: "Change Password", description: "Update user password", response: { success: true, message: "Password changed successfully" } }
                ]
            },
            {
                category: "Member Management",
                description: "Member details and status",
                endpoints: [
                    { method: "POST", url: "/memberDetails/createMemberDetails", name: "Create Member", description: "Add member profile", response: { success: true, message: "Member profile created", data: { _id: "mem_01", userId: "usr_ft001", age: 28, gender: "Male", height: 175, weight: 78, goal: "Weight Loss", trainer: "Coach Anil", membershipExpiry: "2025-07-02" } } },
                    { method: "GET", url: "/memberDetails/getMemberDetailsById/:userId", name: "Get Member Details", description: "Fetch member info", response: { success: true, data: { _id: "mem_01", name: "Rohit Sharma", age: 28, height: 175, weight: 78, bmi: 25.5, goal: "Weight Loss", fitnessLevel: "Intermediate", trainer: "Coach Anil", joinedAt: "2025-01-02" } } },
                    { method: "PUT", url: "/memberDetails/updateMemberDetails/:userId", name: "Update Member", description: "Update member status", response: { success: true, message: "Member details updated", data: { weight: 76, bmi: 24.8, updatedAt: "2025-01-20" } } }
                ]
            },
            {
                category: "Health & Measurements",
                description: "Physical stats tracking",
                endpoints: [
                    { method: "POST", url: "/measurementinfo/addMeasurementInfo", name: "Add Measurements", description: "Log body measurements", response: { success: true, message: "Measurements recorded", data: { _id: "msr_01", userId: "usr_ft001", chest: 40, waist: 34, hips: 38, biceps: 14, thighs: 22, date: "2025-01-20" } } },
                    { method: "POST", url: "/waisttoHipRatio/addWaisttoHipRatio", name: "Add WHR", description: "Log waist-to-hip ratio", response: { success: true, message: "WHR recorded", data: { _id: "whr_01", waist: 34, hip: 38, ratio: 0.89, category: "Moderate Risk", date: "2025-01-20" } } },
                    { method: "POST", url: "/cardiovascular/addCardiovascular", name: "Add Cardio Stats", description: "Log cardio test results", response: { success: true, message: "Cardio stats logged", data: { _id: "cvs_01", restingHR: 72, maxHR: 188, vo2Max: 42.5, bloodPressure: "120/80", recoveryTime: "2 mins", fitnessLevel: "Good", date: "2025-01-20" } } }
                ]
            },
            {
                category: "Diet & Workout",
                description: "Daily routine management",
                endpoints: [
                    { method: "POST", url: "/diet/adddiet", name: "Add Diet Plan", description: "Create diet schedule", response: { success: true, message: "Diet plan created", data: { _id: "diet_01", day: "Monday", meals: [{ type: "Breakfast", items: ["Oats", "Banana", "Protein Shake"], calories: 450 }, { type: "Lunch", items: ["Grilled Chicken", "Brown Rice", "Salad"], calories: 650 }], totalCalories: 2200 } } },
                    { method: "GET", url: "/diet/getDietByDay/:day", name: "Get Diet By Day", description: "View daily meal plan", response: { success: true, data: { day: "Monday", meals: [{ type: "Breakfast", items: ["Oats", "Banana"], calories: 450 }, { type: "Lunch", items: ["Chicken", "Rice"], calories: 650 }, { type: "Dinner", items: ["Fish", "Quinoa"], calories: 550 }], totalCalories: 2200, waterIntake: "3L" } } },
                    { method: "POST", url: "/workout/addWorkout", name: "Add Workout", description: "Log exercise session", response: { success: true, message: "Workout logged", data: { _id: "wrk_01", day: "Monday", exercises: [{ name: "Bench Press", sets: 4, reps: 12, weight: "60kg" }, { name: "Squats", sets: 4, reps: 10, weight: "80kg" }], duration: "60 mins", caloriesBurned: 450 } } },
                    { method: "GET", url: "/workout/getWorkoutsByDay/:day", name: "Get Workout By Day", description: "View daily exercises", response: { success: true, data: { day: "Monday", focus: "Chest & Legs", exercises: [{ name: "Bench Press", sets: 4, reps: 12 }, { name: "Squats", sets: 4, reps: 10 }], totalDuration: "60 mins", estimatedCalories: 450 } } }
                ]
            },
            {
                category: "Leave Management",
                description: "Member leave requests",
                endpoints: [
                    { method: "POST", url: "/leave/addLeave", name: "Request Leave", description: "Submit leave request", response: { success: true, message: "Leave request submitted", data: { _id: "lv_01", userId: "usr_ft001", startDate: "2025-01-25", endDate: "2025-01-27", reason: "Personal", status: "pending", daysRequested: 3 } } },
                    { method: "PUT", url: "/leave/updateLeaveStatus/:userId", name: "Update Leave Status", description: "Approve/Reject leave", response: { success: true, message: "Leave approved", data: { _id: "lv_01", status: "approved", approvedBy: "Coach Anil", membershipExtended: true, newExpiry: "2025-07-05" } } }
                ]
            }
        ]
    }
];

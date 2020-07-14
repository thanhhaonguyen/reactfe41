const initialState = {
    productItem: [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ],
    cartArray: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART": {
            const index = state.cartArray.findIndex(
                product => product.maSP === action.product.maSP
            );
            if (index === -1) {
                const cartArray = { ...action.product, quantity: 1 };
                const cartArrayNew = [...state.cartArray, cartArray];
                return { ...state, cartArray: cartArrayNew };
            }
            const cartArrayNew = [...state.cartArray];
            cartArrayNew[index].quantity += 1;
            return { ...state, cartArray: cartArrayNew };
        }
        case "INSCREASE_QUANTITY": {
            // first way
            const cartArrayNew = [...state.cartArray];
            const index = cartArrayNew.findIndex(product => product.maSP === action.productId);
            if (index !== -1) {
                cartArrayNew[index].quantity += 1;
            }
            // second way
            // const cartArrayNew = state.cartArray.map(product => {
            //     if (product.maSP === action.productId) {
            //         return { ...product, quantity: product.quantity + 1 }
            //     }
            //     return product;
            // });
            return { ...state, cartArray: cartArrayNew };
        }
        case "DESCREASE_QUANTITY": {
            const cartArrayNew = state.cartArray.map(product => {
                if (product.maSP === action.productId && product.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
               
                
            });
            return { ...state, cartArray: cartArrayNew };
        }
        default:
            return state;
    }
};

export default cartReducer;


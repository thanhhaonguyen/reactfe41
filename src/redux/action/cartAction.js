export const addProductToCart = (product) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        product,
    };
};

export const inscreaseQuantity = (productId) => {
    return {
        type: "INSCREASE_QUANTITY",
        productId,
    };
};

export const descreaseQuantity = (productId) => {
    return {
        type: "DESCREASE_QUANTITY",
        productId,
    };
};
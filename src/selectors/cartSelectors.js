export const addUpTotalPrice = state => {
    return state.cartReducer.cartArray.reduce((total, product) => (
        total += product.giaBan * product.quantity
    ), 0);
}
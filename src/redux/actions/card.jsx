

export const productsCard = (id, quantity) => async (dispatch, getState) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json());
    dispatch({
        type: 'ADD_CARD', payload: {
            id: data.id,
            image: data.image,
            title: data.title,
            price: data.price,
            description: data.description,
            qty: quantity
        }
    });

    const { card: { cardItems } } = getState();
    localStorage.setItem('cardItems', JSON.stringify(cardItems));
}


export const removeCart = (productId) => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_CARD', payload: productId });
    const { card: { cardItems } } = getState();
    localStorage.setItem('cardItems', JSON.stringify(cardItems));
}
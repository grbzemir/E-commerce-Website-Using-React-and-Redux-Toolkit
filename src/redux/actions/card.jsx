

export const productsActionDetail = (id, quantity) => async (dispatch) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
    dispatch({
        type: 'ADD_CARD', payload: {

            id: data.id,
            image: data.image,
            title: data.title,
            price: data.price,
            description: data.description,
            qty: quantity

        }
    })
}
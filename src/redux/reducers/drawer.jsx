//reducerslar genel sayfamda kullanmak istediğim stateleri tutan yapılardır
//actions dan type ve payload alır 


export const drawerReducer = (state = { drawer: false }, action) => {
    switch (action.type) {
        case 'DRAWER':
            return {
                drawer: action.payload
            }
        default:
            return state
    }
}
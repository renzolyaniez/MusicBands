export const initialState = {//para que se pueda consumir en index.js
    usuario: null, //creamos un usuario que empieza siendo null, este lo podemos usar en todo el codigo
} 

//basicamente, cuando en el catalogo de productos se aprieta el boton de agregar al carrito un producto, llamamos al checkoutpage mandandole un objeto agregado al array BASKET
//para que se mustre en el carrito

//aca se escucha esta accion ADDTOBASKET que sucede en PRODUCT cuando se aprieta el boton de añadir al carrito, modifica el estado añadiendo el item recibido al array. cualquier componente con USESTATEVALUE pueden consumir ese cambio de estado

export const actionTypes = {
    SET_USUARIO: "SET_USUARIO"
}


//esta funcion reductora, admite un acumulator y currenvalue y lo sumas. acumulator va acumulando, current value primero es 1, despues 2, y asi.
//usando una funcion REDUCE() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce  de javascript. la exportamos para poder consumirla en el componente total o en cualquiera 
// export const getBasketTotal = (basket) =>{// esta funcion recibe el array basket como parametro y suma esto:  basket[item1.price, item2.price, item2.price] eso hay q sumarlo1
//     //basket?.reduce((amount, item) => item.price + amount, 0) //0 porqe empieza desde 0
//     // const reducer = (acumulador, item) => item.price + acumulador;
//     // basket.reduce(reducer, 0)
//     const acumulador = 0;
//     basket.map(item =>{
//         acumulador = acumulador + item.price
//     })

// }


const reducer = (state, action) =>{
    //console.log(action)
    switch(action.type){
        case "SET_USUARIO"://desde login llenamos este con el dispatch
            return{
                ...state,
                usuario: action.usuario
            } 

        default: return state; //en caso de default solo retornamos el state
    }

}

export default reducer;

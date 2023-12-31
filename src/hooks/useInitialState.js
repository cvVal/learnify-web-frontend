import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeItemFromCart = (payload, indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((item, index) => index !== indexValue)
        })
    }

    return {
        state,
        addToCart,
        removeItemFromCart
    }
}

export default useInitialState
export const INCREMENT = 'INCREMENT'
export const ADD = 'ADD'

export const incrementAction = () => ({type: INCREMENT})

export const addAction = (num) => ({type: ADD, value: num})
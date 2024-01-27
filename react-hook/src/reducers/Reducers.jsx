import { DECREMENT, INCREMENT } from "./Action"

//1: tao ra initState
export const initState = 0

//3: tao reducer
const reducer = (state, action) => { //reducer day vo action
    console.log(action)
    switch(action.type){
      case INCREMENT:{
        return state + Number(action.payload)
      }
      case DECREMENT:{
        return state - Number(action.payload)
      }
      default:{
        return state
      }
        
    }
  }
export default reducer
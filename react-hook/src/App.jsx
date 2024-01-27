import { useReducer } from 'react'
import './App.css'
//1: taoj ra initState
const initState = 0
//2: tao ra cac action(gia tri) => action creator(ham tao ra action)
//dinh nghia action
const  INCREMENT = 'count/increment'
const  DECREMENT = 'count/decrement'
const increment = (data) =>{ //ham tao ra action creator
  return{
    type: INCREMENT,
    payload: data
  }
}
const decrement = (data) =>{ //ham tao ra action creator
  return{
    type: DECREMENT,
    payload: data
  }
}
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
//4: su dung
function App() {
  const [number, dispatch] = useReducer(reducer, initState) // dispatch day vo reducer
  return (
    <div className='container w-50'>
      <h1>{number}</h1>
      <div>
        <button className='btn btn-secondary' 
        onClick={() => dispatch(increment(2))}>Increment</button>
        <button className='btn btn-success' 
        onClick={() => dispatch(decrement(5))}>decrement</button>
      </div>
    </div>
  )
}
export default App

















//const [state, dispatch] = useReducer(reducer, initState)
//state: kho hang
// moi khi dispatch hanh dong: kich hoat reducer(boc hang) nay->
// mua 1 chai nuoc-> ong chu dispatch hanh dong lay chai nuoc
//-> chay vo reducer kt xem co chay nuoc k?=>neu co thi thuc hien, neu khong thi thoi
//->thi cap nhat lai state
//state: tat ca cac kieu du lieu(number, mang , object, function)
//reducer: ham, co 2 tham so(state, action)
//const reducer = (state, action) =>{}
//dispatch(action)
//action : { type: 'hanh dong gi' ,payload: 'du lieu'}

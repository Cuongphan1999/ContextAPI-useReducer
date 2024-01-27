//2: tao ra cac action(gia tri) => action creator(ham tao ra action)
//dinh nghia action
export const  INCREMENT = 'count/increment' //dat name theo format
export const  DECREMENT = 'count/decrement'
export const increment = (data) =>{ //ham tao ra action creator //data ->increment(2)
  return{
    type: INCREMENT,
    payload: data
  }
}
export const decrement = (data) =>{ //ham tao ra action creator
  return{
    type: DECREMENT,
    payload: data
  }
}
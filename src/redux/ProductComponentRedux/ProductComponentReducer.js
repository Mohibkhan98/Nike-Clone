let init={
    dataShoes:[]
}

export function reducerShoes(state=init,action){
 console.log("reducer",action.payload)
    if(action.type==="shoes"){
        return{
             dataShoes:action.payload
        }
    }
      return state;
}


export function reducerhide(state={tod:true},action){

    if(action.type==="hide"){
        return{
             tod:action.payload
        }
    }
      return state;
}
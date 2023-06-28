




export function reducerauth(state={isAuth:false},action){
      if(action.type==="auth"){
         return {
             ...state,isAuth:action.payload
         }
      }

      return state;
}
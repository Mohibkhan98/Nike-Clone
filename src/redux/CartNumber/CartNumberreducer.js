

export default function CartNumberreducer(state={text:0},action){
     if(action.type==="add"){
         return{
             ...state,text:action.payload
         }
     }
     return state;
}
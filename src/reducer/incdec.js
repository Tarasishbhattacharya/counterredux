const initstate=0;

export const counterReducer=(state=initstate,action)=>{
   switch(action.type){
       case "INCREMENT_COUNTER":{
           return state+1
       }
       case "DECREMENT_COUNTER":{
        return state-1
    }
    default:return state
   }
}
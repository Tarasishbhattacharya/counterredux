import { useSelector,useDispatch } from "react-redux"
import { counterDec, counterInc } from "../action"



export const Counter=()=>{
    const state=useSelector((state)=>state.counterReducer)
    let dispatch=useDispatch()
    return (
        <div>
            <div>{state}</div>
            <button onClick={()=>dispatch(counterInc())}>Add</button>
            <button onClick={()=>dispatch(counterDec())}>Reduce</button>
        </div>
    )
}
import {useDispatch, useSelector} from "react-redux"
import { Increment , Decrement } from "./slice";

 export  function Counting (){
    const number =  useSelector((state)=>state.slice1.count)
    const dispatch = useDispatch();
    

    return (
        <>
            <h2>{number}</h2>
            <button onClick={()=>{dispatch(Increment ())}}>Increment</button>
            <button onClick={()=>{dispatch(Decrement ())}}>Increment</button>
        </>
    )
}
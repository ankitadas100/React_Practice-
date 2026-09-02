import { useReducer } from "react";
function CartContext() {
    const counter = 6;
    function Reducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
              return  state+action.payload
                
                 case "DECREMENT":
                    return state-action.payload
                    
        }
    }
    const [Count, dispatch] = useReducer(Reducer, counter)


    return (<>
    <button onClick={()=>dispatch({
            type:"DECREMENT",
            payload:4
        })}>INCREMENT
        
    </button>
    <h1 className="heading">{Count}</h1>

    </>)
}
export default CartContext;
import { useState } from "react";
import "./Calculator.css"
function Calculator() {
    const [display, SetDisplay] = useState("0");
    const[operator,SetOperator]=useState(" ");
    return (
        < div className="calculator">
            <div className="header">Calculator</div>
            <div className="display">{display} {operator}</div>
            {/* <div className="display">{operator}</div> */}
            <div className="button">

                <button onClick={() => SetDisplay("7")}>7</button>
                <button onClick={() => SetDisplay("8")}>8</button>
                <button onClick={() => SetDisplay("9")}>9</button>
                <button onClick={()=>SetOperator("+")}>+</button>

                <button onClick={() => SetDisplay("4")}>4</button>
                <button onClick={() => SetDisplay("5")}>5</button>
                <button onClick ={() => SetDisplay("6")}>6</button>
               <button onClick={()=>SetOperator("-")}>-</button>


                <button onClick={() => SetDisplay("1")}>1</button>
                <button onClick={() => SetDisplay("2")}>2</button>
                <button onClick={() => SetDisplay("3")}>3</button>
                <button onClick={()=>SetOperator("x")}>x</button>



                <button onClick={()=>SetOperator("C")}>C</button>
                <button onClick={() => SetDisplay("0")}>0</button>
                <button onClick={()=>SetOperator("=")}>=</button>
                <button onClick={()=>SetOperator("÷")}>÷</button>

            </div>

        </div>
    )
}
export default Calculator
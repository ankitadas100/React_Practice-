import "./Calculator.css"
function Calculator() {
    return (
        < div className="calculator">
            <div className="header">Calculator</div>
            <div className="display">0</div>
            <div className="button">
                
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>+</button>
                
                
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                
                
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>×</button>
               
               
                    <button>C</button>
                    <button>0</button>
                    <button>=</button>
                    <button>÷</button>
                
            </div>

        </div>
    )
}
export default Calculator
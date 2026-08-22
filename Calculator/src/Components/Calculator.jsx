import { useState } from "react";
import "./Calculator.css";

function Calculator() {
    const [display, setDisplay] = useState("0");
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState("");


    const handleNumber = (number) => {


        if (operator === "") {

            if (display === "0") {
                setDisplay(number);
                setFirstNumber(number);
            } else {
                setDisplay(display + number);
                setFirstNumber(firstNumber + number);
            }

        } else {


            if (secondNumber === "") {
                setSecondNumber(number);
                setDisplay(firstNumber + " " + operator + " " + number);
            } else {
                setSecondNumber(secondNumber + number);
                setDisplay(
                    firstNumber +
                    " " +
                    operator +
                    " " +
                    secondNumber +
                    number
                );
            }
        }
    };
    const handleDecimal = () => {
        if (operator === "") {

            if (!firstNumber.includes(".")) {
                setFirstNumber(firstNumber + ".");
                setDisplay(display + ".");
            }
        } else {

            if (!secondNumber.includes(".")) {
                setSecondNumber(secondNumber + ".");
                setDisplay(
                    firstNumber + " " + operator + " " + secondNumber + "."
                );
            }
        }
    };
    const handlePercentage = () => {
        if (operator === "") {
            const result = Number(firstNumber) / 100;
            setFirstNumber(String(result));
            setDisplay(String(result));
        }
        else {
            const result = Number(secondNumber) / 100;
            setSecondNumber(string(result));
            setDisplay(
                firstNumber + " " + operator + " " + result
            );
        }
    }
    const handleBackspace = () => {
        if (operator === "") {
            if (firstNumber.length > 1) {
                const newNumber = firstNumber.slice(0, -1);
                setFirstNumber(newNumber);
                setDisplay(newNumber);
            } else {
                setFirstNumber("");
                setDisplay("0");
            }
        } else {
            if (secondNumber.length > 1) {
                const newNumber = secondNumber.slice(0, -1);
                setSecondNumber(newNumber);

                setDisplay(
                    firstNumber + " " + operator + " " + newNumber
                );
            } else {
                setSecondNumber("");
                setDisplay(firstNumber + " " + operator);
            }
        }
    };

    const handleOperator = (op) => {


        if (firstNumber === "") {
            return;
        }

        setOperator(op);


        setDisplay(firstNumber + " " + op);
    };


    const calculate = () => {

        if (firstNumber === "" || secondNumber === "" || operator === "") {
            return;
        }

        const first = Number(firstNumber);
        const second = Number(secondNumber);

        let result;

        if (operator === "+") {
            result = first + second;
        }
        else if (operator === "-") {
            result = first - second;
        }
        else if (operator === "*") {
            result = first * second;
        }
        else if (operator === "÷") {

            if (second === 0) {
                setDisplay("Cannot divide by 0");
                return;
            }

            result = first / second;
        }


        setDisplay(String(result));


        setFirstNumber(String(result));


        setSecondNumber("");
        setOperator("");
    };


    const clearCalculator = () => {
        setDisplay("0");
        setFirstNumber("");
        setSecondNumber("");
        setOperator("");
    };

    return (
        <div className="calculator">

            <div className="header">
                Calculator
            </div>

            <div className="display">
                {display}
            </div>

            <div className="button">

                <button onClick={() => handleNumber("7")}>
                    7
                </button>

                <button onClick={() => handleNumber("8")}> 8 </button>



                <button onClick={() => handleNumber("9")}>
                    9
                </button>

                <button onClick={() => handleOperator("+")}>
                    +
                </button>



                <button onClick={() => handleNumber("4")}>
                    4
                </button>

                <button onClick={() => handleNumber("5")}>
                    5
                </button>

                <button onClick={() => handleNumber("6")}>
                    6
                </button>

                <button onClick={() => handleOperator("-")}>
                    -
                </button>



                <button onClick={() => handleNumber("1")}>
                    1
                </button>

                <button onClick={() => handleNumber("2")}>
                    2
                </button>

                <button onClick={() => handleNumber("3")}>
                    3
                </button>

                <button onClick={() => handleOperator("*")}>
                    *
                </button>
                <button onClick={handleBackspace}>⌫</button>

                <button onClick={handlePercentage}>%</button>

                <button onClick={clearCalculator}>
                    C
                </button>

                <button onClick={() => handleNumber("0")}>
                    0
                </button>
                <button onClick={handleDecimal}>.</button>



                <button onClick={() => handleOperator("÷")}>
                    ÷
                </button>
                <button onClick={calculate}>
                    =
                </button>

            </div>

        </div>
    );
}

export default Calculator;
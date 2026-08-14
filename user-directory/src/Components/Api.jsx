import { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { FaUserLarge } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { PiCityBold } from "react-icons/pi";
import "./Api.css"
function Api() {
    const [user, SetUser] = useState([])
    const [load, SetLoad] = useState(false)
    const [error, SetError] = useState("")
    async function getUsers() {
        try {
            SetLoad(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("Failed");
            }
            const data = await response.json();
            SetUser(data)

        } catch (error) {
            SetError("failed to  load users")
        } finally {
            SetLoad(false);
        }

    }
    useEffect(() => {
        getUsers();
    }, []);
   return (
    <div className="user-container">

        {load && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {user.map((oneUser) => (
            <div className="user-card" key={oneUser.id}>

                <div className="user-subcard">
                    <div className="user_mainicon">
                   <FiUser className="user-icon" />  {oneUser.name}
                   </div>
                </div>

                <div className="user-information">

                    <p>
                        <FaUserLarge className="user-icon2" />
                        <span className="label">Username:</span>{" "}
                       <span className="value" >{oneUser.username} </span>
                    </p>

                    <p>
                        <MdMarkEmailRead  className="user-icon3"/>
                        <span className="label">Email:</span>{" "}
                       <span className="value" >{oneUser.email}</span>
                    </p>

                    <p>
                        <PiCityBold  className="user-icon4"/>
                        <span className="label">City:</span>{" "}
                        <span className="value">{oneUser.address.city}</span>
                    </p>

                </div>

            </div>
        ))}

    </div>
);
}

export default Api;
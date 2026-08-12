import { useState, useEffect } from "react";
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
        <div>
            {load && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user.map((oneUser) => (
                <div key={oneUser.id}>
                    <h3>{oneUser.name}</h3>
                    <p>Username: {oneUser.username}</p>
                    <p>Email: {oneUser.email}</p>
                    <p>City: {oneUser.address.city}</p>
                </div>
            ))}

        </div>
    )
}
export default Api;
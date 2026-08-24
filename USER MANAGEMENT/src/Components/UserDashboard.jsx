import "../index.css";
import { useState, useEffect, } from "react";

import { UsersRound } from "lucide-react";
import { IoMdContact } from "react-icons/io";
import { IoMdContacts, IoIosContact } from "react-icons/io";
import { MdEmail, MdLocationOn, MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
function UserDashboard() {
    const [user, setUser] = useState([])
    useEffect(() => {
        getUser()
    }, [])
    const [formData, setFormData] = useState({
        name: "",
        UserName: "",
        email: "",
        city: ""
    });
    const [editId, setEditId] = useState(null);
    // const [newUser, setnewUser] = useState({
    //     name: "",
    //     UserName: "",
    //     email: "",
    //     city: ""
    // });

    async function getUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")

            if (!response.ok) {
                throw new Error("failed")
            }
            const data = await response.json();
            setUser(data)
        } catch (error) {

        }
    }

   async function addUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    username: formData.UserName,
                    email: formData.email,
                    address: {
                        city: formData.city
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error("failed");
        }

        const data = await response.json();

        const newUser = {
            ...data,
            name: formData.name,
            username: formData.UserName,
            email: formData.email,
            address: {
                city: formData.city
            }
        };

        setUser([
            ...user,
            newUser
        ]);

        // Clear input fields
        setFormData({
            name: "",
            UserName: "",
            email: "",
            city: ""
        });

    } catch (error) {
        console.log(error);
    }
}
    
    async function deleteUser(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE",


            }
            )
            if (!response.ok) {
                throw new Error("failed")

            }
            console.log("User deleted successfully");
            setUser(
                user.filter((oneUser) => oneUser.id !== id)
            );
        } catch (error) {
            console.log("error")
        }

    }
    async function updateUser() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();

            setUser(
                user.map((oneUser) =>
                    oneUser.id === editId
                        ? {
                            ...oneUser,
                            ...data
                        }
                        : oneUser
                )
            );

            setEditId(null);
        } catch (error) {
            console.log("failed to update")
        }

    }
    function editUser(oneUser) {
        setEditId(oneUser.id);
        setFormData({
            name: oneUser.name,
            Username: oneUser.username,
            email: oneUser.email,
            city: oneUser.address.city
        });

    }
    // const handleChange = (e) => {
    //     setNewUser({
    //         ...newUser,
    //         [e.target.name]: e.target.value
    //     });
    // };



    return (<>
        <div>
            <div className="head">
                {/* <UsersRound className="user-logo" size={32} /> */}
                <h1 className="heading">USER MANAGMENT DASHBOARD</h1>
            </div>
            <div className="main_container">
                <div className="nav">
                    <UsersRound className="user-logo2" size={20} />
                    <div className="head">User Managment</div>
                    <button className="btn">Total user:{user.length}</button>
                </div>
                <div className="sub_container">
                    <h1 className="sub_head">
                        <IoMdContact />
                        <p className="sub_heading">ADD USER/UPDATE</p>
                    </h1>
                    <div className="input_section">
                        <input className="input_box"
                            type="text"
                            name="Name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    name: e.target.value
                                });
                            }}
                        />
                        <input className="input_box"
                            type="text"
                            name="Email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                });
                            }}
                        />
                        <input className="input_box"
                            type="text"
                            name="username"
                            placeholder="UserName"
                            value={formData.UserName}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    UserName: e.target.value
                                });
                            }}
                        />

                        <input className="input_box"
                            type="text"
                            name="city"
                            placeholder="city"
                            value={formData.city}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    city: e.target.value
                                });
                            }}
                        />
                    </div>
                    <div className="button_section">
                        <button className="add_btn" onClick={editId === null ? addUser : updateUser}>
                            {editId === null ? "Add User" : "Update User"}
                        </button>
                    </div>
                </div>
                <div className="user_list">
                    <div className="user_logo">
                        < IoMdContacts size={28} />
                        <h1 className="use_head">Users List</h1></div>
                        <div className="user-list">
                    {user.map((oneUser) => (
                        <div className="user-card" key={oneUser.id}>

                            <div className="user-info">
                                <IoIosContact className="contact-icon" />

                                <div>
                                    <h3>{oneUser.name}</h3>
                                    <p>{oneUser.username}</p>
                                </div>
                            </div>

                            <div className="user-detail">
                                <MdEmail />
                                <span>{oneUser.email}</span>
                            </div>

                            <div className="user-detail">
                                <MdLocationOn />
                                <span>{oneUser.address.city}</span>
                            </div>

                            <div className="card-buttons">

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteUser(oneUser.id)}
                                >
                                    <MdDelete />
                                    Delete
                                </button>

                                <button
                                    className="edit-btn"
                                    onClick={() => editUser(oneUser)}
                                >
                                    <FaEdit />
                                    Edit
                                </button>

                            </div>

                        </div>

                    ))}
                    </div>
                </div>
            </div>

        </div>

    </>)
}

export default UserDashboard;
import React, { Component, useState } from "react";

const App = () => {

    let [data, setData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
    })


    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');


    function isValidData() {
        if (data.fullName === '' || data.email === '' || data.phone === '' || data.password === '') {
            setError("All fields are mandatory")
            return false
        }
        else if (!data.fullName.match(/^[a-z ]+$/i)) {
            setError("Name is not alphanumeric");
            return false
        }
        else if (!data.email.includes("@")) {
            setError("Email must contain @");
            return false
        }
        else if (!data.phone.match(/^[0-9]+$/i)) {
            setError("Phone Number must contain only numbers");
            return false
        }
        else if (data.password.length < 6) {
            setError("Password must contain atleast 6 letters");
            return false
        }
        return true
    }


    function formSubmit(e) {
        e.preventDefault();
        if (isValidData()) {
            console.log('Saving the data');
            setSuccess(`Hello ${data.fullName}`)
        } else {
            console.log('Show error')
        }
    }

    return (
        <div id="main">
            {success && <h1 className="success">{success}</h1>}
            {!success && (
                <div className="form-container">
                    {error && <div className="alert">{error}</div>}
                    <form action="#" method="POST" onSubmit={formSubmit}>
                        <h2>Sign Up</h2>
                        <div className="field-container">
                            <label>Name</label>
                            <input type="text" id="name" onChange={(e) => setData({ ...data, fullName: e.target.value })}
                                value={data.fullName}
                            />
                            <label>Email</label>
                            <input type="text" id="email" onChange={(e) => setData({ ...data, email: e.target.value })}
                                value={data.email} />
                            {/* <label>Gender</label>
                            <select id="gender" onChange={(e) => setData({ ...data, gender: e.target.value })}
                                defaultValue='male' value={data.gender}>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select> */}
                            <label>Phone Number</label>
                            <input type="text" id="phoneNumber" onChange={(e) => setData({ ...data, phone: e.target.value })}
                                value={data.phone} />
                            <label>Password</label>
                            <input type="password" id="password" onChange={(e) => setData({ ...data, password: e.target.value })}
                                value={data.password} />
                        </div>
                        <div className="form-footer">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
};

export default App;

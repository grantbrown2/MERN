import React, {useState} from 'react'

const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {FirstName, LastName, email, password, ConfirmPassword};
        console.log("Test", newUser);
        setFirstName = ("");
        setLastName = ("");
        setEmail = ("");
        setPassword = ("");
        setConfirmPassword = ("");
    };
    return(
        <div>
            <form onSubmit={createUser}>
                <h1>Create User!</h1>
                <div className='style'>
                    <label htmlFor="FirstName">First Name: </label>
                    <input name='FirstName' type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className='style'>
                    <label htmlFor="LastName">Last Name: </label>
                    <input name='LastName' type="text" value={LastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='style'>
                    <label htmlFor="email">Email: </label>
                    <input name='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='style'>
                    <label htmlFor="password">Password: </label>
                    <input name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='style'>
                    <label htmlFor="ConfirmPassword">Confirm Password: </label>
                    <input name='ConfirmPassword' type="password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Create User!"/>
            </form>
            <div>
                <h2>Created Users:</h2>
                <p>First Name: {FirstName}</p>
                <p>Last Name: {LastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {ConfirmPassword}</p>
            </div>
        </div>
    )
}


export default UserForm
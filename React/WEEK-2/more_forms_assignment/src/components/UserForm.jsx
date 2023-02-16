import React, {useState} from 'react'

const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [FirstNameError, setFirstNameError] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        console.log(FirstName, LastName, email, password, ConfirmPassword);
        setHasBeenSubmitted(true); //sets the value to true when submit button is clicked, then runs the validation function below
    };

    const validation =() => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting form!";
        } else {
            return "Please fill out the form!";
        }
    };

    //instead of making a if conditional we can use ternary operators inside of the jsx below.
    //example usage: 
    //<form onSubmit={createUser}>
    //{
        //hasBeenSubmitted ? 
        //<h3>Thank you for submitting the form!</h3> :
        //<h3>Welcome, please submit the form.</h3>
    //}

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name requires at least 2 or more characters!");
        } else {
            setFirstNameError("");
        }
    }

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name requires at least 2 or more characters!");
        } else {
            setLastNameError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must have at least 5 characters!");
        } else {
            setEmailError("");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password Required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must have at least 8 characters!");
        } else {
            setPasswordError("");
        }
    }

    return(
        <div>
            <form onSubmit={createUser}>
                <h1>Create User!</h1>
                <h2>{validation()}</h2>
                <div className='style'>
                    <label htmlFor="FirstName">First Name: </label>
                    <input name='FirstName' type="text" value={FirstName} onChange={validateFirstName}/>
                </div>
                {
                    FirstNameError ?
                    <p className='error'>{FirstNameError}</p> :
                    ''
                }
                <div className='style'>
                    <label htmlFor="LastName">Last Name: </label>
                    <input name='LastName' type="text" value={LastName} onChange={validateLastName}/>
                </div>
                {
                    LastNameError ?
                    <p className='error'>{LastNameError}</p> :
                    ''
                }
                <div className='style'>
                    <label htmlFor="email">Email: </label>
                    <input name='email' type="email" value={email} onChange={validateEmail}/>
                </div>
                {
                    EmailError ?
                    <p className='error'>{EmailError}</p> :
                    ''
                }
                <div className='style'>
                    <label htmlFor="password">Password: </label>
                    <input name='password' type="password" value={password} onChange={validatePassword}/>
                </div>
                {
                    PasswordError ?
                    <p className='error'>{PasswordError}</p> :
                    ''
                }
                <div className='style'>
                    <label htmlFor="ConfirmPassword">Confirm Password: </label>
                    <input name='ConfirmPassword' type="password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                {ConfirmPassword !== password ? <p>Passwords must match!</p> : ""}
                {
                    FirstNameError ?
                    <input type="submit" value="Create User!" disabled/> :
                    <input type="submit" value="Create User!"/>
                }
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
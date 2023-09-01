import React from 'react';
import { useState, useEffect } from 'react';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [bio, setBio] = useState("");
    const [staff, setStaff] = useState("");
    const [notify, setNotify] = useState(0);

    const [errors, setErrors] = useState([]);

    const validate = () => {
        const allErrors = []
        if (!name.length) {
            allErrors.push('Name cannot be empty.')
        }
        if (!email.length || !email.includes('@')){
            allErrors.push('Email cannot be empty and/or should be formatted properly.')
        }
        if (phoneNumber.length && !phoneNumber.includes('-')){
            allErrors.push('Phone number should be formatted this way: 123-456-7890')
        }
        if (phoneNumber.length && !phoneNumber.includes('-') && !phoneType){
            allErrors.push('Please specify the phone type.')
        }
        if (bio.length > 280){
            allErrors.push('Bio should upto, but no longer than, 280 characters.')
        }
        if (!staff) {
            allErrors.push("Please select a staff Option.")
        }

        return allErrors;
    }

    const handleChange = field => {

        return (e) => {
            switch (field) {
                case 'name':
                    setName(e.target.value)
                    break;
                case 'email':
                    setEmail(e.target.value)
                    break;
                case 'phoneNumber':
                    setPhoneNumber(e.target.value)
                    break;
                case 'bio':
                    setBio(e.target.value)
                    break;
                case 'staff':
                    setStaff(e.target.value)
                    break;
                case 'notify':
                    setNotify(e.target.value)
                    break;
                case 'phoneType':
                    setPhoneType(e.target.value)
                    break;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validate();
            if (errors.length) {
                setErrors(errors)
            } else {
                const user = {
                    name,
                    email,
                    phoneNumber,
                    phoneType,
                    bio,
                    staff,
                    notify
                }
                console.log(user);
                setErrors([]);
            }
    }

    const showErrors = () => {
       if (errors.length) {
        return (
            <ul>
                {errors.map((error, idx) => <li key={idx}> {error}</li>)}
            </ul>
        )
        } else {
            return null;
        }
    }

    return (
    <>
        {showErrors()}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={handleChange('name')} value={name}/>
            <br/>
            <input type="text" placeholder="Email" onChange={handleChange('email')}/>
            <br/>
            <input type="text" placeholder="Phone Number" onChange={handleChange('phoneNumber')} />
            <select name="phoneType" id="phoneType" onChange={handleChange('phoneType')}>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Mobile">Mobile</option>
            </select>
            <br/>
            <label>Instructor
                <input type="radio" name="radio" onChange={handleChange('staff')}/>
            </label>
            <label>Student
                <input type="radio" name="radio" onChange={handleChange('staff')}/>
            </label>
            <br/>
            <input type="text" placeholder="bio" onChange={handleChange('bio')} />
            <br/>
            <label>Sign up for email notification.
                <input type="checkbox" name="checkBox" onChange={handleChange('notify')}/>
            </label>
            <br/>
            <button>Submit</button>
        </form>
    </>
    )
}

export default Form;
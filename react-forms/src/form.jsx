import React from 'react';
import { useState, useEffect } from 'react';

const form = () => {
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
        if (phoneNumber.length && phoneNumber.includes('-') && !phoneType){
            allErrors.push('Please specify the phone type.')
        }
        if (bio.length > 280){
            allErrors.push('Bio should upto, but no longer than, 280 characters.')
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
            }
        }
    }
}
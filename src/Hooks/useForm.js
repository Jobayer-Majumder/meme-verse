import React from "react";
import { emailRegex, passRegex } from "../pages/Authentication/Regex/Regex";


const useForm = () => {
    const [inputErr, setInputErr] = React.useState({});
    const [validValue, setValidValue] = React.useState({});

    const handleInputValidation = e => {
        const { name, value } = e.target;
        const prevValue = { ...validValue };
        if (name === 'name') {
            if (value.trim().length >= 4) {
                
                prevValue[name] = value;
                setValidValue(prevValue);
                setInputErr(null);
            }else{
                prevValue[name] = null;
                setInputErr({ ...inputErr, name: name, errMassage: 'Leave your full name !' })
            }
        }
        else if (name === 'email') {
            if (!emailRegex.test(value)) {
                setInputErr({ ...inputErr, name: name, errMassage: 'Please enter valid email !' })
                prevValue[name] = null;
                setValidValue(prevValue);
            } else {
                prevValue[name] = value;
                setValidValue(prevValue);
                setInputErr(null);
            }
        }
        else if (name === 'pass') {
            if (!passRegex.test(value)) {
                setInputErr({ ...inputErr, name: name, errMassage: 'Must be more than 8 chars combine with uppercase and lowercase, and at least one number' })
                prevValue[name] = null
                setValidValue(prevValue);
            } else {
                prevValue[name] = value;
                setValidValue(prevValue);
                setInputErr(null);
            };
        };
    };
    return { handleInputValidation, inputErr, validValue };
};

export default useForm;
import React from "react";
import { emailRegex, passRegex } from "../pages/Authentication/Regex/Regex";


const useForm = () => {
    const [inputErr, setInputErr] = React.useState({});
    const [validateValue, setValidateValue] = React.useState({});

    const SignUpInputValidation = e => {
        const { name, value } = e.target;
        const prevValue = { ...validateValue };
        if (name === 'name') {
            if (value.trim().length >= 4) {
                
                prevValue[name] = value;
                setValidateValue(prevValue);
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
                setValidateValue(prevValue);
            } else {
                prevValue[name] = value;
                setValidateValue(prevValue);
                setInputErr(null);
            }
        }
        else if (name === 'pass') {
            if (!passRegex.test(value)) {
                setInputErr({ ...inputErr, name: name, errMassage: 'Must be more than 8 chars combine with uppercase and lowercase, and at least one number' })
                prevValue[name] = null
                setValidateValue(prevValue);
            } else {
                prevValue[name] = value;
                setValidateValue(prevValue);
                setInputErr(null);
            };
        };
    };
    return { SignUpInputValidation, inputErr, validateValue };
};

export default useForm;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config/base-url';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const SignUp = () => {
    const router = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let valid = true;
        let newError = {};

        if (formData.firstName.trim() === '') {
            newError.firstName = 'First name is required';
            valid = false;
        }

        if (formData.lastName.trim() === '') {
            newError.lastName = 'Last name is required';
            valid = false;
        }

        if (formData.username.trim() === '') {
            newError.username = 'Username is required';
            valid = false;
        }

        if (formData.email.trim() === '') {
            newError.email = 'Email is required';
            valid = false;
        }

        if (formData.password.trim() === '') {
            newError.password = 'Password is required';
            valid = false;
        } else if (formData.password.length < 6) {
            newError.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(newError);
        return valid;
    };

   
    const handleChangeSignUp = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

   
    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
      
        console.log("Errors before submission:", errors);

       
        if (validateForm()) {
            setLoading(true);
            try {
                console.log("Sending data to backend:", formData);

                
                const res = await fetch(`${baseUrl}api/auth/register`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

               
                let data;
                const contentType = res.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    data = await res.json();
                    console.log("Response JSON:", data);
                } else {
                    data = { message: await res.text() }; 
                    console.log("Response (non-JSON):", data);
                }

              
                if (res.ok && (data.status === true || data.message === 'User registered successfully')) {
                    Cookies.set('email', formData.email, { expires: 5 / (24 * 60) }); 
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful',
                        html: data.message,
                        timer: 4000
                    });
                    console.log("Registration successful:", data.message);
                    router(`/verify-otp?username=${encodeURIComponent(formData.username)}`); 
                } else {
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Error',
                        html: data.message || 'An error occurred, please try again.'
                    });
                    console.error("Registration failed:", data.message);
                    setErrors(data.message || 'Registration failed.');
                }
            } catch (error) {
                
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Error',
                    text: 'Something went wrong. Please try again later.'
                });
                console.error("Unexpected error:", error);
            } finally {
                setLoading(false); 
            }
        }
    };

    return {
        handleChangeSignUp,
        formData,
        handleSubmitSignUp,
        loading,
        errors
    };
};

export default SignUp;

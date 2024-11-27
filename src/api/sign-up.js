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
        console.log(errors);
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                const res = await fetch(`${baseUrl}auth/register`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const data = await res.json();
                console.log(res);
                if (res.ok) {
                    if (data && data.status === true) {
                        Cookies.set('email', formData.email, { expires: 5 / (24 * 60) });
                        Swal.fire({
                            icon: 'success',
                            title: 'Registration Successful',
                            html: data.message,
                            timer: 4000
                        });
                        router('/verify-otp');
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Error',
                        html: data.message
                    });

                    setErrors(data.message);
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Error',
                    text: 'Something went wrong. Please try again later.'
                });
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

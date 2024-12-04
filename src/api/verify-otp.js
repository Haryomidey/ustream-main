import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config/base-url';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const VerifyOtp = (email) => {
    const router = useNavigate();
    const [formData, setFormData] = useState({
        otp: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let valid = true;
        let newError = {};

        if (formData.otp === '') {
            newError.otp = 'OTP is required';
            valid = false;
        } else if (formData.otp.length !== 6) {
            newError.otp = 'OTP must be 6 digits';
            valid = false;
        }

        setErrors(newError);
        return valid;
    };

    const handleChangeOtp = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmitOtp = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true);
            

            try {
                const res = await fetch(`${baseUrl}auth/verify-otp?username=${encodeURIComponent(formData.username)}`, {  
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        otp: formData.otp,  
                    }),
                });

                const data = await res.json();
                if (res.ok) {
                    if (data.status === true) {
                        Swal.fire({
                            icon: 'success',
                            title: 'OTP Verified',
                            html: data.message,
                            timer: 4000,
                        });
                        Cookies.remove('email');
                        router('/login');
                    }
                } else {
                    let errorMessages = '';
                    if (data.errors) {
                        data.errors.forEach((error) => {
                            errorMessages += `${error.msg}<br>`;
                        });
                    }

                    Swal.fire({
                        icon: 'error',
                        title: 'Verification Error',
                        html: errorMessages,
                    });

                    setErrors(data.errors);
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Verification Error',
                    text: 'Something went wrong. Please try again later.',
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return {
        handleChangeOtp,
        formData,
        handleSubmitOtp,
        loading,
        errors,
    };
};

export default VerifyOtp;
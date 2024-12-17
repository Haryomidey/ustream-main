import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';

const VerifyOtp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        otp: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let valid = true;
        const newError = {};

        if (formData.otp.trim() === '') {
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

            const username = Cookies.get('username');
            console.log("Username retrieved from cookies:", username);

            if (!username) {
                Swal.fire({
                    icon: 'error',
                    title: 'Verification Error',
                    text: 'Username is missing. Please log in again.',
                });
                setLoading(false);
                return;
            }

            try {
                console.log("Making POST request...");

                const response = await axios.post(
                    `http://localhost:8070/api/email/verify-otp?username=${encodeURIComponent(username)}`,
                    { otp: formData.otp },
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                );

                console.log("API response:", response.data);

                if (response.data.statusCode === "200") {
                    Swal.fire({
                        icon: 'success',
                        title: 'OTP Verified',
                        text: response.data.statusMsg || 'Verification successful!',
                        timer: 4000,
                    });
                    navigate('/login');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Verification Error',
                        text: response.data.statusMsg || 'Verification failed. Please try again.',
                    });
                }
            } catch (error) {
                console.error("API error:", error);

                if (error.response) {
                    console.error("Error Response:", error.response);
                    Swal.fire({
                        icon: 'error',
                        title: 'Verification Error',
                        text: error.response.data?.statusMsg || 'Something went wrong. Please try again later.',
                    });
                } else if (error.request) {
                    console.error("No response from backend. Error Request:", error.request);
                    Swal.fire({
                        icon: 'error',
                        title: 'Verification Error',
                        text: 'No response from the server. Please check the server connection.',
                    });
                } else {
                    console.error("Error setting up the request:", error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Verification Error',
                        text: 'An error occurred while making the request.',
                    });
                }
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

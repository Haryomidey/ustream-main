import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // Form validation
    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            valid = false;
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            valid = false;
        }
        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            valid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    // Handle input changes
    const handleChangeSignUp = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) {
            return;
        }
    
        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:8070/api/auth/register',
                formData,
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );
    
            const data = response.data;
            console.log('Response from backend:', data); 
          
            if (data.statusCode === "201") { 
               
                Cookies.set('email', formData.email, { expires: 1 / 24 });
                Cookies.set('username', formData.username, { expires: 1 / 24 }); 
                
                const username = Cookies.get('username');
                console.log("Username retrieved from cookies:", username);
    

                
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: data.statusMsg || 'You have been registered successfully.',
                    timer: 4000,
                });
    
                navigate('/verify-otp');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: data.statusMsg || 'An unexpected error occurred. Please try again.',
                });
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.statusMsg || 'An error occurred. Please try again.';
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: errorMessage,
            });
            console.error('Error during registration:', error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    

    return {
        handleChangeSignUp,
        formData,
        handleSubmitSignUp,
        loading,
        errors,
    };
};

export default SignUp;


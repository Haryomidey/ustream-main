import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../config/base-url';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { useUserContext } from '../contexts/AuthContext';

const LoginUser = () => {
    const {setToken} = useUserContext();
    const router = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let valid = true;
        let newError = {};

        if (formData.email.trim() === ''){
            newError.email = 'Email is required';
            valid = false;
        }

        if (formData.password.trim() === ''){
            newError.password = 'Password is required';
            valid = false;
        }

        setErrors(newError);
        return valid;
    };

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if(validateForm()){
            setLoading(true);
            try{
                const res = await fetch(`${baseUrl}auth/login`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    }, 
                    body: JSON.stringify(formData)
                });

                const data = await res.json();
                if (res.ok) {
                    if(data && data.status === true){
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful',
                            html: data.message,
                            timer: 4000
                        });
                        Cookies.set('token', data.token, { expires: 1 / 24 });
                        Cookies.set('user_id', JSON.stringify(data.user._id), { expires: 1 / 24 });
                        Cookies.set('authenticated', true, { expires: 1 / 24 });
                        setToken(data.token);
                        router('/home');
                    }
                }

                else {
                    if (!res.ok) {                    
                        Swal.fire({
                            icon: 'error',
                            title: 'Login Error',
                            html: data.message
                        });
                    
                        setErrors(data.message);
                    } else {
                        setErrors({});
                    }

                }
                
            } catch(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Login Error',
                    text: 'Something went wrong. Please try again later.'
                });
            } finally{
                setLoading(false);
            }
        }
    };

    return {
        handleChangeLogin,
        formData,
        handleSubmitLogin,
        loading,
        errors
    };
};

export default LoginUser;
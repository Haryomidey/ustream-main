import { useState } from 'react';
import { baseUrl } from '../config/base-url';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const ResendOtp = (email) => {
    const [loadingResendOtp, setLoadingResendOtp] = useState(false);

    const notify = (message, status) => toast[status](message);

    const handleResendOtp = async (e) => {
        e.preventDefault();

        if (email.trim() !== '') {
            setLoadingResendOtp(true);
            

            try {
                const res = await fetch(`${baseUrl}auth/resend-otp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                    }),
                });

                const data = await res.json();
                if (res.ok) {
                    if (data.status === true) {
                        notify(data.message, 'success');
                        
                    }
                } else {
                    notify(data.message, 'error');
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'OTP Error',
                    text: 'Something went wrong. Please try again later.',
                });
            } finally {
                setLoadingResendOtp(false);
            }
        } else {
            notify('Email cannot be empty', 'error');
        }
    };

    return {
        handleResendOtp,
        loadingResendOtp,
    };
};

export default ResendOtp;
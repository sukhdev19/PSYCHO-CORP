import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyAppointments = () => {
    const { backendUrl, token } = useContext(AppContext);
    const navigate = useNavigate();

    const [appointments, setAppointments] = useState([]);
    const [payment, setPayment] = useState('');
    const [showMeetingInput, setShowMeetingInput] = useState(null); // To show input for specific appointment
    const [meetingCode, setMeetingCode] = useState(''); // Stores the meeting code entered by the user

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_');
        return dateArray[0] + " " + months[Number(dateArray[1]) - 1] + " " + dateArray[2];
    };

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/appointments`, { headers: { token } });
            setAppointments(data.appointments.reverse());
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, { headers: { token } });
            if (data.success) {
                toast.success(data.message);
                getUserAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                try {
                    const { data } = await axios.post(`${backendUrl}/api/user/verifyRazorpay`, response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments');
                        getUserAppointments();
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error.message);
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/payment-razorpay`, { appointmentId }, { headers: { token } });
            if (data.success) {
                initPay(data.order);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const appointmentStripe = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/payment-stripe`, { appointmentId }, { headers: { token } });
            if (data.success) {
                const { session_url } = data;
                window.location.replace(session_url);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const handleMeetOnline = (appointment) => {
        console.log(appointment);
        // const currentTime = new Date();
        // const [day, month, year] = appointment.slotDate.split('_');
        // const [hour, minute] = appointment.slotTime.split(':');
        // const appointmentDate = new Date(year, months.indexOf(month), day, hour, minute);
        try {
            setShowMeetingInput(appointment._id); // Set appointment ID to display input
            joinMeeting(appointment)
        } catch (error) {
            toast.error("You can only join the meeting at the scheduled time.");
        }

        // if (
        //     currentTime >= appointmentDate &&
        //     currentTime <= new Date(appointmentDate.getTime() + 15 * 60000)
        // ) {
        //     setShowMeetingInput(appointment._id); // Set appointment ID to display input
        //     joinMeeting(appointment)
        // } else {
        //     toast.error("You can only join the meeting at the scheduled time.");
        // }
    };

    const joinMeeting = (appointment) => {
        if (!meetingCode) {
            toast.error("Please enter a valid meeting code.");
            return;
        }
         navigate(`/room/${meetingCode}`)
        // const meetingUrl = `${backendUrl}/api/meet/${appointment._id}?code=${meetingCode}`;
        // window.location.href = meetingUrl;
    };

    useEffect(() => {
        if (token) {
            getUserAppointments();
        }
    }, [token]);

    return (
        <div>
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b dark:text-white ml-2'>My appointments</p>
            <div>
                {appointments.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b dark:text-white'>
                        <div>
                            <img className='w-36 bg-[#EAEFFF]' src={item.docData.image} alt="" />
                        </div>
                        <div className='flex-1 text-sm text-[#5E5E5E] dark:text-white ml-2'>
                            <p className='text-[#262626] text-base font-semibold dark:text-white'>{item.docData.name}</p>
                            <p className='dark:text-white'>{item.docData.speciality}</p>
                            <p className='text-[#464646] font-medium mt-1 dark:text-white'>Address:</p>
                            <p className='dark:text-white'>{item.docData.address.line1}</p>
                            <p className='dark:text-white'>{item.docData.address.line2}</p>
                            <p className='mt-1'><span className='text-sm text-[#3C3C3C] font-medium dark:text-white'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
                        </div>
                        <div className='flex-1 justify-center text-sm text-[#5E5E5E] dark:text-white ml-2'>
                            {showMeetingInput === item._id ? (
                                <div className='flex flex-col items-center'>
                                    <input 
                                        type="text"
                                        placeholder="Enter meeting code"
                                        value={meetingCode}
                                        onChange={(e) => setMeetingCode(e.target.value)}
                                        className="mb-2 py-1 px-2 border rounded dark:text-black"
                                    />
                                    <button 
                                        onClick={() => joinMeeting(item)} 
                                        className='sm:min-w-48 py-2 border border-blue-500 rounded text-blue-500 dark:text-white'
                                    >
                                        Join Meeting
                                    </button>
                                </div>
                            ) : (
                                <button 
                                    onClick={() => handleMeetOnline(item)} 
                                    className='sm:min-w-48 py-2 border border-blue-500 rounded text-blue-500 dark:text-white'
                                >
                                    Meet Online
                                </button>
                            )}
                        </div>





                        {/* Payment and status buttons */}
                        <div className='flex flex-col gap-2 justify-end text-sm text-center dark:text-white'>
    {/* Payment and status buttons */}
    {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
        <button
            onClick={() => setPayment(item._id)}
            className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300 ml-2'
        >
            Pay Online
        </button>
    )}
    
    {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
        <>
            <button
                onClick={() => appointmentStripe(item._id)}
                className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center ml-2'
            >
                <img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="Stripe Logo" />
            </button>
            
            <button
                onClick={() => appointmentRazorpay(item._id)}
                className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center ml-2'
            >
                <img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="Razorpay Logo" />
            </button>
        </>
    )}
    
    {!item.cancelled && item.payment && !item.isCompleted && (
        <button className='sm:min-w-48 py-2 border rounded text-[#696969] bg-[#EAEFFF] dark:text-white ml-2'>
            Paid
        </button>
    )}
    
    {item.isCompleted && (
        <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500 dark:text-white ml-2'>
            Completed
        </button>
    )}
    
    {!item.cancelled && !item.isCompleted && (
        <button
            onClick={() => cancelAppointment(item._id)}
            className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300 ml-2'
        >
            Cancel appointment
        </button>
    )}
    
    {item.cancelled && !item.isCompleted && (
        <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500 dark:text-white ml-2'>
            Appointment cancelled
        </button>
    )}
</div>






                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;


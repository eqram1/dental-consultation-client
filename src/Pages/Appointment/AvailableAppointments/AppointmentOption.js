import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body mt-10 text-center">
                <h2 className="text-2xl text-secondary text-center font-bold">{name}</h2>
                <p className='text-xl'>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p className='text-xl'>{slots.length}{slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white font-bold text-xl ">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
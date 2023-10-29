import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" -mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-lg font-bold text-primary'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an Appointment</h1>
                        <p className="text-white py-6">To get best services for specialized doctor from us please make an appointment in selected room.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MakeAppointment;
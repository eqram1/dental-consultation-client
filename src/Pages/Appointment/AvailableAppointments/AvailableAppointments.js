import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section className='mt-16 text-center text-primary font-bold text-2xl'>
            <p>Available Appointments on April {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointments;
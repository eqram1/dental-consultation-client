import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        console.log(date, slot, name, email, phone);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input w-full input-bordered" />
                        <input name='email' type="text" placeholder="Email address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone number" className="input w-full input-bordered" />
                        <br />
                        <input type='submit' className='input w-full btn btn-accent' value='submit' />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Close!</label>
                    </div>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                </div>
            </div>
        </>
    );
};

export default BookingModal;
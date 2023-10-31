import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="bg-base-400"
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Dental services news!</h1>
                    <p className="py-6">Maintain serial & other administrative rules please.</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
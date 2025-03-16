import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Promotion() {
    useEffect(() => {
        const hasSeenPromotion = localStorage.getItem('hasSeenPromotion');
        
        if (!hasSeenPromotion) {
            const timer = setTimeout(() => {
                document.getElementById('promotion').showModal();
                localStorage.setItem('hasSeenPromotion', 'true');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div>
            <dialog id="promotion" className="modal backdrop-blur-sm">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Welcome Offer!</h3>
                    <p className="py-4">
                        Book your dream home with us today and enjoy a special 10% discount on your first stay!
                        Whether you're planning a weekend getaway or a longer vacation, we have the perfect place for you.
                        Simply use code <strong>WELCOME10</strong> at checkout. Don’t miss out—this offer is only valid for a limited time!
                        Start exploring and find your perfect home away from home. We’re here to make your stay unforgettable!
                    </p>
                    <div className="text-center">
                        <Link to='/rooms' className='button-lg bg-green-500'> Get Offer </Link>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="button-lg bg-red-500">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ house }) => {
    return (
        <div>
            <h5>Cousin</h5>
            <p>{house}</p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;
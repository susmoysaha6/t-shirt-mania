import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContex)
    return (
        <div>
            <h5>Special</h5>
            <p>{house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;
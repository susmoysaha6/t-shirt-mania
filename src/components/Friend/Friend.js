import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContex);
    return (
        <div>
            <h5>Friend</h5>
            <p>{house}</p>
            <button onClick={() => setHouse(house - 1)}>Decrease</button>
        </div>
    );
};

export default Friend;
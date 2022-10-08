import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money] = useContext(MoneyContext);
    // const money = useContext(MoneyContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p>{money}</p>
        </div>
    );
};

export default Uncle;
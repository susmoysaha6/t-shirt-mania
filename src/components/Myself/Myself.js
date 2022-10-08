import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h5>Myself</h5>
            <p>{house}</p>
            <section>
                <Special house={house}></Special>
            </section>
        </div>
    );
};

export default Myself;
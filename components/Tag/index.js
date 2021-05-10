import React from 'react';

const Tag = ({ text, any }) => {
    return (
        <div className={`px-2 py-1  text-gray-900 text-sm rounded-full ${any}`}>
            {text}
        </div>
    );
};

export default Tag;

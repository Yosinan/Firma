import React from 'react';

const ProgressBar = ({ percent }) => {
    return (
        <div className="w-full h-2 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
            <div
                className="bg-warning h-2 rounded-full rounded-bl-full"
                style={{ width: percent }}
            ></div>
        </div>
    );
};

export default ProgressBar;

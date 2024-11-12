import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    varient: 'primary' | 'secondary';
    className?: string;
}


const Button: React.FC<ButtonProps> = ({ children, varient, className = '' }) => {
    return (
        <button className={`px-10 py-5 inline-block rounded-[3.6rem] transition duration-200 ${varient == "primary" ? "bg-primary hover:bg-primary_shade" : 'bg-black_light hover:bg-black_third'} ${className} `}>
            {children}
        </button>
    )
}

export default Button;
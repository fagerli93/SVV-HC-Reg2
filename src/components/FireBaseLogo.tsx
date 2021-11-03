import React from "react";
import logo from "../assets/svv.svg";

interface FirebaseLogoProps {
    width: string;
    height: string;
}

const SvvLogo: React.FC<FirebaseLogoProps> = ({ width, height }) => {
    return (
        <img
            className='app-logo'
            width={width}
            height={height}
            src={logo}
            alt='Firebase logo'
        />
    );
};

export default SvvLogo;

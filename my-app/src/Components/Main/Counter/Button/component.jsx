import React from "react";

import './styles.scss';

const Button = ({ className, sign, func}) => (
      <>
        <button 
        className={className}
        onClick={func}
        >
          {sign}
        </button>
      </>
      
)

export default Button;
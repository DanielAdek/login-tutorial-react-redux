import React from 'react';

export const CustomInput = ({ labelText, labelStyle, ...props }) => {
    return (
        <label style={labelStyle} htmlFor={labelText}>
            <div>{labelText}</div>
            <input className="form-control" {...props}/>
        </label>
    )
}
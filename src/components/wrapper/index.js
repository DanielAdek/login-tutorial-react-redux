import React from 'react';
import ReactLoading from 'react-loading';

export const Wrapper = ({ children }) => {
    return <div className="container">{children}</div>
};

export const View = ({ children, className }) => {
    return <div className={className}>{children}</div>
};

export const CustomImage = ({ src, alt }) => {
    return <img src={src} alt={alt} />
}

export const Loading = ({ backdropStyle, className, type, color }) => (
    <div>
        <div className={backdropStyle}></div>
        <ReactLoading className={className} type={type} color={color} height={29} width={100} />
    </div>
);
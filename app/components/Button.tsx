import React from 'react'

const Button = () => {

    const [copy, setCopy] = React.useState("Copy URL");

    const copyUrl = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopy("Copied");
        setTimeout(() => {
            setCopy("Copy URL");
        }, 2000);
        return;
    }

    return (
        <button className='w-[12rem] p-2 text-sm rounded-md bg-[#7f12ed] text-white'
            onClick={copyUrl}
        >{copy}</button>
    )
}

export default Button
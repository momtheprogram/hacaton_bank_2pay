import React, { AnchorHTMLAttributes } from "react";

interface cardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    name: string;
    title: string;
    info: string;
    image: string;
    cashback: number;
};


const Card: React.FC<cardProps> = ({
    name,
    title,
    info,
    image,
    cashback,
    ...props
}) => {



    return (
        <div className="rounded-[16px] bg-blue-transparent px-[8px] py-[12px] flex flex-row justify-between">
            <div className="flex flex-row">
                <img className='rounded-[50px] w-[40px] h-[40px]' alt={title} src={image} />
                <div className="ml-[12px]">
                    <p className="text-blue-dark text-[14px] leading-21px0 font-semibold">{title}</p>
                    <p className="text-blue-dark text-[12px] leading-normal font-normal">{info}</p>
                </div>
            </div>
            <p className="h-[29px] min-w-[108px] px-[4px] pt-[5px] bg-blue-light rounded-[30px] text-white text-[14px] leading-normal
            font-semibold text-center mt-[5px]">кешбэк {cashback}%</p>
        </div>
    )
}

export default Card;

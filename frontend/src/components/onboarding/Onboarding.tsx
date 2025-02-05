import classNames from "classnames";
import React, { AnchorHTMLAttributes } from "react";

interface onboardingProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    bar2: string;
    bar3: string;
    title: string;
    subtitle: string;
    image: string;
    link: string;
    picture: "first" | "second" | "third";
};

const Onboarding: React.FC<onboardingProps> = ({
    bar2,
    bar3,
    title,
    subtitle,
    image,
    link,
    picture
}) => {

const baseClasses = "self-center";

const imageClasses = {
    "first": "w-[249px] h-[305px] mt-[29px] mb-[70px]",
    "second": "w-[160px] h-[160px] mt-[49px] mb-[197px]",
    "third": "w-[352px] h-[359px] mt-[34px] mb-[14px]",
};

const buttonClasses = classNames(
    baseClasses,
    imageClasses[picture],
);


    return (
        <div className="flex flex-col mt-[12px] mr-[5px]">
            <a href="/main" className="flex flex-row justify-end mr-[14px]">
                <img className='w-[18px] h-[18px]' alt='Закрыть онбординг' src='./images/icons/Cross.svg' />
            </a>
            <div className="flex flex-row mt-[23px] justify-between mx-[15px]">
                <img className='w-[110px] mr-[10px]' alt='Прогресс' src="./images/icons/ActiveLine.svg" />
                <img className='w-[108px] mr-[10px]' alt='Прогресс' src={bar2} />
                <img className='w-[108px]' alt='Прогресс' src={bar3} />
            </div>
            <p className="text-blue-dark text-center text-[30px] font-bold leading-[35px] tracking-tight mt-[33px] max-w-[343px] self-center">{title}</p>
            <p className="text-blue-dark text-center text-[16px] leading-normal font-medium tracking-tight mt-[35px] max-w-[343px] self-center">{subtitle}</p>
            <img className={buttonClasses} alt='Сервисы' src={image} />
            <a href={link}>
                <button className="min-w-[343px] bg-violet-light pt-[13px] mt-[40px] pb-[14px] rounded-[16px] text-purple-text text-[16px] leading-normal font-bold mx-[15px]">Продолжить</button>
            </a>
        </div>
    )
};

export default Onboarding;

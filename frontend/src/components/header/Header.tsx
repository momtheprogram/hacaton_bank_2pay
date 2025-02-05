import { useState } from 'react';
import { getTime } from "../../utils/getTime";

function Header({theme} : {theme:any}) {

    const [currentTime, setCurrentTime] = useState(getTime());

    return (
        <div className={`sticky top-0 flex flex-row justify-between pt-[7px] px-[16px] ${theme.white ? 'bg-white' : ' bg-background'}`}>
            <span className='text-[17px] leading-normal font-semibold mt-[6px] ml-[7px]'>{currentTime}</span>
            <div className='flex flex-row'>
                <img alt='Качество связи' src='./images/icons/Connection.svg' />
                <img className='ml-[2px]' alt='Вай-Фай' src='./images/icons/Wifi.svg' />
                <img className='ml-[2px]' alt='Заряд батареи' src='./images/icons/Battery.svg' />
            </div>
        </div>
    );
}

export default Header;

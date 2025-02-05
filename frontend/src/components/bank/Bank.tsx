import Header from "../header/Header";

function Bank() {
    return (
        <div className="bg-grey-background ">
            <Header
                theme={{ white: true }}
            />
            <div className="flex flex-row justify-between pt-[11px] pb-[5px]">
                <div className="flex flex-row">
                    <img className='pl-[15px]' alt='Иконка банка' src='./images/icons/ubrr.svg' />
                    <div className="flex flex-row">
                        <p className="font-[17px] leading-[20px] font-semibold pl-[7px] pt-[7px]">Сергей</p>
                        <img alt='Стрелка' src='./images/icons/chevron-small-right.svg' />
                    </div>
                </div>
                <img className='pr-[18px] pt-[2px]' alt='Стрелка' src='./images/icons/Notifications.svg' />
            </div>
            <div className="flex flex-row px-[16px] my-[17px]">
                <div className="bg-white bg-bankImage bg-no-repeat bg-right bg-contain min-w-[215px] mr-[8px] rounded-[12px] p-[12px]">
                    <p className="font-[13px] leading-[16px] font-normal">Ваш кешбэк</p>
                    <p className="font-[17px] leading-[20px] font-bold mt-[3px] mb-[20px]">352 ₽</p>
                    <button className="flex flex-row font-[11px] leading-[13px] font-normal bg-grey-background">Подробнее <img alt='Стрелка' src='./images/icons/chevron-small-right.svg' />
                    </button>
                </div>
                <div className="bg-creditCard bg-no-repeat bg-right bg-contain bg-gradient-second rounded-[12px] p-[12px]">
                    <p className="font-[11px] leading-[13px] font-normal text-white">Кредитная карта</p>
                    <p className="font-[13px] leading-[16px] font-medium text-white">до 300 тыс ₽</p>
                </div>
            </div>
        </div>
    )
}

export default Bank;

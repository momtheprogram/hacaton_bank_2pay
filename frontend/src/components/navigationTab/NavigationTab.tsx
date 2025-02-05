function NavigationTab() {
    return (
        <div className="flex flex-row mx-[17px] justify-between">
            <a href="/bank"><img className='mt-[4px] ml-[1px]' alt='Назад в приложение банка' src='./images/icons/Arrow.svg' /></a>
            <div className="flex flex-row">
                <a href="/notifications"><img className='mr-[15px]' alt='Уведомления' src='./images/icons/Notifications.svg' /></a>
                <a href="/help"><img alt='Помощь' src='./images/icons/Help.svg' /></a>
            </div>
        </div>
    )
}

export default NavigationTab;

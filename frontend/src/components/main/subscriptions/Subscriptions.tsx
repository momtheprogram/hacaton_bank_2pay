import Button from "../../button/Button";
import SearchForm from "../searchForm/SearchForm";
import SubscriptionsList from "../subscriptionsLIst/SubscriptionsList";

function Subscriptions() {
    return (
        <section className="bg-white rounded-[30px] mt-[22px] px-[16px] pt-[20px]">
            <a href="/subscriptions">
                <Button
                    varint="big"
                    color="purple"
                    className="w-[100%] flex flex-col justify-center mt-[5px]"
                    children={
                        <p className="w-[100%] text-center text-[16px] leading-[21px] mb-[3px]">Мои подписки</p>
                    }
                />
            </a>
            <p className="text-[16px] leading-[21px] text-blue-dark font-bold mt-[21px]">Сервисы</p>
            <SearchForm />
            <SubscriptionsList />
        </section>
    )
}

export default Subscriptions;

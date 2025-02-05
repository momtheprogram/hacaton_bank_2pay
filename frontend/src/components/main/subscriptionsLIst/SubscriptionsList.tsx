import Card from "../../card/Card";
import services from "../../../utils/services";

function SubscriptionsList() {
    return (
        <div className="mt-[8px] grid gap-[9px] pb-[10px]">
            {services.map((service) => (
                <Card 
                key={service.id}
                name={service.name}
                title={service.title}
                info={service.info}
                image={service.image}
                cashback={service.cashback}
                />
            ))
            }
        </div>
    )
}

export default SubscriptionsList;

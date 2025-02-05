import ButtonTab from "./buttonTab/ButtonTab";
import NavigationTab from "../navigationTab/NavigationTab";
import Subscriptions from "./subscriptions/Subscriptions";
import { useState } from 'react';

function Main() {

    const [onboardingActive, setOnboardingActive] = useState(true);


    return (
        <section className="mt-[10px]">
            <NavigationTab />
            <ButtonTab />
            <Subscriptions />
        </section>
    )
}

export default Main;

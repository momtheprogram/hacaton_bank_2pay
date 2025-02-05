import Button from "../../button/Button";
import user from "../../../utils/user";

function ButtonTab() {
    return (
        <div className="flex flex-row mx-[16px] gap-[5px] mt-[20px]">
            <Button
                varint="small"
                color="violet"
                className=""
                children={
                    <div className="w-[100%] flex flex-col justify-center">
                        <p className="text-[14px] leading-[21px] mb-[3px]">Расходы за месяц</p>
                        <p className="text-[20px] leading-[24px]">{user.costs} &#8381;</p>
                    </div>
                }
            />
            <Button
                varint="small"
                color="blue"
                className=""
                children={
                    <div className="w-[100%] flex flex-col justify-center">
                        <p className="text-[14px] leading-[21px] mb-[3px]">Кешбэк за месяц</p>
                        <p className="text-[20px] leading-[24px]">{user.cashback} &#8381;</p>
                    </div>
                }
            />
        </div>
    )
}

export default ButtonTab;

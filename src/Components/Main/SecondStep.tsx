import clsx from "clsx";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";

import type { step2DataType } from "../../types";
type Props = {
    isYearly: boolean;
    setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
    step2Data: step2DataType;
    setStep2Data: React.Dispatch<React.SetStateAction<step2DataType>>;
};

function SecondStep({ isYearly, setIsYearly, step2Data, setStep2Data }: Props) {
    const inputFieldsData = [
        {
            id: 1,
            icon: arcade,
            name: "Arcade",
            price: isYearly ? "90/yr" : "9/mo",
        },
        {
            id: 2,
            icon: advanced,
            name: "Advanced",
            price: isYearly ? "120/yr" : "12/mo",
        },
        { id: 3, icon: pro, name: "Pro", price: isYearly ? "150/yr" : "15/mo" },
    ];

    const toggleBillingType = (
        e: React.MouseEvent<HTMLButtonElement>,
    ): void => {
        e.preventDefault();
        setIsYearly((prev) => !prev);
    };

    const getherData = (name: string, price: string) => {
        setStep2Data({ name: name, price: price, status: true });
    };

    return (
        <div className="flex flex-col gap-4">
            <div
                className={clsx(
                    //base
                    "flex flex-col gap-4",
                    //md
                    "md:flex-row md:justify-between",
                )}
            >
                {inputFieldsData.map((each, index) => {
                    return (
                        <label
                            onClick={() => getherData(each.name, each.price)}
                            key={index}
                            htmlFor={each.name}
                            className={clsx(
                                // base
                                "border-neutral-grey-500 flex cursor-pointer gap-4 rounded-lg border p-4 text-left",
                                // md
                                "md:flex-1 md:flex-col md:justify-between",
                                // active state
                                "has-checked:border-primary-purple-600 has-checked:bg-neutral-blue-100",

                                step2Data.name == each.name
                                    ? "border-primary-purple-600"
                                    : "",
                            )}
                        >
                            <input
                                type="radio"
                                name="plan"
                                id={each.name}
                                value={each.name}
                                className="hidden"
                            />
                            <img
                                className="size-10"
                                src={each.icon}
                                alt={each.name}
                            />
                            <div className="md:mt-10">
                                <h1 className="text-primary-blue-950 font-medium">
                                    {each.name}
                                </h1>
                                <span className="text-neutral-grey-500">
                                    ${each.price}
                                </span>
                                {isYearly && (
                                    <p className="text-primary-blue-950 text-sm font-medium">
                                        2 months free
                                    </p>
                                )}
                            </div>
                        </label>
                    );
                })}
            </div>

            <div className="bg-neutral-blue-50 mt-3 flex items-center justify-evenly rounded p-3">
                <p className="text-primary-blue-950 font-medium">Monthly</p>
                <button
                    onClick={toggleBillingType}
                    className="bg-primary-blue-950 h-5 w-10 rounded-2xl px-1"
                >
                    <div
                        className={clsx(
                            // base
                            "bg-neutral-white h-3 w-3 rounded-full transition-transform duration-300 outline-none",
                            // conditionaly
                            isYearly ? "translate-x-5" : "translate-x-0",
                        )}
                    ></div>
                </button>
                <p className="text-neutral-grey-500">Yearly</p>
            </div>

            {!step2Data.status && (
                <span className="text-primary-red-500 text-[10px] font-bold md:text-xs">
                    Please choose one of them
                </span>
            )}
        </div>
    );
}

export default SecondStep;

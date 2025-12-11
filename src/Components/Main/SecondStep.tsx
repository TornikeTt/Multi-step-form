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

const inputFieldsData = [
    {
        id: 1,
        icon: arcade,
        name: "Arcade",
        monthlyPrice: "9/mo",
        yearlyPrice: "90/yr",
    },
    {
        id: 2,
        icon: advanced,
        name: "Advanced",
        monthlyPrice: "12/mo",
        yearlyPrice: "120/yr",
    },
    {
        id: 3,
        icon: pro,
        name: "Pro",
        monthlyPrice: "15/mo",
        yearlyPrice: "150/yr",
    },
];

function SecondStep({ isYearly, setIsYearly, step2Data, setStep2Data }: Props) {
    const toggleBillingType = (): void => {
        setIsYearly((prev) => !prev);
    };

    const getherData = (
        name: string,
        monthlyPrice: string,
        yearlyPrice: string,
    ) => {
        setStep2Data({ name, monthlyPrice, yearlyPrice });
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
                            onClick={() =>
                                getherData(
                                    each.name,
                                    each.monthlyPrice,
                                    each.yearlyPrice,
                                )
                            }
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
                                    {isYearly
                                        ? each.yearlyPrice
                                        : each.monthlyPrice}
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
                    type="button"
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
        </div>
    );
}

export default SecondStep;

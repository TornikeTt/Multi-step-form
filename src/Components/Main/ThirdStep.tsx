import clsx from "clsx";

import type { step3DataType } from "../../types";

type Props = {
    isYearly: boolean;
    step3Data: step3DataType;
    setStep3Data: React.Dispatch<React.SetStateAction<step3DataType>>;
};

const inputFieldsData = [
    {
        id: 1,
        name: "onlineService",
        title: "Online Service",
        subtitle: "Access to multiplayer games",
        monthlyPrice: "+$1/mo",
        yearlyPrice: "+$10/yr",
    },
    {
        id: 2,
        name: "largerStorage",
        title: "Larger storage",
        subtitle: "Extra 1TB of cloud save",
        monthlyPrice: "+$2/mo",
        yearlyPrice: "+$20/yr",
    },
    {
        id: 3,
        name: "customizableProfile",
        title: "Customizable profile",
        subtitle: "Custom theme on your profile",
        monthlyPrice: "+$2/mo",
        yearlyPrice: "+$20/yr",
    },
];

function ThirdStep({ isYearly, step3Data, setStep3Data }: Props) {
    const gatherData = (name: string, checked: boolean) => {
        const selectedItem = inputFieldsData.find((each) => each.name === name);

        setStep3Data((prev) => {
            if (checked) {
                return { ...prev, [name]: selectedItem };
            } else {
                // remove the item
                const { [name as keyof step3DataType]: _, ...rest } = prev;
                return rest;
            }
        });
    };

    return (
        <div className="flex flex-col gap-4">
            {inputFieldsData.map((each) => {
                return (
                    <label
                        key={each.id}
                        htmlFor={each.title}
                        className={clsx(
                            // base
                            "border-neutral-grey-500 flex cursor-pointer items-center gap-4 overflow-auto rounded-lg border px-2 py-3 text-left",
                            //lg
                            "lg:p-6",
                            // active state
                            "has-checked:border-primary-purple-600 has-checked:bg-neutral-blue-100",
                        )}
                    >
                        <input
                            onChange={(e) =>
                                gatherData(each.name, e.target.checked)
                            }
                            checked={
                                step3Data[each.name as keyof step3DataType]
                                    ?.name === each.name
                                    ? true
                                    : false
                            }
                            id={each.title}
                            type="checkbox"
                            name={each.name}
                            className="size-5"
                        />
                        <div className="leading-[0.5px]">
                            <p className="text-primary-blue-950 text-sm font-bold">
                                {each.title}
                            </p>
                            <small className="text-neutral-grey-500 text-xs font-medium">
                                {each.subtitle}
                            </small>
                        </div>

                        <p className="text-primary-purple-600 ml-auto text-sm font-medium">
                            {isYearly ? each.yearlyPrice : each.monthlyPrice}
                        </p>
                    </label>
                );
            })}
        </div>
    );
}

export default ThirdStep;

import clsx from "clsx";

import type { step3DataType } from "../../types";

type Props = {
    isYearly: boolean;
    step3Data: step3DataType;
    setStep3Data: React.Dispatch<React.SetStateAction<step3DataType>>;
};

function ThirdStep({ isYearly, step3Data, setStep3Data }: Props) {
    const inputFieldsData = [
        {
            id: 1,
            name: "onlineService",
            title: "Online Service",
            subtitle: "Access to multiplayer games",
            price: isYearly ? "+$10/yr" : "+$1/mo",
        },
        {
            id: 2,
            name: "largerStorage",
            title: "Larger storage",
            subtitle: "Extra 1TB of cloud save",
            price: isYearly ? "+$20/yr" : "+$2/mo",
        },
        {
            id: 3,
            name: "customizableProfile",
            title: "Customizable profile",
            subtitle: "Custom theme on your profile",
            price: isYearly ? "+$20/yr" : "+$2/mo",
        },
    ];

    const gatherData = (name: string, checked: boolean) => {
        const selectedItem = inputFieldsData.find((each) => each.name === name);

        setStep3Data((prev) => {
            if (checked) {
                return { ...prev, [name]: selectedItem };
            } else {
                // remove the item
                const { [name]: _, ...rest } = prev;
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
                                step3Data[each.name]?.name === each.name
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
                            {each.price}
                        </p>
                    </label>
                );
            })}
        </div>
    );
}

export default ThirdStep;

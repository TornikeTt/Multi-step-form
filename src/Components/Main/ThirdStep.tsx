import clsx from "clsx";

function ThirdStep({ isYearly }: { isYearly: boolean }) {
    const data = [
        {
            title: "Online Service",
            subtitle: "Access to multiplayer games",
            plan: isYearly ? "+$10/yr" : "+$1/mo",
        },

        {
            title: "Larger storage",
            subtitle: "Extra 1TB of cloud save",
            plan: isYearly ? "+$20/yr" : "+$2/mo",
        },

        {
            title: "Customizable profile",
            subtitle: "Custom theme on your profile",
            plan: isYearly ? "+$20/yr" : "+$2/mo",
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            {data.map((each, index) => {
                return (
                    <label
                        key={index}
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
                            id={each.title}
                            type="checkbox"
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
                            {each.plan}
                        </p>
                    </label>
                );
            })}
        </div>
    );
}

export default ThirdStep;

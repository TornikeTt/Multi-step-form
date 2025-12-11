import type { step2DataType, step3DataType } from "../../types";

type Props = {
    isYearly: boolean;
    setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
    step2Data: step2DataType;
    step3Data: step3DataType;
};

function FourthStep({ isYearly, setIsYearly, step2Data, step3Data }: Props) {
    const arrayOfStep3Data = Object.values(step3Data).filter((each) => {
        let arr = Object.keys(each);
        return arr.length > 0;
    });

    const calculateTotal = () => {
        // Base plan price
        const basePriceString = isYearly
            ? step2Data.yearlyPrice
            : step2Data.monthlyPrice;

        const basePrice = Number(basePriceString.replace(/[^0-9]/g, ""));

        // Add-on prices total
        const addonsPriceTotal = arrayOfStep3Data.reduce((total, addon) => {
            const addonPriceString = isYearly
                ? addon.yearlyPrice
                : addon.monthlyPrice;

            const addonPrice = Number(addonPriceString?.replace(/[^0-9]/g, ""));

            return total + addonPrice;
        }, 0);

        return basePrice + addonsPriceTotal;
    };

    return (
        <div>
            <div className="bg-neutral-blue-50">
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-primary-blue-950 font-medium">
                                {`${step2Data.name} ${isYearly ? "(Yearly)" : "(Monthly)"}`}
                            </h1>
                            <button
                                className="text-neutral-grey-500 text-sm underline"
                                type="button"
                                onClick={() => setIsYearly((prev) => !prev)}
                            >
                                Change
                            </button>
                        </div>
                        <p className="text-primary-blue-950 font-medium">
                            {isYearly
                                ? step2Data.yearlyPrice
                                : step2Data.monthlyPrice}
                        </p>
                    </div>

                    <hr className="opacity-10" />

                    {arrayOfStep3Data.map((each) => {
                        return (
                            <div
                                key={each.id}
                                className="mt-2 flex items-center justify-between"
                            >
                                <p className="text-neutral-grey-500">
                                    {each.title}
                                </p>
                                <p className="text-primary-blue-950">
                                    {isYearly
                                        ? each.yearlyPrice
                                        : each.monthlyPrice}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-5 flex justify-between px-4">
                <p className="text-neutral-grey-500">
                    Total (per {isYearly ? "Year" : "Month"})
                </p>
                <p className="text-primary-purple-600 font-bold">
                    ${calculateTotal()}
                    {isYearly ? "/yr" : "/mo"}
                </p>
            </div>
        </div>
    );
}

export default FourthStep;

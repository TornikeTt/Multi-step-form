import { useState } from "react";
import clsx from "clsx";
import Header from "./Header";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

import type { CollectedData } from "../../types";

type Props = {
    currentStep: number;
    collectedData: CollectedData;
    setCollectedData: React.Dispatch<React.SetStateAction<CollectedData>>;
};

export function Main({ currentStep, collectedData, setCollectedData }: Props) {
    const [isYearly, setIsYearly] = useState(false);

    const setupSteps = [
        <FirstStep setStep1Data={setCollectedData} />,
        <SecondStep isYearly={isYearly} setIsYearly={setIsYearly} />,
        <ThirdStep isYearly={isYearly} />,
    ];

    return (
        <main
            className={clsx(
                // base
                "relative flex min-h-[480px] items-center justify-center",
                // md
                "md:min-h-0",
            )}
        >
            <div
                className={clsx(
                    // base
                    "bg-neutral-white absolute -top-15 flex w-[90%] max-w-[480px] flex-col justify-between gap-5 rounded-lg p-6 shadow-lg",
                    // md
                    "md:top-0 md:w-full md:max-w-none md:rounded-none md:shadow-none",
                    //lg
                    "lg:px-20 lg:py-10",
                )}
            >
                <Header currentStep={currentStep} />

                <form>{setupSteps[currentStep]}</form>
            </div>
        </main>
    );
}

export default Main;

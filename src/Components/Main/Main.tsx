import { useState } from "react";
import clsx from "clsx";
import Header from "./Header";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

import type { step1DataType } from "../../types";

type Props = {
    currentStep: number;
    step1Data: step1DataType;
    setStep1Data: React.Dispatch<React.SetStateAction<step1DataType>>;
};

export function Main({ currentStep, step1Data, setStep1Data }: Props) {
    const [isYearly, setIsYearly] = useState(false);

    const setupSteps = [
        <FirstStep step1Data={step1Data} setStep1Data={setStep1Data} />,
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

import React from "react";

import type { CollectedData } from "../types";

type Props = {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    collectedData: CollectedData;
};

function Footer(props: Props) {
    const { currentStep, setCurrentStep, collectedData } = props;

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const nextStep = () => {
        setCurrentStep((prev) => {
            if (prev >= 3) {
                return prev;
            }
            return prev + 1;
        });
    };

    return (
        <footer className="bg-neutral-white flex h-full w-full items-center justify-center md:col-start-2">
            <div className="flex w-full justify-between px-6 lg:px-20">
                <button
                    onClick={prevStep}
                    className="text-neutral-grey-500 cursor-pointer font-bold"
                >
                    {currentStep > 0 && <span>Go Back</span>}
                </button>
                <button
                    onClick={nextStep}
                    className="bg-primary-blue-950 text-neutral-white h-10 w-[100px] cursor-pointer rounded-sm"
                >
                    Next Step
                </button>
            </div>
        </footer>
    );
}

export default Footer;

import React from "react";

import type { step1DataType, step2DataType, step3DataType } from "../types";

type Props = {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    step1Data: step1DataType;
    step2Data: step2DataType;
    step3Data: step3DataType;
};

function Footer(props: Props) {
    const { currentStep, setCurrentStep, step1Data, step2Data, step3Data } =
        props;

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const nextStep = () => {
        switch (currentStep) {
            case 0:
                const isStep1Complete = Object.values(step1Data).every(
                    (field) =>
                        field.status === true && field.value.trim() !== "",
                );

                if (!isStep1Complete) {
                    alert(
                        "Please fill in all required fields correctly before continuing.",
                    );
                    return;
                }
                break;
            case 1:
                if (step2Data.name === "" && step2Data.price === "") {
                    alert("Please select one option");
                    return;
                }
                break;
            case 2:
                const isValid = Object.values(step3Data).some((each) => {
                    let arr = Object.keys(each);
                    return arr.length > 0;
                });

                if (!isValid) {
                    alert("Please select at least one option.");
                    return;
                }
                break;
        }

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

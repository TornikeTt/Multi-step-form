import { useState } from "react";
import clsx from "clsx";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer";

import type { step1DataType, step2DataType, step3DataType } from "./types";

function App() {
    const [currentStep, setCurrentStep] = useState(0);

    const [step1Data, setStep1Data] = useState<step1DataType>({
        name: { value: "", status: true },
        email: { value: "", status: true },
        phone: { value: "", status: true },
    });

    const [step2Data, setStep2Data] = useState<step2DataType>({
        name: "",
        monthlyPrice: "",
        yearlyPrice: "",
    });

    const [step3Data, setStep3Data] = useState<step3DataType>({
        onlineService: {},
        largerStorage: {},
        customizableProfile: {},
    });

    return (
        <section
            className={clsx(
                // Base
                "bg-neutral-blue-100 font-ubuntu h-screen w-full overflow-auto",
                // md
                "md:flex md:items-center md:justify-center",
            )}
        >
            <div
                className={clsx(
                    // Base
                    "grid size-full min-h-[500px] grid-rows-[150px_1fr_80px]",
                    // md
                    "md:bg-neutral-white md:h-[500px] md:w-[750px] md:grid-cols-[250px_1fr] md:grid-rows-[1fr_80px] md:rounded-lg md:p-4",
                    // lg
                    "lg:h-[600px] lg:w-[900px]",
                )}
            >
                <Navigation currentStep={currentStep} />
                <Main
                    currentStep={currentStep}
                    step1Data={step1Data}
                    setStep1Data={setStep1Data}
                    step2Data={step2Data}
                    setStep2Data={setStep2Data}
                    step3Data={step3Data}
                    setStep3Data={setStep3Data}
                />
                <Footer
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    step1Data={step1Data}
                    step2Data={step2Data}
                    step3Data={step3Data}
                />
            </div>
        </section>
    );
}

export default App;

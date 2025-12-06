import { useState } from "react";
import clsx from "clsx";

const inputFieldsData = [
    {
        id: 1,
        label: "Name",
        placeholder: "Stephen King",
        name: "name",
        type: "text",
    },
    {
        id: 2,
        label: "Email Address",
        placeholder: "stephenking@lorem.com",
        name: "email",
        type: "email",
    },
    {
        id: 3,
        label: "Phone Number",
        placeholder: "+1 234 567 890",
        name: "phone",
        type: "tel",
    },
] as const;

// Validation function
const validateField = (name: string, value: string) => {
    if (!value.trim()) return false; // required field
    if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
    if (name === "phone") {
        const phoneRegex = /^[0-9+\-() ]*$/;
        return phoneRegex.test(value);
    }
    return true;
};

// Error message helper
const getErrorMessage = (name: string) => {
    switch (name) {
        case "email":
            return "Invalid email address";
        case "phone":
            return "Only numbers allowed";
        default:
            return "This field is required";
    }
};

import type { CollectedData } from "../../types";

type Props = {
    setStep1Data: React.Dispatch<React.SetStateAction<CollectedData>>;
};

const FirstStep = ({ setStep1Data }: Props) => {
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Update step1 data
        setStep1Data((prev) => ({
            ...prev,
            step1: { ...prev.step1, [name]: value },
        }));

        // Validate field
        setErrors((prev) => ({
            ...prev,
            [name]: !validateField(name, value),
        }));
    };

    return (
        <div className="flex size-full flex-col gap-5">
            {inputFieldsData.map((each) => {
                return (
                    <div key={each.id} className="space-y-1">
                        <div className="flex items-center justify-between">
                            <label className="text-primary-blue-950 text-sm">
                                {each.label}
                            </label>
                            {errors[each.name] && (
                                <span className="text-primary-red-500 text-[10px] font-bold md:text-xs">
                                    {getErrorMessage(each.name)}
                                </span>
                            )}
                        </div>
                        <input
                            onChange={(e) => handleChange(e)}
                            className={clsx(
                                "border-neutral-grey-500 h-10 w-full rounded-sm border pl-4 outline-0 lg:h-12",
                                // focus
                                "focus:border-primary-purple-600",
                                // requred
                                errors[each.name] ? "border-red-500!" : "",
                            )}
                            name={each.name}
                            placeholder={each.placeholder}
                            type={each.type}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default FirstStep;

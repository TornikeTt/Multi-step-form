import clsx from "clsx";
import type { step1DataType } from "../../types";

type Props = {
    step1Data: step1DataType;
    setStep1Data: React.Dispatch<React.SetStateAction<step1DataType>>;
};

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

const FirstStep = ({ step1Data, setStep1Data }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const isInvalid = validateField(name, value);

        setStep1Data((prev) => ({
            ...prev,
            [name]: {
                ...prev[name as keyof step1DataType],
                value,
                status: isInvalid,
            },
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
                            {!step1Data[each.name].status && (
                                <span className="text-primary-red-500 text-[10px] font-bold md:text-xs">
                                    {getErrorMessage(each.name)}
                                </span>
                            )}
                        </div>
                        <input
                            onChange={(e) => handleChange(e)}
                            value={step1Data[each.name].value}
                            className={clsx(
                                "border-neutral-grey-500 h-10 w-full rounded-sm border pl-4 outline-0 lg:h-12",
                                // focus
                                "focus:border-primary-purple-600",
                                // requred
                                !step1Data[each.name].status
                                    ? "border-red-500!"
                                    : "",
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

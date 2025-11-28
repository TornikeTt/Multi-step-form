const FirstStep = () => {
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
    ];

    return (
        <div className="flex size-full flex-col gap-5">
            {inputFieldsData.map((each) => {
                return (
                    <div key={each.id} className="space-y-1">
                        <div className="flex items-center justify-between">
                            <label className="text-primary-blue-950 text-sm">
                                {each.label}
                            </label>
                            {false && (
                                <span className="text-primary-red-500 text-[10px] font-bold md:text-xs">
                                    This is field is required
                                </span>
                            )}
                        </div>
                        <input
                            className="border-neutral-grey-500 focus:border-primary-purple-600 h-10 w-full rounded-sm border pl-4 outline-0 lg:h-12"
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

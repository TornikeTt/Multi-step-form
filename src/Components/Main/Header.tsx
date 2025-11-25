function Header({ currentStep }: { currentStep: number }) {
    const headerContent = [
        {
            title: "Personal Info",
            subtitle:
                "Please provide your name, email address, and phone number.",
        },

        {
            title: "Select your plan",
            subtitle: "You have the option of monthly or yearly billing.",
        },

        {
            title: "Pick add-ons",
            subtitle: "Add-ons help enhance your gaming experience.",
        },

        {
            title: "Finishing up",
            subtitle: "Double-check everything looks OK before confirming.",
        },
    ];

    return (
        <header>
            <h1 className="text-primary-blue-950 text-3xl font-bold">
                {headerContent[currentStep].title}
            </h1>
            <p className="text-neutral-grey-500 mt-1">
                {headerContent[currentStep].subtitle}
            </p>
        </header>
    );
}

export default Header;

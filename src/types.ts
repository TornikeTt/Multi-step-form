export type step1DataType = {
    name: { value: string; status: boolean };
    email: { value: string; status: boolean };
    phone: { value: string; status: boolean };
};

export type step2DataType = {
    name: string;
    monthlyPrice: string;
    yearlyPrice: string;
};

type step3Items = {
    id?: number;
    name?: string;
    title?: string;
    subtitle?: string;
    monthlyPrice?: string;
    yearlyPrice?: string;
};

export type step3DataType = {
    onlineService?: step3Items;
    largerStorage?: step3Items;
    customizableProfile?: step3Items;
};

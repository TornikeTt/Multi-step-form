export type step1DataType = {
    name: { value: string; status: boolean };
    email: { value: string; status: boolean };
    phone: { value: string; status: boolean };
};

export type step2DataType = {
    name: string;
    price: string;
    status?: boolean;
};

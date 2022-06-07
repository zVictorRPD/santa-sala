export interface Imateria {
    name: string;
    code: string;
    description: string;
    hours: number;
    dependence: object[];
    lock: object[];
    period: number;
    optional: boolean;
}
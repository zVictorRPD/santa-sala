export interface IMateria {
    name: string;
    code: string;
    description: string;
    hours: number;
    dependence: object[];
    lock: object[];
    period: number;
    optional: boolean;
    state?: string | 'todo';
}
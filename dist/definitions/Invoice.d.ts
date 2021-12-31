export interface Invoice {
    date: string;
    number: string;
    type: 'commercial' | 'proforma';
    number_of_copies: number;
}

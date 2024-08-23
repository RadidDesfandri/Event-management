export interface IEO {
    username: string;
    email: string;
    avatar: string | null;
}

export interface ITicketing {
    nameTicket: string;
    quota: string;
    price: string;
    startDate: string;
    endDate: string;
}

export interface IEvent {
    id?: string;
    eventName: string;
    category: string;
    location: string;
    description: string;
    image: string;
    date: string;
    createdAt?: string;
    eo?: IEO;
    Ticketing?: ITicketing[];
}

export interface ITicket {
    ticketName: string;
    quota: string;
    price: string;
    date: string;
}
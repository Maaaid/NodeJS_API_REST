export interface createEventDTO {
    title: string;
    description?: string;
    dateAndHours?: Date;
    place: string;
    city: string;
    billPrice: number;
    nbPlace: number;
    category: string;
    coverImage: number;
}

export interface updateEventDTO {
    title: string;
    description?: string;
    dateAndHours?: Date;
    place: string;
    city: string;
    billPrice: number;
    nbPlace: number;
    category: string;
    coverImage: number;
}
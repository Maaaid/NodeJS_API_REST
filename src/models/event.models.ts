export interface createEventDTO {
    title: string;
    description?: string;
    place: string;
    city: string;
    billPrice: number;
    nbPlace: number;
    category: string;
    coverImage: number;
    dateAndHour: number;
}

export interface updateEventDTO {
    title?: string;
    description?: string;
    place?: string;
    city?: string;
    billPrice?: number;
    nbPlace?: number;
    category?: string;
    coverImage?: number;
    dateAndHour?: number;
}
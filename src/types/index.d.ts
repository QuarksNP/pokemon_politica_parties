export type Event = {
    id?: string,
    title: string,
    description: string,
    image: string,
    audio: string
}

export type Events = Event[]

export type EventTextField = "title" | "description"
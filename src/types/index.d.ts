export type Delegate = {
    id?: string,
    title: string,
    description: string,
    image: string,
    audio: string
}

export type Delegates = Delegate[]

export type DelegateTextField = "title" | "description"
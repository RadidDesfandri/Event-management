import { IEvent } from "@/components/types/event";

export const getEvent = async () => {
    interface Response {
        status: string;
        event: IEvent[]
    }

    const res = await fetch("http://localhost:8000/api/events", {
        next: { revalidate: 300 }
    })
    const response: Response = await res.json()

    return { result: response, ok: res.ok }
}

export async function getEventById(id: string) {
    const res = await fetch(`http://localhost:8000/api/events/${id}`, {
        next: { revalidate: 200 }
    })
    const data = await res.json();
    return data
}

export const createEvent = async (data: IEvent) => {
    const res = await fetch("http://localhost:8000/api/events", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    })

    const response = await res.json()

    return { result: response, ok: res.ok }
}
import { IEvent } from "@/components/types/event";
import { getCookie } from "./server";
import { FormValue } from "@/components/create/CreateEvent";

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

export const createEvent = async (data: FormValue) => {
    const tgl = new Date(data.date).toISOString()
    const token = await getCookie('token')
    const formData = new FormData()
    formData.append("eventName", data.eventName)
    formData.append("location", data.location)
    formData.append("category", data.category)
    formData.append("description", data.description)
    formData.append("date", tgl)
    formData.append("file", data.image!)
    formData.append("ticket", JSON.stringify(data.ticket))

    const res = await fetch("http://localhost:8000/api/events", {
        next: { revalidate: 100 },
        headers: {
            "Authorization": `Bearer ${token?.value}`
        },
        method: "POST",
        body: formData
    })

    const response = await res.json()

    return { result: response, ok: res.ok }
}
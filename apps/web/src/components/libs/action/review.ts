import { IReview } from "@/components/types/review"
import { getCookie } from "./server"

export const createReview = async (id: string, data: IReview) => {
    const token = await getCookie('token')

    const res = await fetch("http://localhost:8000/api/review/", {
        method: "POST",
        next: { revalidate: 200 },
        headers: {
            Authorization: `Bearer ${token?.value}`
        },
        body: JSON.stringify(data)
    })
    const response = await res.json()
    if (!res.ok) throw new Error("Failed to Review")
    return { result: response, ok: res.ok }
}
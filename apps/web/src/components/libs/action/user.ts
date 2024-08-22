import { MyFormValue } from "@/components/register/formikRegister";

export const registerUser = async(data:MyFormValue)=> {
    const res = await fetch("http://localhost:8000/api/auth/create",{
        method : "POST",
        headers: {
            'Content-Type' : "application/json"
        },
        body:JSON.stringify(data)
    })
    if(!res.ok) throw new Error("Failed to Register")

    return res.json()
}
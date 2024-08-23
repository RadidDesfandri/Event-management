import { IEo, IloginEO } from "@/components/types/auth"

export const registerEo = async (data:IEo)=> {
    const res = await fetch("http://localhost:8000/api/autheo/createeo",{
        method : "POST",
        next:{revalidate: 200},
        headers: {
            'Content-Type' : "application/json"
        },
        body:JSON.stringify(data)
    })
    if(!res.ok) throw new Error("Failed to Register")
        return res.json()
};

export const loginEO = async (data: IloginEO ) => {
    const res = await fetch ('http://localhost:8000/api/autheo/logineo', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
    });
    const response = await res.json();
    return { result: response, ok: res.ok}
};
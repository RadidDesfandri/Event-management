import { IEvent } from "../types/event";
import { PropsEvent } from "./PosterDate";


export default function DeskripsiDetailEvent({ data }: { data: IEvent }) {
    console.log({data});
    
    return (
        <div className='text-gray-800 text-sm flex flex-col gap-5'>
            <p>{data.description} </p>
        </div>
    )
}

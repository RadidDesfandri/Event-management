"use client"
import FormikRegisterUser from "@/components/register/formikRegisterUser";
import LogoLg from "@/components/logoLg";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (
        <div className='w-screen h-screen'>
            <div className="flex justify-center pt-14">
                <LogoLg />
            </div>
            <div className="flex w-full justify-between py-28">
                <div className="flex flex-col h-96 w-1/2 justify-center items-center">
                    <Image
                        src="/images/welcomeImage.png"
                        alt="logo"
                        width={600}
                        height={600}
                    />
                    <h1 className="font-bold pt-9">Tidak lagi ketinggalan event favoritmu</h1>
                    <p>Gabung dan rasakan kemudahan bertransaksi dan mengelola event di tricket</p>
                </div>
                <div className="flex flex-col h-96 w-1/2 justify-center items-center ">
                    <p className="font-bold">buat akun Tricket kamu</p>
                    <p className="pb-4">sudah punya akun? <Link href={'/loginUser'} className="text-blue-800 font-bold">Masuk</Link></p>
                    <div className="flex flex-col w-96 h-[475px] p-40 rounded-2xl shadow-xl justify-center items-center bg-gray-200">
                        <FormikRegisterUser/>
                    </div>
                </div>
            </div>
        </div>
    )
}
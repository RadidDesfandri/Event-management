import Image from "next/image";
import Link from "next/link";
import AddEmail from "./addLoginEmail";

export default function RegisterComp() {
    return (
        <div className='w-full bg-white'>
            <div className='mx-auto flex flex-col justify-center max-w-7xl'>
                <div className="w-full flex justify-center">
                    <Image
                        src="/images/tricketlogo.png"
                        alt="logo"
                        width={125}
                        height={125}
                    />
                </div>
                <div className="flex">
                    <div className="h-96 w-1/2 content-center text-center">
                        <Image
                            src="/images/welcomeImage.png"
                            alt="logo"
                            width={600}
                            height={600}
                        />
                        <h1 className="font-bold pt-9">Tidak lagi ketinggalan event favoritmu</h1>
                        <p>Gabung dan rasakan kemudahan bertransaksi dan mengelola event di tricket</p>
                    </div>
                    <div className="flex flex-col h-96 w-1/2 content-center justify-center items-center text-center">
                        <p className="font-bold">buat akun Tricket kamu</p>
                        <p>sudah punya akun? <Link href={'/'} className="text-blue-800 font-bold">Masuk</Link></p>
                        <div className="flex flex-col w-96 h-48 rounded-2xl shadow-xl justify-center items-center bg-gray-700">
                            <p className="pb-10 text-start text-gray-600 mr-80">email</p>
                            {/* <AddEmail /> */}
                            <button className="h-9 w-80 rounded-xl bg-blue-700 text-white font-medium">Daftar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
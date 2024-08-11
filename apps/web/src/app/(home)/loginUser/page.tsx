import Image from "next/image";
import Link from "next/link";
import LogoLg from "@/components/logoLg";
import FormikLoginEO from "@/components/login/formikLogin";
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
                    <p className="font-bold">masuk ke akun Tricket mu</p>
                    <p className="pb-3">tidak mempunyai akun? <Link href={'/registerUser'} className="text-blue-800 font-bold">Daftar</Link></p>
                    <div className="flex flex-col w-96 p-8 rounded-2xl shadow-xl items-center bg-gray-50">
                        <p className="pb-3 pl-9 text-gray-600 mr-80">email</p>
                        <FormikLoginEO />
                    </div>
                </div>
            </div>
        </div>
    )
}
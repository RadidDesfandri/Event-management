import { NextRequest, NextResponse } from "next/server"
import { getCookie } from "./components/libs/action/server"

const protectPages = ['/beranda', '/create']

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')
    const url = request.nextUrl.pathname

    if (token && url == '/') {
        return NextResponse.redirect(new URL('/beranda', request.url))
    }

    if (protectPages.includes(url)) {
        if (!token) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }
}
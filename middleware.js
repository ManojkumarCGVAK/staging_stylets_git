import  { NextResponse } from 'next/server'

export function middleware(req, ev) {
   
    if (req.headers.get("x-forwarded-proto") !== "https") {
        return NextResponse.redirect(`https://${req.headers.get('host')}${req.nextUrl.pathname}`,301);
    } 
    return NextResponse.next();
}
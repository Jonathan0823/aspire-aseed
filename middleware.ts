import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const session = await auth();
    console.log(session)
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

}
 
export const config = {
  matcher: ['/admin/:path*', '/', '/about', '/contact', '/admin', '/laporan/:path*'],
}
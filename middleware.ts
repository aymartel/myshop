import { NextRequest, NextResponse } from 'next/server'
import { } from 'next/server'
import { jwt } from './utils';

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/checkout/address') ||
    request.nextUrl.pathname.startsWith('/checkout/summary')
  ) {
    const token = request.cookies.get('token')?.value || '';
    console.log(token)
    try {
      await jwt.isValidToken(token);
      return NextResponse.next();

    } catch (error) {
      return NextResponse.next();
      // const requestedPage = request.nextUrl.pathname;
      // const url = request.nextUrl.clone();
      // url.pathname = `/auth/login`;
      // url.search = `page=${requestedPage}`;
      // return NextResponse.redirect(url);
    }
  }

}
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const requestedPage = req.nextUrl.pathname;

  if (

    req.nextUrl.pathname.includes('/checkout/address') ||

    req.nextUrl.pathname.includes('/checkout/summary')||
    req.nextUrl.pathname.startsWith('/admin')

  ) {

    if (!session) {

      const url = req.nextUrl.clone();

      url.pathname = '/auth/login';

      url.search = `p=${requestedPage}`;

      return NextResponse.redirect(url);

    }

  }

  if (req.nextUrl.pathname.startsWith('/admin')) {

    if (!session) {

      const requestedPage = req.nextUrl.pathname;

      const url = req.nextUrl.clone();

      url.pathname = '/auth/login';

      url.search = `p=${requestedPage}`;

      return NextResponse.redirect(url);

    }

    const validRoles = ['admin', 'SEO'];

    if (!validRoles.includes(session.user.role)) {

      const url = req.nextUrl.clone();

      url.pathname = '/';

      return NextResponse.redirect(url);

    }

  }

  //Proteccion para el API dashboard

  if (req.nextUrl.pathname.startsWith('/api/admin/dashboard')) {

    if (!session) {

      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });

    }

    const validRoles = ['admin', 'SEO'];

    if (!validRoles.includes(session.user.role)) {

      return NextResponse.json({ message: 'No autorizado' }, { status: 401 });

    }

  }

  return NextResponse.next();

}
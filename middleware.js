import { NextResponse } from 'next/server';

export function middleware(request) {
	// Enforce HTTPS only in production
	if (process.env.NODE_ENV === 'production') {
		const proto = request.headers.get('x-forwarded-proto');
		if (proto && proto !== 'https') {
			const url = new URL(request.url);
			url.protocol = 'https:';
			return NextResponse.redirect(url, 301);
		}
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}; 
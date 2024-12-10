import { auth } from "@/authjs";

export default auth((req) => {
  const { nextUrl } = req
  const publicRoutes = ['/login', '/register'];

  const isAuthenticated = !!req.auth
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)

  if (isPublicRoutes && isAuthenticated) return Response.redirect(new URL('/', nextUrl))
  if (!isAuthenticated && !isPublicRoutes) return Response.redirect(new URL('/login', nextUrl))
  // if (isAuthenticated && !req.auth?.username) {
  //   return Response.redirect(new URL('/register/set-username', nextUrl))
  // };
})

export const config = {
  matcher: ['/login/:path*', '/register/:path*'],
}
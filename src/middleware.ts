export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/cart/:path*", "/favorites/:path*", "/user/:path*"]
}
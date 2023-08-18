export const APP_ROUTES = {
    protected:{
        buy:'/buy',
        cart:'/cart',
        favorites:'/favorites',
        account:'/account'
    },
    public:{
        home:'/',
        categories:'/categories/[_id]',
        product:'/products/[_id]',
        search:'/search',
        login:'/auth/login',
        register:'/auth/register',
        resetPass: '/auth/reset-passoword',
        notFound: '/404'
    }
} 
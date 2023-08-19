type SignInData = {
    email: string,
    password: string
}

export default async function singIn({ email, password }: SignInData) {
    const response = await fetch('http://localhost:3000/auth/client/authenticate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    if(!response.ok){
        return false
    }

}
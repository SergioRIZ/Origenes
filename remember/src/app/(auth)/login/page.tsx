import { login } from "./actions"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function LoginForm () {

        const server = await createClient()
    
        const {data} = await server.auth.getUser()
    
        if(data.user) {
            redirect("/dashboard")
        }

    return(
        <main className="">
            <div className="">
            <form action={login} autoComplete="on" className="">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="pass">Password:</label>
                <input type="password" id="pass" name="password" />
                <button type="submit">Log In</button>
            </form>
            </div>
        </main>
    )

}


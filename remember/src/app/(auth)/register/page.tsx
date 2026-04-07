import { redirect } from "next/navigation";
import { register } from "./actions";
import { createClient } from "@/lib/supabase/server";

export default async function RegisterForm ()  {

    const server = await createClient()

    const {data} = await server.auth.getUser()

    if(data.user) {
        redirect("/dashboard")
    }

    return (

        <main className="">
            <div className="">
            <form autoComplete="on" action={register} className="">
                    <label htmlFor="name">User:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    <label htmlFor="pass">Password:</label>
                    <input type="password" id="pass" name="password"/>
                    <label htmlFor="rpass">Repeat Password:</label>
                    <input type="password" id="rpass" name="rpassword"/>
                    <button type="submit">Create account</button>
            </form>
            </div>    
        </main>

    )

}

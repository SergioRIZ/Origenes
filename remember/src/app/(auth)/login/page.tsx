import { login } from "./actions"


export default function LoginForm () {

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


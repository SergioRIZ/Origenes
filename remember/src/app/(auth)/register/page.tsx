import { register } from "./actions";


export default function RegisterForm ()  {

    return (

        <main className="">
            <div className="">
            <form autoComplete="on" action={register} className="">
                    <label htmlFor="user">User:</label>
                    <input type="text" id="user" name="user"/>
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

'use server'

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function register (formData: FormData) {

const server = await createClient()

const email = formData.get("email");
const user = formData.get("user");
const password = formData.get("password");
const rpassword = formData.get("rpassword");

const {data, error} = await server.auth.signUp({
    email: email as string,
    password: password as string
})

if (error) {
    redirect("/error")
} else {
    redirect("/dashboard")
}


}
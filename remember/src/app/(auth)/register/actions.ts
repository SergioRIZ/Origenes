'use server'

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function register (formData: FormData) {

const server = await createClient()

const email = formData.get("email");
const name = formData.get("name");
const password = formData.get("password");

const {data, error} = await server.auth.signUp({
    email: email as string,
    password: password as string,
    options: {data: {name: name as string} }
})
if (error) {
    redirect("/error")
} else {
    redirect("/dashboard")
}
}
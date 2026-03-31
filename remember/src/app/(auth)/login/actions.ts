'use server'

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function login (formData: FormData) {

    const server = await createClient()

    const email = formData.get("email");
    const password = formData.get("password")

    const {data, error} = await server.auth.signInWithPassword({
        email: email as string,
        password: password as string
    })

    if(error) {
        redirect('/error')
    } else {
        redirect('/dashboard')
    }
}
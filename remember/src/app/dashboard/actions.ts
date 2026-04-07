'use server'

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function logout(){

    const server = await createClient()

    await server.auth.signOut()

    redirect ("/login")

}
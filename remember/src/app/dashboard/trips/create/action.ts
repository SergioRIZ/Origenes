'use server'

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function tripCreation (formdata:FormData) {

    const server = await createClient()

    const title = formdata.get("title")
    const country = formdata.get("country")
    const location = formdata.get("location")
    const adults = formdata.get("adults")
    const kids = formdata.get("kids")
    const pets = formdata.get("pets")
    const start_date = formdata.get("start_date")
    const end_date = formdata.get("end_date")

    const {data, error} = await server.auth.getUser()

    const profile_id = data.user?.id

    const {error: insertError} = await server.from("trip").insert({title, country, profile_id, location, adults, kids, pets, start_date, end_date})

    if(error || insertError) {
        redirect("/error")
    } else {
        redirect("/dashboard/trips")
    }
    
}
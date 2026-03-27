'use server'

import { createClient } from "@/lib/supabase/server"

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
    
}
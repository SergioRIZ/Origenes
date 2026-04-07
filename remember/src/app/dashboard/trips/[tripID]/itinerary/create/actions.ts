'use server'

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createItinerary (formData: FormData){

    const server = await createClient()

    const trip_id = formData.get("trip_id")
    const activity = formData.get("activity")
    const location = formData.get("location")
    const date = formData.get("date")
    const start_time = formData.get("start_time")
    const end_time = formData.get("end_time")

    const {error: insertError} = await server.from("itinerary").insert({trip_id, activity, location, date, start_time, end_time})

    if (insertError){
        redirect("/error")
    } else {
        redirect(`/dashboard/trips/${trip_id}/itinerary`)
    }


}
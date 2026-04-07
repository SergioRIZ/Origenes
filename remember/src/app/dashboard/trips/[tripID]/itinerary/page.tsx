import { createClient } from "@/lib/supabase/server";

export default async function show_activity({params}: {params: Promise<{ tripID: string}>}) {

    const server = await createClient()

    const {tripID} = await params

    const {data: trip, error: tripError} = await server.from("itinerary").select().eq("trip_id", tripID)

    return (
        <main className="">
            {trip?.map((trips) => (
                <div key={trips.id} className="">
                    <p>Actividad: {trips.activity}</p>
                    <p>Localizacion: {trips.location}</p>
                    <p>Fecha: {trips.date}</p>
                    <p>Hora de comienzo: {trips.start_time}</p>
                    <p>Hora de finalización: {trips.end_time}</p>
                </div>
            ))}
        </main>
    )

}
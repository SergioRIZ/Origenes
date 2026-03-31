import { createClient } from "@/lib/supabase/server";

export default async function TripsPage() {

const server = await createClient()

const {data, error} = await server.auth.getUser()

const profile_id = data.user?.id

const {data: trips, error: tripsError} = await server.from("trip").select().eq("profile_id", profile_id) 

return (
    <main className="">
        {trips?.map((trip) => (
        <div key={trip.id} className="">
            <p>Titulo Viaje: {trip.title}</p>
            <p>Pais: {trip.country}</p>
            <p>Lugar: {trip.location}</p>
            <p>Adultos: {trip.adults}</p>
            <p>Niños: {trip.kids}</p>
            <p>Mascotas: {trip.pets}</p>
            <p>Comienzo de viaje: {trip.start_date}</p>
            <p>Final de viaje: {trip.end_date}</p>
        </div>
        ))}

    </main>
)
}


import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function showTrip({params}: {params: Promise<{ tripID: string}>}) {

    const {tripID} = await params

    const server = await createClient()

    const {data: trips, error: selecError} = await server.from("trip").select().eq("id", tripID).single()

    return (
        <main className="">
            <div className="">
                <Link href={`/dashboard/trips/${tripID}/itinerary/create`}>Crear actividad</Link>
                <Link href={`/dashboard/trips/${tripID}/itinerary`}>Ver itinerario</Link>
                <p className="">Titulo: {trips?.title}</p>
                <p className="">Pais: {trips?.country}</p>
                <p className="">Localización {trips?.location}</p>
                <p className="">Adultos: {trips?.adults}</p>
                <p className="">Niños: {trips?.kids}</p>
                <p className="">Mascotas: {trips?.pets}</p>
                <p className="">Comienzo viaje: {trips?.start_date}</p>
                <p className="">Finalización viaje: {trips?.end_date}</p>
                <p className="">Viaje creado el: {trips?.created_at}</p>
            </div>
        </main>
    )

}
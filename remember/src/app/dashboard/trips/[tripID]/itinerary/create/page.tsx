import { createItinerary } from "./actions";

export default async function itinerary ({params}: {params: Promise<{ tripID: string}>}) {

    const {tripID} = await params

    return (
        <form action={createItinerary}>
            
                    <div>
                        <section>
                            <input type="hidden" name="trip_id" value={tripID} />
                        </section>
                        <section>
                            <label htmlFor="activity">Actividad: </label>
                            <input type="text" id="activity" name="activity"/>
                        </section>
                        <section>
                            <label htmlFor="location">Localización: </label>
                            <input type="text" id="location" name="location"/>
                        </section>
                        <section>
                            <label htmlFor="date">Fecha: </label>
                            <input type="date" id="date" name="date"/>
                        </section>
                        <section>
                            <label htmlFor="start_time">Hora de comienzo: </label>
                            <input type="time" id="start_time" name="start_time"/>
                        </section>
                        <section>
                            <label htmlFor="end_time">Hora de finalización: </label>
                            <input type="time" id="end_time" name="end_time"/>
                        </section>
                        <button type="submit">Create Activity</button>
                    </div>
        </form>
    )

}
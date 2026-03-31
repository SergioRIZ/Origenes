import { tripCreation } from "./action";

export default function createTrip () {

return(

    <main>
        <div>
            <form action={tripCreation}>
            <section>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title"/>
            </section>
            <section>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" name="country"/>
            </section>
            <section>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location"/>
            </section>
            <section>
                <label htmlFor="adults">Adults</label>
                <input type="number" id="adults" name="adults"/>
            </section>
            <section>
                <label htmlFor="kids">Kids</label>
                <input type="number" id="kids" name="kids"/>
            </section>
            <section>
                <label htmlFor="pets">Pets</label>
                <input type="number" id="pets" name="pets"/>
            </section>
            <section>
                <label htmlFor="start_date">Start Date</label>
                <input type="date" id="start_date" name="start_date"/>
            </section>
            <section>
                <label htmlFor="end_date">End Date</label>
                <input type="date" id="end_date" name="end_date"/>
            </section>
            <button type="submit">Create Trip</button>
            </form>
        </div>
    </main>
    
)

}
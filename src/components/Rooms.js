import axios from "axios";
import { useState, useEffect } from "react";

const Rooms = () => {

    const [loading, setLoading] = useState(true);
    const [rooms, setRooms] = useState();

    useEffect(() => {
        axios("http://localhost:4000/rooms")
            .then(response => setRooms(response.data))
            .finally(() => setLoading(false))
    }, []);

    rooms && console.log(rooms)
    return ( <section>
        {loading && <p>loading...</p>}

        {rooms && (
            <>    
                <h2>{rooms.headline}</h2>
                <p>{rooms.text}</p>
                <div>
                    {rooms.roomtypes.map(room => (
                        <article key={room.id}>
                            <p>{room.type}</p>
                        </article>
                    ))}
                </div>
            </>
        )}
        </section>
     );
}
 
export default Rooms;
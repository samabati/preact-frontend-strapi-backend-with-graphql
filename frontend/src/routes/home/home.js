import useFetch from "../../hooks/useFetch";
import { Link } from "preact-router";

const Home = () => {

    const {loading, error, data} = useFetch('http://localhost:1337/api/reviews')

    if (loading) return <p>Loading...</p>
    if (error) return <p>An error has occured :( testing123</p>

    console.log(data.data);

    return ( 
        <div className="Home">
            {data.data.map(review => (
                <div className="review-card" key={review.id}>
                    <div className="rating">{review.attributes.rating}</div>
                    <h2>{review.attributes.title}</h2>
                    <small>console.list</small>
                    <p>{review.attributes.body[0].children[0].text.substring(0,200)} ...</p>
                    <Link href={`/reviews/${review.id}`}>Read more</Link>
                </div>
            ))}
        </div>
     );
}
 
export default Home;
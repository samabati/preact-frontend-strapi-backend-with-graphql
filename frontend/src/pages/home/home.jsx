import { Link } from "preact-router";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error has occured :( testing123</p>;

  console.log(data);

  return (
    <div className="Home">
      {data.reviews.data.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          {review.attributes.categories.data.map((category) => (
            <small>{category.attributes.name}</small>
          ))}
          <p>
            {review.attributes.body[0].children[0].text.substring(0, 200)} ...
          </p>
          <Link href={`/reviews/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

import { useQuery, gql } from "@apollo/client";

const CATEGORY = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
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
      }
    }
  }
`;

const Category = ({ id }) => {
  const { data, error, loading } = useQuery(CATEGORY, {
    variables: { id: id },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...</p>;

  console.log(data);

  return (
    <div className="category">
      <h2>{data.category.data.attributes.name}</h2>
      {data.category.data.attributes.reviews.data.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          {review.attributes.categories.data.map((category) => (
            <small>{category.attributes.name}</small>
          ))}
          <p>
            {review.attributes.body[0].children[0].text.substring(0, 200)}
            ...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Category;

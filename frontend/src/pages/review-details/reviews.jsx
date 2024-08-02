import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
query getReview($id : ID!){
review(id: $id){
data{
id
attributes{
title,
body,
rating}
}}
}
`;

const Reviews = ({ id }) => {

    const {data, loading, error} = useQuery(REVIEW, {
        variables: {id: id}
    })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    console.log('review page', data)

  console.log(data);

  return (
    <div className="review-card">
      <div className="rating">{data.review.data.attributes.rating}</div>
      <h2>{data.review.data.attributes.title}</h2>
      <small>console list</small>
      <p>{data.review.data.attributes.body[0].children[0].text}</p>
    </div>
  );
};

export default Reviews;

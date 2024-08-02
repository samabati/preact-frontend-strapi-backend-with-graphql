import { Link } from "preact-router";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query getCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

const SiteHeader = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("categories", data);

  return (
    <div className="site-header">
      <Link href="/">
        <h1>Ninja reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter reviews by category:</span>
        {data.categories.data.map((cat) => (
          <Link href={`/category/${cat.id}`} key={cat.id}>
            {cat.attributes.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SiteHeader;

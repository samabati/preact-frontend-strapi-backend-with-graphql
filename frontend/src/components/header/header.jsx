import { Link } from "preact-router";

const SiteHeader = () => {
    return ( 
        <div className="site-header">
            <Link to="/">
            <h1>Game reviews</h1>
            </Link>
        </div>
     );
}
 
export default SiteHeader;
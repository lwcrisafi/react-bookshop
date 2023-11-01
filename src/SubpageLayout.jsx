import { Outlet, Link } from "react-router-dom";


export default function SubpageLayout() {
  return (
    <div className="layout">
      <Link to="/">Back to Home</Link>
      <div className="layout_content">
        <Outlet />
      </div>
      
    </div>
  );
}

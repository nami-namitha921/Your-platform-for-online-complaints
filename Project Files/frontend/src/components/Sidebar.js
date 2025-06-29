import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/submit">Submit Complaint</Link>
      <Link to="/status">Status</Link>
      <Link to="/chat">Message</Link>
      <Link to="/feedback">Feedback</Link>
    </aside>
  );
}

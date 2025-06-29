import { useEffect, useState } from "react";
import api from "../api";

export default function ComplaintStatus() {
  const [list, setList] = useState([]);

  useEffect(() => { api.get("/complaints/mine").then(r => setList(r.data)); }, []);

  return (
    <div className="page-container">
      <h2>My Complaints</h2>
      <ul>
        {list.map(c => (
          <li key={c._id}>{c.title} — {c.status}</li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
import api from "../api";

export default function SubmitComplaint() {
  const [form, setForm] = useState({ title: "", description: "" });
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    await api.post("/complaints", form);
    alert("Complaint submitted");
    setForm({ title: "", description: "" });
  };

  return (
    <div className="page-container">
      <h2>Submit Complaint</h2>
      <form onSubmit={submit} className="form">
        <input name="title" placeholder="Title" value={form.title} onChange={handle} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handle} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

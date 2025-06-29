import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    register(form);
  };

  return (
    <div className="page-container">
      <h2>Register</h2>
      <form onSubmit={submit} className="form">
        <input name="name" placeholder="Name" onChange={handle} required />
        <input name="email" placeholder="Email" onChange={handle} required />
        <input name="password" type="password" placeholder="Password" onChange={handle} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

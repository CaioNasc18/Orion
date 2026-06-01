import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://orion-dewp.onrender.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            setStatus(data.message);

            setForm({ name: "", email: "", message: "" });

        } catch (error) {
            setStatus("Error sending message");
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <h2>Contact Us</h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send</button>
            </form>

            {status && <p>{status}</p>}
        </div>
    );
}
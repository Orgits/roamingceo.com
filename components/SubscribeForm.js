import { useState } from "react";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("");

        // Basic Email Validation
        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            setResult("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        // Web3Forms API Integration (or replace with your backend)
        const formData = new FormData();
        formData.append("access_key", "60166303-5a0e-4712-8a73-8b9b25559efc"); // Replace with actual key
        formData.append("email", email);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Subscribed successfully!");
                setEmail("");
            } else {
                setResult("Subscription failed. Please try again.");
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <form className="input-group form-subcriber mt-30 d-flex" onSubmit={onSubmit}>
            <input
                type="email"
                className="form-control bg-white font-small"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="btn bg-primary text-white" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Subscribe"}
            </button>
            {result && <p className="mt-2">{result}</p>}
        </form>
    );
}
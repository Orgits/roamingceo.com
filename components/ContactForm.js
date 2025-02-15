import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        comment: "",
        access_key: "60166303-5a0e-4712-8a73-8b9b25559efc", // Replace with your Web3Forms Access Key
    });

    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        setResponse(result);

        if (result.success) {
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                website: "",
                comment: "",
                access_key: "60166303-5a0e-4712-8a73-8b9b25559efc",
            });
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <form className="form-contact comment_form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="website"
                            id="website"
                            type="text"
                            placeholder="Phone"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <textarea
                            className="form-control w-100"
                            name="comment"
                            id="comment"
                            cols="30"
                            rows="9"
                            placeholder="Message"
                            value={formData.comment}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="button button-contactForm">
                    Send message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
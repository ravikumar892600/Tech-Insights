import emailjs from "@emailjs/browser";
import { useState } from "react";
import contactImage from "../assets/contact-image.svg";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      // Mail to You
      await emailjs.send(
        "service_n1ld08z",
        "template_ccf5crf",
        templateParams,
        "35l8KJhvRYJCCRmUL",
      );

      alert("✅ Message Sent Successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <h1 className="text-5xl font-bold text-[#354770] mb-6">
                Contact Me
              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                Feel free to reach out for collaboration, project inquiries,
                freelance work, or just to say hi. I'd love to hear from you.
              </p>

              <img
                src={contactImage}
                alt="Contact"
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Right Side */}
            <div className="bg-white shadow-xl rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-[#354770] mb-8">
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="font-medium">
                    Full Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full mt-2 border rounded-xl px-4 py-3 outline-none ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-medium">
                    Mobile Number
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="1234567890"
                    className={`w-full mt-2 border rounded-xl px-4 py-3 outline-none ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-medium">
                    Email Address
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className={`w-full mt-2 border rounded-xl px-4 py-3 outline-none ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-medium">
                    Message
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={`w-full mt-2 border rounded-xl px-4 py-3 outline-none resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-[#354770] text-white py-4 rounded-xl font-semibold cursor-pointer shadow-lg hover:bg-[#2d3b5f] hover:shadow-[0_15px_35px_rgba(53,71,112,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-md transition-all duration-300" >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;

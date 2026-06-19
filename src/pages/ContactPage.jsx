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
  // 1. Loading state add ki
  const [isSending, setIsSending] = useState(false);

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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // 2. Loading start ki
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_n1ld08z",
        "template_ccf5crf",
        templateParams,
        "35l8KJhvRYJCCRmUL"
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
    } finally {
      // 3. Email send hone ke baad (ya error aane par) loading stop ki
      setIsSending(false);
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

                {/* Updated Button with Loader & Icons */}
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-[#354770] text-white py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSending
                      ? "opacity-70 cursor-not-allowed"
                      : "cursor-pointer hover:bg-[#2d3b5f] hover:shadow-[0_15px_35px_rgba(53,71,112,0.4)] hover:-translate-y-1 active:translate-y-0 active:shadow-md"
                  }`}
                >
                  {isSending ? (
                    <>
                      {/* Gol-Gol ghumne wala SVG Spinner */}
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          type="text"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Message
                      {/* Normal Send Icon (Paper Plane) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                      </svg>
                    </>
                  )}
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
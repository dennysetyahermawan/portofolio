import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    if (!name) {
      setErrorMessage("Name is Required");
    }

    await fetch("https://getform.io/f/rbegqgpb", {
      method: "post",
      body: formData,
    });
  };

  const handlerInput = (e) => {
    if (e.target.name === "fullname") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact Me
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            {/* Form */}
            <form onSubmit={sendData}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                {/* Name */}
                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name="fullname"
                      id=""
                      onChange={handlerInput}
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                {/* email */}
                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      name="email"
                      id=""
                      onChange={handlerInput}
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                {/* Message */}
                <div className="sm:col-span-2">
                  <div className="mt-2.5 relative">
                    <textarea
                      type="text"
                      name="message"
                      id=""
                      onChange={handlerInput}
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      rows={4}
                    />
                  </div>
                </div>
                <p className="text-red-500">{errorMessage}</p>
                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

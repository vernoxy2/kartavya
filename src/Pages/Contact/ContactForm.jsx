import React from "react";
import { BiSolidSend } from "react-icons/bi";

const ContactForm = () => {
  return (
    <section className="py-8 md:py-12 container space-y-6">
      <div className="bg-primary p-1.5 rounded-xl">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          {/* Form Section */}
          <div className="w-full md:w-1/2 xl:w-5/12 bg-white p-5 md:p-8 rounded-xl">
            <form className="space-y-4 ">
              <div className="flex flex-col space-y-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="p-4 rounded-lg md:text-xl border border-primary placeholder:text-primary bg-[#dfdfdf]/50"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-4 rounded-lg md:text-xl border placeholder:text-primary bg-[#dfdfdf]/50 border-primary"
                />
              </div>

              <div className="flex flex-col space-y-1">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={4}
                  className="p-4 rounded-lg md:text-xl border border-primary resize-none placeholder:text-primary bg-[#dfdfdf]/50"
                />
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-semibold p-4 rounded-lg transition duration-300 flex w-full md:text-2xl items-center justify-between"
              >
                Send Message
                <BiSolidSend className=" text-xl md:text-3xl md:me-4" />
              </button>
            </form>
          </div>

          {/* Text Content Section */}
          <div className="w-full md:w-1/2 text-white p-4 lg:p-6 space-y-4 md:text-start flex flex-col justify-center">
            <p className="text-lg md:text-2xl font-semibold">
              Have any query ?
            </p>
            <h1 className="text-2xl md:text-4xl xl:text-6xl font-extrabold">
              Contact Us
            </h1>
            <p className="text-lg md:text-2xl font-semibold xl:w-4/5">
              Reach out for expert label solutions, custom support, and quick
              assistance from Kartavya Label Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

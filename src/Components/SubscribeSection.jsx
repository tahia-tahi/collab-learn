import React from "react";
import Lottie from "lottie-react";
import subscribeAnimation from "../assets/subscribe.json"; // Adjust the path

const SubscribeSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text and Form */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Stay Updated!
          </h2>
          <p className="text-gray-600">
            Subscribe to get the latest updates, news, and assignment tips straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="btn btn-primary px-6 py-2 text-white hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Lottie Animation */}
        <div className="flex-1">
          <Lottie className="text-secondary" animationData={subscribeAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;

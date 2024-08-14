import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We’d love to hear from you! Whether you have a question about our
            menu, orders, or anything else, our team is ready to answer all your
            questions.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Address:</h3>
            <p className="text-gray-600">Hostel 7, Bit, Mesra, Ranchi</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Phone:</h3>
            <p className="text-gray-600">+91 9835081173</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Email:</h3>
            <p className="text-gray-600">iamjeetsingh46@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-500 px-2">{errors.name}</p>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 px-2">{errors.email}</p>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                placeholder="Your Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {errors.message && touched.message ? (<p className="text-red-500 px-2">{errors.message}</p>) : null}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// pages/index.tsx

import Head from 'next/head';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <Head>
        <title>Inquiry</title>
      </Head>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Contact</h1>
        <form
          action="https://formsubmit.co/frf121314@yahoo.com"
          method="POST"
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative border-2 border-gradient-red rounded-lg">
              <input
                type="text"
                name="name"
                className="w-full py-2 pl-3 pr-10 rounded-lg bg-gray-900 text-white focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="relative border-2 border-gradient-red rounded-lg">
              <input
                type="email"
                name="email"
                className="w-full py-2 pl-3 pr-10 rounded-lg bg-gray-900 text-white focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="relative border-2 border-gradient-red rounded-lg">
            <textarea
              name="message"
              rows={10}
              className="w-full py-2 pl-3 pr-10 rounded-lg bg-gray-900 text-white focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200"
              placeholder="Please reach out with your goals, best times to train and any questions!"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="block w-full py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold text-center focus:outline-none focus:ring focus:ring-red-200"
          >
            Submit Form
          </button>
        </form>
      </div>

      <style jsx>{`
        .border-gradient-red {
          background: linear-gradient(to right, #DC2626, #941E21, #B2B2B2);
          color: transparent;
          border-image-source: linear-gradient(to right, #DC2626, #941E21, #B2B2B2);
          border-image-slice: 1;
        }
      `}</style>
    </div>
  );
};

export default ContactForm


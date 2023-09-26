import emailjs from "@emailjs/browser";
import { useRef } from "react";
import ReplayIcon from "@mui/icons-material/Replay";

function Contact() {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        () => {
          alert("You have successfully sent your message!");
        },
        () => {
          alert("You have failed to send your message!");
        }
      );
  };

  return (
    <section id="contact" className="flex flex-col place-content-center items-center text-center py-36 px-6">
      <div className="flex flex-col place-content-center items-center max-w-xl">
        <h1 className="text-3xl font-semibold mb-3">Let's Connect</h1>
        <p className="mb-5">
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
        <form
          className="flex flex-col mt-10 w-full max-w-sm"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col text-start mb-3">
            <label className="font-medium mb-1" htmlFor="user_name">
              Enter your name
            </label>
            <input
              className="border border-black rounded-lg h-8 pl-1 py-4 outline-color capitalize dark:text-gray-900"
              type="text"
              name="user_name"
              id="user_name"
              required
              aria-required
            />
          </div>
          <div className="flex flex-col text-start mb-3">
            <label className="font-medium mb-1" htmlFor="user_email">
              Enter your email
            </label>
            <input
              className="border border-black rounded-lg h-8 pl-1 py-4 outline-color dark:text-gray-900"
              type="email"
              name="user_email"
              id="user_email"
              required
              aria-required
            />
          </div>
          <div className="flex flex-col text-start mb-3">
            <label className="font-medium mb-1" htmlFor="message">
              Enter your message
            </label>
            <textarea
              className="border border-black rounded-lg pl-1 py-1 outline-color dark:text-gray-900"
              name="message"
              id="message"
              cols={30}
              rows={5}
              maxLength={500}
              required
            />
          </div>
          <div className="flex place-content-center gap-4 mt-4">
            <button
              className="py-1 px-6 font-medium bg-cyan-400 text-white border border-black dark:border-white rounded-lg"
              type="submit"
              value="Send"
            >
              Send
            </button>
            <button
              className="py-1 px-6 font-medium bg-fuchsia-500 text-white border border-black dark:border-white rounded-lg"
              type="reset"
            >
              <ReplayIcon />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

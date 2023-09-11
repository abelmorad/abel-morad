import ReplayIcon from "@mui/icons-material/Replay";

function Contact() {
  return (
    <section className="flex flex-col place-content-center items-center text-center py-36 px-6">
      <div className="flex flex-col place-content-center items-center max-w-xl">
        <h1 className="text-3xl font-semibold mb-3">Let's Connect</h1>
        <p className="mb-5">
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
        <form className="flex flex-col mt-10 w-full max-w-sm">
          <div className="flex flex-col text-start mb-3">
            <label className="font-medium mb-1" htmlFor="name">
              Enter your name
            </label>
            <input
              className="border border-black rounded-lg h-8 pl-4 py-4 outline-color"
              type="text"
              name="name"
              id="name"
              required
              aria-required
            />
          </div>
          <div className="flex flex-col text-start mb-3">
            <label className="font-medium mb-1" htmlFor="email">
              Enter your email
            </label>
            <input
              className="border border-black rounded-lg h-8 pl-4 py-4 outline-color"
              type="email"
              name="email"
              id="email"
              required
              aria-required
            />
          </div>
          <div className="flex flex-col text-start mb-3">
            <label className="font-medium mb-1" htmlFor="message">
              Enter your message
            </label>
            <textarea
              className="border border-black rounded-lg pl-4 py-4 outline-color"
              name="message"
              id="message"
              cols="30"
              rows="10"
              maxLength="500"
            />
          </div>
          <div className="flex place-content-center gap-4 mt-4">
            <button
              className="py-1 px-6 font-medium border-2 border-black dark:border-white rounded-lg"
              type="submit"
            >
              Send
            </button>
            <button
              className="py-1 px-6 font-medium border-2 border-black dark:border-white rounded-lg"
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

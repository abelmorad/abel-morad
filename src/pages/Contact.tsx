import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="flex flex-col place-content-center items-center text-center h-screen px-6">
      <h1 className="text-3xl font-semibold mb-3">Let's Connect</h1>
      <p className="mb-5 tablet:px-14 laptop:px-32">
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>
      <Link
        to="mailto:abelmorad97@gmail.com"
        target="_blank"
        className="px-4 py-2 font-medium vaporwave-border"
      >
        Message me
      </Link>
    </section>
  );
}

export default Contact;

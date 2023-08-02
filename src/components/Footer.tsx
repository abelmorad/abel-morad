function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center place-content-center text-xs py-3 fixed bottom-0 w-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <p>Copyright &copy; {currentYear} | Built by Sharhabeel Morad</p>
    </footer>
  );
}

export default Footer;

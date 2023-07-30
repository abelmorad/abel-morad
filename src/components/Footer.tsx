function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center place-content-center text-xs">
      <p className="absolute bottom-0 mb-3">Copyright &copy; {currentYear} | Built by Sharhabeel Morad</p>
    </footer>
  );
}

export default Footer;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center place-content-center text-xs mb-3">
      <p>Copyright &copy; {currentYear} | Built by Sharhabeel Morad</p>
    </footer>
  );
}

export default Footer;

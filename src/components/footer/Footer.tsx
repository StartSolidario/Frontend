function Footer() {
    let data = new Date().getFullYear();
  
    return (
      <footer className="w-full h-[100px] bg-[#2B4042] flex items-center justify-between px-[50px] md:px-[150px] py-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[50px]"> {/* Links */}
          <div className="text-[#F5F4D6] text-[18px] md:text-[24px]">
            © {data} StartSolidario, Inc.
          </div>
          <a href="#about" className="text-[#F5F4D6] text-[18px] md:text-[24px] hover:text-[#C5C5A5] transition-colors">
            Sobre Nós
          </a>
          <a href="#contact" className="text-[#F5F4D6] text-[18px] md:text-[24px] hover:text-[#C5C5A5] transition-colors">
            Contate-nos
          </a>
        </div>
        <a href="https://github.com/StartSolidario" target="_blank" rel="noopener noreferrer" className="text-[#F5F4D6] text-[18px] md:text-[24px] hover:text-[#C5C5A5] transition-colors">
          Github
        </a>
      </footer>
    );
  }
  
  export default Footer;
  
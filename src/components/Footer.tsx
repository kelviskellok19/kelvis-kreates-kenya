const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Kelvis Kiyimba Emmanuel. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-primary-foreground/80">
            Aspiring Entrepreneur | Business Enthusiast | Cultural Performer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="text-secondary-foreground container mx-auto px-4 text-center text-lg">
        <p>&copy; {new Date().getFullYear()} FinSight. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

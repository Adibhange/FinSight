const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t py-12">
      <div className="container mx-auto px-4 text-center text-lg text-secondary-foreground">
        <p>&copy; {new Date().getFullYear()} FinSight. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

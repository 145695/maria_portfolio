export const Footer = () => {
  return (
    <footer 
      className="relative z-10 py-12 text-center border-t  border-border/40 bg-background/50 backdrop-blur-sm"
      style={{ pointerEvents: 'auto' }}
    >
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Maria Boukhelfa. All rights reserved.
      </p>
      <a href="#hero" className="text-sm text-muted-foreground hover:text-primary
       transition-colors duration-300" style={{ pointerEvents: 'auto' }}>
        Back to top
      </a>
    </footer>
  );
};
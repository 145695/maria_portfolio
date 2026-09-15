import { cn } from "@/lib/utils";
import{useEffect , useState} from "react";
import { Menu , X } from "lucide-react";
const navItems = [
  { name : "Home" , href : "#hero"},
  { name : "About" , href : "#about"},
  { name : "Skills" , href : "#skills"},
  { name : "Projects" , href : "#projects"},
  { name : "Contacts" , href : "#contacts"}
];
export const Navbar = () => {
  const [isScrolled , setIsScrolled] = useState(false);
  const [isManuOpen , setIsManuOpen] = useState(false);
  useEffect(() => {
    const HandleScroll= () => {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll" , HandleScroll);
    return () => {
      window.removeEventListener("scroll" , HandleScroll);
    }
  },[])
  return (
    <nav className ={cn("fixed w-full z-40 transition-all duration-300"
      , isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    ) } > 
  <div className="container flex items-center justify-between">
      <a className ="test-xl font-bold text-primary flex items-centre" href = "#hero" >
          <span className="relive z-10" >
            <span className="text-glow text-foreground "> Maria's</span> Portfolio
          </span>
      </a>
      {/* desktop */}
      <div className="hidden  md:flex space-x-8">
        {navItems.map((item , key) => (
          <a key={item.name} href = {item.href} className="text-forground/80  hover:text-primary transition-colors duration-300">
            { item.name }
          </a>
        ))}
      </div>


      {/* mobile */}
      <button onClick={() => setIsManuOpen((prev) => !prev)} 
        className="md:hidden p-2 text-foreground z-50"
        aria-label={isManuOpen ? "Close menu" : "Open menu"}>
        {isManuOpen ? <X size={24} /> : <Menu size={24}/>}

      </button>
      <div className={ cn ("fixed inset-0 bg-background/95 backdrop-blur-md z-  40 flex flex-col items-center justify-center" 
      ,"transition-all duration-300 md:hidden", isManuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none") } >

        <div className="flex flex-col  space-y-8">
          {navItems.map((item , key) => (
            <a key={item.name} href = {item.href} className="text-forground/80  hover:text-primary transition-colors duration-300"
            onClick={() => setIsManuOpen(true)}
            >
              { item.name }
            </a>
          ))}
        </div>
      </div>
  </div>
    </nav>)  };
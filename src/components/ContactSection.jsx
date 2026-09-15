import { useState } from 'react';
import { MapPin, Mail, Phone, Send, Loader2 } from 'lucide-react';
import { cn } from "@/lib/utils";
import { toast } from "sonner"; 

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Start loading state immediately when clicked

    const formData = new FormData(event.target);
    formData.append("access_key", "f84e0b5e-33ef-49e1-b33a-b816b92cd51d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out! I'll get back to you as soon as possible."
        });
        event.target.reset(); 
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false); // Reset button state after completion (success or error)
    }
  };

  return (
    <section id="contacts" className="py-24 relative bg-secondary/30"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? 
          Feel free to reach out. I'm always open to new opportunities and collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ pointerEvents: 'auto' }}>   
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:maria.boukhelfa.dev@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    maria.boukhelfa.dev@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+213541469952" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +213 541 469 952
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Algeria</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/maria-boukhelfa-5b0b8333a" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="h-6 w-6 dark:invert hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="https://www.instagram.com/maria_learn_cs" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
                    alt="Instagram"
                    className="h-6 w-6 dark:invert hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            
            <form className="space-y-4" onSubmit={onSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                  required 
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                  required 
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Hello, I'd like to talk about..." 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none" 
                  required 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
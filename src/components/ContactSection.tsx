
import { useState } from "react";
import Section from "./Section";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, Send, ExternalLink } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: "Email",
      value: "ashvanip76@gmail.com",
      link: "mailto:ashvanip76@gmail.com",
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+91 8429744454",
      link: "tel:+918429744454",
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://linkedin.com",
    },
    {
      icon: <Github />,
      label: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com",
    },
    {
      icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3 4 7l4 4"/><path d="m12 3 4 4-4 4"/><path d="M16 3h4v4"/><path d="M4 11v4h4"/><path d="M20 11v10H4v-4"/></svg>,
      label: "LeetCode",
      value: "LeetCode Profile",
      link: "https://leetcode.com",
    },
    {
      icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14.76a2.76 2.76 0 1 0 0-5.52 2.76 2.76 0 0 0 0 5.52Z"/><path d="M12 2v5.76"/><path d="m4.18 6.2 4.98 2.87"/><path d="M2 12h5.76"/><path d="m4.18 17.8 4.98-2.87"/><path d="M12 22v-5.76"/><path d="m19.82 17.8-4.98-2.87"/><path d="M22 12h-5.76"/><path d="m19.82 6.2-4.98 2.87"/></svg>,
      label: "GeeksforGeeks",
      value: "GeeksforGeeks Profile",
      link: "https://geeksforgeeks.org",
    },
  ];

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a question or want to work together? Feel free to contact me.">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit}
            className={cn(
              "p-6 rounded-xl",
              theme === "dark" 
                ? "bg-card border border-green-900/30" 
                : "bg-card border border-red-900/10"
            )}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={cn(
                      theme === "dark" 
                        ? "border-green-900/50 focus-visible:ring-green-500/20" 
                        : "border-red-900/20 focus-visible:ring-red-500/20"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={cn(
                      theme === "dark" 
                        ? "border-green-900/50 focus-visible:ring-green-500/20" 
                        : "border-red-900/20 focus-visible:ring-red-500/20"
                    )}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  required
                  className={cn(
                    "resize-none",
                    theme === "dark" 
                      ? "border-green-900/50 focus-visible:ring-green-500/20" 
                      : "border-red-900/20 focus-visible:ring-red-500/20"
                  )}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full gap-2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          <div 
            className={cn(
              "p-6 rounded-xl",
              theme === "dark" 
                ? "bg-card border border-green-900/30" 
                : "bg-card border border-red-900/10"
            )}
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-lg transition-colors",
                    theme === "dark" 
                      ? "hover:bg-green-500/10" 
                      : "hover:bg-red-500/10"
                  )}
                >
                  <div 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      theme === "dark" 
                        ? "bg-green-500/10 text-green-400" 
                        : "bg-red-500/10 text-red-500"
                    )}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
          
          <div 
            className={cn(
              "p-6 rounded-xl text-center",
              theme === "dark" 
                ? "bg-green-500/10 border border-green-900/30" 
                : "bg-red-500/10 border border-red-900/20"
            )}
          >
            <h3 className="text-lg font-bold mb-4">Open to Opportunities</h3>
            <p className="text-sm">
              Currently looking for software development internships and freelance opportunities. Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

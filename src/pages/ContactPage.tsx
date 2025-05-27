
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! Thank you for reaching out.");
  };

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-petrol dark:text-accent mb-6">
          Contact
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am open to research collaborations, speaking opportunities, and consultancy in the fields of applied mathematics, AI, and neuroscience.
            </p>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-petrol/10 flex items-center justify-center text-petrol dark:bg-accent/10 dark:text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">
                        Email
                      </h3>
                      <a href="mailto:elmiramirzabeigi7@gmail.com" className="text-petrol hover:text-petrol-light dark:text-accent dark:hover:text-accent/80">
                        elmiramirzabeigi7@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-petrol/10 flex items-center justify-center text-petrol dark:bg-accent/10 dark:text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">
                        Social Media
                      </h3>
                      <div className="space-x-2">
                        <a href="https://github.com/ElmiraMirzabeigi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">GitHub</a>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/elmira-mirzabeigi-7b0661217/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">LinkedIn</a>
                        <span>•</span>
                        <a href="https://scholar.google.com/citations?hl=en&user=Z6ditbAAAAAJ" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">Google Scholar</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Send a Message
            </h2>
            <form
              action="https://formspree.io/f/xvgajenw"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input required name="name" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input type="email" required name="email" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input required name="subject" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea required rows={5} name="message" />
              </div>

              <Button
                type="submit"
                className="w-full bg-petrol hover:bg-petrol-light dark:bg-accent dark:text-gray-900 dark:hover:bg-accent/80"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

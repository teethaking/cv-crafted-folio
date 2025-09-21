import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "teeagbaji@gmail.com",
      href: "mailto:teeagbaji@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 906 727 5925",
      href: "tel:+2349067275925"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kaduna State, Karji, Nigeria",
      href: ""
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tobechukwu-agbaji-b259a7345",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Teethaking",
      color: "bg-gray-800 hover:bg-gray-900"
    }
  ];

  return (
    <section className="min-h-screen section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and programming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="card-hover animate-slide-up">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="card-hover animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Feel free to reach out through any of these platforms. 
                I typically respond within 24 hours.
              </p>

              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    className="w-full justify-start"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-4 w-4 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>

              {/* Email CTA */}
              <div className="pt-4 border-t border-border">
                <Button 
                  className="w-full bg-primary hover:bg-primary-hover"
                  asChild
                >
                  <a href="mailto:teeagbaji@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Availability Status */}
        <Card className="card-hover animate-fade-in mt-8" style={{ animationDelay: "0.2s" }}>
          <CardContent className="py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <Badge variant="secondary" className="bg-success/10 text-success">
                Available for opportunities
              </Badge>
            </div>
            <h3 className="text-xl font-semibold mb-2">Currently Seeking</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm actively looking for internship opportunities, entry-level positions, 
              and collaborative projects where I can apply my skills and continue learning. 
              Open to both remote and on-site opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="outline">Internships</Badge>
              <Badge variant="outline">Entry-level Positions</Badge>
              <Badge variant="outline">Freelance Projects</Badge>
              <Badge variant="outline">Open Source Collaboration</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
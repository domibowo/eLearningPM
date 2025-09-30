import { Card, CardContent, CardHeader, CardTitle } from "./commons/Card";
import { Button } from "./commons/Button";
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-700" />,
      title: "Email Us",
      details: "info@productproacademy.com",
      description: "Get in touch for any questions about our programs"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-700" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our admissions team directly"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-700" />,
      title: "Visit Us",
      details: "123 Innovation Street, Tech District, San Francisco, CA 94105",
      description: "Our headquarters in the heart of Silicon Valley"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-700" />,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-6PM PST",
      description: "Weekend support available via email"
    }
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-700" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      available: "Available 24/7"
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-700" />,
      title: "Schedule a Call",
      description: "Book a 30-minute consultation with our team",
      action: "Book Now",
      available: "Free consultation"
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-700" />,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 24 hours",
      action: "Send Email",
      available: "Response within 24h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our program? Want to speak with an advisor? 
            We're here to help you take the next step in your product management career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-blue-700 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
              <p className="text-gray-600 text-sm">
                We respond to all inquiries within 2 hours during business hours. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Support Options */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">How Can We Help?</h3>
            <div className="space-y-6">
              {supportOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {option.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 mb-2">{option.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-green-600 font-medium">{option.available}</span>
                          <Button variant="outline" size="sm" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                            {option.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 mb-4">
                    Our admissions team is standing by to answer your questions and help you 
                    choose the right program for your career goals.
                  </p>
                  <Button className="bg-blue-700 hover:bg-blue-800 w-full">
                    Call Now: +1 (555) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What are the prerequisites for the program?</h4>
                <p className="text-gray-600 text-sm">No specific prerequisites required. The program is designed for professionals from all backgrounds looking to transition into or advance in product management.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How long does the program take to complete?</h4>
                <p className="text-gray-600 text-sm">The full program is designed to be completed in 14 weeks with 8-10 hours of study per week. However, you can learn at your own pace.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer job placement assistance?</h4>
                <p className="text-gray-600 text-sm">Yes! We provide career coaching, resume reviews, interview preparation, and access to our network of hiring partners.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Is there a money-back guarantee?</h4>
                <p className="text-gray-600 text-sm">We offer a 30-day money-back guarantee. If you're not satisfied with the program within the first 30 days, we'll provide a full refund.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I access the course materials after completion?</h4>
                <p className="text-gray-600 text-sm">Yes! You get lifetime access to all course materials, including future updates and new content additions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What kind of certificate will I receive?</h4>
                <p className="text-gray-600 text-sm">You'll receive an industry-recognized certification in Product Management & Product Ownership that you can share on LinkedIn and your resume.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
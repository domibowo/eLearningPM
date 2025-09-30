import { Card, CardContent, CardHeader, CardTitle } from "./commons/Card";
import { Button } from "./commons/Button";
import { Badge } from "./commons/Badge";
import { Check, Clock, Users, Award, ArrowRight } from "lucide-react";
import { benefits } from "../data/benefits";
import { pricingFeatures } from "../data/pricingFeatures";

export function Registration() {

  return (
    <section id="registration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of professionals who have successfully transitioned into product management 
            and advanced their careers with our comprehensive program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Program Benefits */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Main Registration Card */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-blue-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="text-center">
                  <Badge className="bg-red-100 text-red-800 mb-3">
                    Limited Time Offer - 20% OFF
                  </Badge>
                  <CardTitle className="text-3xl mb-2">Product Management Mastery Program</CardTitle>
                  <p className="text-gray-600">Complete Product Manager & Product Owner Certification</p>
                  
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">14</div>
                      <div className="text-xs text-gray-600">Weeks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">1:1</div>
                      <div className="text-xs text-gray-600">Mentorship</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-700">95%</div>
                      <div className="text-xs text-gray-600">Job Success</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <span className="line-through text-gray-400 text-2xl mr-2">$2,497</span>
                    $1,997
                  </div>
                  <div className="text-gray-600">One-time payment • No hidden fees</div>
                  <div className="text-sm text-green-600 font-semibold mt-1">Save $500 - Ends Soon!</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-700 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Register using our Google Form:</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Fill out our comprehensive application form to secure your spot in the next cohort. 
                    Our admissions team will review your application and contact you within 24 hours.
                  </p>
                  
                  {/* Google Form Embed */}
                  <div className="bg-white p-4 rounded border">
                    <div className="text-center">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSf_example_form_id/viewform?embedded=true" 
                        className="w-full h-96 border-0"
                        title="Program Registration Form"
                      >
                        Loading form...
                      </iframe>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-600 mb-3">
                      Can't see the form? 
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_example_form_id/viewform" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-blue-700 hover:underline ml-1">
                        Open in new tab
                      </a>
                    </p>
                    <Button 
                      className="bg-blue-700 hover:bg-blue-800 px-8 py-3"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf_example_form_id/viewform', '_blank')}
                    >
                      Open Registration Form
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Next cohort starts Jan 15th</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Only 25 spots available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our admissions team is here to help you make the best decision for your career. 
                Schedule a free consultation to discuss your goals and how our program can help you achieve them.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
                onClick={() => window.open('https://calendly.com/productproacademy/consultation', '_blank')}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Our Team
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Questions? Call us at <span className="font-semibold text-blue-700">+1 (555) 123-4567</span> or 
                email <span className="font-semibold text-blue-700">admissions@productproacademy.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
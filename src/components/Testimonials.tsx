import { Card, CardContent } from "./commons/Card";
import { Badge } from "./commons/Badge";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./commons/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "David Park",
      role: "Senior Product Manager",
      company: "Spotify",
      image: "https://images.unsplash.com/photo-1758521541622-d1e6be8c39bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnQlMjBoYXBweXxlbnwxfHx8fDE3NTg4ODA0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "ProductPro Academy completely transformed my career. The hands-on projects and mentorship from industry experts gave me the confidence and skills to transition from engineering to product management. Within 6 months of graduation, I landed my dream job at Spotify.",
      outcome: "Career transition to Senior PM role",
      salaryIncrease: "85%"
    },
    {
      name: "Lisa Wang",
      role: "Product Owner",
      company: "Shopify",
      image: "https://images.unsplash.com/photo-1758521541622-d1e6be8c39bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnQlMjBoYXBweXxlbnwxfHx8fDE3NTg4ODA0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "The curriculum is incredibly practical and up-to-date with industry standards. I loved how each module built upon the previous one, and the real-world projects helped me build a portfolio that impressed employers. The agile methodologies training was particularly valuable.",
      outcome: "Promoted to Product Owner",
      salaryIncrease: "60%"
    },
    {
      name: "Carlos Rodriguez",
      role: "VP of Product",
      company: "Stripe",
      image: "https://images.unsplash.com/photo-1758521541622-d1e6be8c39bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnQlMjBoYXBweXxlbnwxfHx8fDE3NTg4ODA0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "Even as an experienced product manager, this program taught me new frameworks and strategies that I use daily. The leadership and stakeholder management modules were game-changers. I was promoted to VP within a year of completing the program.",
      outcome: "Promoted to VP of Product",
      salaryIncrease: "120%"
    },
    {
      name: "Priya Patel",
      role: "Lead Product Manager",
      company: "Slack",
      image: "https://images.unsplash.com/photo-1758521541622-d1e6be8c39bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnQlMjBoYXBweXxlbnwxfHx8fDE3NTg4ODA0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "The flexibility of the program allowed me to learn while working full-time. The mentors were incredibly supportive and provided valuable insights from their experience at top tech companies. The data-driven decision making module revolutionized how I approach product strategy.",
      outcome: "Advanced to Lead PM role",
      salaryIncrease: "75%"
    },
    {
      name: "James Thompson",
      role: "Senior Product Manager",
      company: "Netflix",
      image: "https://images.unsplash.com/photo-1758521541622-d1e6be8c39bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnQlMjBoYXBweXxlbnwxfHx8fDE3NTg4ODA0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "Coming from a marketing background, I was nervous about transitioning to product management. The program's comprehensive curriculum and supportive community made the transition smooth. The portfolio projects I completed directly led to my job at Netflix.",
      outcome: "Career pivot to Product Management",
      salaryIncrease: "90%"
    },
    {
      name: "Amy Chen",
      role: "Product Manager",
      company: "Airbnb",
      image: "https://images.unsplash.com/photo-1758521541622-d1e6be8c39bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnQlMjBoYXBweXxlbnwxfHx8fDE3NTg4ODA0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5,
      testimonial: "The user research and design thinking modules were exceptional. As someone passionate about user experience, I appreciated how the program emphasized user-centric product development. The skills I learned helped me secure a position at Airbnb focused on host experience.",
      outcome: "Landed dream job at Airbnb",
      salaryIncrease: "70%"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Graduates Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful graduates have to say 
            about their experience and career transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow relative">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-semibold text-blue-700">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <Quote className="h-8 w-8 text-blue-100 mb-3" />
                
                <p className="text-gray-600 text-sm mb-4 italic">
                  "{testimonial.testimonial}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      {testimonial.outcome}
                    </Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-700">+{testimonial.salaryIncrease}</div>
                      <div className="text-xs text-gray-600">Salary Increase</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join 500+ Successful Graduates
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our graduates work at top companies worldwide and have seen an average 
                salary increase of 78% after completing our program.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm opacity-80">Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-sm opacity-80">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">78%</div>
                  <div className="text-sm opacity-80">Avg Salary Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">4.9/5</div>
                  <div className="text-sm opacity-80">Student Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
                <span>Companies hiring our graduates:</span>
                <span className="font-semibold">Google • Netflix • Spotify • Uber • Airbnb • Shopify • Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
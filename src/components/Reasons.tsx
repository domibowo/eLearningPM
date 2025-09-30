import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "./commons/Card";

export function Reasons() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-700" />,
      title: "Industry-Recognized Certification",
      description: "Get certified with credentials that employers trust and value in the product management field."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      title: "Expert Mentorship",
      description: "Learn from seasoned product managers and owners with 10+ years of experience at top companies."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-700" />,
      title: "Practical Projects",
      description: "Build real-world projects that you can showcase in your portfolio to potential employers."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-700" />,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials and lifetime updates."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ProductPro Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the most comprehensive and practical product management education 
            that prepares you for real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Join the Next Generation of Product Leaders
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive curriculum covers everything from product strategy and user research 
                to agile methodologies and stakeholder management. You'll graduate with the skills and 
                confidence to excel in any product role.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-blue-700 font-semibold">Product Strategy</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-blue-700 font-semibold">Agile Methodologies</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-blue-700 font-semibold">User Research</span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                  <span className="text-blue-700 font-semibold">Data Analysis</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-5xl font-bold text-blue-700 mb-2">3x</div>
              <div className="text-gray-600">Average salary increase for our graduates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
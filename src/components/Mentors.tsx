import { Card, CardContent } from "./commons/Card";
import { Badge } from "./commons/Badge";
import { Linkedin, Star } from "lucide-react";
import { ImageWithFallback } from "./commons/ImageWithFallback";
import { mentors } from "../data/mentors";

export function Mentors() {
  return (
    <section id="mentors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mentors are seasoned product leaders from top companies who bring real-world experience 
            and practical insights to your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <ImageWithFallback
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                      <Linkedin className="h-5 w-5 text-blue-600 cursor-pointer hover:text-blue-800" />
                    </div>
                    <div className="mb-2">
                      <div className="font-semibold text-blue-700">{mentor.role}</div>
                      <div className="text-gray-600">{mentor.company}</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 mb-3">
                      {mentor.experience} experience
                    </Badge>
                    <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {mentor.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {mentor.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              1-on-1 Mentorship Program
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get personalized guidance through our mentorship program. Each student is paired with 
              an industry expert for career coaching, project reviews, and strategic advice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">1:1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Mentorship</h4>
                <p className="text-gray-600">Weekly 1-on-1 sessions with your assigned mentor</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">24/7</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Always Available</h4>
                <p className="text-gray-600">Access to mentor community chat and Q&A sessions</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">∞</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Lifetime Network</h4>
                <p className="text-gray-600">Join our alumni network of product professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
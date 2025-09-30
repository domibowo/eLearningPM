import { modules } from "../data/modules";
import { Badge } from "./commons/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./commons/Card";
import { Clock, PlayCircle, FileText } from "lucide-react";

export function Curriculum() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our carefully structured program takes you from product management fundamentals 
            to advanced leadership skills in just 14 weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getLevelColor(module.level)}>
                    {module.level}
                  </Badge>
                  <span className="text-sm text-blue-700 font-semibold">
                    Module {index + 1}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <PlayCircle className="h-4 w-4" />
                    {module.lessons} lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {module.assignments} projects
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Topics:</h4>
                  <ul className="space-y-1">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What You'll Achieve
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="bg-blue-700 text-white text-lg px-3 py-1">1</Badge>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industry Certification</h4>
              <p className="text-gray-600">Earn a recognized Product Manager & Product Owner certification</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="bg-blue-700 text-white text-lg px-3 py-1">2</Badge>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Portfolio Projects</h4>
              <p className="text-gray-600">Complete 6 real-world projects to showcase your skills</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="bg-blue-700 text-white text-lg px-3 py-1">3</Badge>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Career Support</h4>
              <p className="text-gray-600">Get personalized career guidance and job placement assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
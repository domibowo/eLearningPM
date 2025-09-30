import { Card, CardContent, CardHeader, CardTitle } from "./commons/Card";
import { ExternalLink, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./commons/ImageWithFallback";
import { Badge } from "./commons/Badge";
import { projects } from "../data/projects";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories & Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our graduates have applied their learning to create impactful products 
            and advance their careers at leading companies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
                </div>
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-blue-100 text-blue-800">Success Story</Badge>
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <div className="text-sm text-gray-600">
                      <div className="font-semibold">{project.student}</div>
                      <div>{project.role}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-blue-700">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Your Portfolio?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our program and work on real projects that will showcase your product management skills to employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>500+ Portfolio Projects Created</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="h-5 w-5" />
                <span>85% Career Advancement Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
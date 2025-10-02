import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ChevronLeft, ChevronRight, Home, CheckCircle2, PlayCircle } from 'lucide-react';
import { Card, CardContent } from './commons/Card';
import { Button } from './commons/Button';
import { Badge } from './commons/Badge';
import { Progress } from './commons/Progress';

interface Topic {
  title: string;
  videoUrl: string;
  summary: string;
}

interface ModulePageProps {
  moduleId: string;
  onNavigateHome: () => void;
}

export function ModulePage({ moduleId, onNavigateHome }: ModulePageProps) {
  const { isAuthenticated } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);

  // Module data structure
  const modules: Record<string, { title: string; topics: Topic[] }> = {
    '1': {
      title: 'Foundations of Product Management',
      topics: [
        {
          title: 'Product Management Fundamentals',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'In this lesson, you learned about the core responsibilities of a Product Manager, including defining product vision, prioritizing features, and collaborating with cross-functional teams. Key takeaways include understanding the product lifecycle and the importance of customer-centric thinking.'
        },
        {
          title: 'Market Research',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'This lesson covered essential market research techniques including customer surveys, competitive analysis, and market segmentation. You learned how to identify target audiences and validate product ideas through data-driven insights.'
        },
        {
          title: 'Competitive Analysis',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'You explored frameworks for analyzing competitors, including SWOT analysis and competitive positioning maps. Understanding your competitive landscape is crucial for differentiation and strategic planning.'
        },
        {
          title: 'Product Lifecycle',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'This lesson explained the stages of product lifecycle from introduction to decline. You learned strategies for managing products at each stage and making data-informed decisions about product evolution.'
        }
      ]
    },
    '2': {
      title: 'Product Strategy & Vision',
      topics: [
        {
          title: 'Strategic Planning',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn how to develop comprehensive product strategies aligned with business goals. This includes market analysis, competitive positioning, and long-term planning frameworks.'
        },
        {
          title: 'Vision & Roadmapping',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the art of creating compelling product visions and translating them into actionable roadmaps. Understand how to communicate strategy to stakeholders.'
        },
        {
          title: 'OKRs & KPIs',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Discover how to set meaningful objectives and key results (OKRs) and track product performance through key performance indicators (KPIs).'
        },
        {
          title: 'Go-to-Market Strategy',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to develop effective go-to-market strategies including positioning, pricing, and launch planning to ensure successful product adoption.'
        }
      ]
    },
    '3': {
      title: 'User Experience & Design Thinking',
      topics: [
        {
          title: 'User Research Methods',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Explore various user research methodologies including interviews, surveys, and observational studies to gather meaningful insights.'
        },
        {
          title: 'Persona Development',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to create detailed user personas that represent your target audience and guide product decisions.'
        },
        {
          title: 'Journey Mapping',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the technique of mapping user journeys to identify pain points and opportunities for improvement.'
        },
        {
          title: 'Usability Testing',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Understand how to conduct effective usability tests and translate findings into actionable product improvements.'
        }
      ]
    },
    '4': {
      title: 'Agile & Scrum Methodologies',
      topics: [
        {
          title: 'Scrum Framework',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Deep dive into the Scrum framework, understanding roles, ceremonies, and artifacts that drive agile product development.'
        },
        {
          title: 'Sprint Planning',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn effective sprint planning techniques to maximize team productivity and deliver value consistently.'
        },
        {
          title: 'Backlog Management',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the art of prioritizing and managing product backlogs to ensure the most valuable work gets done first.'
        },
        {
          title: 'Team Collaboration',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Discover best practices for fostering collaboration within cross-functional teams and removing impediments.'
        }
      ]
    },
    '5': {
      title: 'Data-Driven Product Decisions',
      topics: [
        {
          title: 'Analytics & Metrics',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to identify and track the right metrics that matter for your product and business goals.'
        },
        {
          title: 'A/B Testing',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the fundamentals of A/B testing to validate hypotheses and make data-informed decisions.'
        },
        {
          title: 'Product Experimentation',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Understand how to design and run product experiments that generate valuable insights.'
        },
        {
          title: 'ROI Analysis',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to calculate and communicate the return on investment for product initiatives.'
        }
      ]
    },
    '6': {
      title: 'Leadership & Stakeholder Management',
      topics: [
        {
          title: 'Team Leadership',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Develop leadership skills essential for guiding product teams and driving results.'
        },
        {
          title: 'Communication Skills',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master effective communication techniques for presenting ideas and influencing stakeholders.'
        },
        {
          title: 'Conflict Resolution',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn strategies for managing conflicts and building consensus among diverse stakeholders.'
        },
        {
          title: 'Executive Reporting',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Understand how to communicate product status and strategy to executive leadership effectively.'
        }
      ]
    }
  };

  const module = modules[moduleId];

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-gray-600 mb-4">Module not found</p>
            <Button onClick={onNavigateHome} className="w-full bg-blue-700 hover:bg-blue-800">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-gray-600 mb-4">Please login to access course content</p>
            <Button onClick={onNavigateHome} className="w-full bg-blue-700 hover:bg-blue-800">
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalSteps = module.topics.length;
  const currentTopic = module.topics[currentStep];
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={onNavigateHome}
              className="text-blue-700 hover:text-blue-800"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Curriculum
            </Button>
            <Badge variant="outline" className="text-blue-700 border-blue-700">
              Module {moduleId}
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{module.title}</h1>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="text-blue-700 font-semibold">
                {currentStep + 1} of {totalSteps} topics
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {module.topics.map((topic, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    index === currentStep
                      ? 'bg-blue-700 text-white'
                      : index < currentStep
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {index < currentStep ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                  )}
                  <span className="hidden sm:inline text-sm whitespace-nowrap">
                    {topic.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </button>
                {index < totalSteps - 1 && (
                  <div className={`w-8 h-0.5 ${index < currentStep ? 'bg-green-300' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Topic Title */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {currentTopic.title}
            </h2>
            <p className="text-gray-600">
              Topic {currentStep + 1} of {totalSteps}
            </p>
          </div>

          {/* Video Player */}
          <Card>
            <CardContent className="p-0">
              <div className="relative bg-black aspect-video rounded-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23000'/%3E%3Ctext x='50%25' y='50%25' fill='%23fff' text-anchor='middle' dominant-baseline='middle' font-size='48'%3E▶%3C/text%3E%3C/svg%3E"
                >
                  <source src={currentTopic.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 left-4 bg-blue-700 text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" />
                  <span className="text-sm">Video Lesson</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
              <p className="text-gray-700 leading-relaxed">{currentTopic.summary}</p>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4 pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="outline"
              className="flex-1 sm:flex-none"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep === totalSteps - 1 ? (
              <Button
                onClick={onNavigateHome}
                className="flex-1 sm:flex-none bg-green-700 hover:bg-green-800"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Complete Module
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="flex-1 sm:flex-none bg-blue-700 hover:bg-blue-800"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

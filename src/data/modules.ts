interface Topic {
    subtitle: string,
    videoUrl: string,
    summary: string,
}

type Modules = {
    title: string,
    duration: string,
    lessons: number,
    assignments: number,
    topics: Topic[],
    level: string,
}

export const modules: Record<string, Modules> = {
    '1': {
        title: "Foundations of Product Management",
        duration: "2 weeks",
        lessons: 8,
        assignments: 2,
        topics: [
        {
          subtitle: 'Product Management Fundamentals',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'In this lesson, you learned about the core responsibilities of a Product Manager, including defining product vision, prioritizing features, and collaborating with cross-functional teams. Key takeaways include understanding the product lifecycle and the importance of customer-centric thinking.'
        },
        {
          subtitle: 'Market Research',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'This lesson covered essential market research techniques including customer surveys, competitive analysis, and market segmentation. You learned how to identify target audiences and validate product ideas through data-driven insights.'
        },
        {
          subtitle: 'Competitive Analysis',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'You explored frameworks for analyzing competitors, including SWOT analysis and competitive positioning maps. Understanding your competitive landscape is crucial for differentiation and strategic planning.'
        },
        {
          subtitle: 'Product Lifecycle',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'This lesson explained the stages of product lifecycle from introduction to decline. You learned strategies for managing products at each stage and making data-informed decisions about product evolution.'
        }
      ],
        level: "Beginner"
    },
    '2': {
        title: "Product Strategy & Vision",
        duration: "3 weeks",
        lessons: 12,
        assignments: 3,
        topics: [
        {
          subtitle: 'Strategic Planning',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn how to develop comprehensive product strategies aligned with business goals. This includes market analysis, competitive positioning, and long-term planning frameworks.'
        },
        {
          subtitle: 'Vision & Roadmapping',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the art of creating compelling product visions and translating them into actionable roadmaps. Understand how to communicate strategy to stakeholders.'
        },
        {
          subtitle: 'OKRs & KPIs',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Discover how to set meaningful objectives and key results (OKRs) and track product performance through key performance indicators (KPIs).'
        },
        {
          subtitle: 'Go-to-Market Strategy',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to develop effective go-to-market strategies including positioning, pricing, and launch planning to ensure successful product adoption.'
        }
      ],
        level: "Intermediate"
    },
    '3': {
        title: "User Experience & Design Thinking",
        duration: "2 weeks",
        lessons: 10,
        assignments: 2,
        topics: [
        {
          subtitle: 'User Research Methods',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Explore various user research methodologies including interviews, surveys, and observational studies to gather meaningful insights.'
        },
        {
          subtitle: 'Persona Development',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to create detailed user personas that represent your target audience and guide product decisions.'
        },
        {
          subtitle: 'Journey Mapping',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the technique of mapping user journeys to identify pain points and opportunities for improvement.'
        },
        {
          subtitle: 'Usability Testing',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Understand how to conduct effective usability tests and translate findings into actionable product improvements.'
        }
      ],
        level: "Intermediate"
    },
    '4':     {
        title: "Agile & Scrum Methodologies",
        duration: "2 weeks",
        lessons: 9,
        assignments: 2,
        topics: [
        {
          subtitle: 'Scrum Framework',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Deep dive into the Scrum framework, understanding roles, ceremonies, and artifacts that drive agile product development.'
        },
        {
          subtitle: 'Sprint Planning',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn effective sprint planning techniques to maximize team productivity and deliver value consistently.'
        },
        {
          subtitle: 'Backlog Management',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the art of prioritizing and managing product backlogs to ensure the most valuable work gets done first.'
        },
        {
          subtitle: 'Team Collaboration',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Discover best practices for fostering collaboration within cross-functional teams and removing impediments.'
        }
      ],
        level: "Intermediate"
    },
    '5': {
        title: "Data-Driven Product Decisions",
        duration: "3 weeks",
        lessons: 11,
        assignments: 3,
        topics: [
        {
          subtitle: 'Analytics & Metrics',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to identify and track the right metrics that matter for your product and business goals.'
        },
        {
          subtitle: 'A/B Testing',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master the fundamentals of A/B testing to validate hypotheses and make data-informed decisions.'
        },
        {
          subtitle: 'Product Experimentation',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Understand how to design and run product experiments that generate valuable insights.'
        },
        {
          subtitle: 'ROI Analysis',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn to calculate and communicate the return on investment for product initiatives.'
        }
      ],
        level: "Advanced"
    },
    '6': {
        title: "Leadership & Stakeholder Management",
        duration: "2 weeks",
        lessons: 8,
        assignments: 2,
        topics: [
        {
          subtitle: 'Team Leadership',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Develop leadership skills essential for guiding product teams and driving results.'
        },
        {
          subtitle: 'Communication Skills',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Master effective communication techniques for presenting ideas and influencing stakeholders.'
        },
        {
          subtitle: 'Conflict Resolution',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Learn strategies for managing conflicts and building consensus among diverse stakeholders.'
        },
        {
          subtitle: 'Executive Reporting',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          summary: 'Understand how to communicate product status and strategy to executive leadership effectively.'
        }
      ],
        level: "Advanced"
    }
}
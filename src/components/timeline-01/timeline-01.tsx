import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "JPMorganChase",
    period: "June 2025 - August 2025",
    description:
      "Developed a full stack web application for trading backtesting systems, and analyzed application performance for patterned downtime detection.",
    technologies: ["React", "Spring Boot", "TypeScript", "AWS", "PostgreSQL", "Python"],
    image: "/jpmc.jpeg",
  },
  {
    title: "Research Engineer Intern",
    company: "Immuta",
    period: "May 2024 - May 2025",
    description:
      "Optimized sensitive data discovery services, leveraged DFAs and ML for data classification, and translated mathematical theories into code.",
    technologies: ["Python", "TypeScript", "SQL", "AWS Bedrock"],
    image: "/Immuta.png",
  },
  {
    title: "Undergraduate Research Assistant",
    company: "DataLab @ Ohio State",
    period: "October 2023 - December 2024",
    description:
      "Researched applications of stochastic differntial equations in diffusion models, uncertainty calibration for LLMs, and worked on a video search engine.",
    technologies: ["Python", "PyTorch", "Pandas", "NumPy", "SciPy", "OpenCV"],
    image: "/OSU.jpeg",
  },
  {
    title: "Software Engineer Intern",
    company: "The Ohio State University",
    period: "May 2023 - August 2023",
    description:
      "Developed a website hosting administration platform for the Office of Technology and Digital Innovation.",
    technologies: ["Vue.js", "PHP", "MySQL", "Kubernetes"],
    image: "/OSU.jpeg",
  },
];

export default function Timeline() {
  return (
    <div className="max-w-screen-sm mx-auto py-1 md:py-2 px-6">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {experiences.map(
          ({ company, description, period, technologies, title, image }, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                    <Avatar>
                      <AvatarImage src={image} />
                      <AvatarFallback><Building2 className="h-5 w-5 text-muted-foreground" /></AvatarFallback>
                    </Avatar>
                    
                  </div>
                  <span className="text-base sm:text-lg font-semibold">
                    {company}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

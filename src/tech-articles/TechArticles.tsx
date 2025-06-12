import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Link} from "react-router-dom";


const TechArticles = () => (
    <Link to="/localization-module-federation">
    <Card>
      <CardHeader>
        <img src="/assets/localization_Module_Federation.jpg" alt="Internationalization and Localization"
             className="w-2xl h-auto object-cover rounded-lg shadow-md mb-4" /> {/* mb-4 for spacing */}
        <CardTitle>Localization & Module Federation</CardTitle> {/* Shorter, more punchy title */}
        <CardDescription>Explore advanced strategies for international global web applications with modern module federation.</CardDescription>
      </CardHeader>
    </Card>
    </Link>

);

export default TechArticles;

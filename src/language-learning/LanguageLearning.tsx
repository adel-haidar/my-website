import {Link} from "react-router-dom";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const LanguageLearning = () => {
  return (
      <Link to="/le-verbe-prendre">
        <Card>
          <CardHeader>
            <img src="/assets/le-verb-prendre.jpg" alt="Le Verb prendre"
                 className="w-2xl h-auto object-cover rounded-lg shadow-md mb-4" /> {/* mb-4 for spacing */}
            <CardTitle>Le Verb Prendre</CardTitle> {/* Shorter, more punchy title */}
            <CardDescription>Une Calamité Conjugeé</CardDescription>
          </CardHeader>
        </Card>
      </Link>
  )

}

export default LanguageLearning

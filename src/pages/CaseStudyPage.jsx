import { useParams, Navigate } from "react-router-dom";
import { caseStudies } from "../data/case-studies";
import Navbar from "../components/Navbar";
import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ui/ParticleBackground";

export default function CaseStudyPage() {

  const { id } = useParams()
  const caseStudy = caseStudies[id]

  if (!caseStudy) {
    return <Navigate to='/projects' replace />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ParticlesBackground />
      <Navbar />
      <div className="relative z-10">
        <CaseStudyLayout {...caseStudy} />
      </div>
      <Footer />
    </div>
  )
}

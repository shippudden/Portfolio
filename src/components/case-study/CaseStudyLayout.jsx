import { PropTypes } from "prop-types";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import CaseStudySection from "./CaseStudySection";
import PrototypeSection from "./PrototypeSection";
import Introduction from "./Introduction";
import ProjectBackground from "./ProjectBackground";
import WhatIWillCover from "./WhatIWillCover";
import Objectives from "./Objectives";
import GoalAndMethods from "./GoalAndMethods";
import UserFlowDetails from "./UserFlowDetails";
import DesignDetails from "./DesignDetails";
import FinalDesign from "./FinalDesign";
import ColorUsage from "./ColorUsage";
import FontUsage from "./FontUsage";
import FinalThought from "./FinalThought";
import LessonsLearned from "./LessonsLearned";
import DesignImpact from "./DesignImpact";
import LookingAhead from "./LookingAhead";

export default function CaseStudyLayout({ 
  title, introduction, coverImage, overview, projectBackground, whatIWillCover, objectives, goalAndMethods, highFidelityImage, designprocess, userFlow, userFlowDetails, whyThisFlow, designChoices, designDetails, whyTheseChoices, informationArchitectureImg, wireframesImg, wireframesImg2, onboardingScreensImg, registrationScreensImg, finalDesign, colorPalette, typography, colorUsage, fontUsage, colorPaletteImg, typographyImg, designImpact, lessonsLearned, finalThought, lookingAhead, conclusion, prototypeUrl 
}) {
  return (
    <article className="max-w-4xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white"> {title} </h1>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={coverImage}
        alt={title}
        className="w-full h-[600px] object-cover rounded-xl mb-12"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-12"
      >
        <Introduction introduction={introduction} />

        <CaseStudySection title="Overview" >
          {overview}
        </CaseStudySection>

        <ProjectBackground projectBackground={projectBackground} />

        <WhatIWillCover whatIWillCover={whatIWillCover} />

        <Objectives objectives={objectives} />

        <GoalAndMethods goalAndMethods={goalAndMethods} />

        <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={highFidelityImage}
        alt={title}
        className="w-full h-[500px] object-cover rounded-xl mb-12"
      />
        
        <CaseStudySection title="Design Process" >
          {designprocess}
        </CaseStudySection>

        <CaseStudySection title="User Flow" >
          {userFlow}
        </CaseStudySection>

        <UserFlowDetails userFlowDetails={userFlowDetails} />

        <CaseStudySection title="Why this flow?" >
          {whyThisFlow}
        </CaseStudySection>

        <CaseStudySection title="Design Choice" >
          {designChoices}
        </CaseStudySection>

        <DesignDetails designDetails={designDetails} />

        <CaseStudySection title="Why these Choice?">
          {whyTheseChoices}
        </CaseStudySection>

        <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={informationArchitectureImg}
        alt={title}
        className="w-full h-[400px] object-cover rounded-xl mb-12"
      />
        <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={onboardingScreensImg}
        alt={title}
        className="w-full h-[400px] object-cover rounded-xl mb-12"
      />
        <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={registrationScreensImg}
        alt={title}
        className="w-full h-[400px] object-cover rounded-xl mb-12"
      />

        <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={wireframesImg}
        alt={title}
        className="w-full h-[500px] object-cover rounded-xl mb-12"
      />

        <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={wireframesImg2}
        alt={title}
        className="w-full h-[500px] object-cover rounded-xl mb-12"
      />

        <FinalDesign finalDesign={finalDesign} />

        <CaseStudySection title="Color Palette" >
          {colorPalette}
        </CaseStudySection>

        <ColorUsage colorUsage={colorUsage} />

        <CaseStudySection title="Typography" >
          {typography}
        </CaseStudySection>
        
        <FontUsage fontUsage={fontUsage} />

        <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={typographyImg}
        alt={title}
        className="w-full h-[500px] object-cover rounded-xl mb-12"
      />

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        src={colorPaletteImg}
        alt={title}
        className="w-full h-[500px] object-cover rounded-xl mb-12"
      />

      <FinalThought finalThought={finalThought} />
      <LessonsLearned lessonsLearned={lessonsLearned} />
      <DesignImpact designImpact={designImpact} />
      <LookingAhead lookingAhead={lookingAhead} />

        <CaseStudySection title="Conclusion" >
          {conclusion}
        </CaseStudySection>

        <PrototypeSection url={prototypeUrl} />

      </motion.div>
    </article>
  )
}

CaseStudyLayout.propTypes = {
  title: PropTypes.string.isRequired,
  introduction: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  coverImage: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  projectBackground: PropTypes.arrayOf(
    PropTypes.shape({
      description1: PropTypes.string,
      description2: PropTypes.string,
      description3: PropTypes.string,
      description4: PropTypes.string,
      description5: PropTypes.string,
      description6: PropTypes.string
    })
  ),
  whatIWillCover: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      projectOverview: PropTypes.string,
      projectBackground: PropTypes.string,
      designProcess: PropTypes.string,
      visualDesign: PropTypes.string,
      highFidelity: PropTypes.string,
      keyFeatures: PropTypes.string,
      results: PropTypes.string,
      learnings: PropTypes.string
    })
  ),
  objectives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  prototypeUrl: PropTypes.string.isRequired,
  goalAndMethods: PropTypes.arrayOf(
    PropTypes.shape({
      method: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  highFidelityImage: PropTypes.string,
  designprocess: PropTypes.string,
  userFlow: PropTypes.string,
  userFlowDetails: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  whyThisFlow: PropTypes.string,
  whyTheseChoices: PropTypes.string,
  designDetails: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  designChoices: PropTypes.string.isRequired,
  informationArchitectureImg: PropTypes.string,
  wireframesImg: PropTypes.string,
  wireframesImg2: PropTypes.string,
  onboardingScreensImg: PropTypes.string,
  registrationScreensImg: PropTypes.string,
  finalDesign: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  colorPalette: PropTypes.string,
  typography: PropTypes.string,
  colorUsage: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  fontUsage: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  typographyImg: PropTypes.string,
  colorPaletteImg: PropTypes.string,

  designImpact: PropTypes.arrayOf (
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),

  lessonsLearned: PropTypes.arrayOf (
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),

  finalThought: PropTypes.arrayOf (
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),

  lookingAhead: PropTypes.arrayOf (
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),

  conclusion: PropTypes.string
}


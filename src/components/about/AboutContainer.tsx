import React, { useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';
import SectionHeader from '../shared/SectionHeader';
import AboutDetails from './AboutDetails';
import content from '../../contents/aboutContent';

const AboutContainer: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <SectionHeader title={content[language].header.title} />
      <AboutDetails language={language} />
    </>
  );
};

export default AboutContainer;

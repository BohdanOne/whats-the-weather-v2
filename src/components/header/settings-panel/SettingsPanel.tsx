import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import SettingsToggle from '../nav-buttons/SettingsButton';
import SettingsList from './SettingsList';
import CloseButton from '../nav-buttons/CloseButton';

const SettingsPanel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <div
      className={`c-nav c-nav--settings ${
        isExpanded ? 'c-nav--is-expanded' : ''
      }`}
    >
      {isExpanded ? (
        <CloseButton handleClick={() => setIsExpanded(false)} language={language} />
      ) : (
        <SettingsToggle handleClick={() => setIsExpanded(true)} language={language}/>
      )}
      <SettingsList />
    </div>
  );
};

export default SettingsPanel;

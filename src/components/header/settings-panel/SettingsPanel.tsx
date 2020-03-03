import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../../providers/LanguageProvider';
import SettingsList from './SettingsList';
import NavButton from '../nav-buttons/NavButton';
import SettingsIcon from '../nav-buttons/SettingsIcon';
import CloseIcon from '../nav-buttons/CloseIcon';
import content from '../../../contents/headerContent';

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
        <NavButton
          handleClick={() => setIsExpanded(false)}
          label={content[language].button.close}
        >
          <CloseIcon />
        </NavButton>
      ) : (
        <NavButton
          handleClick={() => setIsExpanded(true)}
          label={content[language].button.settings}
        >
          <SettingsIcon />
        </NavButton>
      )}
      <SettingsList />
    </div>
  );
};

export default SettingsPanel;

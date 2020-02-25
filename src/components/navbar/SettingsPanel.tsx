import React, { useState } from 'react';
import LanguagePicker from '../language/LanguageSwitch';
import ModePicker from '../screen-mode/ModeSwitch';
import SettingsToggle from './SettingsToggle';

const SettingsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSettings = () => setIsOpen(!isOpen);

  return (
    <div className="SettingsPanel">
      <SettingsToggle handleClick={toggleSettings} isOpen={isOpen} />
      <div className={`SettingsPanel_switchContainer ${isOpen ? 'open' : ''}`}>
        <LanguagePicker />
        <ModePicker />
      </div>
    </div>
  );
};

export default SettingsPanel;

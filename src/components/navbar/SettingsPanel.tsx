import React from 'react';
import LanguagePicker from '../language/LanguagePicker';
import ModePicker from '../screen-mode/ModePicker';
import SettingsToggle from './SettingsToggle';

const SettingsPanel: React.FC = () => {
  return (
    <div className="SettingsPanel">
      <SettingsToggle />
      <LanguagePicker />
      <ModePicker />
    </div>
  );
};

export default SettingsPanel;

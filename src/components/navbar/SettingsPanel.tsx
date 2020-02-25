import React from 'react';
import LanguagePicker from '../language/LanguagePicker';
import ModePicker from '../screen-mode/ModePicker';

const SettingsPanel: React.FC = () => {
  return (
    <div className="SettingsPanel">
      <LanguagePicker />
      <ModePicker />
    </div>
  );
};

export default SettingsPanel;

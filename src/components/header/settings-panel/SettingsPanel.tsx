import React, { useState } from 'react';
import SettingsToggle from './SettingsToggle';
import SettingsList from './SettingsList';

const SettingsPanel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="settings-panel">
      <SettingsToggle handleClick={() => setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
      <SettingsList handleClick={()=>setIsExpanded(!isExpanded)} isExpanded={isExpanded} />
    </div>
  );
};

export default SettingsPanel;

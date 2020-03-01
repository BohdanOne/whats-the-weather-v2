import React, { useState } from 'react';
import SettingsToggle from '../nav-buttons/SettingsButton';
import SettingsList from './SettingsList';
import CloseButton from '../nav-buttons/CloseButton';

const SettingsPanel: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`c-nav c-nav--settings ${
        isExpanded ? 'c-nav--is-expanded' : ''
      }`}
    >
      {isExpanded ? (
        <CloseButton closeNav={() => setIsExpanded(false)} />
      ) : (
        <SettingsToggle openNav={() => setIsExpanded(true)} />
      )}
      <SettingsList />
    </div>
  );
};

export default SettingsPanel;

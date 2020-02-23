import React, { useRef } from 'react';

interface ILanguagePickerProps {
  language: string;
  onLanguageChoice: (language: string) => void;
}

const LanguagePicker: React.FC<ILanguagePickerProps> = ({language, onLanguageChoice}) => {
  const languageSelectRef = useRef<HTMLSelectElement>(null);

  const renderLabel = (language: string) => {
    if (language === 'en') {
      return (
        <label htmlFor="languageSelect">
          <span role="img" aria-label="Flag: United Kingdom">
            🇬🇧
          </span> Change language
        </label>
      );
    } else {
      return (
        <label htmlFor="languageSelect">
          <span role="img" aria-label="Flag: Poland">
            🇵🇱
          </span> Zmień język
        </label>
      );
    }
  };

  const handleLanguageSelect = (event: React.FormEvent) => {
    const language = languageSelectRef.current!.value;
    onLanguageChoice(language);
  };

  return (
    <div>
      {renderLabel(language)}
      <select
        name="languages"
        id="languageSelect"
        defaultValue="en"
        onInput={handleLanguageSelect}
        ref={languageSelectRef}
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
};

export default LanguagePicker;

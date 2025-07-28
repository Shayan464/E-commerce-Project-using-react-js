import React from 'react';

const LanguageSelector = ({ selected=[],name,onChange,label }) => {
  const languages = ['English', 'French', 'Spanish', 'German'];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    
    const fakeEvent = {
      target: {
        name,
        type: "checkbox",
        value,
        checked,
      },
    };
    onChange(fakeEvent);
  };

  return (
    <div className="mb-4">
      <h1 className="block text-sm font-medium mb-2">{label}</h1>
      <div className="flex flex-wrap gap-4">
        {languages.map((lang) => (
          <label key={lang} className="inline-flex items-center text-sm font-medium">
            <input
              type="checkbox"
              name={name}
              value={lang}
              checked={selected.includes(lang)}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            {lang}
          </label>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;



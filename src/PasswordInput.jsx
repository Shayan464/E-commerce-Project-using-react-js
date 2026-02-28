import React from 'react';
import { useRef, useState } from 'react';
import InputField from './InputField';

function PasswordInput({ value, onChange }) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const showTemporarily = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(true);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      timerRef.current = null;
    }, 5000);
  };

  return (
    <div className="relative">
      <InputField
        label="Password"
        name="Password"
        value={value}
        onChange={onChange}
        placeholder="Password"
        type={visible ? 'text' : 'password'}
        className="w-full pr-10 pl-3 py-2 border rounded-md"
      />
      <button
        type="button"
        onClick={showTemporarily}
        className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700"
      >
        👁️
      </button>

      <div className="mt-2 text-xs ">
        <ol className="list-decimal list-inside plane ">
          <li>Password must be at least 8 characters long</li>
          <li>
            Must include uppercase, lowercase, a number, and a special
            character.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default PasswordInput;

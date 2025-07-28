function InputField({ type, name, label, value, onChange, placeholder, pattern, rows }) {
  return (
    <label className="block mb-2">
      <span className="font-semibold">{label}</span>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows || 4}
          placeholder={placeholder}
          pattern={pattern}
          className="w-120 border rounded p-2 resize-vertical whitespace-pre-wrap break-words"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          pattern={pattern}
          className="w-52 border-1 p-1 bg-white"
        />
      )}
    </label>
  );
}

export default InputField;
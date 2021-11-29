export default function InputField({
  label,
  value,
  onChange,
  className,
  placeholder,
}) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default function InputField({
  label,
  value,
  onChange,
  className,
  placeholder,
  type,
}) {
  return (
    <div className={className}>
      <label class="block text-black text-sm font-semibold mb-2">{label}</label>
      <input
        className="block border border-grey-light w-full p-3 rounded mb-4 focus:ring-primary focus:border-primary"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

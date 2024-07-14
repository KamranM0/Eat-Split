export default function FormField({
  children,
  isReadOnly,
  input,
  onChangeInput,
  type,
}) {
  return (
    <>
      <label>{children}</label>
      <input
        disabled={isReadOnly ? true : false}
        type={type}
        value={input}
        onChange={(e) => onChangeInput(e.target.value)}
      ></input>
    </>
  );
}

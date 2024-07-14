export default function SelectField({
  children,
  inputname,
  whoPays,
  setWhoPays,
}) {
  return (
    <>
      <label>{children}</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="me">You</option>
        <option value={inputname}>{inputname}</option>
      </select>
    </>
  );
}

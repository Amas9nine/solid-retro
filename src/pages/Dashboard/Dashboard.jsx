export default function Dashboard() {
  const removeId = () => {
    localStorage.setItem("authId", "");
    window.location.reload(false);
  };
  return (
    <>
      <h1>hello user</h1>
      <button onClick={removeId}>{localStorage.getItem("authId")}</button>
    </>
  );
}

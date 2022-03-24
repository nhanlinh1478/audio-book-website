import PrimarySearchAppBar from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <PrimarySearchAppBar />
      <div>{children}</div>
    </>
  );
}

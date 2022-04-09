import PrimarySearchAppBar from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="mt-20">{children}</div>
    </>
  );
}

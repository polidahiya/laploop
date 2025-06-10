import Navbar from "../_comps/Navbar/Navbar";
function layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default layout;

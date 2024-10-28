import { Blog } from "./compo/Blog";
import { Main } from "./compo/Main";
import { Navbar } from "./compo/Navbar";
import { Shop } from "./compo/Shop";

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Shop/>
      <Blog/>
    </>
  );
}

export default App;

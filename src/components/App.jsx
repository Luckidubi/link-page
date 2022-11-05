
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout";

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Route>


      </Routes>
    </>
  );
}

export default App;

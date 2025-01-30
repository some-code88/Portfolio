import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

import { Experience } from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      
      <Experience/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
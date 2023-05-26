// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import MainSection from "./MainSection"
import ServicesSection from "./ServicesSection"
import ExperienceSection from "./ExperienceSection"
import AboutSection from "./AboutSection"
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// const firebaseConfig = {
//   apiKey: "AIzaSyB6kujSuv2Cm0B32Ebfh9gzwiFuqP6loPw",
//   authDomain: "tn-portfolio-10310.firebaseapp.com",
//   projectId: "tn-portfolio-10310",
//   storageBucket: "tn-portfolio-10310.appspot.com",
//   messagingSenderId: "858231485684",
//   appId: "1:858231485684:web:351ce7a67fa0a6111b1aa1",
//   measurementId: "G-J2K14W5ELC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <ServicesSection/>
      <ExperienceSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default App;

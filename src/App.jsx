import './App.css';
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import image1 from "./assets/profilePic1.webp";
import image2 from "./assets/profilePic2.webp";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper.jsx";
import { useState } from "react";


const App = () => {
  const profiles =[
    {
      img: image1,
      name: 'jon',
      title: 'SE',
      email: 'jon.com'
    },
    {
      img: image2,
      name: 'jane',
      title: 'SE',
      email: 'jane.com'
    }
  ];

  const [clicked, setClicked] =useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Wrapper>
        <h1> Profile App</h1>
        </Wrapper>

        <Wrapper>
          <About />
        </Wrapper>

        <Wrapper>
          <div className = "profile-cards">
              {profiles.map(profile => <Card key={profile.email} {...profile} />)}
          </div>
        </Wrapper>
      </main>

    </>
  );
};

export default App;

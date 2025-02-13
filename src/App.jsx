import './App.css';
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import image1 from "./assets/percy.jpg";
import image2 from "./assets/annabeth.webp";
import image3 from "./assets/grover.webp";
import image4 from "./assets/luke.webp";
import image5 from "./assets/nico.webp";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper.jsx";
import { useState } from "react";
import ProfileForm from "./components/ProfileForm.jsx";
import { useEffect } from "react";
import { use } from "react";

const App = () => {
  {/*const profiles =[
    {
      img: image1,
      name: 'Percy Jackson',
      title: 'Software Engineer',
      email: 'percy342@gmail.com'
    },
    {
      img: image2,
      name: 'Annabeth Chase',
      title: 'Marketing',
      email: 'chasea49@gmail.com'
    },
    {
      img: image3,
      name: 'Grover Underwood',
      title: 'Designer',
      email: 'gu994@gmail.com'
    },
    {
      img: image4,
      name: 'Luke Castellan',
      title: 'Marketing',
      email: 'lcastellan@gmail.com'
    },
    {
      img: image5,
      name: 'Nico Di Angelo',
      title: 'Software Engineer',
      email: 'ndangelo04@gmail.com.com'
    }
  ];*/}

const [profiles, setProfiles] = useState([]);
useEffect(() => {
  fetch("https://web.ics.purdue.edu/~sguddeti/fetch-data.php")
    .then((res) => res.json())
    .then((data) => {
      setProfiles(data);
      console.log(data)
    })
}, []);

const [animation, setAnimation] = useState(false);
//function to update the animation state
const handleAnimation = () => {
  setAnimation(false);
};

//Variable to store the mode state
const [mode, setMode] = useState("light");
//function to update the mode state
const handleModeChange = () => {
  setMode(mode === "light" ? "dark" : "light");
};

// get titles
//const titles = [...new Set(profiles.map((profile) => profile.title))];
// change this
const [titles, setTitles] = useState("");
useEffect()


const [title, setTitle] = useState("");
//update the title on change of the drowndrop
const handleTitleChange = (event) => {
  setTitle(event.target.value);
  setAnimation(true);
};

const [search, setSearch] = useState("");
//update the search on change of the input
const handleSearchChange = (event) => {
  setSearch(event.target.value);
  setAnimation(true);
};

//clear the title and search
const handleClear = () => {
  setTitle("");
  setSearch("");
  setAnimation(true);
};

//filter the profiles based on the title
const filtedProfiles = profiles.filter(
  (profile) =>
   (title === "" || profile.title === title) &&
    profile.name.toLowerCase().includes(search.toLowerCase())
);
const buttonStyle = {
  border: "1px solid #ccc",
};

return (
  <>
    <header>
      <Navbar mode={mode} updateMode={handleModeChange}/>
    </header>
    <main className={mode === "light" ? "light" : "dark"}>
      <Wrapper>
        <h1>Profile App</h1>
      </Wrapper>
      <Wrapper>
        <About />
      </Wrapper>
      <Wrapper>
        <ProfileForm />
      </Wrapper>
      <Wrapper>
        <div className="filter-wrapper">
          <div className="filter--select">
            <label htmlFor="title-select">Select a title:</label>
            <select
              id="title-select"
              onChange={handleTitleChange}
              value={title}
            >
              <option value="">All</option>
              {titles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="filter--search">
            <label htmlFor="search">Search by name:</label>
            <input
              type="text"
              id="search"
              onChange={handleSearchChange}
              value={search}
            />
          </div>
          <button onClick={handleClear} style={buttonStyle}>
            <span className="sr-only">Reset</span>
            {/*<FontAwesomeIcon icon={faXmark} />*/}
          </button>
        </div>
        <div className="profile-cards">
          {filtedProfiles.map((profile) => (
            <Card
              key={profile.id}
              {...profile}
              animate={animation}
              updateAnimate={handleAnimation}
            />
          ))}
        </div>
      </Wrapper>
    </main>
  </>
);
};

export default App;

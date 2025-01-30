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

  // get titles
  const titles = [...new Set(profiles.map((profile) => profile.title))];

  const [title, setTitle] = useState("");
  //update the title on change of the drowndrop
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const [search, setSearch] = useState("");
  //update the search on change of the input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  //clear the title and search
  const handleClear = () => {
    setTitle("");
    setSearch("");
  };

  //filter the profiles based on the title
  const filtedProfiles = profiles.filter(
    (profile) =>
      (title === "" || profile.title === title) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
        </Wrapper>
        <Wrapper>
          <About />
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
            <button onClick={handleClear}>Clear</button>
          </div>
          <div className="profile-cards">
            {filtedProfiles.map((profile) => (
              <Card key={profile.email} {...profile} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default App;

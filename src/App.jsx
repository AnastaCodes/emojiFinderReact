import React, { useState, useEffect } from "react";
import { Container } from "./components/Container/Container";
import { Form } from "./components/Form/Form";
import { Card } from "./components/Card/Card";
import { data } from "./assets/data";
import "./App.css";
//tolowCasecd
function App() {
  const [inputItem, setInputItem] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = data.filter(el => el.title.includes(inputItem));
    setFilterData(filteredData);
  }, [inputItem]);

  return (
    <>
      <section className="articles">
        <Container type="headerContainer">
          <h1>Emoji Finder</h1>
          <h2>Find emoji by keywords</h2>
        </Container>
        <Container type="searchContainer">
          <Form
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
          />

          <div className="card-wrapper">
            {filterData.map((el, index) => (
              <Card
                key={index}
                image={el.symbol}
                title={el.title}
                description={el.keywords}
              />
            ))}
          </div>
        </Container>
        <Container type="footerContainer">
          <p>2024 © Made with love by me</p>
        </Container>
      </section>
    </>
  );
}

export default App;

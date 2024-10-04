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

  function sortKeywords(obj){
    const unsorted = obj.split(' ');
    let sorted = unsorted.reduce((accumulator, curentValue) =>{
        if(!accumulator.includes(curentValue)){
            accumulator.push(curentValue);
        }
        return accumulator;
    }, []).join(', ');
    return sorted;
}



  useEffect(() => {
    const filteredData = data.filter(el => el.title.toLowerCase().includes(inputItem.toLowerCase()) || el.keywords.toLowerCase().includes(inputItem.toLowerCase()));
    
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
                description = {sortKeywords(el.keywords)}
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

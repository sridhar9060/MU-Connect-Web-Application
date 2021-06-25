import React from 'react'; 
import { useState, useEffect } from 'react';

import './Viewnews.css';






const Viewnews = () => {

      const getlist = async (locname) => {
        const resp = await fetch('https://shrouded-peak-33601.herokuapp.com/filter?location='+ locname);
        setStocks(await resp.json());
      }
  
    function handleClick(event) {
        setFilterloc(event.target.value);
        // var filterlist = fetch('http://localhost:8000/filter?location='+ event.target.value);
        getlist(event.target.value);
      }

    


    const [stocks, setStocks] = useState([]);
    const [locations, setLocations] = useState([]);

    const [filterloc, setFilterloc] = useState("");

    const getStocks = async () => {
        try {
            var locs = []
            const response = await fetch('https://shrouded-peak-33601.herokuapp.com/viewlist');
            // const response = await fetch('http://localhost:8000/filter/{filterloc}');
            const res = await fetch('https://shrouded-peak-33601.herokuapp.com/locationlist')
            
            setStocks(await response.json());
            locs = await res.json();
            setLocations(locs);
        } catch (error) {
            
            console.log("my error is "+ error);
        }
    }

    

    

    useEffect(() => {
        getStocks();
    }, []);


    return (
        <>
          <div className="containerr">
            <div className="main">
              <div className="filters">
                <p className="filterHeading">Category</p>
                <div className="locationlist">
                  <select onChange={handleClick} >
                    
                    {locations.map((l) =>(
                      <option value={l}>{l}</option>
                    ) )
                    }

                  </select>

                  {/* <Select 
                    value={filterloc}
                    onChange={handleClick()}
                    options ={locations}
                  /> */}
                </div>
                  
              </div>  
              <div className="stockslist">
                {stocks.map((s) =>(
                  <div className="stocks">
                    <p className="productname">{s.headline}</p>
                    <img className="itemImage" src= {s.image} alt="Image is not loaded"></img>
                    <div className="details">
                      <div className="detailone">
                        <p className="description">{s.description}</p>
                      </div>
                      <div className="detailtwo"> 
                        <p className="quantity">Source:  {s.source}</p>
                        <p className="location">Category:   {s.category}</p>
                      </div>
                    </div>
                  </div>
                ) )}
              </div>
            </div>  
          </div>
        </>
    )
}

export default Viewnews
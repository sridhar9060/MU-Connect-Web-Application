import React, { useState, useEffect } from "react";
import './Editor.css'
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"



const Editor = () => {

const [error, setError] = useState("")
const { currentUser, logout } = useAuth();
const [stocks, setStocks] = useState([]);
const history = useHistory()
async function handleLogout() {
  setError("")

  try {
    await logout()
    history.push("/login")
  } catch {
    setError("Failed to log out")
  }
}


useEffect(() => {
        getStocks();
    }, []);

  const deletelist = async (pname) => {
        // console.log(JSON.stringify(pname));
        console.log(pname)
        const resp = await fetch('https://shrouded-peak-33601.herokuapp.com/deleteitem?headline='+ pname);
        getStocks(await resp.json());
      }
  
    function handledelete(proname) {
        //console.log(proname);
        deletelist(proname);
      }

  const getStocks = async () => {
        try {
            var locs = []
            var i;
            var location = "";
            var flag = 0 ; 
            for (i = 0; i < currentUser.email.length; i++) {
              
                if(currentUser.email[i]=="_"){
                    i++
                    while ( currentUser.email[i]!="@") {
                      if(flag==0){
                        flag=1;
                        location = location + currentUser.email[i].toUpperCase();
                        i++;
                      }
                      else{
                        location = location + currentUser.email[i];
                        i++;
                      }
                }
                
            }}
            const resp = await fetch('https://shrouded-peak-33601.herokuapp.com/viewlist');
          setStocks(await resp.json());
        } catch (error) {
            
            console.log("my error is "+ error);
        }
  }

  
  const [stock, setStock] = useState({
    headline: '',
    source: '',
    description: '',
    category: '',
    image: ''
  });


  const handleSubmit = (e) => {
   
    if (stock.headline.length < 1){
      alert("Product Name should be assigned!!");
    }
    // else if(!Number.isInteger(Number(stock.quantity)) || Number(stock.quantity)<=0) {
    //   alert("Quantity should be assigned and integer greater than 0")
      
    // }else if(!Number.isInteger(Number(stock.price)) || Number(stock.price)<=0) {
    //   alert("Price should be assigned and integer greater than 0")
    // }
    // else if (stock.description.length < 1){
    //   alert("Description should be assigned!!");
    // }
    // else if (stock.location.length < 1){
    //   alert("Description should be assigned!!");
    // }
    else if (true){
      axios.post("https://glacial-shelf-81347.herokuapp.com/upload",stock)
      .then(response => console.log(response))
      .catch(error => console.log(error));
      console.log(stock);
      e.preventDefault();
      alert("The stock is successfully added to the database"); 
    }


    
  }
  return (
    <>
      <div className="container1">
        
                      <div className="stockslist">
                {stocks.map((s,index) =>(
                  <div className="stocks">
                    <div className="mainName">
                      <p className="productname">{s.headline}</p>
                      <i id="deleteicon" class='fas fa-trash' onClick={() => {
                        handledelete(s.headline);
                        console.log(s.headline);
                        console.log(s.image);
                      }} />
                    </div> 
                    <img className="newsImage" src= {s.image} alt="Image not loaded"></img> 
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
        <div className="main1">
          <div className="minibox">

            <form onSubmit={e => {handleSubmit(e)}} encType="multipart/form-data">
              <div className='productName1'>
              <label>Headline</label>
              <br></br>
              <input id="PN" name="headline" value={stock.headline} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='quantity1'>
              <label>Source</label>
              <br></br>
              <input id="quant" name="source" value={stock.source} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='price1'>
                
              <label>Image URL</label>
              <br></br>
              <input id="Rs" name="image" value={stock.image} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='description1'>
              <label>Description</label>
             <br></br> 
              <textarea  id="desin" name="description" value={stock.description} onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <div className='location1'>
              <label>Category</label>
              <br></br>
              <input id="loc" value={stock.category} name="category" onInput={e => setStock({...stock, [e.target.name]: e.target.value})}/>
              </div>
              <br></br>
              <div className="submit">
              <input type='submit' value='Submit'/>
              </div>
            </form>

          
          </div>  
         </div>
         <div>
            <div className="logoutbutton" variant="link"  onClick={handleLogout}>
              Log Out
            </div>
          </div>
      </div>
      
        
    </>
  );
}



export default Editor;

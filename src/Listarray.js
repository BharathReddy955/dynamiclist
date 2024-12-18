import React, { useState } from 'react'
import './List.css'

function Listarray() {

    const [cars,setCars]=useState([])
    const [bikes,setBikes]=useState([])
    const [favs,setFavs]=useState([])

    function addCars(){
        let c=document.getElementById('inp').value
        if(c!==''){
        setCars([...cars ,c])
        document.getElementById('inp').value=''
        }
      else 
      alert('enter car name')
    }
    function deleteitems(){
        setCars(cars.slice(0,-1))
    }

    function addBikes(){
        let c=document.getElementById('inp1').value
        if(c!==''){
        setBikes([...bikes ,c])
        document.getElementById('inp').value=''
        }
      else 
      alert('enter bike name')
    }
    function deleteitemsbike(){
        setBikes(bikes.slice(0,-1))
    }

    function addFavs(){
        let c=document.getElementById('inp2').value
        if(c!==''){
        setFavs([...favs ,c])
        document.getElementById('inp').value=''
        }
      else 
      alert('enter crickter name')
    }
    function deleteitemscrickter(){
        setFavs(favs.slice(0,-1))
    }
  return (
    <><div id='container'>
      <h1 style={{color:"red"}}   >Dynamic List</h1>

    <input type='text' id="inp"  placeholder='enter car name'/><br/>
    <button onClick={addCars}>add cars</button>
    <button onClick={deleteitems}>delete cars</button>
   {cars.map(x =><li>{x}</li>)}
   <br></br>
  
   <input type='text' id="inp1" placeholder='enter bike name'/><br/>
    <button onClick={addBikes}>add Bikes</button>
    <button onClick={deleteitemsbike}>delete Bikes</button>
   {bikes.map(x =><li>{x}</li>)}
  <br></br>
   <input type='text' id="inp2" placeholder='enter fav crickter'/><br/>
    <button onClick={addFavs}>add crickter</button>
    <button onClick={deleteitemscrickter}>delete crickter</button>
   {favs.map(x =><li>{x}</li>)}
   </div>
    </>
    
  )
}

export default Listarray
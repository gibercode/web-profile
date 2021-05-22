
import { useState } from 'react';
import './App.css';
import image from './images/desktop-icon.png'
import teacher from './images/teacher.png'

function App() {

  const [show, setShow] = useState(false)


  return (
    <>
    <div className='_main'>
      <div className='_card'>
        <div className='_titleParent'>
         <h1> Giber's web profile </h1> 
         <img src={image} width='30px' height='30px'></img> 
        </div>
        
        <h3> Ten things about me! </h3>
        <ol className='_list'>
          <li>I'm 25 year old</li>
          <li>I'm a software developer </li>
          <li>I build web pages, web aplications and mobile apps</li>
          <li>My favorites colors are black and blue</li>
          <li>I have brown eyes</li>
          <li>My favorites foods are the italian and chinese</li>
          <li>I like sports in general but specially soccer, basketball and street workout</li>
          <li>I'm short</li>
          <li>I love sunsets and sunrises</li>
          <li>I like travels</li>
          <li>My favorite climate is cold</li>
        </ol>

        <button className='_button' onClick={() => setShow(true)}> click me!</button> 
      </div>
    </div>

    <div className={show ? '_modalParent' : '_displaynone'} onClick={() => setShow(false)}>
    <div className='_modal'>
      <p>Oriana is the best teacher in the world!</p>
      <img src={teacher}></img> 
    </div>
    </div>
 
    </>
  );
}

export default App;

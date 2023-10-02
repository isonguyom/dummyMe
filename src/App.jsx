/* eslint-disable react/prop-types */
import { useState } from 'react'
import Assistant from './components/Assistant'
import './App.css'

function Button({ onClick, text }) {
  return (
    <button className='btn' onClick={onClick}>{text}</button>
  )
}

function App() {
  const [response, setResponse] = useState('');


  // Function to simulate the assistant's response
  const simulateAssistantResponse = () => {
    return "Assistant: Hello! How can I assist you today?";
  };

  // Event handler for button click
  const handleButtonClick = () => {
    const assistantResponse = simulateAssistantResponse();
    setResponse(assistantResponse);
  };

  return (
    <main className='App'>
      <Assistant />
      <header className='main-header'>
        <h3 className='brand-name'>DummyMe</h3>
        <div className='header-btns'>
          <Button onClick={handleButtonClick} text="Log In" />
          <Button onClick={handleButtonClick} text="Sign Up" />
          {response && <Assistant response={response} />}
        </div>
      </header>
      <section className='hero'>
        <div className='hero-text'>
          <h1 className='hero-title'>Welcome to the Dummy Text Generator!</h1>
          <p className='hero-para'>This handy tool helps you create dummy text for all your layout needs.</p>
          <Button onClick={handleButtonClick} text="Learn More" />
        </div>
        <div className='hero-img'>
          <img src='hero-img.png' alt='hero' />
        </div>
      </section>
      <section className='middle'>
        <div>
        <img className='dummy-icons' src='create.png' alt='share' />
        <h3>Dummy Header 1</h3>
        <p>We are gradually adding new functionality and we welcome your suggestions and feedback</p>
          <Button onClick={handleButtonClick} text="Create your dummy" />
        </div>
        <div>
        <img className='dummy-icons' src='customize.png' alt='customize' />
        <h3>Dummy Header 2</h3>
        <p>We are gradually adding new functionality and we welcome your suggestions and feedback</p>
          <Button onClick={handleButtonClick} text="Customize your dummy" />
        </div>
        <div>
        <img className='dummy-icons' src='share.png' alt='share' />
        <h3>Dummy Header 3</h3>
        <p>We are gradually adding new functionality and we welcome your suggestions and feedback</p>
          <Button onClick={handleButtonClick} text="Share your dummy" />
        </div>
      </section>
      <footer>
      <p>Please feel free to send us any additional dummy texts.</p>
      <Button onClick={handleButtonClick} text="Tip Us" /></footer>
    </main>
  )
}

export default App

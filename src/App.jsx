/* eslint-disable react/prop-types */
import { useState } from 'react'
import Assistant from './components/Assistant'
import './App.css'

function Button({ onHover, onHoverEnd, text, message }) {
  // useEffect(() => {
  //   if (hovered) {
  //     const onMouseMove = (e) => {
  //       onHover(e, message);
  //     };

  //     window.addEventListener('mousemove', onMouseMove);

  //     return () => {
  //       window.removeEventListener('mousemove', onMouseMove);
  //     };
  //   }
  // }, [hovered, message, onHover]);
  return (
    <button onMouseEnter={(e) => onHover(e, message)} onMouseLeave={() => onHoverEnd()} className='btn'>{text}</button>
  )
}

function App() {
  const [message, setMessage] = useState('How can I help');
  const [assistantPosition, setAssistantPosition] = useState({ x: 3, y: 45 })
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (btn, hoverMessage) => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const xPosition = Math.min(maxX, Math.max(0, btn.clientX));
    const yPosition = Math.min(maxY, Math.max(0, btn.clientY));
    const buttonPosition = { x: xPosition, y: yPosition }
    setIsHovered(true)

    setAssistantPosition(buttonPosition)
    setMessage(hoverMessage);
    setIsHovered(false)
    console.log(buttonPosition)
  };

  const handleMouseLeave = () => {
    setMessage('How can I help')
    setAssistantPosition({ x: 3, y: 45 })
  };

  return (
    <main className='App'>
      <header className='main-header'>
        <h3 className='brand-name'>DummyMe</h3>
        <div className='header-btns'>
          <Button onHover={handleMouseEnter} onHoverEnd={handleMouseLeave} hovered={isHovered} text="Log In" message="Clicking this button will enable you to log in to your account" />
          <Button onHover={handleMouseEnter} onHoverEnd={handleMouseLeave} text="Sign Up" message="Clicking this button will enable you to create an account with us" />
        </div>
      </header>
      <section className='hero'>
        <div className='hero-text'>
          <h1 className='hero-title'>Welcome to the Dummy Text Generator!</h1>
          <p className='hero-para'>This handy tool helps you create dummy text for all your layout needs.</p>
          <Button onHover={handleMouseEnter} onHoverEnd={handleMouseLeave} text="Learn More" message="Click here to learn more about us" />
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
          <Button onHover={handleMouseEnter} onHoverEnd={handleMouseLeave} text="Generate a dummy" message='Click here to see me do magic' />
        </div>
        <div>
          <img className='dummy-icons' src='customize.png' alt='customize' />
          <h3>Dummy Header 2</h3>
          <p>We are gradually adding new functionality and we welcome your suggestions and feedback</p>
          <Button onHover={handleMouseEnter} onHoverEnd={handleMouseLeave} text="Customize your dummy" message='A custom dummy text could fill good' />
        </div>
        <div>
          <img className='dummy-icons' src='share.png' alt='share' />
          <h3>Dummy Header 3</h3>
          <p>We are gradually adding new functionality and we welcome your suggestions and feedback</p>
          <Button onHover={handleMouseEnter} onHoverEnd={handleMouseLeave} text="Share your dummy" message='Let friends use your dummy text' />
        </div>
      </section>
      <footer>
        <p>Please feel free to send us any additional dummy texts.</p>
        <Button onHover={handleMouseEnter} onHoverEnd={handleMouseLeave} text="Tip Us" message="Who doesn't like a tip" /></footer>
      <Assistant message={message} position={assistantPosition} />
    </main>
  )
}

export default App

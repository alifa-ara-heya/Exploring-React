import { act, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './ACtor'
import Singer from './Singer'
import BookStore from './Bookstore'

function App() {

  const actors = ['Shohid Kapur', 'Matt Stewart', 'Rani Mukharjee', 'Bobita', 'Kajal', 'Manna'];

  const singers = [
    { id: 1, name: 'Mahfuz', age: 58 },
    { id: 2, name: 'Selim', age: 28 },
    { id: 3, name: 'Arzu', age: 48 },
    { id: 4, name: 'Noyon', age: 30 },
  ]

  const books = [
    { id: 1, name: 'physics', price: 58 },
    { id: 2, name: 'chemistry', price: 28 },
    { id: 3, name: 'math', price: 48 },
    { id: 4, name: 'biology', price: 30 },
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books = {books}></BookStore>

      
      <Actor name={"Sakib"}></Actor>

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {/* 
      <Todo
        task='Learn React'
        isDone={true}></Todo>
      <Todo
        task='Explore Core Concepts'
        isDone={false}></Todo>
      <Todo
        task='Try JSX'
        isDone={true}></Todo> */}
      {/* <Device name= "Laptop" price = '55'></Device>
      <Device name= "Mobile" price = '17'></Device>
      <Person></Person>
      <Student grade= 'A-' score= '60'></Student>
      <Student grade= 'A-'></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  console.log(props);
  return <h3>This device is: {props.name}. The price is {props.price}. </h3>
}

function Person() {
  const age = 23;
  const year = 1;
  const person = { name: 'Sakib', 'favorite-color': 'purple' }
  return <h3>I am {person.name} with age {age}. Next year I will be {age + year}. My favorite color is {person['favorite-color']}.</h3>
}


const { grade, score } = { grade: 'A+', score: '92' }

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student.</h3>
      <p>My favorite foods are: </p>

      <p>Biryani</p>
      <p>Ice-Cream</p>

      <p>Grade: {grade}</p>
      <p>Score: {score}</p>

    </div>
  )
}


function Developer() {
  const developerStyle = {
    border: '2px solid purple',
    // 'border-radius': '12px', evabeo likha jay
    borderRadius: '20px',
  }

  return (
    <div style={developerStyle}>
      <h5 style={{
        color: 'tomato',
        fontSize: '20px',
      }
      }>I want to be a developer.</h5>
      <p>Coding is my passion</p>
    </div>
  )
}

export default App

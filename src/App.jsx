
import './App.css'
import { Suspense } from 'react'
import Countries from './Countries'


const countriesPromise =fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {
  

  return (
    <>
      
      <h1>Shefaul On the Go..</h1>
      <Suspense fallback={<p>Sheful On the Go Loading...</p>}>
        <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App

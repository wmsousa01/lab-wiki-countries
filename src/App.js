import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import dataCountry from './countries.json'
import { useState } from 'react'

function App() {
  const [countries, setCountries] = useState(dataCountry)
  return (
    <div className="App">
      <Navbar />
      
      <CountriesList />
      <Routes>
        <Route path="/:countryId" element={ <CountryDetails data={countries} /> } />
      </Routes>

    </div>
  );
}

export default App;

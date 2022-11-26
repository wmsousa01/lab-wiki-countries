import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = (props) => {
  const { data } = props
  const { countryId } = useParams();
  const [country, setCountry] = useState(null)

  useEffect(()=>{
    console.log(data)
    let foundCountry = data.find(element => element.alpha3Code.toLowerCase() === countryId)
    console.log(foundCountry, countryId)
    setCountry(foundCountry)
  },[data, countryId])

  const borderList = border => border.map((code, index)=>{
    return (
    
    <li key={code}>{ code }</li>)
  })
  
  if(!country) {
  
    return (
    <h1>Loading</h1>
    )}
  

  
  return (
    <div>
      <h1>{ country.name.common }</h1>
      <table>
        <tr>
          <td>Capital</td>
          <td>Area</td>
          <td>Borders</td>
        </tr>
        <tr>
          <td>{ country.capital }</td>
          <td>{ country.area }</td>
          <td>
            
                { borderList(country.borders) }
              
          
          </td>

        </tr>

      </table>
    </div>
  )
}

export default CountryDetails
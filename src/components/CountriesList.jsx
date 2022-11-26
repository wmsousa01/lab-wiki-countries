import { Link } from "react-router-dom"

const CountriesList = (props) => {
    const { alpha3Code } = props
  return (
    <div>
        <Link to={alpha3Code}/>
    </div>
  )
}

export default CountriesList
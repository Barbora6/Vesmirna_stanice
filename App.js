
import { useState, useEffect} from 'react'

const App = () => {
  const url = 'http://api.open-notify.org/iss-now.json'

  const[latitude, setLatitude] = useState('')
  const[longitude, setLongitude] = useState('')
  const[urlMap, setUrlMap] = useState('')

  const getCoordinates = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setLatitude(data['iss_position']['latitude'])
    setLongitude(data['iss_position']['longitude'])
    const iss_lat = data['iss_position']['latitude']
    const iss_long = data['iss_position']['longitude']
    setUrlMap(`https://mapy.cz/zakladni?x=${iss_lat}&y=${iss_long}&z=5`)
  }

  useEffect(() => {
    getCoordinates()
  })

  return (
    <div>
      <h2>Zeměpisná šířka</h2>
      <p>{latitude}</p>
      <h2>Zeměpisná délka</h2>
      <p>{longitude}</p>
      <a href={urlMap} target='_blank'>Pozice ISS v mapách</a>
    </div>
  )
}

export default App
























// import { useState, useEffect } from 'react'

// const App = () => {

//   const url = 'http://api.open-notify.org/iss-now.json'

//   const[latitude, setLatitude] = useState('')
//   const[longitude, setLongitude] = useState('')
//   const [urlMap, setUrlMap] = useState('')


//   const getCoordinates = async () => {
//     const response = await fetch(url)
//     const data = await response.json()
//     setLatitude(data['iss_position']['latitude'])
//     setLongitude(data['iss_position']['longitude'])
//     const iss_lat = data['iss_position']['latitude']
//     const iss_long = (data['iss_position']['longitude'])
//     setUrlMap(`https://mapy.cz/zakladni?x=${iss_lat}&y=${iss_long}&z=12`)
//   }

// useEffect(() => {
//   getCoordinates()
// },[])

//   return (
//     <div>
//       <h2>Zeměpisná šířka</h2>
//       <p>{latitude}</p>
//       <h2>Zeměpisná délka</h2>
//       <p>{longitude}</p>
//       <a href={urlMap} target='_blank'>Pozice ISS v mapách</a>
//     </div>
//   )
// }

// export default App


//   // https://mapy.cz/zakladni?x=14.4802396&y=50.1395161&z=18
//   //  ? za otazník se píší parametry, které specifikují adresu
//   // & parametry jsou spojovány znaménkem and, je to spojovací prvek

//   // do funkce useState uložíme pomocí template stringu odkaz na mapy, kde upravíme x=${iss_lat}&y=${iss_long}
//   // do return dopíšeme a href a doplníme funkci urlMap
//   // ťarget = stránka se otevře v novém okně _blank
 
import React from "react"

const App = () => {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    fetch(`${process.env.PORT || "http://localhost:3001/api"}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
        console.log(data.message)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <div className='App'>
      <h1>{data || "Loading"}</h1>
    </div>
  )
}

export default App

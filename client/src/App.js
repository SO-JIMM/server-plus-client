import React from "react"

const App = () => {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
      })
  }, [])
  return <div className='App'></div>
}

export default App

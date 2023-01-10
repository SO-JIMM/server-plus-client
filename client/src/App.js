import React from "react"

const App = () => {
  const [, setData] = React.useState(null)
  React.useEffect(() => {
    fetch(`${process.env.PORT || "http://localhost:3001"}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.message)
        console.log(data.message)
      })
      .catch((e) => console.log(e))
  }, [])
  return <div className='App'></div>
}

export default App

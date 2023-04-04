import './App.css'
import ChartBoard from './components/ChartBoard/ChartBoard'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <ChartBoard></ChartBoard>
    </div>
  )
}

export default App

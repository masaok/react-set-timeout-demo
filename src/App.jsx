import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Toal1 from './components/Toal1'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            {/* <Route path="/toal1" element={<Toal1 />} /> */}
            {/* <Route path="//*" element={<Toal1 />} /> */}
            {/* <Route path="toal1" element={<Toal1 />} /> */}
            <Route path="//*" element={<Toal1 />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App

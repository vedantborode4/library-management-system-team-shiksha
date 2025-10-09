import { Route, Routes } from "react-router-dom"
import Landing from "./components/landingpage/Landing"
import Dashboard from "./components/dashboard/Dashboard"
import Available from "./components/dashboard/Available"
import Borrowed from "./components/dashboard/Borrowed"
import Feedback from "./components/dashboard/Feedback"

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/dashboard" element={<Dashboard />}> 
        <Route index element={<Available></Available>} /> {/* index route - shows by default when visiting /dashboard */}
        <Route path="borrowed" element={<Borrowed></Borrowed>} />
        <Route path="feedback" element={<Feedback></Feedback>} />
      </Route>

    </Routes>
  )
}

export default App

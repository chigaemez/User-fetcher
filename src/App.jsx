import SingleUser from "./Components/SingleUser"
import UserData from "./Components/UserData"
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<UserData/>}/>
      <Route path="/User_details/:id" element={<SingleUser/>}/>
     </Routes>
     

    </>
  )
}

export default App

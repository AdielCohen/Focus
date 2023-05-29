import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (    
    <Routes>    
      <Route path="/" element={<Home />} />
      <Route path="/Finance" element={<EmployeeList endPoint={'devFinPage/2'} className={'Finance'} />} />
      <Route path="/Development" element={<EmployeeList endPoint={'devFinPage/1'} className={'Development'} />} />
    </Routes>  
  );
}

export default App;

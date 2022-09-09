import {ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import VanillaReact from "./vanillaReact/Parent";
import "./App.css";
import ContextComponent from "./usingContext/ContextComponent";


const SideNavigation = () => {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    navigate(`/${item}`)
  }
  const stateManagementTools = ["Context", "Redux", "Zustand", "Jotai", "Mobx", "Valatio", "Recoil", "Vanilla-React"];
  const selectedPath = useLocation()?.pathname;
  return (<Paper sx={{width: "200px", border: "1px solid grey"}}>
    <MenuList>
      {stateManagementTools.map((item, index) => (<div key={index}>
        <MenuItem
          selected={item.toLowerCase() === selectedPath.replace("/", "")}
          key={index}>
          <ListItemText onClick={() => handleNavigation(item.toLowerCase())}
                        primary={item}/>
        </MenuItem>
        {stateManagementTools.length - 1 === index ? null : <hr/>}
      </div>))}
    </MenuList>
  </Paper>);
};

const Topbar = ({className}) => {
  return <h1 className={className}> State Management Libraries</h1>;
};

function App() {
  console.log("App rendered")
  return (<>
    <div className="App">
      <BrowserRouter>
        <Topbar className="Topbar"/>
        <div className="Content">
          <SideNavigation/>
          <Routes>
            <Route path="/vanilla-react" element={<VanillaReact/>}/>
          </Routes>
          <Routes>
            <Route path={"/"} element={
              <Navigate to={"/vanilla-react"}/>}/>
          </Routes>
          <Routes>
            <Route path={"/context"} element={<ContextComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </>)
    ;
}

export default App;

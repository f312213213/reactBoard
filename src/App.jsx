import React from 'react';
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";

import Upload from "./scenes/upload";
import NB15DNNDashboard from "./scenes/nb15dnn";
import IOT23FGSMDashboard from "./scenes/iot23fgsm";
import IOT23DNNDashboard from "./scenes/iot23dnn";
import Home from "./scenes/home";



function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/*<Topbar setIsSidebar={setIsSidebar} />*/}
          <main className="content" style={{ display: "flex", minHeight: '100vh' }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/upload" element={<Upload />} />
                {/*<Route path="/team" element={<Team />} />*/}
                {/*<Route path="/contacts" element={<Contacts />} />*/}
                {/*<Route path="/invoices" element={<Invoices />} />*/}
                {/*<Route path="/form" element={<Form />} />*/}
                {/*<Route path="/calendar" element={<Calendar />} />*/}
                {/*<Route path="/faq" element={<FAQ />} />*/}
                {/*<Route path="/bar" element={<Bar />} />*/}
                {/*<Route path="pie" element={<Pie />} />*/}
                <Route path="/NB15DNN2" element={<NB15DNNDashboard />} />
                <Route path="/IOT23DNN2" element={<IOT23DNNDashboard />} />
                <Route path="/IOT23EPS" element={<IOT23FGSMDashboard />} />
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;

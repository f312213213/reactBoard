import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import MainChart from "../../components/MainChart";
import StatBox from "../../components/StatBox";


const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  return (
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="深度學習模型新式攻防研究" subtitle="NTPUNSL" />
        </Box>



        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            mb={'40px'}
        >
          <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
          >
            <StatBox
                title="0.774336"
                subtitle="原始準確度"
                progress="0.774336"
            />
          </Box>
          <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
          >
            <StatBox
                title="0.991909"
                subtitle="ACT 準確度"
                progress="0.991909"
            />
          </Box>
        </Box>

      </Box>
  );
};

export default Home;

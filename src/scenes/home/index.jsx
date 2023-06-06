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


        <Typography variant="h3">
          NB15 DNN 2分類 - 測試資料準確度
        </Typography>
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            my={'20px'}
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

        <Typography variant="h3">
          IOT23 DNN 2分類 - 測試資料準確度
        </Typography>
        <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
            my={'20px'}
        >
          <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
          >
            <StatBox
                title="0.899315"
                subtitle="原始準確度"
                progress="0.899315"
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
                title="0.999979"
                subtitle="ACT 準確度"
                progress="0.999979"
            />
          </Box>
        </Box>

        {/*<Typography variant="h3">*/}
        {/*  IOT23 EPS 擾動 - 測試資料準確度*/}
        {/*</Typography>*/}
        {/*<Box*/}
        {/*    display="grid"*/}
        {/*    gridTemplateColumns="repeat(12, 1fr)"*/}
        {/*    gridAutoRows="140px"*/}
        {/*    gap="20px"*/}
        {/*    my={'20px'}*/}
        {/*>*/}
        {/*  <Box*/}
        {/*      gridColumn="span 3"*/}
        {/*      backgroundColor={colors.primary[400]}*/}
        {/*      display="flex"*/}
        {/*      alignItems="center"*/}
        {/*      justifyContent="center"*/}
        {/*  >*/}
        {/*    <StatBox*/}
        {/*        title="0.90002"*/}
        {/*        subtitle="原始準確度"*/}
        {/*        progress="0.90002"*/}
        {/*    />*/}
        {/*  </Box>*/}
        {/*  <Box*/}
        {/*      gridColumn="span 3"*/}
        {/*      backgroundColor={colors.primary[400]}*/}
        {/*      display="flex"*/}
        {/*      alignItems="center"*/}
        {/*      justifyContent="center"*/}
        {/*  >*/}
        {/*    <StatBox*/}
        {/*        title="0.9999"*/}
        {/*        subtitle="ACT 準確度"*/}
        {/*        progress="0.9999"*/}
        {/*    />*/}
        {/*  </Box>*/}
        {/*</Box>*/}

      </Box>
  );
};

export default Home;

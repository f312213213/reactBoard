import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import MainChart from "../../components/MainChart";
import StatBox from "../../components/StatBox";

const IOT23FGSMDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    { eps: '0.000', acc: 0.90002, accCT: 0.9999 },
    { eps: '0.001', acc: 0.892749, accCT: 0.999875 },
    { eps: '0.002', acc: 0.885131, accCT: 0.999873 },
    { eps: '0.003', acc: 0.875477, accCT: 0.99987 },
    { eps: '0.004', acc: 0.86741, accCT: 0.999862 },
    { eps: '0.005', acc: 0.847736, accCT: 0.999859 },
    { eps: '0.006', acc: 0.812896, accCT: 0.999847 },
    { eps: '0.007', acc: 0.747754, accCT: 0.999828 },
    { eps: '0.008', acc: 0.701385, accCT: 0.999778 },
    { eps: '0.009', acc: 0.67715, accCT: 0.999673 },
    { eps: '0.010', acc: 0.66809, accCT: 0.999489 },
    { eps: '0.011', acc: 0.654644, accCT: 0.999304 },
    { eps: '0.012', acc: 0.639844, accCT: 0.999086 },
    { eps: '0.013', acc: 0.627319, accCT: 0.997748 },
    { eps: '0.014', acc: 0.615831, accCT: 0.993135 },
    { eps: '0.015', acc: 0.604197, accCT: 0.991191 },
    { eps: '0.016', acc: 0.578944, accCT: 0.907154 },
    { eps: '0.017', acc: 0.544465, accCT: 0.892236 },
    { eps: '0.018', acc: 0.502978, accCT: 0.64278 },
    { eps: '0.019', acc: 0.438574, accCT: 0.600034 },
    { eps: '0.020', acc: 0.423209, accCT: 0.589994 },
    { eps: '0.021', acc: 0.412018, accCT: 0.551126 },
    { eps: '0.022', acc: 0.400661, accCT: 0.535121 },
    { eps: '0.023', acc: 0.386541, accCT: 0.510825 },
    { eps: '0.024', acc: 0.372207, accCT: 0.467212 },
    { eps: '0.025', acc: 0.353005, accCT: 0.461483 },
    { eps: '0.026', acc: 0.339424, accCT: 0.425284 },
    { eps: '0.027', acc: 0.330544, accCT: 0.411866 },
    { eps: '0.028', acc: 0.323805, accCT: 0.399284 },
    { eps: '0.029', acc: 0.314665, accCT: 0.359717 },
    { eps: '0.030', acc: 0.308279, accCT: 0.332144 },
    { eps: '0.031', acc: 0.295999, accCT: 0.304536 },
    { eps: '0.032', acc: 0.28675, accCT: 0.295411 },
    { eps: '0.033', acc: 0.277313, accCT: 0.292237 },
    { eps: '0.034', acc: 0.270472, accCT: 0.287984 },
    { eps: '0.035', acc: 0.258109, accCT: 0.284155 },
    { eps: '0.036', acc: 0.25039, accCT: 0.278855 },
    { eps: '0.037', acc: 0.243262, accCT: 0.27686 },
    { eps: '0.038', acc: 0.235932, accCT: 0.2761 },
    { eps: '0.039', acc: 0.230204, accCT: 0.244307 },
    { eps: '0.040', acc: 0.22141, accCT: 0.244035 },
    { eps: '0.041', acc: 0.214351, accCT: 0.234877 },
    { eps: '0.042', acc: 0.20703, accCT: 0.233822 },
    { eps: '0.043', acc: 0.200437, accCT: 0.229805 },
    { eps: '0.044', acc: 0.19264, accCT: 0.213809 },
    { eps: '0.045', acc: 0.188604, accCT: 0.196461 },
    { eps: '0.046', acc: 0.182608, accCT: 0.187742 },
    { eps: '0.047', acc: 0.17879, accCT: 0.186456 },
    { eps: '0.048', acc: 0.175721, accCT: 0.185868 },
    { eps: '0.049', acc: 0.172975, accCT: 0.18527 },
    { eps: '0.050', acc: 0.170864, accCT: 0.182487 },
    { eps: '0.051', acc: 0.169549, accCT: 0.178588 },
    { eps: '0.052', acc: 0.168076, accCT: 0.176916 },
    { eps: '0.053', acc: 0.166719, accCT: 0.175825 },
    { eps: '0.054', acc: 0.165273, accCT: 0.152832 },
    { eps: '0.055', acc: 0.164193, accCT: 0.127191 },
    { eps: '0.056', acc: 0.162171, accCT: 0.127114 },
    { eps: '0.057', acc: 0.161532, accCT: 0.124772 },
    { eps: '0.058', acc: 0.160977, accCT: 0.124597 },
    { eps: '0.059', acc: 0.160114, accCT: 0.121808 },
    { eps: '0.060', acc: 0.157439, accCT: 0.100997 },
    { eps: '0.061', acc: 0.155693, accCT: 0.099879 },
    { eps: '0.062', acc: 0.154604, accCT: 0.09957 },
    { eps: '0.063', acc: 0.154292, accCT: 0.09794 },
    { eps: '0.064', acc: 0.153885, accCT: 0.096968 },
    { eps: '0.065', acc: 0.153487, accCT: 0.096876 },
    { eps: '0.066', acc: 0.153027, accCT: 0.095932 },
    { eps: '0.067', acc: 0.152517, accCT: 0.095518 },
    { eps: '0.068', acc: 0.152191, accCT: 0.09517 },
    { eps: '0.069', acc: 0.151921, accCT: 0.094993 },
    { eps: '0.070', acc: 0.151575, accCT: 0.094946 },
    { eps: '0.071', acc: 0.15032, accCT: 0.020006 },
    { eps: '0.072', acc: 0.149513, accCT: 0.005214 },
    { eps: '0.073', acc: 0.148902, accCT: 0.004394 },
    { eps: '0.074', acc: 0.148368, accCT: 0.004288 },
    { eps: '0.075', acc: 0.147735, accCT: 0.004284 },
    { eps: '0.076', acc: 0.147266, accCT: 0.004279 },
    { eps: '0.077', acc: 0.146984, accCT: 0.004261 },
    { eps: '0.078', acc: 0.146081, accCT: 0.003106 },
    { eps: '0.079', acc: 0.144826, accCT: 0.002654 },
    { eps: '0.080', acc: 0.143218, accCT: 0.002597 },
    { eps: '0.081', acc: 0.141716, accCT: 0.002061 },
    { eps: '0.082', acc: 0.140216, accCT: 0.001807 },
    { eps: '0.083', acc: 0.138772, accCT: 0.00175 },
    { eps: '0.084', acc: 0.137132, accCT: 0.001708 },
    { eps: '0.085', acc: 0.135444, accCT: 0.001693 },
    { eps: '0.086', acc: 0.13482, accCT: 0.00167 },
    { eps: '0.087', acc: 0.134229, accCT: 0.00165 },
    { eps: '0.088', acc: 0.132986, accCT: 0.001624 },
    { eps: '0.089', acc: 0.131744, accCT: 0.001606 },
    { eps: '0.090', acc: 0.129966, accCT: 0.001544 },
    { eps: '0.091', acc: 0.12886, accCT: 0.00137 },
    { eps: '0.092', acc: 0.12791, accCT: 0.001262 },
    { eps: '0.093', acc: 0.12781, accCT: 0.001209 },
    { eps: '0.094', acc: 0.127838, accCT: 0.001158 },
    { eps: '0.095', acc: 0.12785, accCT: 0.001024 },
    { eps: '0.096', acc: 0.127858, accCT: 0.000908 },
    { eps: '0.097', acc: 0.127835, accCT: 0.000843 },
    { eps: '0.098', acc: 0.124772, accCT: 0.000763 },
    { eps: '0.099', acc: 0.12468, accCT: 0.000706 },
    { eps: '0.100', acc: 0.12463, accCT: 0.000611 }
  ]

  const data100 = [
    { eps: '0.000', acc: 0.909552, accCT: 0.999981 },
    { eps: '0.001', acc: 0.894488, accCT: 0.999977 },
    { eps: '0.002', acc: 0.847674, accCT: 0.999977 },
    { eps: '0.003', acc: 0.781534, accCT: 0.999977 },
    { eps: '0.004', acc: 0.761625, accCT: 0.999975 },
    { eps: '0.005', acc: 0.750508, accCT: 0.999973 },
    { eps: '0.006', acc: 0.7284, accCT: 0.999971 },
    { eps: '0.007', acc: 0.715375, accCT: 0.999967 },
    { eps: '0.008', acc: 0.706159, accCT: 0.999941 },
    { eps: '0.009', acc: 0.679397, accCT: 0.999901 },
    { eps: '0.010', acc: 0.642498, accCT: 0.999872 },
    { eps: '0.011', acc: 0.632889, accCT: 0.999856 },
    { eps: '0.012', acc: 0.611029, accCT: 0.999851 },
    { eps: '0.013', acc: 0.584501, accCT: 0.999681 },
    { eps: '0.014', acc: 0.571595, accCT: 0.999561 },
    { eps: '0.015', acc: 0.559537, accCT: 0.999537 },
    { eps: '0.016', acc: 0.550402, accCT: 0.998922 },
    { eps: '0.017', acc: 0.537808, accCT: 0.998642 },
    { eps: '0.018', acc: 0.522837, accCT: 0.997516 },
    { eps: '0.019', acc: 0.491033, accCT: 0.907781 },
    { eps: '0.020', acc: 0.453825, accCT: 0.906197 },
    { eps: '0.021', acc: 0.435756, accCT: 0.837278 },
    { eps: '0.022', acc: 0.409504, accCT: 0.823373 },
    { eps: '0.023', acc: 0.376889, accCT: 0.645166 },
    { eps: '0.024', acc: 0.371436, accCT: 0.630094 },
    { eps: '0.025', acc: 0.360119, accCT: 0.620754 },
    { eps: '0.026', acc: 0.358516, accCT: 0.578555 },
    { eps: '0.027', acc: 0.358163, accCT: 0.553184 },
    { eps: '0.028', acc: 0.355183, accCT: 0.549237 },
    { eps: '0.029', acc: 0.309384, accCT: 0.528571 },
    { eps: '0.030', acc: 0.309389, accCT: 0.527114 },
    { eps: '0.031', acc: 0.307301, accCT: 0.526727 },
    { eps: '0.032', acc: 0.302565, accCT: 0.526482 },
    { eps: '0.033', acc: 0.292824, accCT: 0.525989 },
    { eps: '0.034', acc: 0.288391, accCT: 0.52338 },
    { eps: '0.035', acc: 0.281083, accCT: 0.511182 },
    { eps: '0.036', acc: 0.273859, accCT: 0.498577 },
    { eps: '0.037', acc: 0.267078, accCT: 0.492943 },
    { eps: '0.038', acc: 0.262077, accCT: 0.490844 },
    { eps: '0.039', acc: 0.254434, accCT: 0.473414 },
    { eps: '0.040', acc: 0.244127, accCT: 0.471183 },
    { eps: '0.041', acc: 0.237891, accCT: 0.47021 },
    { eps: '0.042', acc: 0.230354, accCT: 0.4476 },
    { eps: '0.043', acc: 0.222678, accCT: 0.439797 },
    { eps: '0.044', acc: 0.202791, accCT: 0.438886 },
    { eps: '0.045', acc: 0.194498, accCT: 0.436388 },
    { eps: '0.046', acc: 0.187003, accCT: 0.424469 },
    { eps: '0.047', acc: 0.178508, accCT: 0.422017 },
    { eps: '0.048', acc: 0.170655, accCT: 0.372914 },
    { eps: '0.049', acc: 0.163661, accCT: 0.371715 },
    { eps: '0.050', acc: 0.159614, accCT: 0.36928 },
    { eps: '0.051', acc: 0.155722, accCT: 0.366772 },
    { eps: '0.052', acc: 0.15157, accCT: 0.363034 },
    { eps: '0.053', acc: 0.148399, accCT: 0.36296 },
    { eps: '0.054', acc: 0.145532, accCT: 0.362895 },
    { eps: '0.055', acc: 0.142929, accCT: 0.362872 },
    { eps: '0.056', acc: 0.140207, accCT: 0.362859 },
    { eps: '0.057', acc: 0.137223, accCT: 0.362783 },
    { eps: '0.058', acc: 0.134161, accCT: 0.348684 },
    { eps: '0.059', acc: 0.131448, accCT: 0.314491 },
    { eps: '0.060', acc: 0.129927, accCT: 0.313348 },
    { eps: '0.061', acc: 0.129205, accCT: 0.310722 },
    { eps: '0.062', acc: 0.128551, accCT: 0.303081 },
    { eps: '0.063', acc: 0.127564, accCT: 0.295153 },
    { eps: '0.064', acc: 0.12603, accCT: 0.294035 },
    { eps: '0.065', acc: 0.125734, accCT: 0.293556 },
    { eps: '0.066', acc: 0.125917, accCT: 0.292836 },
    { eps: '0.067', acc: 0.125613, accCT: 0.288247 },
    { eps: '0.068', acc: 0.125313, accCT: 0.284176 },
    { eps: '0.069', acc: 0.125064, accCT: 0.269953 },
    { eps: '0.070', acc: 0.125196, accCT: 0.24843 },
    { eps: '0.071', acc: 0.12575, accCT: 0.231572 },
    { eps: '0.072', acc: 0.126868, accCT: 0.225589 },
    { eps: '0.073', acc: 0.128355, accCT: 0.182574 },
    { eps: '0.074', acc: 0.12989, accCT: 0.179969 },
    { eps: '0.075', acc: 0.131221, accCT: 0.178627 },
    { eps: '0.076', acc: 0.132963, accCT: 0.175801 },
    { eps: '0.077', acc: 0.134487, accCT: 0.174247 },
    { eps: '0.078', acc: 0.136725, accCT: 0.173479 },
    { eps: '0.079', acc: 0.139293, accCT: 0.172597 },
    { eps: '0.080', acc: 0.14206, accCT: 0.171933 },
    { eps: '0.081', acc: 0.144526, accCT: 0.170846 },
    { eps: '0.082', acc: 0.147204, accCT: 0.169134 },
    { eps: '0.083', acc: 0.150121, accCT: 0.167926 },
    { eps: '0.084', acc: 0.153188, accCT: 0.167126 },
    { eps: '0.085', acc: 0.156102, accCT: 0.166278 },
    { eps: '0.086', acc: 0.158767, accCT: 0.165688 },
    { eps: '0.087', acc: 0.16099, accCT: 0.165355 },
    { eps: '0.088', acc: 0.163237, accCT: 0.162057 },
    { eps: '0.089', acc: 0.165258, accCT: 0.161887 },
    { eps: '0.090', acc: 0.167115, accCT: 0.161831 },
    { eps: '0.091', acc: 0.169015, accCT: 0.161745 },
    { eps: '0.092', acc: 0.170964, accCT: 0.161722 },
    { eps: '0.093', acc: 0.17293, accCT: 0.161664 },
    { eps: '0.094', acc: 0.174979, accCT: 0.161239 },
    { eps: '0.095', acc: 0.177333, accCT: 0.159724 },
    { eps: '0.096', acc: 0.17986, accCT: 0.15874 },
    { eps: '0.097', acc: 0.182561, accCT: 0.156709 },
    { eps: '0.098', acc: 0.185452, accCT: 0.15484 },
    { eps: '0.099', acc: 0.18833, accCT: 0.153288 },
    { eps: '0.100', acc: 0.190463, accCT: 0.152448 }
  ]


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="IOT23 EPS 擾動" subtitle="NTPUNSL" />
      </Box>



      {/*<Typography variant="h3">*/}
      {/*  準確度*/}
      {/*</Typography>*/}
      {/*<Box*/}
      {/*    display="grid"*/}
      {/*    gridTemplateColumns="repeat(12, 1fr)"*/}
      {/*    gridAutoRows="140px"*/}
      {/*    gap="20px"*/}
      {/*    mb={'40px'}*/}
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

      {/* GRID & CHARTS */}
      <Typography variant="h3">
        1 Epoch
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        mb={'40px'}
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                在相同 EPS 值下，是否有 ACT 值對準確度的影響
              </Typography>
            </Box>
            {/*<Box>*/}
            {/*  <IconButton>*/}
            {/*    <DownloadOutlinedIcon*/}
            {/*      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}*/}
            {/*    />*/}
            {/*  </IconButton>*/}
            {/*</Box>*/}
          </Box>
          <Box height="230px" m="-20px 0 0 0">
            <BarChart isDashboard={true} data={data} dataKey={'eps'} bar2={'acc'} bar1={'accCT'} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              每筆資料之細節
            </Typography>
          </Box>
          <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
          >

            <Box
                color={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
            >
              EPS 值
            </Box>
            <Box>
              <Typography
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
              >
                準確度
              </Typography>
            </Box>
            <Box>
              <Typography
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
              >
                準確度（有 ACT 值）
              </Typography>
            </Box>
          </Box>
          {data.map(({eps, acc, accCT}) => (
            <Box
              key={eps}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >

              <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
              >
                {eps}
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {acc}
                </Typography>
              </Box>
              <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                >
                  {accCT}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            在相同 EPS 值下，是否有 ACT 值對準確度的影響
          </Typography>
          <Box height="240px">
            <MainChart isDashboard={true} data={data} dataKey={'eps'} bar1={'acc'} bar2={'accCT'} />
          </Box>
        </Box>


        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            padding="30px"
        >
          <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
          >
            EPS 值變化時，準確度的變化紀錄（無 ACT）
          </Typography>
          <Box height="240px">
            <MainChart isDashboard={true} data={data} dataKey={'eps'} bar1={'acc'}  />
          </Box>
        </Box>


        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            padding="30px"
        >
          <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
          >
            EPS 值變化時，準確度的變化紀錄（有 ACT）
          </Typography>
          <Box height="240px">
            <MainChart isDashboard={true} data={data} dataKey={'eps'} bar2={'accCT'} />
          </Box>
        </Box>
      </Box>

      <Typography variant="h3">
        100 Epoch
      </Typography>
      <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
      >
        <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
        >
          <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
          >
            <Box>
              <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
              >
                在相同 EPS 值下，是否有 ACT 值對準確度的影響
              </Typography>
            </Box>
            {/*<Box>*/}
            {/*  <IconButton>*/}
            {/*    <DownloadOutlinedIcon*/}
            {/*      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}*/}
            {/*    />*/}
            {/*  </IconButton>*/}
            {/*</Box>*/}
          </Box>
          <Box height="230px" m="-20px 0 0 0">
            <BarChart isDashboard={true} data={data100} dataKey={'eps'} bar2={'acc'} bar1={'accCT'} />
          </Box>
        </Box>
        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
        >
          <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              每筆資料之細節
            </Typography>
          </Box>
          <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
          >

            <Box
                color={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
            >
              EPS 值
            </Box>
            <Box>
              <Typography
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
              >
                準確度
              </Typography>
            </Box>
            <Box>
              <Typography
                  color={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
              >
                準確度（有 ACT 值）
              </Typography>
            </Box>
          </Box>
          {data100.map(({eps, acc, accCT}) => (
              <Box
                  key={eps}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
              >

                <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  {eps}
                </Box>
                <Box>
                  <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600"
                  >
                    {acc}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600"
                  >
                    {accCT}
                  </Typography>
                </Box>
              </Box>
          ))}
        </Box>

        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            padding="30px"
        >
          <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
          >
            在相同 EPS 值下，是否有 ACT 值對準確度的影響
          </Typography>
          <Box height="240px">
            <MainChart isDashboard={true} data={data100} dataKey={'eps'} bar1={'acc'} bar2={'accCT'} />
          </Box>
        </Box>

        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            padding="30px"
        >
          <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
          >
            EPS 值變化時，準確度的變化紀錄（無 ACT）
          </Typography>
          <Box height="240px">
            <MainChart isDashboard={true} data={data100} dataKey={'eps'} bar1={'acc'}  />
          </Box>
        </Box>
        <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            padding="30px"
        >
          <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
          >
            EPS 值變化時，準確度的變化紀錄（有 ACT）
          </Typography>
          <Box height="240px">
            <MainChart isDashboard={true} data={data100} dataKey={'eps'} bar2={'accCT'} />
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default IOT23FGSMDashboard;

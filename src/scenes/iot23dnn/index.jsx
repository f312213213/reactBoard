import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import MainChart from "../../components/MainChart";


const IOT23DNNDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      epoch: 1,
      accCT: 0.498996,
      lossCT: 0.68489,
      acc: 0.498984,
      loss: 0.697518
    },
    {
      epoch: 2,
      accCT: 0.498961,
      lossCT: 0.644531,
      acc: 0.498985,
      loss: 0.661863
    },
    {
      epoch: 3,
      accCT: 0.516355,
      lossCT: 0.595434,
      acc: 0.498993,
      loss: 0.626493
    },
    {
      epoch: 4,
      accCT: 0.5781,
      lossCT: 0.543714,
      acc: 0.498987,
      loss: 0.59776
    },
    {
      epoch: 5,
      accCT: 0.751313,
      lossCT: 0.49225,
      acc: 0.49899,
      loss: 0.577728
    },
    {
      epoch: 6,
      accCT: 0.900323,
      lossCT: 0.442291,
      acc: 0.498995,
      loss: 0.562741
    },
    {
      epoch: 7,
      accCT: 0.946142,
      lossCT: 0.395264,
      acc: 0.498988,
      loss: 0.55013
    },
    {
      epoch: 8,
      accCT: 0.971486,
      lossCT: 0.351716,
      acc: 0.499016,
      loss: 0.538719
    },
    {
      epoch: 9,
      accCT: 0.987302,
      lossCT: 0.312283,
      acc: 0.618726,
      loss: 0.527575
    },
    {
      epoch: 10,
      accCT: 0.993037,
      lossCT: 0.278017,
      acc: 0.809524,
      loss: 0.516295
    },
    {
      epoch: 11,
      accCT: 0.997129,
      lossCT: 0.244479,
      acc: 0.829738,
      loss: 0.505677
    },
    {
      epoch: 12,
      accCT: 0.99888,
      lossCT: 0.197471,
      acc: 0.841768,
      loss: 0.495758
    },
    {
      epoch: 13,
      accCT: 0.999262,
      lossCT: 0.15611,
      acc: 0.850215,
      loss: 0.485907
    },
    {
      epoch: 14,
      accCT: 0.999325,
      lossCT: 0.119471,
      acc: 0.85603,
      loss: 0.476157
    },
    {
      epoch: 15,
      accCT: 0.999309,
      lossCT: 0.08855,
      acc: 0.86162,
      loss: 0.465406
    },
    {
      epoch: 16,
      accCT: 0.999294,
      lossCT: 0.064447,
      acc: 0.866975,
      loss: 0.455445
    },
    {
      epoch: 17,
      accCT: 0.999313,
      lossCT: 0.046445,
      acc: 0.871133,
      loss: 0.44646
    },
    {
      epoch: 18,
      accCT: 0.999344,
      lossCT: 0.033519,
      acc: 0.873763,
      loss: 0.437867
    },
    {
      epoch: 19,
      accCT: 0.999361,
      lossCT: 0.024127,
      acc: 0.876137,
      loss: 0.429306
    },
    {
      epoch: 20,
      accCT: 0.999382,
      lossCT: 0.017503,
      acc: 0.877705,
      loss: 0.421193
    },
    {
      epoch: 21,
      accCT: 0.999405,
      lossCT: 0.013019,
      acc: 0.878551,
      loss: 0.4131
    },
    {
      epoch: 22,
      accCT: 0.999426,
      lossCT: 0.009973,
      acc: 0.879533,
      loss: 0.405327
    },
    {
      epoch: 23,
      accCT: 0.999451,
      lossCT: 0.007834,
      acc: 0.880426,
      loss: 0.397868
    },
    {
      epoch: 24,
      accCT: 0.999477,
      lossCT: 0.006459,
      acc: 0.880795,
      loss: 0.39075
    },
    {
      epoch: 25,
      accCT: 0.999524,
      lossCT: 0.005472,
      acc: 0.882194,
      loss: 0.383365
    },
    {
      epoch: 26,
      accCT: 0.999529,
      lossCT: 0.004823,
      acc: 0.882792,
      loss: 0.376497
    },
    {
      epoch: 27,
      accCT: 0.999557,
      lossCT: 0.004341,
      acc: 0.883571,
      loss: 0.36971
    },
    {
      epoch: 28,
      accCT: 0.999588,
      lossCT: 0.004112,
      acc: 0.884383,
      loss: 0.363381
    },
    {
      epoch: 29,
      accCT: 0.999616,
      lossCT: 0.003755,
      acc: 0.885349,
      loss: 0.35688
    },
    {
      epoch: 30,
      accCT: 0.999632,
      lossCT: 0.003602,
      acc: 0.885832,
      loss: 0.351263
    },
    {
      epoch: 31,
      accCT: 0.999632,
      lossCT: 0.003331,
      acc: 0.886206,
      loss: 0.345328
    },
    {
      epoch: 32,
      accCT: 0.999664,
      lossCT: 0.00323,
      acc: 0.886588,
      loss: 0.339847
    },
    {
      epoch: 33,
      accCT: 0.99966,
      lossCT: 0.002994,
      acc: 0.886989,
      loss: 0.334644
    },
    {
      epoch: 34,
      accCT: 0.999684,
      lossCT: 0.002937,
      acc: 0.887136,
      loss: 0.329739
    },
    {
      epoch: 35,
      accCT: 0.999702,
      lossCT: 0.002705,
      acc: 0.887308,
      loss: 0.325056
    },
    {
      epoch: 36,
      accCT: 0.99971,
      lossCT: 0.002677,
      acc: 0.887629,
      loss: 0.320376
    },
    {
      epoch: 37,
      accCT: 0.999715,
      lossCT: 0.002575,
      acc: 0.887746,
      loss: 0.315937
    },
    {
      epoch: 38,
      accCT: 0.999731,
      lossCT: 0.002356,
      acc: 0.888118,
      loss: 0.311518
    },
    {
      epoch: 39,
      accCT: 0.999724,
      lossCT: 0.002355,
      acc: 0.888263,
      loss: 0.307711
    },
    {
      epoch: 40,
      accCT: 0.999737,
      lossCT: 0.002131,
      acc: 0.888475,
      loss: 0.303671
    },
    {
      epoch: 41,
      accCT: 0.999745,
      lossCT: 0.002105,
      acc: 0.88882,
      loss: 0.300082
    },
    {
      epoch: 42,
      accCT: 0.999735,
      lossCT: 0.001917,
      acc: 0.888902,
      loss: 0.296436
    },
    {
      epoch: 43,
      accCT: 0.999746,
      lossCT: 0.001847,
      acc: 0.889232,
      loss: 0.292946
    },
    {
      epoch: 44,
      accCT: 0.999742,
      lossCT: 0.00176,
      acc: 0.889657,
      loss: 0.289624
    },
    {
      epoch: 45,
      accCT: 0.99975,
      lossCT: 0.001759,
      acc: 0.88976,
      loss: 0.286465
    },
    {
      epoch: 46,
      accCT: 0.999759,
      lossCT: 0.001607,
      acc: 0.890347,
      loss: 0.283567
    },
    {
      epoch: 47,
      accCT: 0.999764,
      lossCT: 0.001522,
      acc: 0.890551,
      loss: 0.280388
    },
    {
      epoch: 48,
      accCT: 0.999767,
      lossCT: 0.001446,
      acc: 0.890549,
      loss: 0.277388
    },
    {
      epoch: 49,
      accCT: 0.99978,
      lossCT: 0.001383,
      acc: 0.891423,
      loss: 0.274932
    },
    {
      epoch: 50,
      accCT: 0.999815,
      lossCT: 0.001239,
      acc: 0.891463,
      loss: 0.272146
    },
    {
      epoch: 51,
      accCT: 0.999822,
      lossCT: 0.001176,
      acc: 0.892407,
      loss: 0.269801
    },
    {
      epoch: 52,
      accCT: 0.999836,
      lossCT: 0.001207,
      acc: 0.892707,
      loss: 0.266996
    },
    {
      epoch: 53,
      accCT: 0.999859,
      lossCT: 0.001154,
      acc: 0.892884,
      loss: 0.265032
    },
    {
      epoch: 54,
      accCT: 0.999857,
      lossCT: 0.001029,
      acc: 0.893171,
      loss: 0.26287
    },
    {
      epoch: 55,
      accCT: 0.999877,
      lossCT: 0.000982,
      acc: 0.893548,
      loss: 0.2606
    },
    {
      epoch: 56,
      accCT: 0.999888,
      lossCT: 0.000951,
      acc: 0.893515,
      loss: 0.258774
    },
    {
      epoch: 57,
      accCT: 0.9999,
      lossCT: 0.000915,
      acc: 0.89368,
      loss: 0.256728
    },
    {
      epoch: 58,
      accCT: 0.999906,
      lossCT: 0.000867,
      acc: 0.893811,
      loss: 0.255222
    },
    {
      epoch: 59,
      accCT: 0.999905,
      lossCT: 0.000819,
      acc: 0.894203,
      loss: 0.253258
    },
    {
      epoch: 60,
      accCT: 0.999912,
      lossCT: 0.000797,
      acc: 0.894168,
      loss: 0.252193
    },
    {
      epoch: 61,
      accCT: 0.999911,
      lossCT: 0.000763,
      acc: 0.894146,
      loss: 0.250557
    },
    {
      epoch: 62,
      accCT: 0.999915,
      lossCT: 0.000732,
      acc: 0.894842,
      loss: 0.248505
    },
    {
      epoch: 63,
      accCT: 0.999913,
      lossCT: 0.000708,
      acc: 0.894936,
      loss: 0.24739
    },
    {
      epoch: 64,
      accCT: 0.999915,
      lossCT: 0.000674,
      acc: 0.894973,
      loss: 0.245873
    },
    {
      epoch: 65,
      accCT: 0.999915,
      lossCT: 0.000643,
      acc: 0.895546,
      loss: 0.244026
    },
    {
      epoch: 66,
      accCT: 0.999915,
      lossCT: 0.000623,
      acc: 0.895297,
      loss: 0.243528
    },
    {
      epoch: 67,
      accCT: 0.999921,
      lossCT: 0.000594,
      acc: 0.895009,
      loss: 0.242708
    },
    {
      epoch: 68,
      accCT: 0.999918,
      lossCT: 0.00057,
      acc: 0.895339,
      loss: 0.241373
    },
    {
      epoch: 69,
      accCT: 0.999915,
      lossCT: 0.000537,
      acc: 0.895706,
      loss: 0.2399
    },
    {
      epoch: 70,
      accCT: 0.999921,
      lossCT: 0.000505,
      acc: 0.895687,
      loss: 0.238882
    },
    {
      epoch: 71,
      accCT: 0.999919,
      lossCT: 0.000471,
      acc: 0.895643,
      loss: 0.238003
    },
    {
      epoch: 72,
      accCT: 0.999924,
      lossCT: 0.000431,
      acc: 0.895797,
      loss: 0.236812
    },
    {
      epoch: 73,
      accCT: 0.999929,
      lossCT: 0.000416,
      acc: 0.896137,
      loss: 0.235894
    },
    {
      epoch: 74,
      accCT: 0.999944,
      lossCT: 0.00039,
      acc: 0.895951,
      loss: 0.235235
    },
    {
      epoch: 75,
      accCT: 0.99994,
      lossCT: 0.000372,
      acc: 0.89609,
      loss: 0.23455
    },
    {
      epoch: 76,
      accCT: 0.999953,
      lossCT: 0.000349,
      acc: 0.895667,
      loss: 0.233929
    },
    {
      epoch: 77,
      accCT: 0.999955,
      lossCT: 0.000334,
      acc: 0.896239,
      loss: 0.232783
    },
    {
      epoch: 78,
      accCT: 0.999961,
      lossCT: 0.000314,
      acc: 0.896407,
      loss: 0.23205
    },
    {
      epoch: 79,
      accCT: 0.99996,
      lossCT: 0.000308,
      acc: 0.896497,
      loss: 0.231341
    },
    {
      epoch: 80,
      accCT: 0.999968,
      lossCT: 0.000288,
      acc: 0.896331,
      loss: 0.23054
    },
    {
      epoch: 81,
      accCT: 0.999967,
      lossCT: 0.000277,
      acc: 0.896105,
      loss: 0.230072
    },
    {
      epoch: 82,
      accCT: 0.999968,
      lossCT: 0.000269,
      acc: 0.896385,
      loss: 0.229297
    },
    {
      epoch: 83,
      accCT: 0.99997,
      lossCT: 0.000262,
      acc: 0.896738,
      loss: 0.228327
    },
    {
      epoch: 84,
      accCT: 0.999971,
      lossCT: 0.000261,
      acc: 0.896428,
      loss: 0.228211
    },
    {
      epoch: 85,
      accCT: 0.999974,
      lossCT: 0.000242,
      acc: 0.896943,
      loss: 0.227178
    },
    {
      epoch: 86,
      accCT: 0.999974,
      lossCT: 0.000238,
      acc: 0.89642,
      loss: 0.22676
    },
    {
      epoch: 87,
      accCT: 0.999971,
      lossCT: 0.00024,
      acc: 0.896672,
      loss: 0.226281
    },
    {
      epoch: 88,
      accCT: 0.999973,
      lossCT: 0.000222,
      acc: 0.896948,
      loss: 0.225423
    },
    {
      epoch: 89,
      accCT: 0.999974,
      lossCT: 0.000222,
      acc: 0.896808,
      loss: 0.225223
    },
    {
      epoch: 90,
      accCT: 0.99997,
      lossCT: 0.000214,
      acc: 0.897872,
      loss: 0.223618
    },
    {
      epoch: 91,
      accCT: 0.999975,
      lossCT: 0.00021,
      acc: 0.89767,
      loss: 0.223592
    },
    {
      epoch: 92,
      accCT: 0.999976,
      lossCT: 0.000202,
      acc: 0.89806,
      loss: 0.22303
    },
    {
      epoch: 93,
      accCT: 0.999975,
      lossCT: 0.000203,
      acc: 0.898318,
      loss: 0.222271
    },
    {
      epoch: 94,
      accCT: 0.999976,
      lossCT: 0.000195,
      acc: 0.898568,
      loss: 0.222027
    },
    {
      epoch: 95,
      accCT: 0.999977,
      lossCT: 0.000189,
      acc: 0.898672,
      loss: 0.221162
    },
    {
      epoch: 96,
      accCT: 0.999977,
      lossCT: 0.000184,
      acc: 0.898961,
      loss: 0.220714
    },
    {
      epoch: 97,
      accCT: 0.999977,
      lossCT: 0.000175,
      acc: 0.899259,
      loss: 0.21961
    },
    {
      epoch: 98,
      accCT: 0.999977,
      lossCT: 0.000176,
      acc: 0.899253,
      loss: 0.219311
    },
    {
      epoch: 99,
      accCT: 0.999978,
      lossCT: 0.00018,
      acc: 0.899781,
      loss: 0.218306
    },
    {
      epoch: 100,
      accCT: 0.999979,
      lossCT: 0.000168,
      acc: 0.899315,
      loss: 0.218552
    }
  ]


  return (
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="IOT23 DNN 2分類" subtitle="NTPUNSL" />
        </Box>

        {/* GRID & CHARTS */}
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
                  在相同 Epoch 值下，是否有 ACT 值對準確度的影響
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
              <BarChart isDashboard={true} data={data} dataKey={'epoch'} bar2={'acc'} bar1={'accCT'} />
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
                關於準確度 - 每筆資料之細節
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
                Epoch 值
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
            {data.map(({epoch, acc, accCT}) => (
                <Box
                    key={epoch}
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
                    {epoch}
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
              在相同 Epoch 值下，是否有 ACT 值對準確度的影響
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'acc'} bar2={'accCT'} />
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
              Epoch 值變化時，準確度的變化紀錄（無 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'acc'} />
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
              Epoch 值變化時，準確度的變化紀錄（有 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar2={'accCT'} />
            </Box>
          </Box>
        </Box>

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
                  在相同 Epoch 值下，是否有 ACT 值對 Loss的影響
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
              <BarChart isDashboard={true} data={data} dataKey={'epoch'} bar2={'loss'} bar1={'lossCT'} />
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
                關於 Loss - 每筆資料之細節
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
                Epoch 值
              </Box>
              <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  Loss
                </Typography>
              </Box>
              <Box>
                <Typography
                    color={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                >
                  Loss（有 ACT 值）
                </Typography>
              </Box>
            </Box>
            {data.map(({epoch, loss, lossCT}) => (
                <Box
                    key={epoch}
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
                    {epoch}
                  </Box>
                  <Box>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                    >
                      {loss}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                        fontWeight="600"
                    >
                      {lossCT}
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
              在相同 Epoch 值下，是否有 ACT 值對 Loss 的影響
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'loss'} bar2={'lossCT'} />
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
              Epoch 值變化時，Loss 的變化紀錄（無 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar1={'loss'} />
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
              Epoch 值變化時，Loss 的變化紀錄（有 ACT）
            </Typography>
            <Box height="240px">
              <MainChart isDashboard={true} data={data} dataKey={'epoch'} bar2={'lossCT'} />
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default IOT23DNNDashboard;

import React, { useRef, useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";

import Header from "../../components/Header";
import CircularProgress from '@mui/material/CircularProgress';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const fileRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setFileName] = useState('')

  const handleUpload = () => {
    setIsLoading(true)
    setTimeout(() => {
      function download(url) {
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }
      download('../../assets/result150.zip')
      setFileName('')
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="深度學習模型新式攻防研究" subtitle="NTPUNSL" />
      </Box>



      <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Box display={'flex'} flexDirection={'column'}  justifyContent={'center'} alignItems={'center'}>
          {
              isLoading && <CircularProgress color="secondary" />
          }
          <Typography as={'h3'} fontSize={'20px'} my={'10px'}>
            {fileName}
          </Typography>
        </Box>
        <Box
            display={'flex'}
            gap={'10px'}
            justifyContent={'space-evenly'}
        >
          <Button
              variant="contained"
              color="secondary"
              component="label"
          >
            上傳檔案
            <input
                ref={fileRef}
                onInput={(e) => {setFileName(e.target.files[0].name)}}
                type="file"
                accept=".csv"
                hidden
            />
          </Button>

          <Button
              disabled={isLoading || !fileName}
              onClick={handleUpload}
              variant="outlined"
              color="secondary"
              component="label"

          >
            產生 ACT 報告
          </Button>
        </Box>
        <Typography as={'h3'} fontSize={'20px'} mt={'20px'}>
          資料格式：
        </Typography>
        <ol>
          <li>資料須為.csv檔案 名稱不限</li>
          <li>csv檔案不能有行號(row), 第一行須為column name</li>
          <li>最後一個column name須為'label'</li>
          <li>前處理後的資料必須除了column為['label']的資料外都是數字(浮點數 or 整數)型態</li>
          <li>不能包含與 label 直接相關的 column , 例如 'attack_cat' 或 'label-detail' 之類的</li>
        </ol>

      </Box>


    </Box>
  );
};

export default Dashboard;

import React from 'react';
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ClassIcon from '@mui/icons-material/Class';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const cate = [
  // '你媽',
  'NB15 DNN 2分類',
  'IOT23 DNN 2分類',
  'IOT23 FGSM'
]


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  DashBoard
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/logo.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                    onClick={() => {
                      function download(url) {
                        const a = document.createElement('a')
                        a.href = url
                        a.download = url.split('/').pop()
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a)
                      }
                      download('../../assets/logo.png')
                    }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  NTPUNSL
                </Typography>
                <Typography variant="h4" color={colors.greenAccent[500]}>
                  深度學習模型新式攻防研究
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item
              title="HOME"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
            >
              Inspect Data
            </Typography>
            <Item
                title={'線上 ACT 產生器'}
                to={'/upload'}
                icon={<AutoFixHighIcon />}
                selected={selected}
                setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Category
            </Typography>
            {
              cate.map((c) => {
                return (
                    <Item
                        title={c}
                        to={'/' + c.replace(/[^a-z0-9]/gi, '')}
                        icon={<ClassIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                )
              })
            }
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
import React from "react";
import styled from "styled-components";
import realm from "../img/logo.jpg"
import HomeIcon from '@mui/icons-material/Home'; 
import VideocamIcon from '@mui/icons-material/Videocam';
import LightModeIcon from '@mui/icons-material/LightMode';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { color } from "@mui/system";


const Container = styled.div`
  flex: 1;
  background-color:${({theme})=>theme.bg};
  height: 100vh;
  color: ${({theme})=>theme.text};
  font-size: 14px;
  position: sticky;  
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
    return(
        <Container>
          <Wrapper>
          <Link to="/" style={{ textDecoration: "none",color:"inherit"}}>
            <Logo>
              <Img src={realm}/>
              REALM GAMING
            </Logo>
            </Link>
            <Item>
            <HomeIcon/>
            HOME
            </Item>
              <Link to="trends" style={{textDecoration: "none", color:"inherit"}}>
              <Item>
              <HomeIcon/>
              EXPLORE
              </Item>
            </Link>
            <Link to="subscriptions" style={{textDecoration: "none", color:"inherit"}}>
              <Item>
                <HomeIcon/>
                FOLLOWING
              </Item>
            </Link>
            <Item>
              <VideocamIcon/>
              YOUR VIDEOS
            </Item>
            <Hr/>

            <Login>
          Sign in to like videos, comment, and subscribe.
          <Button><AccountCircleIcon/>SIGN IN</Button>
        </Login>
        <Hr/>

            <Item>
              <LiveTvIcon/>
              GO LIVE
            </Item>

            <Item>
              <HistoryIcon/>
              HISTORY
            </Item>
            

            <Item>
              <SettingsIcon/>
              SETTINGS
            </Item>
            <Hr/>

            <Item>
              <ReportIcon/>
              REPORT
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
              <LightModeIcon/>
              {darkMode ? "LIGHT " : "DARK"}MODE
            </Item>
            
          </Wrapper>
        </Container>
    )
}

export default Menu;
import { styled, Box, Typography, List } from "@mui/material";

export const dialogStyle = {
  height: "95%",
  maxHeight: "100%",
  width: "65%",
  maxWidth: "100%",
  marginTop: "12%",
  overflow: "hidden",
};

export const Component = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

export const Container = styled(Box)`
  margin-top: 56px;
`;

export const QrCode = styled("img")({
  width: "264px",
  height: "265px",
  marginTop: "56px",
});

export const GLogin = styled(Box)`
  position: absolute;
  top: 50%;
  transform: translateX(5%);
`;

export const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  margin: 0 0 25px 0;
`;

export const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

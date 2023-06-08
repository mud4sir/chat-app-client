import { styled, Box } from "@mui/material";

export const Header = styled(Box)`
  background: #008069;
  height: 108px;
  width: 402px;
  color: #fff;
  display: flex;
  align-items: flex-end;
  & > * {
    padding: 12px;
  }

  & :first-child {
    margin-left: 20px;
    cursor: pointer;
  }
  & :last-child {
    font-size: 18px;
  }
`;

export const Container = styled(Box)`
  background: #eae6df;
  max-width: 401.5px;
`;

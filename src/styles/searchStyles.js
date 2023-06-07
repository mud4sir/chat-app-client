import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Container = styled(Box)`
  border-bottom: 1px solid #eee;
`;

export const Component = styled(Box)`
  position: relative;
  margin: 5px 15px;
  background: #eee;
  border-radius: 5px;
`;

export const InputWrapper = styled(Box)`
  padding-left: 45px;
`;

export const Input = styled(InputBase)`
  width: 100%;
`;

export const SearchIconWrapper = styled(Box)`
  position: absolute;
`;

export const SearchIconComponent = styled(SearchIcon)`
  padding: 5px 0px 5px 10px;
  font-size: 20px;
  color: #4a4a4a;
`;

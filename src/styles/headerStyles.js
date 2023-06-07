import { Box, styled } from "@mui/material";

export const Component = styled(Box)`
  background: #eee;
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

export const Image = styled("img")({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
});

export const IconContaier = styled(Box)`
  margin-left: auto;
  & > * {
    font-size: 21px;
    color: #576358;
    margin-left: 20px;
    cursor: pointer;
  }
`;

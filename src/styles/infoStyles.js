import { styled, Box } from "@mui/material";

export const Image = styled("img")({
  width: "200px",
  height: "200px",
  borderRadius: "50%",
});

export const ImageWrapper = styled(Box)`
  text-align: center;
  & > * {
    margin-top: 28px;
    margin-bottom: 28px;
  }
`;

export const Text = styled(Box)`
  background: #fff;
  padding: 12px 25px;

  & > * {
    font-size: 14px;
  }
  & :first-child {
    margin-bottom: 15px;
    color: #008069;
  }
`;

export const Note = styled(Box)`
  color: #4a4a4a;
  padding: 15px 25px;
  padding-bottom: 30px;
  font-size: 12px;
  line-height: 18px;
  opacity: 0.7;
`;

import { Box, Divider, styled } from "@mui/material";

export const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f9f9f9;
`;

export const ChatImage = styled("img")({
  width: "350px",
  marginBottom: "30px",
});

export const TxtContainer = styled(Box)`
    max-width: 500px;
    text-align: center;

    & > :first-child {
        font-size: 28px;
        color: #666;
        margin-bottom: 10px;
    }

    & > :last-child {
        font-size: 14px;
        color: #666;
        opacity: 0.5;
    }

    &
`;

export const HrLine = styled(Divider)`
  width: 50%;
  min-width: 350px;
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 0.7;
`;

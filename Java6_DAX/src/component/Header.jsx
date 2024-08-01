import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ 
              backgroundColor: colors.greenAccent[500], 
              ml: 1, 
              padding: '10px 20px', 
              fontSize: '16px'
            }}
          >
            Thêm
          </Button>
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: colors.blueAccent[500], 
              ml: 1, 
              padding: '10px 20px', 
              fontSize: '16px'
            }}
          >
            Sửa
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ 
              ml: 1, 
              padding: '10px 20px', 
              fontSize: '16px' 
            }}
          >
            Xóa
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

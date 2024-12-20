// import React from "react";
// import AuthForm from "./AuthForm";
// import { Box, Typography } from "@mui/material";

// const LoginPage = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <Typography variant="h4" component="h2" gutterBottom>
//         Login
//       </Typography>
//       <AuthForm isRegister={false} />
//     </Box>
//   );
// };

// export default LoginPage;
// src/components/LoginPage.js
import React from "react";
import AuthForm from "./AuthForm";

const LoginPage = () => {
  return (
    <div>
      {/* Any login-specific content or styling can go here */}
      <AuthForm isRegister={false} /> {/* Pass prop to AuthForm */}
    </div>
  );
};

export default LoginPage;

// import React from "react";
// import AuthForm from "./AuthForm";
// import { Box, Typography } from "@mui/material";

// const RegisterPage = () => {
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
//         Register
//       </Typography>
//       <AuthForm isRegister={true} />
//     </Box>
//   );
// };

// export default RegisterPage;

import React from "react";
import AuthForm from "./AuthForm";

const RegisterPage = () => {
  return (
    <div>
      {/* Any register-specific content or styling can go here */}
      <AuthForm isRegister={true} /> {/* Pass prop to AuthForm */}
    </div>
  );
};

export default RegisterPage;

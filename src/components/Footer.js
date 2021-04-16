import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer class="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        {"© "}
        <Link color="inherit" href="https://twitter.com/Quincle_shimobe">
          Misaki Abe
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}

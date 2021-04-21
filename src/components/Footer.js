import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer class="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        {"© "}
        {new Date().getFullYear()}{" "}
        <Link color="inherit" href="https://twitter.com/Quincle_shimobe">
          Misaki Abe
        </Link>{" "}
        <Link color="inherit" href="https://twitter.com/masatoemata">
          (Website by Masato Emata)
        </Link>
      </Typography>
    </footer>
  );
}

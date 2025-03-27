import React from "react";
import "../Style/Footer.css";

export default function Footer() {
  return (
    <footer className="custom-footer">
      <p>
        This project was{" "}
        <a
          href="https://www.linkedin.com/in/jacinda-bietz-3158a0338/"
          target="_blank"
          rel="noopener noreferrer"
        >
          coded by Jacinda Bietz
        </a>
        , is{" "}
        <a
          href="https://github.com/CindaCodes/SkyGlance"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://skyglance.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </footer>
  );
}

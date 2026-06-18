const express = require("express");

const router = express.Router();

router.post("/ask", (req, res) => {
  const { question } = req.body;

  let answer = "";

  if (question.toLowerCase().includes("fft")) {
    answer =
      "FFT (Fast Fourier Transform) reduces the complexity of DFT from O(N²) to O(N log N).";
  } else if (question.toLowerCase().includes("dbms")) {
    answer =
      "DBMS is software used to store, manage and retrieve data efficiently.";
  } else if (question.toLowerCase().includes("os")) {
    answer =
      "Operating System manages hardware and software resources of a computer.";
  } else if (question.toLowerCase().includes("react")) {
    answer =
      "React is a JavaScript library used to build interactive user interfaces.";
  } else {
    answer =
      "I am still learning. Try asking about FFT, DBMS, OS, or React.";
  }

  res.json({
    success: true,
    answer,
  });
});

module.exports = router;
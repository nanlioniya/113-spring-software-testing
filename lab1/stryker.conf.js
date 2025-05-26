module.exports = {
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    commandRunner: {
      command: "npm test"
    },
    mutate: ["main.js"],
    coverageAnalysis: "perTest"
};
  
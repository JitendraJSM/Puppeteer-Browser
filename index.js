async function main() {
  const options = {
    profileTarget: 1,
    chatURL: "https://www.youtube.com/",
    windowSize: [814, 859],
    // windowSize: [516, 952],
    windowPosition: [793, 0],
  };
  // Step 1.
  let { getBrowser } = require("./modules/browser.module.js");
  const { browser, page } = await getBrowser(options);
  getBrowser = null;
}
main();

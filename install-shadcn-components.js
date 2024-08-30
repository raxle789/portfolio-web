const { exec } = require("child_process");

const components = ["button", "card", "navigation-menu"];

components.forEach((component) => {
  exec(`npx shadcn-ui@latest add ${component}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error installing ${component}:`, stderr);
      return;
    }
    console.log(`Installed ${component}:`, stdout);
  });
});

require('module-alias/register');

const app = require('~src/app');
const logger = require('~src/utils/logger');
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`API is listening on port ${PORT}`);
  console.log(
    `Please open your web browser and visit http://localhost:${PORT}`,
  );

  // Open the browser when the server is running
  exec(`open http://localhost:${PORT}`);
});

require('module-alias/register');

const app = require('@src/app');
const logger = require('@src/utils/logger');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`API is listening on port ${PORT}`);
});

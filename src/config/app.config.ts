export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'DEV',
  dbConnection: process.env.DB_URL,
  port: process.env.PORT_APP || 3000,
  defaultLimit: process.env.DEFAULT_LIMIT || 5,
});

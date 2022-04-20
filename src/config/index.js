const NODE_ENV = process.env.NODE_ENV ?? "development"

const parsedPort = Number(process.env.PORT);
const PORT = Number.isNaN(parsedPort)
    ? 3000
    : parsedPort;
const API_URL = process.env.API_URL ?? `http://localhost:${PORT}`;

module.exports = {
    NODE_ENV,
    PORT,
    API_URL
}

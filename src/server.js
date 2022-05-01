const app = require("./app");
const {PORT, API_URL} = require("./config");
const {exitStatus, exitSignal} = require("./utils/constants");

function main() {
    const server = app.listen(PORT, () => console.info(`Server running at ${API_URL}`));

    const exitSignals = Object.values(exitSignal);

    exitSignals.forEach(exitSignal => {
        process.on(exitSignal, async () => {
            try {
                console.info("Closing server gracefully...");
                server.close();
                console.info("Server gracefully closed");
                process.exit(exitStatus.SUCCESS);
            } catch (error) {
                console.info("Server closed with error");
                process.exit(exitStatus.FAILURE);
            }
        });
    });
}

process.on("unhandledRejection", (reason, promise) => {
    // Throw the error and let the `uncaughtException` handler handle it
    throw reason;
});

process.on("uncaughtException", error => {
    console.error(error.stack);
    process.exit(exitStatus.FAILURE);
});

main();

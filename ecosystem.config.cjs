module.exports = {
    apps: [
        {
            name: "spacetech",
            script: "pnpm",
            args: "preview -- --port=3001 --host=0.0.0.0 --allowed-hosts=spacetech.lyricut.com",
            interpreter: "none",
            env: {
                NODE_ENV: "production"
            }
        },
    ],
};

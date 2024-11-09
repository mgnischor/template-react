module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "requirejs"],
        files: [
            "test-main.js",
            { pattern: "src/**/*.test.ts", included: false },
            { pattern: "src/**/*.tsx", included: false },
        ],

        exclude: [],
        preprocessors: {},
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["ChromeHeadless"],
        singleRun: true,
        concurrency: Infinity,
    });
};

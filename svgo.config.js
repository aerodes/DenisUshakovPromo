const { REFUSED } = require("dns");
const { EmitFlags } = require("typescript");

module.exports = {
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    inlineStyles: {
                        onlyMatchedOnce: false,
                    },
                    removeDoctype: false,
                    removeViewBox: false,
                    cleanupIds: false,
                },
            },
        },
    ],
};

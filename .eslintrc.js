module.exports = {
    "env": {
        "browser": true,
        "es6": true 
    },
    "extends": "eslint:recommended",
    "globals": {
        "model": true,
        "view": true,
        "flashParticularButton": true,
        "setStateOfColourButtons": true,
        "nextLevel": true,
        "playSequence": true,
        "setStateOfPowerButton": true,
        "setPlayButtonState": true,
        "initEventListeners": true,
        "SimonModel": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};

const child_process = require("child_process");
const CONFIG = require("./config.json");

const downloadMods = function(mods, separator = ','){
    const modIds = mods.split(separator);

    modIds.forEach(modId => {
        downloadMod();
    });
}

const downloadMod = function(modId){
    child_process.exec(`${CONFIG.STEAM_CMD_PATH} +login anonymous +force_install_dir ${CONFIG.TEMP_MODS_PATH} +workshop_download_item ${CONFIG.GAME_ID} ${modId} validate`, (error, stdout, stderr) => {
        console.log(error, stderr, stdout);
    });
}

downloadMods('1673456286');

// exec('dir', (error, stdout, stderr) => {
    
// });
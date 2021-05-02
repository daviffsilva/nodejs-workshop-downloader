const child_process = require("child_process");
const CONFIG = require("./config.json");

const downloadMods = function(mods, separator = ','){
    const modIds = mods.split(separator);

    modIds.forEach(modId => {
        downloadMod(modId);
    });
}

const downloadMod = function(modId){
    const command = `${CONFIG.STEAM_CMD_PATH} +login anonymous +force_install_dir ${CONFIG.TEMP_MODS_PATH} +workshop_download_item ${CONFIG.GAME_ID} ${modId} validate +quit`;
    console.log(command);
    child_process.exec(command, (error, stdout, stderr) => {
    // child_process.exec(`dir -a`, (error, stdout, stderr) => {
        console.log('teste');
        console.log(error, stderr, stdout);
    });
}

downloadMods('463939057');

// exec('dir', (error, stdout, stderr) => {
    
// });
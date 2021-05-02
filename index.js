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

    let commandRun = child_process.spawn(command.split(' ')[0], command.split(' ').splice(1));

    commandRun.stdout.on('data', function (data) {
        console.log('stdout: ' + data.toString());
    });

    commandRun.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString());
    });

    commandRun.on('exit', function (code) {
        console.log('child process exited with code ' + code.toString());
    });
}

downloadMods('1673456286');

// exec('dir', (error, stdout, stderr) => {
    
// });
const child_process = require("child_process");
const { exec } = require("node:child_process");
const CONFIG = require("./config.json");

const downloadMods = function(mods, separator = ','){
    const modIds = mods.split(separator);

    modIds.forEach(modId => {
        downloadMod(modId);
    });
}

const downloadMod = function(modId){
    const command = `${CONFIG.STEAM_CMD_PATH} +login anonymous +force_install_dir ${CONFIG.TEMP_MODS_PATH} +workshop_download_item ${CONFIG.GAME_ID} ${modId} validate +quit`;
    console.log('');
    console.log('Tentando baixar o mod ' + modId);
    
    let result;
    try { 
        result = child_process.execSync(command);
        console.log("Mod " + modId + " baixado");
    }catch (e){
        console.error("Não foi possível baixar o mod: " + modId);
        console.log("Tentando novamente");
        downloadMod(modId);
    }

    // child_process.exec(command, (error, stdout, stderr) => {
    // // child_process.exec(`dir -a`, (error, stdout, stderr) => {
    //     if(error){
    //         console.error("Não foi possível baixar o mod: " + modId);
    //         console.log("Tentando novamente");
    //         downloadMod(modId);
    //     }else{
    //         console.log("Mod " + modId + " baixado");
    //     }
    // });
}

// downloadMods('aaa');
downloadMods('450814997,463939057,1940589429,2068356312,620019431,769440155,632435682,2058554822,1393068220,708250744,1224892496,2162749089,782415569,1753435554,570118882,333310405,1267657613,2215872933');

// exec('dir', (error, stdout, stderr) => {
    
// });
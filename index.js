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
downloadMods('893328083,1135534951,893346105,1135539579,1135541175,893349825,1515851169,1135543967,893339590,1515845502,1673456286,463939057,766491311,1355481562,866772689,773131200,773125288,884966711,708250744,2140308792,751965892,1891978580,2073987581,615007497,639837898,1378046829,1945395022,903134884,620260972,935810174,1537973181,2094487581,1755268799,1260802825,1301399507,820924072,743968516,1201499127,1199318917,1314910827,450814997,837729515,871504836,583496184,583544987,1379304937,333310405,366425329,2306911815,2231150238,855464203,2010224487,2010222986,2010225817,1224892496,1947483966,825172265,1883956552,1321663083,1501132392,1388192893,1393776620,1393769392,944344838,1738216191,2020940806,1866738558,1726494027,1858075458,1808238502,1413218487,2043707566,1824923803,1770265310,1877858319,1312457117,943981276,1154375007,1595678775,735566597,843425103,843593391,843577117,1661066023,1242693518,1368857262,2128676112,1493291920,375638518,1628646415,2397371875,2397360831,1231394000,1578884800');

// exec('dir', (error, stdout, stderr) => {
    
// });
// This function gets an incoming OSC formatted message and translates it to JSON

const oscToJSON = (oscMsg) => {
    const detectedBlobs = oscMsg.length - 4; // We know 4 are the metadata fields
    const oscJSON = new Object();

    oscJSON.fseq = oscMsg[oscMsg.length - 1][2];
    oscJSON.bundle = oscMsg[0];
    oscJSON.aliveIds = new Array();
    oscJSON.blobs = new Array();
  // Read the "alive" sub-array to extract alive IDs
    for (let i = 2; i <= detectedBlobs + 1; i++) {
        oscJSON.aliveIds.push(oscMsg[oscMsg.length - 2][i]);
    }
  // Interpret blobs data. Blobs data is padded by 1 meta-data value at the start and 2 at the end
    for (let i = 2; i <= oscMsg.length - 3; i++) {
        var blobs = new Object();
        blobs.id = oscMsg[i][2];
        blobs.y = Number(oscMsg[i][4]).toFixed(3);
        blobs.x = Number(oscMsg[i][3]).toFixed(3);
        oscJSON.blobs.push(blobs);
    }

    return oscJSON;
};

module.exports = oscToJSON;

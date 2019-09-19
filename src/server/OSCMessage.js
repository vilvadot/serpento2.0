class OSCMessage {
  constructor(message){
    this.message = message
  }

  toJson(){
    const detectedBlobs = this.message.length - 4; // We know 4 are the metadata fields
    const oscJSON = new Object();

    oscJSON.fseq = this.message[this.message.length - 1][2];
    oscJSON.bundle = this.message[0];
    oscJSON.aliveIds = new Array();
    oscJSON.blobs = new Array();
  // Read the "alive" sub-array to extract alive IDs
    for (let i = 2; i <= detectedBlobs + 1; i++) {
        oscJSON.aliveIds.push(this.message[this.message.length - 2][i]);
    }
  // Interpret blobs data. Blobs data is padded by 1 meta-data value at the start and 2 at the end
    for (let i = 2; i <= this.message.length - 3; i++) {
        var blobs = new Object();
        blobs.id = this.message[i][2];
        blobs.y = Number(this.message[i][4]).toFixed(3);
        blobs.x = Number(this.message[i][3]).toFixed(3);
        oscJSON.blobs.push(blobs);
    }

    return oscJSON;
  }
}

module.exports = OSCMessage;

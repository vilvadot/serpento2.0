class CVMessage {
  constructor(message) {
    this.message = message;
    this.fixedParams = 4;
  }

  serialize() {
    return this.message;
  }

  _getBundle() {
    const bundlePos = 0;
    return this.message[bundlePos];
  }

  _getFseq() {
    const fseqPos = 1;
    const fseqIndex = this.message.length - fseqPos;
    return this.message[fseqIndex][2];
  }

  _getAliveIds() {
    const ids = [];
    const aliveIdsPos = 2;
    const aliveIdsIndex = this.message.length - aliveIdsPos;
    const numberOfBlobs = this.message.length - this.fixedParams;
    // Read the "alive" sub-array to extract alive IDs
    for (let i = 2; i <= numberOfBlobs + 1; i++) {
      ids.push(this.message[aliveIdsIndex][i]);
    }

    return ids;
  }

  _getBlobs() {
    // Extract blobs data. Blobs data is padded by 1 meta-data value at the start and 2 at the end
    const blobsPos = 3;
    const blobs = [];

    for (let i = 2; i <= this.message.length - blobsPos; i++) {
      const blob = {
        id: this.message[i][2],
        y: Number(this.message[i][4]).toFixed(3),
        x: Number(this.message[i][3]).toFixed(3)
      };
      blobs.push(blob);
    }

    return blobs;
  }

  toJson() {
    return {
      fseq: this._getFseq(),
      bundle: this._getBundle(),
      aliveIds: this._getAliveIds(),
      blobs: this._getBlobs()
    };
  }
}

module.exports = CVMessage;

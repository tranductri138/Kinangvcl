const fs = require('fs');
const path = require("path");

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++ Journal.count;
        let entry = `${ c }: ${ text }`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    save(filename) {
        fs.writeFileSync(filename, this.toString());
    }

    load(filename) {
        //
    }

    loadFromUrl(url) {
        //
    }
}

Journal.count = 0;

class PersistenceManager {
    constructor(filename, journal) {
        this.filename = filename
        this.journal = journal
    }

    preProcess () {
        console.log('do some thing')
    }

    saveToFile() {
        fs.writeFileSync(this.filename, this.journal.toString());
    }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let filename = path.join(__dirname, 'jText')
let p = new PersistenceManager(filename , j);
p.preProcess()
p.saveToFile();

// separation of concerns
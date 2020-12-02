import { readFileSync } from 'fs';

const fileReader = (filePath) => {
    try {
        return readFileSync(filePath, 'utf8').split('\r\n');
    } catch (e) {
        console.log("e", e);
    }
}

export default fileReader

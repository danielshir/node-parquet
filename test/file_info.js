const util = require('util');
const parquet = require(__dirname + '/../index');

let filename = '/Users/dshir/Work/Projects/Parquet/comp/ypgpnj-2017-06-21-18-logins.parquet';
filename = process.argv[2] || filename;

console.log("Using file " + filename);

const p = new parquet.ParquetReader(filename);

console.dir(p.info());


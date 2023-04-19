// keeping this file a cjs file for now
// as in a ES Module enabled project you must rename the file extension to cjs in order to use the common js moduling syntax
// stream based demo
// the readStream and writeStream are both callback based APIs no promise based APIs were provided

const fs = require("fs");
const { Transform } = require("stream");

// const TransformStream = require("stream").Transform; // this is the same as the above line just the TransformStream is a class

const readStream = fs.createReadStream(__dirname + "/run.txt", "utf-8");
const fileWriteStream = fs.createWriteStream(__dirname + "/write.txt", "utf-8");

const writeStream = process.stdout;
// readStream.pipe(writeStream);

// transform stream is a stream that can be used to transform the data that is being piped through it
// it is a duplex stream that can be used to transform the data that is being piped through it

// lets say we want to capitalise the data that is being piped through it
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // the Transform internally prepares a buffer array of chunks and then passes it to the transform function
    this.push(chunk.toString().toUpperCase());
    // callback(); // to keep the stream flowing we need to call the callback function
    // to make a delay we can modify the callback function to call it after a certain time for a big chunk of data
    setTimeout(callback, 1000);
    // ofcourse this is not the best way to do it as it will block the event loop but just for demonstration purposes
  },
});

// creating a pipeline for outputStream
const outputStream = readStream.pipe(transformStream);

// now we can pipe the outputStream to the writeStream and the fileWriteStream to view the callback behaviour with the stream chunks
outputStream.pipe(writeStream); // this will print the data to the console
outputStream.pipe(fileWriteStream); // this will write the data to the file

// so this is what the power of streams is that you can read chunk by chunk and transform it and then write it to a file or to the console chunk by chunk
// less load on ram as the data is not stored in the ram but is piped through the stream all in a chunk by chunk manner

// things you can do with streams is like start zipping the file as soon as the file is being read
// you can also start writing the file as soon as the file is being read
// you can also start encrypting the file as soon as the file is being read
// you can also start decrypting the file as soon as the file is being read
// you can also start compressing the file as soon as the file is being read
// you can also start decompressing the file as soon as the file is being read
// you should get the idea now

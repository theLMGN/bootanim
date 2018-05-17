const fs = require("fs");
module.exports.read = function(path,cb) {
    try {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                cb(err,{})
            } else {
                var lines = data.split("\n")
                var firstLine = lines[0].split(" ")
                var data = {width: firstLine[0],height: firstLine[1], fps: firstLine[2],stages: [], raw: data}
                for (i = 1; i < lines.length - 1; ++i) {
                    var line = lines[i].split(" ")
                    var lineData = {canBeInterrupted: line[0] == "p", loopsUntilBootFinish: line[1] == "0", loopCount: line[1], delayAfterFinish: line[2], path: line[3], backgroundHex: line[4], clockY: line[5], raw: lines[i]}
                    data.stages.push(lineData)
                }
                cb(null,data)
            }
        });
    } catch(e) {
        cb(e,{})
    }
    
}
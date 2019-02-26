var path = require("path");

module.exports = function(server, express) {
    // server.use('/extend', express.static(path.join(__dirname, "web")));
    server.use('/gcode', require('./routes/gcode.js')); // import route gcode.js mounted by http://host/gcode
}
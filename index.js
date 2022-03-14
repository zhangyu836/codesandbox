const http = require("http");
const writeBuffer = require("./writebuffer");

http.createServer(function (req, res) {
    writeBuffer().then((buffer) => {
        res.setHeader(
            "Content-Disposition",
            'attachment; filename="hello2xltpl.xlsx"'
        );
        res.write(buffer, () => res.end());
    }).catch((err) => {
        console.error(err);
        res.write(err.toString(), () => res.end());
    });
}).listen(8888);

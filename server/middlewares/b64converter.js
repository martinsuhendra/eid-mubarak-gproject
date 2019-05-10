module.exports = function (req, res, next) {
    const fs = require('fs')
    let image = req.body.image
    const base64Data = image.replace(/^data:image\/png;base64,|^data:image\/jpeg;base64,/, "");
    const newFilename = Date.now() + '.png'

    fs.writeFile(newFilename, base64Data, 'base64', function (err) {
        if (err) {
            res.status(500).json({
                msg: 'Internal server Error',
            });
        } else {
            req.file = {}
            req.file.buffer = fs.readFileSync(newFilename)
            req.file.originalName = Date.now() + newFilename
            req.file.mimetype = 'image/png'
            fs.unlinkSync(newFilename)
            next()
        }
    });
}
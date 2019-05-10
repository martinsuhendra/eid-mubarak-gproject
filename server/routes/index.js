const router                      = require('express').Router()
const AuthController              = require('../controllers/auth');
const b64converter                = require('../middlewares/b64converter');
const errorHandler                = require('../middlewares/errorHandler');
const { sendUploadToGCS, multer } = require('../middlewares/image');

// UPLOAD GAMBAR(BACKGROUND) NGEMBALIIN URL GCP
router.post(
    '/bg-upload',
    // kasih ke multer buat diolah
    multer.single('image'),
    // upload req.file ke gcs dan dapat url-nya
    sendUploadToGCS,

    (req, res, next) => {
        if (req.file) {
            // kirim url ke client
            res.status(200).json(req.file.cloudStoragePublicUrl);
        } else {
            res.status(500).send('Unable to upload');
        }
    },
);

// UPLOAD KARTU NGEMBALIIN URL GCP
router.post(
    '/upload',
    // rubah base64 ke buffer untuk dapat disimpan di req.file
    b64converter,
    // upload req.file ke gcs dan dapat url-nya
    sendUploadToGCS,

    (req, res, next) => {
        if (req.file && req.file.gcsUrl) {
            // kirim url ke client
            return res.send(req.file.gcsUrl);
        }
        return res.status(500).send('Unable to upload');
    },
);

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);

router.use(errorHandler);

module.exports = router;
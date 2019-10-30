const photosController = require('../controllers').photos;
const md_auth = require('../authenticated/authenticated');
const cm = require('connect-multiparty');
const md_upload = cm({ uploadDir: './server/uploads/photos' });

module.exports = (app) => {
    app.post('/api/photo', md_auth.auth, photosController.create);
    app.put('/api/photo/:id', md_auth.auth, photosController.update);
    app.post('/api/upload-photo/:id', [md_auth.auth, md_upload], photosController.uploadPhoto);
    app.get('/api/get-photo/:photo/:thumb', photosController.getPhoto);
    app.get('/api/photos', photosController.getAll);
    app.get('/api/photos-admin', md_auth.auth, photosController.getAllAdmin);
    app.get('/api/photo/:id', photosController.getById);
}
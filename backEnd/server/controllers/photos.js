const photos = require('../models/photos');
const fs = require('fs');
const thumb = require('node-thumnail').thumb;
const path = require('path');

function create(req, res) {
    const body = req.body;

    photos.create(body)
        .then(photos => {
            res.status(200).send({ photos });
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurrió un error al guardar la foto" });
        });

    function update(req, res) {
        const id = req.params.id;
        const body = req.body;

        photos.findById(id)
            .then(photo => {
                photo.update(body)
                    .then(() => {
                        res.status(200).send({ photo });
                    })
                    .catch(err => {
                        res.status(500).send({ message: "Ocurrió un error al actualizar la foto" });
                    })
            })
            .catch(err => {
                res.status(500).send({ message: "Ocurrió un error al busar la foto" });
            })
    }

    function uploadPhoto(re, res) {
        const id = req.params.id;

        if (req.files) {
            const file_path = req.files.photo.path;
            const file_split = file_path.split('\\');
            const file_name = file_split[3];
            const ext_split = file_name.split('\.');
            const file_ext = ext_split[1];
            if (file_ext == 'jpg') {
                const photograph = {};
                photograph.image = fine_name;

                photos.findById(id)
                    .then(photo => {
                        const newPath = './server/uploads/photos/' + file_name;
                        const thumbPath = './server/uploads/photos/thumbs';

                        thumb({
                            source: path.resolve(newPath),
                            destination: path.resolve(thumbPath),
                            width: 200,
                            suffix: ''
                        }).then(() => {
                            res.status(200).send({ photo });
                        }).catch(err => {
                            res.status(500).send({ message: "Ocurrió un error al eliminar el archivo" });
                        })

                    })
                    .catch(err => {
                        fs.unlink(file_path, (err) => {
                            if (err) {
                                res.status(500).send({ message: "Ocurrió un error al eliminar el archivo" });
                            }
                            res.status(500).send({ message: "Ocurrió un error al actualizar la foto" });
                        });
                    })
                    .catch(err => {
                            fs.unlink(file_path, (err) => {
                                if (err) {
                                    res.status(500).send({ message: "Ocurrió un error al eliminar el archivo" });
                                }
                            });
                        } else {
                            fs.unlink(file_path, (err) => {
                                if (err) {
                                    res.status(500).send({ message: "Ocurrió un error al eliminar el archivo" });
                                }
                            })
                            res.status(500).send({ "La extensión no es válida" });
                        }

                    }
                else {
                    res.status(400).send({ message: "Debe seleccionar una foto" });
                }
            }

            function getPhoto(req, res) {
                const photo = req.params.photo;
                const thumb = req.params.thumb;
                if (thumb == "false")
                    const path_photo = './server/uploads/photos/' + photo;
                else if (thumb == "true")
                    const path_photo = './server/uploads/photos/thumbs/' + photo;
                fs.exists(path_photo.(exists) => {
                    if (exists) {
                        res.sendFile(path.resolve(path_photo)):
                    } else {
                        res.status(404).send({ message: "No se encuentra la foto" });
                    }
                })
            }

            function getAll(req, res) {
                photos.all({
                        where: active: true
                    },
                    order: [
                        ['number', 'ASC']
                    ]
                })
            .then(photos => {
                    res.status(200).send({ photos });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrió un error al buscar las fotos" });
                })
        }

        function getAllAdmin(req, res) {
            photos.all({
                    order: [
                        ['number', 'ASC']
                    ]
                })
                .then(photos => {
                    res.status(200).send({ photos });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrió un error al buscar las fotos" });
                })
        }

        function getById(req, res) {
            const id = req.params.id;

            photos.findById(id)

            .then(photo => {
                    res.status(200).send({ photo });
                })
                .catch(err => {
                    res.status(500).send({ message: "Ocurrió un error al buscar una foto" });
                })
        }
        module.exports = {
            create,
            update,
            uploadPhoto,
            getPhoto,
            getAll,
            getAllAdmin,
            getById
        }
    }
const Pack = require('../models').Packs;

module.exports ={
    list(req, res) {
        return Pack
            .findAll({})
            .then((packs)=> res.status(200).send(packs))
            .catch((error) => { res.status(400).send(error)});
            },

    getById(req, res) {
        return Pack
            .findById(req.params.id)
            .then((pack) => {
                if (!pack){
                    console.log(req.params.id);
                    return res.status(404).send({
                    message: " Pack was not found."});
                }
                return res.status(200).send(pack);
            })
            .catch((error) => res.status(400).send(error));
    },
    add(req, res) {
        return Pack
            .create({
                packs_name: req.body.packs_name,
                packs_lat: req.body.packs_lat,
                packs_lon: req.body.packs_lon
            })
            .then((pack) => res.status(201).send(pack))
            .catch((error) => res.status(400).send(error))
    },

    update(req, res) {
        return Pack
          .findById(req.params.id)
          .then(pack => {
            if (!pack) {
              return res.status(404).send({
                message: 'Pack Not Found',
              });
            }
            return pack
              .update({
                packs_name: req.body.packs_name || pack.packs_name,
                packs_lat: req.body.packs_lat || pack.packs_lat,
                packs_lon: req.body.packs_lon || pack.packs_lon
              })
              .then(() => res.status(200).send(pack))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },

     delete(req, res) {
        return Pack
          .findById(req.params.id)
          .then(pack => {
            if (!pack) {
              return res.status(400).send({
                message: 'Pack was Not Found',
              });
            }
            return pack
              .destroy()
              .then(() => res.status(204).send({message: "The pack was successfully deleted."}))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
}
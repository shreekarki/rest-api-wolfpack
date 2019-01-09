const Wolf = require('../models').Wolves;
const Pack = require('../models').Packs;

module.exports ={
    list(req, res) {
        return Wolf
            .findAll({})
            .then((wolves)=> res.status(200).send(wolves))
            .catch((error) => { res.status(400).send(error)});
            },

    getById(req, res) {
           return Wolf
               .findById(req.params.id)
               .then((wolf) => {
                   if (!wolf){
                       console.log(req.params.id);
                       return res.status(404).send({
                       message: " Wolf was not found."});
                   }
                   return res.status(200).send(wolf);
               });
               },

    add(req, res) {
        return Wolf
            .create({
                wolves_name: req.body.wolves_name,
                wolves_gender: req.body.wolves_gender,
                wolves_birthdate: req.body.wolves_birthdates,
                PackId: req.body.wolves_packId
            })
            .then((wolf) => res.status(201).send(wolf))
            .catch((error) => res.status(400).send(error))
    },

    update(req, res) {
        return Wolf
          .findById(req.params.id)
          .then(wolf => {
            if (!wolf) {
              return res.status(404).send({
                message: 'Wolf was Not Found',
              });
            }
            return wolf
              .update({
                wolves_name: req.body.wolves_name || wolf.wolves_name,
                wolves_gender: req.body.wolves_gender || wolf.wolves_gender,
                wolves_birthdate: req.body.wolves_birthdate || wolf.wolves_birthdate,
              })
              .then(() => res.status(200).send(wolf))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },

     delete(req, res) {
        return Wolf
          .findById(req.params.id)
          .then(wolf => {
            if (!wolf) {
              return res.status(400).send({
                message: 'Wolf was Not Found',
              });
            }
            return wolf
              .destroy()
              .then(() => res.status(204).send({message: "The wolf was successfully deleted."}))
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
      },
}
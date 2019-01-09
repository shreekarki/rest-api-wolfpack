const Wolf = require('../models').Wolves;
const Pack = require('../models').Packs;


module.exports ={
    list(req, res) {
        return Pack
            .findAll({
                include: [{
                    model:Wolf,
                    as:'wolves'
                    }],
            })
            .then((packs)=> res.status(200).send(packs))
            .catch((error) => { res.status(400).send(error)});
            },


    getById(req, res) {
           return Pack
               .findById(req.params.id,  {
                 include: [{
                     model:Wolf,
                     as:'wolves'
                     }],
             })
               .then((pack) => {
                   if (!pack){
                       console.log(req.params.id);
                       return res.status(404).send({
                       message: " Pack was not found."});
                   }
                   return res.status(200).send(pack);
               });
               },

       add(req, res) {
        return Pack
          .findById(req.params.id, )
          .then(pack => {
            if (!pack) {
              return res.status(404).send({
                message: 'Pack Not Found',
              });
            }
            return Wolf
              .create({
                 wolves_name: req.body.wolves_name,
                 wolves_gender: req.body.wolves_gender,
                 wolves_birthdate: req.body.wolves_birthdates,
                 PackId: pack.id
              })
              .then(() => res.status(200).send(pack))
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
const PlannerModel = require ('./PlannerModel');

module.exports.getPlanner = async (req,res) => {
    const myPlanner = await PlannerModel.find();
    res.send (myPlanner);
}

module.exports.savePlanner = async (req,res) => {
    const { name } = req.body;
    PlannerModel.create ( {name} )
    .then((data) => {console.log (" Plan added")
    res.send(data)
    })
}

module.exports.deletePlanner = async (req,res) => {
    const { _id } = req.body
    PlannerModel.findByIdAndDelete(_id)
    .then(() => res.send ('Deleted plan'))
}

module.exports.editPlanner = async (req,res) => {
    const { _id, name } = req.body;
    PlannerModel.findByIdAndUpdate (_id, {name} )
    .then( () => res.send ('Edited plan'))
}





const Meal = require('../models/Meal');

const getMeal = (req, res) => {
    const id = req.params.id;

    if (typeof (id) == 'undefined') {
        Meal.find({}).exec()
            .then(results => {
                res.status(200).json(results);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    } else {
        Meal.findOne({ "_id": id }).exec()
            .then(results => {
                if (results == null) {
                    res.status(404).json(results);
                } else {
                    res.status(200).json(results);
                }
            })
            .catch(error => {
                res.status(500).json(error);
            });
    }
};

const saveMeal = (req, res) => {

    let MealObj = new Meal(req.body);

    MealObj.save()
        .then(result => {

            const resObj = {
                url: '/api/v1/meal/' + result._id,
                data: result
            };

            res.set('content-location', resObj.url);
            res.status(201).json(resObj);

        })
        .catch(error => {
            res.status(500).json(error);
        });

};

const deleteMeal = (req, res) => {
    const id = req.params.id;
    Meal.deleteOne({ "_id": id }).exec()
        .then(results => {
            if (results.deletedCount === 1) {
                res.status(200).json(results);
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
};

const deleteAllMeals = (req, res) => {
    const id = req.params.id;
    Meal.deleteMany({}).exec()
        .then(results => {
            res.status(200).json(results);

        })
        .catch(error => {
            res.status(500).json(error);
        });
};

module.exports = {
    getMeal,
    saveMeal,
    deleteMeal,
    deleteAllMeals
}
const mongoose = require('mongoose');
const MapInformation = mongoose.model('mapInfo');

module.exports = (app) => { 
    app.get(
        '/',
        () => {console.log("hello world")}
    )

    app.post('/api/register', async (req, res) => {
        const { shopName, latitude, longitude, category } = req.body;
        const info = new MapInformation({
            shopName,
            latitude,
            longitude,
            category
        })

        try {
            const registeredInfo = await info.save();
            res.send(registeredInfo);
        } catch(err) {
            res.status(422).send(err);
        }
    })
}
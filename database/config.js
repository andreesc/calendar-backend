const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CON,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB online');

    }catch (e) {
        console.log(e);
        throw new Error('Error connecting database');
    }
}

module.exports = {
    dbConnection
};
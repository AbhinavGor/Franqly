const monogoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
            await monogoose.connect(db, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            });

            console.log('----------MongoDB connected.----------');
    } catch (err) {
        console.error(err.message);

        //Exit with failure
        process.exit(1);
    }
};

module.exports = connectDB;
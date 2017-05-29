const db = require('./db');
const mongoose = require('mongoose');

function MongoDBConnection() {
    this.connect = connect;
    return this;
}

function connect() {
    console.log('Conectando no MongoDB...');
    mongoose.connect(getUrlConnection(), (err) => {
        if(err)throw err;

        console.log('Conectado ao MongoDB!!!')
    });
}

function getUrlConnection() {
    return 'mongodb://'+db.user+':'+db.pass+'@ds155091.mlab.com:55091/mean_pos';
}

module.exports = MongoDBConnection();
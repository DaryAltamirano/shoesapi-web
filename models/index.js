"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const configDB = require(__dirname + "/../config/config.js");
const db = {};
const dotenv = require("dotenv").config;

let sequelize;
let configEnvDB;

console.log(`Server listening on port: `, process.env.PORT);

if (process.env.NODE_ENV=="development") {
	configEnvDB = configDB.development
} else {
	configEnvDB = configDB.production
}
console.log(process.env.NODE_ENV)
console.log(configEnvDB)
sequelize = new Sequelize(
	configEnvDB.database,
	configEnvDB.username,
	configEnvDB.password,
	{
		host: configEnvDB.host,
		dialect: configEnvDB.dialect
	}
);

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;

module.exports = db;

const dotenv = require("dotenv").config;

module.exports = {
	"development": {
	  "username": process.env.USERNAME, // ← Usuario de la DB
	  "password": process.env.PASSWORD, // ← Contraseña del usuario de la DB
	  "database": process.env.DATABASE, // ← Nombre de la DB previamente creada
	  "host": process.env.HOST,
	  "dialect": process.env.DIALECT
	},
	"test": {
	  "username": "root",
	  "password": null,
	  "database": "database_test",
	  "host": "127.0.0.1",
	  "dialect": "mysql"
	},
	"production": {
		"username": process.env.USERNAME, // ← Usuario de la DB
		"password": process.env.PASSWORD, // ← Contraseña del usuario de la DB
		"database": process.env.DATABASE, // ← Nombre de la DB previamente creada
		"host": process.env.HOST,
		"dialect": process.env.DIALECT
	}
  }
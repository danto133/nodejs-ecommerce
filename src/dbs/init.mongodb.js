"use strict";

const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");
const connectString = "";

class DataBase {

  constructor() {
    this.connect();
  }

  // connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    
    mongoose
      .connect(connectString)
      .then((_) => {
        countConnect();
        console.log("Connected mongodb !");
      })
      .catch((err) =>
        console.log(`Error connection: `, JSON.stringify(err, "-", 4))
      );
  }

  static getInstance() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }

    return DataBase.instance;
  }
}

const instanceMongodb = DataBase.getInstance();

module.exports = instanceMongodb;

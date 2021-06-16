//  设计 manager 表结构
let mongoose = require('./db.jsx');
let d = new Date();
import React, {Component} from "react";
const managerSchema = new mongoose.Schema({
	username:{type:String},
	password:{type:String},
	age:{type:Number},
	addtime:{type:Number,default:d.getTime()}
},{timestaps:true})

module.exports = mongoose.model('Manager',managerSchema,'manager');
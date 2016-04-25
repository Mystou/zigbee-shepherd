/* jshint node: true */
'use strict';

var _ = require('lodash');

var ccznp = require('cc-znp');

/*************************************************************************************************/
/*** Device Class                                                                              ***/
/*************************************************************************************************/
function Device(devInfo) {
    this.devtype = devInfo.devtype;
    this.ieeeAddr = devInfo.ieeeAddr;
    this.nwkAddr = devInfo.nwkAddr;
    this.numEp = devInfo.numEp;
    this.epList = devInfo.epList; // [a, b, ...]
    this.zbEndPoints = [];
}

Device.prototype.findEp = function (epId) {
    return _.find(this.zbEndPoints, {ep: epId});
};

Device.prototype.joinGroup = function (groupId) {

};

Device.prototype._checkOnline = function (callback) {

};

Device.prototype._loadDevFromDb = function (callback) {

};

Device.prototype._saveDevToDb = function (callback) {

};

module.exports = Device;
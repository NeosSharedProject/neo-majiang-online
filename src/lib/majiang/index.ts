// @ts-nocheck
/*!
 *  @kobalab/majiang-core v0.2.9
 *
 *  Copyright(C) 2021 Satoshi Kobayashi
 *  Released under the MIT license
 *  https://github.com/kobalab/majiang-core/blob/master/LICENSE
 */

"use strict";

export default {
  rule: require("./rule"),
  Shoupai: require("./shoupai"),
  Shan: require("./shan"),
  He: require("./he"),
  Board: require("./board"),
  Game: require("./game"),
  Player: require("./player"),
  Util: Object.assign(require("./xiangting"), require("./hule")),
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mysql_1 = tslib_1.__importDefault(require("./mysql"));
class Mysql56 extends mysql_1.default {
    constructor() {
        super(...arguments);
        this.versionName = '5.6';
        this.service = `mysql@${this.versionName}`;
    }
}
exports.default = Mysql56;
//# sourceMappingURL=mysql56.js.map
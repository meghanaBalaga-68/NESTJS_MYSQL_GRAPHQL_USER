"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLE_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLE_KEY = 'usertypes';
const Roles = (...usertypes) => (0, common_1.SetMetadata)(exports.ROLE_KEY, usertypes);
exports.Roles = Roles;
//# sourceMappingURL=role.decorator.js.map
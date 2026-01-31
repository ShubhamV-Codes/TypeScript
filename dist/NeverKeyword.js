"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function redirect(role) {
    if (role === "user") {
        console.log("Redirecting to Page Dedecated to the User");
        return;
    }
    if (role === "admin") {
        console.log("Redirecting to Admin of the Web Page");
        return;
    }
    if (role === "superadmin") {
        console.log("Page Going for the SuperAdmin");
        return;
    }
    role;
}
redirect("superadmin");
//# sourceMappingURL=NeverKeyword.js.map
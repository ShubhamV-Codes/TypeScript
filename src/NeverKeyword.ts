type Role = "admin" | "user" | "superadmin";

function redirect(role:Role) : void{

    if(role === "user"){
        console.log("Redirecting to Page Dedecated to the User");
        return ;
    }
    if(role === "admin"){
        console.log("Redirecting to Admin of the Web Page");
        return ;
    }
    if(role === "superadmin"){
        console.log("Page Going for the SuperAdmin");
        return ;
    }
    role;
}
redirect("superadmin");

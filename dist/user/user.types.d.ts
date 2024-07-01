export declare enum typeRole {
    ADMIN = "Admin",
    WORKER = "Worker",
    SUPERVISOR = "Supervisor"
}
export declare enum Shift {
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    EVENING = "Evening",
    NIGHT = "Night"
}
export declare class UserType {
    user_id: string;
    username: string;
    email: string;
    phonenumber: string;
    empId: string;
    shift: Shift;
    usertype: typeRole;
    created_at: Date;
}
export declare class UserGetType {
    user_id: string;
    username: string;
    empId: string;
    usertype: typeRole;
}
export declare class UserUpdateType {
    user_id: string;
    username: string;
    email: string;
    password: string;
    phonenumber: string;
    empId: string;
    shift: Shift;
    usertype: typeRole;
    created_at: Date;
}

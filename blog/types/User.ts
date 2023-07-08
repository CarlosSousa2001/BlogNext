enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export type User = {
    id: number;
    name: string;
    email: string | null;
    role:Role
}
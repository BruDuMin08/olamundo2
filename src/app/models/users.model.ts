// Formata dados do usuário
export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    status: number;
    date: Date;
}

// O que esperar do response da listagem de usuários
export interface ResponseUsers {
    status: string;
    result: User[];
}

// O que esperar do response de apenas 1 usuário
export interface ResponseUser {
    status: string;
    result: User[];
}

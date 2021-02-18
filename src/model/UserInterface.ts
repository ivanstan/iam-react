import { ApplicationInterface } from './ApplicationInterface';
import { ClaimInterface } from './ClaimInterface';

export interface UserInterface {
    applications: ApplicationInterface[];
    claims: ClaimInterface[];
    id: number;
    email: string;
    password: string;
    roles: any;
    active: boolean;
    verified: boolean;
    banned: boolean;
    createdAt: string;
    updatedAt: string;
}

import UserInterface from './UserInterface';
import ClaimInterface from './ClaimInterface';

export default interface ApplicationInterface {
    users: UserInterface[];
    claims: ClaimInterface[];
    id: number;
    uuid: string;
    name: string;
    url: string;
    redirect: string;
}

import { CollectionInterface } from './CollectionInterface'
import { UserInterface } from './UserInterface'
import { ClaimInterface } from './ClaimInterface'

export interface ApplicationInterface {
    users: UserInterface[]
    claims: ClaimInterface[]
    id: number
    uuid: string
    name: string
    url: string
    redirect: string
}

export interface ApplicationCollectionInterface extends CollectionInterface {
  members: ApplicationInterface[]
}

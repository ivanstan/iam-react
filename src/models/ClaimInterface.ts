import { CollectionInterface } from './CollectionInterface'
export interface ClaimInterface {
    id: number
    name: string
}

export interface ClaimCollectionInterface extends CollectionInterface {
  members: ClaimInterface[]
}

import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Pet {
    id: ID!
    name: String
  }

  type Owner {
    id: ID!
    name: String
    pets: [Pet]
  }

  type Query {
    hello: String
    getAllPets: [Pet]
    getPetById(id: ID): Pet
    getAllOwners: [Owner]
    getOwnerById(id: ID): Owner
  }

  type Mutation {
    createPet(name: String): Pet
    deletePet(id: ID): String
    createOwner(name: String): Owner
    deleteOwner(id: ID): String
    addPetToOwner(petId: ID, ownerId: ID): Owner
    removePetFromOwner(petId: ID, ownerId: ID): Owner
  }
`;

export default typeDefs;

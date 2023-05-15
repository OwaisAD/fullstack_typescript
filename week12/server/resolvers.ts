import Pet from "./models/Pet.model";
import Owner from "./models/Owner.model";

import mongoose, { isValidObjectId } from "mongoose";
import { ObjectId } from "bson";

const resolvers = {
  Query: {
    hello: () => {
      return "Hello World!";
    },
    getAllPets: async () => {
      return await Pet.find({});
    },
    getPetById: async (_parent: any, args: any, _context: any, _info: any) => {
      const id = args.id;
      return await Pet.findById(id);
    },
    getAllOwners: async () => {
      return await Owner.find({});
    },
    getOwnerById: async (_parent: any, args: any, _context: any, _info: any) => {
      const id = args.id;
      return await Owner.findById(id);
    },
  },
  Mutation: {
    createPet: async (parent: any, args: any, context: any, info: any) => {
      const { name } = args;
      const pet = new Pet({ name });
      await pet.save();
      return pet;
    },
    deletePet: async (_parent: any, args: any, _context: any, _info: any) => {
      const id = args.id;
      await Pet.findByIdAndDelete(id);
      return `Ok - pet with id ${id} was successfully deleted`;
    },
    createOwner: async (parent: any, args: any, context: any, info: any) => {
      const { name } = args;
      const owner = new Owner({ name });
      await owner.save();
      return owner;
    },
    deleteOwner: async (_parent: any, args: any, _context: any, _info: any) => {
      const id = args.id;
      await Owner.findByIdAndDelete(id);
      return `Ok - owner with id ${id} was successfully deleted`;
    },
    addPetToOwner: async (_parent: any, args: any, _context: any, _info: any) => {
      const petId = args.petId;
      const ownerId = args.ownerId;
      const owner = await Owner.findById(ownerId);
      const pet = await Pet.findById(ownerId);
      if (!owner) throw new Error("Owner not found");
      if (!pet) throw new Error("Pet not found");
      owner.pets.push(petId);
      await owner.save();
      return owner;
    },
  },
};

const validateId = (id: any) => {
  return mongoose.Types.ObjectId.isValid(id);
};

export default resolvers;

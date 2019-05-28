import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeItem: async(_, args) => {
    const { id } = args;
    const item = prisma.items({ where: { id } });
    return item;
      
      }
    }
   
};

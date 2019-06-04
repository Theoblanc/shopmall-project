import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeItem: async () => {
      return await prisma.items();
    }
  }
}



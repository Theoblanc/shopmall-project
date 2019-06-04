    
import { prisma } from "../../../generated/prisma-client";

export default {
  Item: {
    files: ({ id }) => prisma.item({ id }).files()

  }
};
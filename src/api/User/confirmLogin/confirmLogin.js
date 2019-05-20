import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utills";

export default {
    Mutation: {
        confirmLogin: async (_, args) => {
            const { userid, password } = args;

            const user = await prisma.user({ userid });

            if (user.password === password) {
                return generateToken(user.id);

            } else {
                throw Error("Wrong Email / password")
            }

        }
    }
}

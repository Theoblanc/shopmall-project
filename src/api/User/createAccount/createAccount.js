import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args) => {
            const { user_name,
                    userid,
                    password,
                    re_passwored,
                    nickname,
                    birthday,
                    gender,
                    email,
                    find_email = "",
                    mailing = "",
                    phone,
                    cellPhone,
                    sms="",
                    zipCode,
                    address
                    } = args;

            const exist = await prisma.$exists.user({
                OR: [
                    {
                        nickname
                    },
                    {
                        email
                    }
                ]
            });

            if (exist) {
                throw Error("This nickname / email is already taken");
            }
            
            const user = await prisma.createUser({
                user_name,
                userid,
                password,
                re_passwored,
                nickname,
                birthday,
                gender,
                email,
                find_email,
                mailing,
                phone,
                cellPhone,
                sms,
                zipCode,
                address
            });
            return user;
        }
    }
}
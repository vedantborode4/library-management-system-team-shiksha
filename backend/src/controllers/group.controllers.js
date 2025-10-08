import prismaClient from "../utils/db.js";
import { createGroupSchema } from "../utils/schema.zod.js";

export async function createGroup (req, res) {
    const parsedData = createGroupSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    // const name = parsedData.data.name
    // const members = parsedData.data.members
    const {name , members} = parsedData.data

    try {
        const existingGroup = await prismaClient.group.findUnique({
            where: {
                name:  name
            }
        })

        if(existingGroup){
            return res.status(403).json({
                message: "group name already exist"
            })
        }

        const foundUsers = await prismaClient.user.findMany({
            where: {
                username: { in: members }
            },
            select: { id: true, username: true }
        })

        const foundUsernames = foundUsers.map((user) => user.username)

        const missingUsernames = members.filter(
            (username) => !foundUsernames.includes(username)
        )

        if (missingUsernames.length > 0) {
            return res.status(404).json({
                message: "Some usernames do not exist",
                missingUsernames
            });
        }

        const group = await prismaClient.group.create({
            data: { name }
        })

        const groupMemberData = foundUsers.map((user) => ({
            userId: user.id,
            groupId: group.id
        }))

        await prismaClient.groupMember.createMany({
            data: groupMemberData
        })

        return res.status(200).json({
            message: "Group created successfully",
            groupId: group.id,
            membersAdded: groupMemberData.length
        })
        
    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }
}
import { prisma } from "../prisma/client";
import { Tag as TagPrisma } from "@prisma/client";


class TagService {
     public async create(name: string): Promise<void> {
            const tag: TagPrisma = {
                id: crypto.randomUUID(),
                name: name
        
            }
    
            await prisma.tag.create({ data: tag })
    
    
        }
}

export const tagService = new TagService();

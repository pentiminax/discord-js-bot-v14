import { BotEvent } from "../types";
import { Client, Events , GuildMember} from "discord.js";

const guildMemberAdd: BotEvent = {
    name: Events.GuildMemberAdd,
    once: false,
    execute(client: Client, member: GuildMember)  {
      console.log((`💪 ${member.user.tag} a rejoint le serveur de ${client.user.username}`))
    }
    
}

export default guildMemberAdd;
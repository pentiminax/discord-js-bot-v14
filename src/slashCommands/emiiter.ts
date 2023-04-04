import { SlashCommandBuilder, EmbedBuilder, CommandInteraction, Interaction, Client, CacheType, GuildMember } from "discord.js"
import { SlashCommand } from "../types";
 

export const command: SlashCommand = {
    name: 'emitters',
    data: new SlashCommandBuilder()
        .setName("emitters")
        .setDescription("simules les event discord")
        .addStringOption(option => 
          option
          .setName("liste-event")
          .setDescription("Simule les events")
          .setRequired(true)
          .addChoices(
            {name: "guildMemberAdd", value: "guildMemberAdd"},
            {name: "guildMemberRemove", value: "guildMemberRemove"},
            {name: "guildMemberUpdate", value: "guildMemberUpdate"},
            {name: "guildBanAdd", value: "guildBanAdd"},
            {name: "guildBanRemove", value: "guildBanRemove"},
            {name: "guildIntegrationsUpdate", value: "guildIntegrationsUpdate"},
            {name: "guildUpdate", value: "guildUpdate"},
            {name: "inviteCreate", value: "inviteCreate"},
            {name: "inviteDelete", value: "inviteDelete"},
            {name: "messageCreate", value: "messageCreate"},
            {name: "messageDelete", value: "messageDelete"},
            {name: "messageUpdate", value: "messageUpdate"},
            {name: "messageDeleteBulk", value: "messageDeleteBulk"},
            {name: "messageReactionAdd", value: "messageReactionAdd"},

          )),  
         
    execute: async (client, interaction, options) => {
      const { guild, member,  user } = interaction
   
      
      

      const memberOption = options.getString("liste-event"); 
      if(memberOption){
        const emitter = memberOption as keyof typeof MemberEvents
        client.emit(emitter, member as GuildMember) // a quoi sa sert ?
        interaction.reply({ content: options.getString("liste-event") + " -> " + interaction.user.username + " ✅ " }) 
      }



      interaction.reply({content: "ok", ephemeral: true})
    }
}

const MemberEvents = {
  guildMemberAdd: 'guildMemberAdd',
  guildMemberRemove: 'guildMemberRemove'
}

const GuildEvents = {
  guildCreate: 'guildCreate',
  guildRemove: 'guildRemove'
}
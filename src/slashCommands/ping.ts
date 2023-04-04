import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js"
import { SlashCommand } from "../types";
import { createCitoyen } from "../models/citoyen";

export const command: SlashCommand = {
    name: 'ping',
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Affoche le ping du bot"),
    execute: async (interaction) => {
        const member = await interaction.guild?.members.fetch(interaction.user.id);
        await createCitoyen(interaction.user.username, interaction.user.id, interaction.user.avatarURL(), member?.nickname )
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: "Pentiminax" })
                    .setDescription(`🏓 Pong! \n 📡 Ping: ${interaction.client.ws.ping}`)
                    .setColor('#ff8e4d')
            ]
        })
    }
}

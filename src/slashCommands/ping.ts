import { SlashCommandBuilder, EmbedBuilder, CommandInteraction } from "discord.js"
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: 'ping',
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Display bot's ping"),
    execute: async (interaction) => {
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
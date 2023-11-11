import { SlashCommandBuilder } from "discord.js"
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: 'react',
    data: new SlashCommandBuilder()
        .setName('react')
        .setDescription("Display a message with reaction"),
    async execute(interaction) {
        const message = await interaction.reply({ content: 'Message with reaction', fetchReply: true });
        await message.react('👋');
    }
}
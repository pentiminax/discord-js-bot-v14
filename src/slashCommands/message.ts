import { SlashCommandBuilder } from "discord.js"
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: 'message',
    data: new SlashCommandBuilder()
        .setName("message")
        .setDescription("Display a message")
        .addStringOption((option) => {
            return option
                .setName('message')
                .setDescription('Message to display')
                .setRequired(true);
        }),
    async execute(interaction) {
        const message = interaction.options.get('message')?.value?.toString();
        await interaction.reply(`Message : ${message}`);
    }
}
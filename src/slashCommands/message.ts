import { SlashCommandBuilder } from "discord.js"
import { SlashCommand } from "../types";

export const command: SlashCommand = {
    name: 'welcome',
    data: new SlashCommandBuilder()
        .setName("message")
        .setDescription("Affiche un message")
        .addStringOption((option) => {
            return option
                .setName('message')
                .setDescription('Message à afficher')
                .setRequired(true);
        }),
    async execute(client, interaction, options) {
        const message = interaction.options.get('message').value.toString();
        await interaction.reply(`Valeur du message : ${message}`);
    }
}
import { Collection, CommandInteraction, CommandInteractionOptionResolver, Message, PermissionResolvable, SlashCommandBuilder, SlashCommandSubcommandBuilder } from "discord.js"
import { Document } from 'mongoose';

export interface BotEvent {
    name: string,
    once?: boolean | false,
    async execute: (...args?) => void
}

export interface SlashCommand {
    name: string,
    data: SlashCommandBuilder | any,
    async execute: (interaction : CommandInteraction, options: CommandInteractionOptionResolver) => Promise<void>,
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string
            TOKEN: string
        }
    }
}

declare module "discord.js" {
    export interface Client {
        slashCommands: Collection<string, SlashCommand>
    }
}

export interface ICitoyen extends Document {
    username: string;
    discordId: string;
    avatarDiscord?: string | null;
    createdAt: Date[];
    nickname?: string | null;
} 

export interface EmitterOptions {
    member?: string;
    user?: string;
    guild?: string;
}
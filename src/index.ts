import * as dotenv from 'dotenv';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { SlashCommand } from './types';
import { join } from 'path';
import { readdirSync } from 'fs';
import { connect } from 'mongoose'

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ]
});

client.slashCommands = new Collection<string, SlashCommand>();
 
const handlersDir = join(__dirname, "./handlers");

readdirSync(handlersDir).forEach(handler => {
  require(`${handlersDir}/${handler}`)(client);
});

connect(process.env.MONGO_URI, {}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log(err);
});

client.login(process.env.TOKEN);
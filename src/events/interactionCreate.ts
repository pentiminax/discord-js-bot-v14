import { BotEvent } from "../types";
import { Events, Interaction, EmbedBuilder, CommandInteractionOptionResolver,   } from "discord.js";
 

const event: BotEvent = {
    name: Events.InteractionCreate,
    once: false,
    async execute(client, interaction: Interaction, ) {
        if (!interaction.isChatInputCommand()) return;
   
        // console.log(interaction)
        console.log

        const command = client.slashCommands.get(interaction.commandName);

        if (!command) return;

        await command.execute(client, interaction, interaction.options as CommandInteractionOptionResolver);

    
	
		 
	  
    },
}

export default event;
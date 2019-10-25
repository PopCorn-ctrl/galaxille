/* Version 1.1 */
/* Bot dev par PøpCørn#4162 */

const Discord = require("discord.js")
const client = new Discord.Client()
let prefix = "?"

client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log("Le bot vient de s'allumer !")
    client.user.setStatus("dnd")
    client.user.setActivity("?help pour voir toutes les commandes | Bots créer par PopCorn", {type: 1})
    console.log("Activité mise en place")
})

/* Mp */


/* A rejoint */
client.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setTitle('Bienvenue :sunglasses:')
        .setDescription(':tada: **' + member.user.username + '** à rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('636643184037855261').send(embed)
    member.addRole('636636787480985600')
});

/* A quitté */
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setTitle('Aurevoir :sob:')
        .setDescription(':cry: **' + member.user.username + '** à quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('636643256679137290').send(embed)    
})

/*Kick*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglasses:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
    }
})
 
/*Ban*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglasse:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
})
/* Theme Halloween */
    client.on("message", message => {
        if(message.content.includes("?theme")){
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 🎃")
        .setColor("#A95309")
        .setDescription("Touts les thèmes de se magnifique bot :")
        .addField("**Thème :**", "Halloween :white_check_mark: , Noël :x: , Toussain :x: , Nouvel an :x: , Pâque :x:")
        .setThumbnail("https://media.discordapp.net/attachments/637316339547242522/637316595366232064/halloween-pumpkin-on-wooden-table-in-front-of-spooky-dark-background-jack-o-lant_16x9_WEB.jpg?width=994&height=559")
        message.channel.send(help_embed)
    }
})

client.on("message", message => {
    if(message.content.includes("?help")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#A95309")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Halloween**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://media.discordapp.net/attachments/637316339547242522/637316595366232064/halloween-pumpkin-on-wooden-table-in-front-of-spooky-dark-background-jack-o-lant_16x9_WEB.jpg?width=994&height=559")
        message.channel.send(help_embed)
    }
})

client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("🎃 **Le serveur est ON** 🎃")
        message.channel.send("```🎃 Ip : galaxille.aternos.me 🎃```")
        console.log("Serveur ouvert ;)")
    }
});

client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("🎃**Le serveur est OFF** 🎃")
        message.channel.send("```🎃 Vous ne pourrez pas y allé pour le moment ! 🎃```")
        console.log("Serveur éteint")
    }
});

client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("🎃 **Une maintenance est en cours !** 🎃")
        message.channel.send("``` 🎃 Vous ne pourrez pas y aller pour le moment ! Raison : [Maintenance] 🎃 ```")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("🎃 Staff | **Besoin d'un coup de pouce** ;) 🎃 ")
        message.channel.send("``` 🎃 J'ai un problème venez m'aider dès que possible ! 🎃 ```")
        console.log("Besoin d'une personne du staff")
    }
});

client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("🎃 Staff | **Réunion dans quelque instants !** 🎃")
        message.channel.send("``` 🎃 Merci d'aller dans le channel : Réunion 🎃 ```")
        console.log("Réunion en cour")
    }
});

/* Theme Noël */
/*client.on("message", message => {
    if (message.content.includes("?theme")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 🎄")
        .setColor("#FFFFFF")
        .setDescription("Touts les thèmes de ce magnifique bot :")
        .addField("**Thème :**", "Halloween :x: , Noël :white_check_mark: , Toussain :x: , Nouvel an :x: , Pâque :x:")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637327070233624584/index.jpg")
        message.channel.send(help_embed)
    }
})
client.on("message", message => {
    if (message.content.includes("?help")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#FFFFFF")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Noël**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637327070233624584/index.jpg")
        message.channel.send(help_embed)
    }
})
client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("🎄 **Le serveur est ON** 🎄")
        message.channel.send("```🎄 Ip : galaxille.aternos.me 🎄```")
        console.log("Serveur ouvert ;)")
    }
});
client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("🎄**Le serveur est OFF** 🎄")
        message.channel.send("```🎄 Vous ne pourrez pas y allé pour le moment ! 🎄```")
        console.log("Serveur éteint")
    }
});
client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("🎄 **Une maintenance est en cours !** 🎄")
        message.channel.send("``` 🎄 Vous ne pourrez pas y aller pour le moment ! Raison : [Maintenance] 🎄 ```")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("🎄 Staff | **Besoin d'un coup de pouce** ;) 🎄 ")
        message.channel.send("``` 🎄 J'ai un problème venez m'aider dès que possible ! 🎄 ```")
        console.log("Besoin d'une personne du staff")
    }
});
client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("🎄 Staff | **Réunion dans quelque instants !** 🎄")
        message.channel.send("``` 🎄 Merci d'aller dans le channel : Réunion 🎄 ```")
        console.log("Réunion en cour")
    }
});*/

/* Theme Toussain */
/*client.on("message", message => {
    if (message.content.includes("?theme")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Voiçi les thèmes 👤")
        .setColor("#000000")
        .setDescription("Touts les thèmes de ce magnifique bot :")
        .addField("**Thème :**", "Halloween :x: , Noël :x: , Toussain :white_check_mark: , Nouvel an :x: , Pâque :x:")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637336198305677312/toussain.jpg")
        message.channel.send(help_embed)
    }
})
client.on("message", message => {
    if (message.content.includes("?help")) {
        var help_embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#000000")
        .setDescription("Toutes les commandes de se magnifique bot :robot: :")
        .addField("**Staff :**", "?ban @player#0000, ?kick @player#0000, On, Off, Maintenance, Staff, Reunion")
        .addField("Thème : **Toussaint**", "?theme pour voir tout les thème disponible ! ")
        .setThumbnail("https://cdn.discordapp.com/attachments/637316339547242522/637336198305677312/toussain.jpg")
        message.channel.send(help_embed)
    }
})
client.on('message', function (message){
    if(message.content === "On"){
        message.channel.send("👤 **Le serveur est ON** 👤")
        message.channel.send("```👤 Ip : galaxille.aternos.me 👤```")
        console.log("Serveur ouvert ;)")
    }
});
client.on('message', function (message){
    if(message.content === "Off"){
        message.channel.send("👤**Le serveur est OFF** 👤")
        message.channel.send("```👤 Vous ne pourrez pas y allé pour le moment ! 👤```")
        console.log("Serveur éteint")
    }
});
client.on('message', function (message){
    if(message.content === "Maintenance"){
        message.channel.send("👤 **Une maintenance est en cours !** 👤")
        message.channel.send("```👤 Vous ne pourrez pas y aller pour le moment ! Raison : [Maintenance] 👤```")
        console.log("Maintenance en cour")
    }
});
 
client.on('message', function (message){
    if(message.content === "Staff"){
        message.channel.send("👤 Staff | **Besoin d'un coup de pouce** ;) 👤")
        message.channel.send("```👤 J'ai un problème venez m'aider dès que possible ! 👤```")
        console.log("Besoin d'une personne du staff")
    }
});
client.on('message', function (message){
    if(message.content === "Reunion"){
        message.channel.send("👤 Staff | **Réunion dans quelque instants !** 👤")
        message.channel.send("```👤 Merci d'aller dans le channel : Réunion 👤```")
        console.log("Réunion en cour")
    }
});*/



/* Bot dev par : PøpCørn#4162 */
/* V1.1 */ 

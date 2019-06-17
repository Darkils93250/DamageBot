const Discord = require('discord.js');
const Client = new Discord.Client();
Client.commands = new Discord.Collection();
const fs = require('fs');
Client.login('NTg2NTgwNDcxMzU0MjI4NzQ3.XPqF0A.f-2Nkhh2O1CV4gkJQUEP0gs78Lc')

var prefix = ("$");

fs.readdir('./Commandes/', (error, f) => {
  if (error) { return console.error(error); }
      let commandes = f.filter(f => f.split('.').pop() === 'js');
      if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

      commandes.forEach((f) => {
          let commande = require(`./Commandes/${f}`);
          console.log(`${f} commande chargée !`);
          Client.commands.set(commande.help.name,commande);
      });
});

fs.readdir('./Events/', (error, f) => {
  if (error) { return console.error(error); }
      console.log(`${f.length} events chargés`);

      f.forEach((f) => {
          let events = require(`./Events/${f}`);
          let event = f.split('.')[0];
          Client.on(event, events.bind(null, Client));
      });
});


Client.on('ready', function() {
  console.log("----------------------------------------------------------------/ Bot Connecté /");
});


    Client.on('guildMemberAdd', function (member) {
      member.createDM().then(function (channel) {
        return channel.send('bonne chance pour ta survie ! ' + member.displayName)
   })})





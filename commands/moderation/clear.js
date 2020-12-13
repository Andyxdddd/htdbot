const discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    try {
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`U heeft niet de juiste rechten om deze actie uit te voeren, ${message.author.username}`).then(msg => msg.delete({ timeout: 3000 }));
        if (!args[0]) {
            return message.channel.send("Geef het aantal berichten om te wissen bv. `!clear 10`").then(msg => msg.delete({ timeout: 3000 }))
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]) + 1;
        }

        var deleteAmountCount = deleteAmount - 1;
        await message.channel.bulkDelete(deleteAmount, true);

        if (args[0] == 1) {
            return message.channel.send(`Ik heb 1 bericht verwijderd!`).then(msg => msg.delete({ timeout: 3000 }))
        } else {
            return message.channel.send(`Ik heb ${deleteAmountCount} berichten verwijderd!`).then(msg => msg.delete({ timeout: 3000 }));
        }
    } catch (e) {
        return message.channel.send(`Maximaal 99 berichten!`).then(msg => msg.delete({ timeout: 3000 }));
    }
}

module.exports.help = {
    name: "clear"
}
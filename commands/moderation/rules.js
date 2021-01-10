const discord = require("discord.js");
module.exports.run = async (client, message, args) => {

    const firstimg = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(firstimg);
    message.channel.send('pong');

    const secimg = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(secimg);
    message.channel.send('ping');

}
module.exports.help = {
    name: "radmin"
}
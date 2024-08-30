//CODED BY: DARK KENZ Https://discord.gg/j4jfast
//CODED BY: DARK KENZ Https://discord.gg/j4jfast
//CODED BY: DARK KENZ Https://discord.gg/j4jfast

const express = require('express');
const Discord = require('discord.js'); 
const app = express();
const tokens = require('./tokens.json');
const http = require('http');

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

app.get("/", (request, response) => {
    console.log(Date.now() + " DARK KENZ Pinglendi | Hostlandı");
    response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

tokens.forEach(token => {
    const client = new Discord.Client(); 
    const data = new Map();

    client.on('ready', () => {
        console.log(`${client.user.username} ismi ile giriş yapıldı! | Coded By: DARK KENZ .gg/j4jgo`);
    });

    client.on("message", async msg => {
        if (msg.channel.type === "dm") {
            if (msg.author.id !== client.user.id && !msg.author.bot) {
                let oguzhantoptur = data.get(msg.author.id);

                if (!oguzhantoptur) {
                    data.set(msg.author.id, 1);
                    await sleep(4000);
                    await msg.channel.send("j4j");
                    await sleep(5200);
                    await msg.channel.send("\n Best J4J Server https://discord.gg/j4jgo");
                    await sleep(5200);
                    await msg.channel.send("\n The Most Active J4j Server You can easily make j4j on this server :)** <#1208535244609949796>");
                    await sleep(9000);
                    await msg.channel.send("Done Joined Check!");
                }
            }
        }
    });

    client.on('message', async msg => {
        if (msg.content.toLowerCase() === 'j4j' || msg.content.toLowerCase() === 'J4j dm me' || msg.content.toLowerCase() === 'j4j dm me fast') {
            await msg.channel.send("j4j dm me fast", "j4j dm", "J4j Dm me", "J4j Fast", "j4j","J4J");
        }
    });

    client.login(token).catch(err => console.error(`Failed to login with token ${token}:`, err));
});

//CODED BY: DARK KENZ Https://discord.gg/j4jfast
//CODED BY: DARK KENZ Https://discord.gg/j4jfast
//CODED BY: DARK KENZ Https://discord.gg/j4jfast

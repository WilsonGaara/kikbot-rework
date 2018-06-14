const Discord = require('discord.js');
const Manager = new Discord.ShardingManager('./index.js');
Manager.spawn(2);
//2018 - Adição de sharding.

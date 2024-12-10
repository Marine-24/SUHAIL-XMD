const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="clarksonpeter@proton.me"
global.location="Kisumu,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254731242169";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_51_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICA5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDc2LFxuICAgICAgICA5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTczLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDExNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrY2ZPeUpUMUE3cXdPMGY2TVJ6MW84NHBlWHBSWmtJY2JVUUNaL0xZT3NFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3S3JtYkwzOFE5dW9kbjZqOUxBOW5nXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyNGFjZDQ3LTNlNTUtNGQxMy1iMTM1LTI3ZDIzZjFjN2Y5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDY2LFxuICAgICAgMTM4LFxuICAgICAgOTAsXG4gICAgICAxMjgsXG4gICAgICA1LFxuICAgICAgMzYsXG4gICAgICAxMSxcbiAgICAgIDIxNyxcbiAgICAgIDIzMyxcbiAgICAgIDY4LFxuICAgICAgNjksXG4gICAgICAyMTYsXG4gICAgICAxNCxcbiAgICAgIDUyLFxuICAgICAgNTAsXG4gICAgICAxMjgsXG4gICAgICA1NSxcbiAgICAgIDkwLFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTIwLFxuICAgICAgMSxcbiAgICAgIDU1LFxuICAgICAgNDcsXG4gICAgICAxNzUsXG4gICAgICAxNzIsXG4gICAgICAyMCxcbiAgICAgIDI0NSxcbiAgICAgIDYyLFxuICAgICAgODUsXG4gICAgICAxMjksXG4gICAgICA3MyxcbiAgICAgIDIyOSxcbiAgICAgIDE3MyxcbiAgICAgIDE5MixcbiAgICAgIDIzMSxcbiAgICAgIDEyOCxcbiAgICAgIDE2MCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFWNVFCTkI0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MzEyNDIxNjk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NDMzNjkxNDY0NTA1NjoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPR0hpcHdHRUxQVzRMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkl4Q01XMlZlRnRkQkczQXpzQ3BGK3VhbldXenYrN0RXYUxrWVliM210Q2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWVVzNjE3cHJqVUhxV2NWRVdnTTRreW1SMnU5TWNpZU9rdlNEbWFWckJ2THRML25mNUVjc1Q3RGM2eEt6WUNTdS8xaVFWMnVtMnJ3d1hUbFBCblhwQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2tJZ3l1TmFaQk9oTkJsKzd6K1ZldTR1TzkwVzMrVzRNcWIraE5JaVcvc2dQWGpYd2Nkd21hZVcrMXM1dFYxTThqemhkMklrOUo1V2hsL0J1U0RyaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzMxMjQyMTY5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzgzMTQ4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5iQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmJDLmpzb24iOiAie1wia2V5RGF0YVwiOlwid1pidUZHRnBUTDVSQzk0Y0FUME9ZYW9lQ3N4ZEJqMEJPTWQ2R3ZHZktIcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjY5NDk3ODIzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Marine",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

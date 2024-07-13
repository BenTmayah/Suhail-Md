const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_37_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYyLFxuICAgICAgICA3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDcsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIld1STFFNHlwalN1THNndW04dGFiL0NsWlkrSUYyUVUxMkxxSjcvdVNCcVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjd2anBpRks4UkxHRVRzREZqdnNmb2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTljM2FlZGEtOGU3Ni00MDE2LWFlNzAtN2QyY2I1MjAzYzMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjcsXG4gICAgICAxNDksXG4gICAgICAyMzgsXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICAxLFxuICAgICAgOTgsXG4gICAgICAxNzQsXG4gICAgICAxNTAsXG4gICAgICA5LFxuICAgICAgMTQ2LFxuICAgICAgMTA2LFxuICAgICAgMTE0LFxuICAgICAgMTg2LFxuICAgICAgMzksXG4gICAgICA5MCxcbiAgICAgIDY1LFxuICAgICAgMjQzLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDQzLFxuICAgICAgMjA2LFxuICAgICAgMTEwLFxuICAgICAgMTExLFxuICAgICAgMSxcbiAgICAgIDE1NixcbiAgICAgIDE5MSxcbiAgICAgIDIyMixcbiAgICAgIDY1LFxuICAgICAgMjM3LFxuICAgICAgMzUsXG4gICAgICAyNDAsXG4gICAgICAyNDMsXG4gICAgICAxMjEsXG4gICAgICAyNTIsXG4gICAgICAyMSxcbiAgICAgIDMsXG4gICAgICAxNTQsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVRNWkRBU1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3MjY0ODk3ODoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAjlVua25vd25cIixcbiAgICBcImxpZFwiOiBcIjExMjgxMTY2MTMzMjYwMjoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ1lsNWtORUtpR3lyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZLN0p2ZEZPcFN0dG5XOWxXWUJaaWVGTVRtY1h3RCtzWVRoa0pKTVRMWE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOFBoRTZHcDNaZFVFZjMxUmNWbzZiR2MrUlR3OXFmYkVpUXBHUEI5T0JYVWRSeGoreklwai9jc1JWaXZvZXhObzNiUW5QTS9PSC9NNzM2THVveTBCQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUThNNzV4VmQxWFQ3ZE9lVGl6R29peGZiS0tVSmZPcGVmV1lSaU54ME5Xd3lQRlNEaURqMHhmejNyWnduK3c3UGxnbmhlNkNkMUxvSDVCNXRtaisxZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTcyNjQ4OTc4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg3Nzg2OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

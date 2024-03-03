





const { waitForDebugger } = require('inspector')
const noblox = require('noblox.js')
async function startApp () {
    // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
    // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
    const currentUser = await noblox.setCookie(process.env['COOKIE']) 
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)

    // Do everything else, calling functions and the like.
        const groupInfo = await noblox.getGroup(13549003)
    console.log(groupInfo)

  
  setInterval(() => {
  noblox.shout(13549003, "Hello! We currently have " + groupInfo.memberCount + " members!")
}, 15000)
}



startApp()
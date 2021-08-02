/*


*/

function successfullMessage(msg) {
    return "✅ *𝑮𝑰𝑺𝑯𝑨𝑵 𝑩𝑶𝑻*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *𝑮𝑰𝑺𝑯𝑨𝑵 𝑩𝑶𝑻*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *𝑮𝑰𝑺𝑯𝑨𝑵 𝑩𝑶𝑻*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}

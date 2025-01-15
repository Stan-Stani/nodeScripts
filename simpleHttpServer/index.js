const http = require("http")

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple Node Server</title>
        </head>
        <body>
            <span>Hello from Node.js Server!</span>
        </body>
        </html>
    `)
})

server.listen(80, () => {
  console.log("Server running on port 80")
  console.log("Access from another device using http://YOUR_IP_ADDRESS/")
})

// Handle errors
server.on("error", (error) => {
  if (error.code === "EACCES") {
    console.log("Permission denied - try running with sudo")
  } else {
    console.log("Server error:", error)
  }
})

const spawn = require("child_process").spawn

const childProcesses = []

const adminRedirector = spawn(
  "yarn",
  "http-server -a 127.0.0.1 --port 3004 --proxy http://192.168.11.49:3004".split(
    " "
  ),
  { shell: true, stdio: 'inherit' }
)

const publicSiteRedirector = spawn(
  "yarn",
  "http-server -a 127.0.0.1 --port 3001 --proxy http://192.168.11.49:3001".split(
    " "
  ),
  { shell: true, stdio: 'inherit' }
)

const processesByName = [{ adminRedirector }, { publicSiteRedirector }]

for (const pByName of processesByName) {
  let name = ""
  for (const key in pByName) {
    name = key
    break
  }

    const p = pByName[name]
    childProcesses.push(p)

  p.on("close", (data) => console.log(`${name}:`, "closed with code:", data))
}

function cleanup() {
    for (const cp of childProcesses) {
      try {
        // This will kill the shell and its children on Windows and Unix.
        cp.kill('SIGTERM')
      } catch (e) { /* ignore */ }
    }
  }
  
  // Listen for exit signals
  process.on('SIGINT', cleanup)   // Ctrl+C
  process.on('SIGTERM', cleanup)  // kill command
  process.on('exit', cleanup)     // Node exits for any reason
  
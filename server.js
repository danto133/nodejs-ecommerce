const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`)
})

// process.on("SIGINT", () => {
//   server.close(() => console.log("Exit server express"))
//   notify.send(..ping)
// })

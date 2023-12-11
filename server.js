import Waffle from "./lib";
const server = new Waffle();

server.get("/", res => {
    res.send("Hello from waffle!")
})

server.get("/about", res => {
    res.send("This is the About page!")
})

server.get("/api", res => {
    res.json({
        name: "Sherlock Holmes",
        occupation: "Writer",
        country: "London"
    })
})

server.get("/blog", res => {
    res.html("blog")
})


server.start(3000, console.log("Server running on port 3000"))
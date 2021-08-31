
const divNew = hamedReact.CreateElement("div", {
    children: [
        hamedReact.CreateElement("h1", {
            children: ["Hello world"],
            style: {
                color: "red",
            },
            age: 27,
            adress: "tehran"
        }
        ),
        hamedReact.CreateElement("p", {
            children: ["...Mapsa"]
        })
    ],
    style: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "Yellow"
    }
})

const app = document.getElementById("app")

hamedReactDOM.render(divNew, app)



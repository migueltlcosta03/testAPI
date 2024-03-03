import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let data = {name: "Rita"}
    let encodedData = JSON.stringify(data);
    res.send(encodedData);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
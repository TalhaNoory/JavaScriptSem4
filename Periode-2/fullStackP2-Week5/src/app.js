const express = require("express");
const gju = require("geojson-utils");
const { gameArea, players } = require("./gameData");
const app = express();

app.get("/", (req, res) => res.send("Geo Demo!"));

app.get("/geoapi/isuserinarea/:lon/:lat", (req, res) => {
  const lon = req.params["lon"];
  const lat = req.params["lat"];

  const isInside = gju.pointInPolygon(
    { type: "Point", coordinates: [lon, lat] },
    gameArea
  );

  if (isInside) {
    res.send({
      status: false,
      msg: "point was inside"
    });
  } else {
    res.send({
      status: false,
      msg: "player was not inside"
    });
  }
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
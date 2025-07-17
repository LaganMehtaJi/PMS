import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
import Resume from "./routes/resumeSend.routes.js";
import Template from "./routes/tampleteRecive.routes.js";
app.use(cors());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const userName = "LAGAN mEHTA";
  res.render('template.ejs', { name: userName });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

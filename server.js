import express from 'express';
import cors from 'cors';
import "./db/db.js";
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send(" Servidor funcionando correctamente");
});

app.listen(8081, ()=> console.log("✅ ✅servidor corriendo en http://localhost:8081"));

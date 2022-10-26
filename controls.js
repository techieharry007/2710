const pool = require("../config/db/db");
const bcrypt = require("bcryptjs");
// const jwt=require('jsonwebtoken')
// const SECRETKEY="NOTESAPI"
const getResponse = (req, res) => {
  pool.query("SELECT * FROM admin", (err, result) => {
    if (err) {
      console.log(err, "Error occured");
    }
    res.status(200).json(result.rows);
  });
};
// james james123@
//harry 123
const postResponse = async (req, res) => {
  try {
    var pass = req.body.password
    const hash = await bcrypt.hash(pass, 10);
    let name = req.body.username
    // const token=jwt.sign({username:req.username,},SECRETKEY)
    const query = `INSERT INTO admin (username,password,isadmin) VALUES ('${name}','${hash}','false')`;
    pool
      .query(query)
      .then((res) => {
        console.log("inserted");
      })
      .catch((e) => {
        console.log(e);
      });
    res.status(200).json("all set");
    // console.log(hash);
  } catch (e) {
    console.log(e, "Error");
    res.status(400).send("Some error occured");
  }
};

const validateUser = async (req, res) => {
  let { username, password } = req.body;
  console.log(username, password);
  const query = `SELECT * FROM admin WHERE username='${username}'`;
  pool
    .query(query)
    .then(async (data) => {
      console.log(data.rows[0], "data from query");
      let hashPass = data.rows[0].password;

      let result = data.rows.find((val, index) => {
        if (val.username == username) {
          return val;
        }
      });

      let com = await bcrypt.compare(password, result.password);

      if (com && result.isadmin) {
        res.status(200).send(200)
      } else if (com && !result.isadmin) {
        res.status(201).send(202);
      } else {
        res.status(400).json({ msg: "invalid credentials" });
      }
    })
    .catch((e) => {
      console.log(e, "eeeee");
      res.status(400).json({ msg: "user doesnot exist" });
    });
};
const addProduct = async (req, res) => {
  console.log("testing");
  console.log(req.body);
  console.log(req.file, "images");
  let { title, description, color, size } = req.body;
  const query = `INSERT INTO products (title,description,color,size,image) 
  VALUES ('${title}','${description}','${color}','${size}','${req.file.filename}')
  `;
  pool
    .query(query)
    .then(async (data) => {
      console.log(data.rows[0], "data from query");
      res.status(200).send("product added");
    })
    .catch((e) => {
      console.log(e, "eeeee");
      res.status(400).json({ msg: "user doesnot exist" });
    });
};

const get_product_list = (req, res) => {
  const query = `SELECT * FROM products`;
  pool
    .query(query)
    .then((data) => {
      res.status(200).send(data.rows);
    })
    .catch((err) => {
      res.send(404).send(err, "Error found");
    });
};
const updateTable=(req,res)=>{
  const query=`UPDATE admin
  SET email = "harry01@gmail.com"
  WHERE id=4;`
  pool.query(query).then((data)=>{
  res.status(200).send("Success")
}).catch((err)=>{
  res.status(404).send(err,"Error found")
})
}
const alterTable=(req,res)=>{
  const query=`ALTER TABLE admin
ADD email VARCHAR`;
pool.query(query).then((data)=>{
  res.status(200).send("Success")
}).catch((err)=>{
  res.send(404).send(err,"Error found")
})
}
module.exports = {
  getResponse,
  postResponse,
  validateUser,
  addProduct,
  get_product_list,
  alterTable,
  updateTable
};

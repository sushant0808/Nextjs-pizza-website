import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";
export default async function handler(req, res) {
  const { method } = req;

  dbConnect();
  const { title } = req.body;

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    // if (title) {
    //   console.log("Main if");
    //   try {
    //     const search = req.body.title;
    //     const regex = new RegExp(search, "i");
    //     const product = await Product.find({ title: { $regex: regex } });
    //     res.status(200).json(product);
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // } else 
    
    // {
    //   console.log("Main else");
      try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
      } catch (err) {
        res.status(500).json({ err });
      }
    // }
  }
}

const express = require("express");
const router = express.Router();
const multer = require("multer");
const connectEnsureLogin = require('connect-ensure-login');

// Importing Model
const produceUpload = require("../models/Upload");
const Registration = require("../models/User");

// image upload
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

// router.get("/uploadproduce", async (req, res) => {
// 	const urbanFarmerList = await Registration.find({ role: "urbanfarmer" });
// 	res.render("produce", { urbanfarmers: urbanFarmerList });
// });

router.get("/uploadproduce", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
	res.render("uploadform", {currentUser: req.session.user});
});

router.post("/uploadproduce", connectEnsureLogin.ensureLoggedIn(), upload.single("produceimage"), async (req, res) => {
	console.log(req.body);
	try {
		const produce = new produceUpload(req.body);
		// produce.uploadimage = req.file.path;
		await produce.save();
		res.redirect("/uploadproduce");
	} catch (error) {
		res.status(400).send("Can't save this image");
		console.log(error);
	}
});

module.exports = router;

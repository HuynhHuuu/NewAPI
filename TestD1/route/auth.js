const router = require("express").Router()
const authprocess = require("./authprocess")


router.get("/", async (req, res) => {
    res.status(200).json({ Status: "DAT connected", project: "DAT Intern3" })
})

router.post("/Login", async (req, res) => {
    const usr = await authprocess.auth(req.body.user)
    res.status(200).json(usr)
})





module.exports = router;
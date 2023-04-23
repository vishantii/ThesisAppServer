var express = require("express");
var router = express.Router();
const {
  editProfile,
  profile,
  category,
  checkout,
  history,
  historyDetail,
  categoryById,
  updateTimeAvailability,
  updateStatusTransaction,
  cancelTransaction,
} = require("./controller");

const { isLoginCustomer } = require("../middleware/auth");
const multer = require("multer");
const os = require("os");

router.get("/category", category);
router.put("/timeslots", updateTimeAvailability);
router.put("/transactions/:id", isLoginCustomer, updateStatusTransaction);
router.post("/checkout", isLoginCustomer, checkout);
router.post("/category/byId", isLoginCustomer, categoryById);
router.post("/delete", isLoginCustomer, cancelTransaction);
router.get("/history", isLoginCustomer, history);
router.get("/history/:id/detail", isLoginCustomer, historyDetail);
router.get("/profile", isLoginCustomer, profile);
router.put(
  "/profile",
  isLoginCustomer,
  multer({ dest: os.tmpdir() }).single("image"),
  editProfile
);

module.exports = router;

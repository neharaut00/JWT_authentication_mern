const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
//! above is same as:
  //* router.get(protect.getGoals)
  //* router.post(protect, setGoal)

router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router

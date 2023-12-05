import express from "express";
import AuthController from "./controller/Auth";
const router = express.Router()
const userRouter = express.Router();


// crate a user
userRouter.post('/register',AuthController.register)
// authorize a user for login
userRouter.post('/login',AuthController.login)

// // get a specific user
// userRouter.get('/:userId',UserController.getUser)
// // update a specific user
// userRouter.put('/:userId',UserController.updateUser)
// // delete a specific user
// userRouter.delete('/:userId',UserController.removeUser)
// // get orders of a specific user 
// userRouter.get('/:userId/orders',UserController.getUserOrders)
// // update order  of a specific user 
// userRouter.put('/:userId/orders',UserController.updateUserOrder)
// // get total amount of orders
// userRouter.get('/:userId/orders/total-price',UserController.getTotalAmountOfOrder)


router.use("/user", userRouter)

export default router





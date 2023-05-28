const express = require("express");
const controllers = require("../controllers");
const router = express.Router();


//recipe table
router
    .route("/recipe")
        .get(controllers.getAllRecipes)
        .post(controllers.createRecipe);


router
    .route("/recipe/:id")
        .get(controllers.getRecipe)
        .put(controllers.updateRecipe)
        .delete(controllers.deleteRecipe);

router
    .route("/recipeName")
    .get(controllers.getAllRecipesByName)
//user table
router
    .route("/user")
        .get(controllers.getAllUsers)
        .post(controllers.createUser);
router
    .route("/userName")
    .get(controllers.getUserByUsername)

router
    .route("/user/:id")
        .get(controllers.getUser)
        .put(controllers.updateUser)
        .delete(controllers.deleteUser);


//nutritionist table
router
    .route("/nutritionist")
        .get(controllers.getAllNutritionists)
        .post(controllers.createNutritionist);


router
    .route("/nutritionist/:id")
        .get(controllers.getNutritionist)
        .put(controllers.updateNutritionist)
        .delete(controllers.deleteNutritionist);

//week table
router
    .route("/week")
        .get(controllers.getAllWeeks)
        .post(controllers.createWeek);


router
    .route("/week/:id")
        .get(controllers.getWeek)
        .put(controllers.updateWeek)
        .delete(controllers.deleteWeek);

//payment table
router
    .route("/payment")
        .get(controllers.getAllPayments)
        .post(controllers.createPayment);


router
    .route("/payment/:id")
        .get(controllers.getPayment)
        .put(controllers.updatePayment)
        .delete(controllers.deletePayment);

//calorie table
router
    .route("/calorie")
        .get(controllers.getAllCalories)
        .post(controllers.createCalorie);


router
    .route("/calorie/:id")
        .get(controllers.getCalorie)
        .put(controllers.updateCalorie)
        .delete(controllers.deleteCalorie);

//user_nutritionist
router
    .route("/un")
        .get(controllers.getAllUNs)
        .post(controllers.createUN);


router
    .route("/recipe/:id")
        .get(controllers.getUN)
        .put(controllers.updateUN)
        .delete(controllers.deleteUN);

//user_recipe_nutritionist
router
    .route("/URN")
        .get(controllers.getAllURNs)
        .post(controllers.createURN);


router
    .route("/URN/:id")
        .get(controllers.getURN)
        .put(controllers.updateURN)
        .delete(controllers.deleteURN);

module.exports = router;


     
const AppError = require("../utils/appError");
const conn = require("../services/db");
var bcrypt = require('bcrypt');



/*  recipe table */


// get all recipe

exports.getAllRecipes = (req, res, next) => {
    conn.query("SELECT * FROM recipe", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };
//get recipe by name
   exports.getAllRecipesByName = (req, res, next) => {

    let sql ="SELECT * FROM recipe WHERE recipe_name LIKE ?"
    let search = req.body.recipe_name
  

    conn.query(sql,['%' + search + '%'], function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

// create recipe

exports.createRecipe = (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));

        let sql = 'INSERT INTO recipe SET ?'
        let post = {
            recipe_name:req.body.recipe_name,
            recipe_description :req.body.recipe_description,
            recipe_ingerdients: req.body.recipe_ingerdients,
            recipe_kitchen: req.body.recipe_kitchen,
            recipe_calorieperserve: req.body.recipe_calorieperserve,
            recipe_photo:req.body.recipe_photo
        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "recipe created!",
                });
     
   
            })
    };

     //update recipe

   exports.updateRecipe = (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No recipe id found", 404));
    }
    let sql = 'UPDATE recipe SET ? WHERE recipe_id=?'
    let put = {
        recipe_name:req.body.recipe_name,
        recipe_description :req.body.recipe_description,
        recipe_ingerdients: req.body.recipe_ingerdients,
        recipe_kitchen: req.body.recipe_kitchen,
        recipe_calorieperserve: req.body.recipe_calorieperserve,
        recipe_photo:req.body.recipe_photo
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "recipe updated!",
            });
 

        })
   };

//  get recipe

 exports.getRecipe = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No recipe id found", 404));
    }
    conn.query(
      "SELECT * FROM recipe WHERE recipe_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

// delete recipe

exports.deleteRecipe = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No recipe id found", 404));
 }
 conn.query(
   "DELETE FROM recipe WHERE recipe_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "recipe deleted!",
     });
   }
 );
}


//user table

// get all user

exports.getAllUsers = (req, res, next) => {
    conn.query("SELECT * FROM user", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

// create User
					
									
exports.createUser = async (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));



 const salt = await bcrypt.genSalt(10);
 // now we set user password to hashed password
 const pass_shasum = await bcrypt.hash(req.body.user_password, salt);


        let sql = 'INSERT INTO User SET ?'
        let post = {
            user_firstname: req.body.user_firstname,
            user_lastname: req.body.user_lastname,
            user_username: req.body.user_username,
            user_email: req.body.user_email,
            user_password: pass_shasum,
            user_age:req.body.user_age,
            user_gender: req.body.user_gender,
            user_height:req.body.user_height,
            user_weight:req.body.user_weight,
            user_targetweight:req.body.user_targetweight,
            user_issubscribed:req.body.user_issubscribed,
            user_allergy:req.body.user_allergy,
            user_medicalcondition:req.body.user_medicalcondition,
            isadmin:req.body.isadmin
        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "User created!",
                });
     
   
            })
    };
    // const validPassword = await bcrypt.compare(body.password, user.password);
     //update User

   exports.updateUser = (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No  user id found", 404));
    }
    let sql = 'UPDATE user SET ? WHERE user_id=?'
    let put = {
        user_firstname: req.body.user_firstname,
        user_lastname: req.body.user_lastname,
        user_username: req.body.user_username,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_age:req.body.user_age,
        user_gender: req.body.user_gender,
        user_height:req.body.user_height,
        user_weight:req.body.user_weight,
        user_targetweight:req.body.user_targetweight,
        user_issubscribed:req.body.user_issubscribed,
        user_allergy:req.body.user_allergy,
        user_medicalcondition:req.body.user_medicalcondition,
        isadmin:req.body.isadmin
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "User updated!",
            });
 

        })
   };

//  get User

 exports.getUser = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No User id found", 404));
    }
    conn.query(
      "SELECT * FROM User WHERE user_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };
//get user by name
exports.getUserByUsername = (req, res, next) => {

  let sql ="SELECT * FROM user WHERE user_username=?"
  let search = req.body.user_username


  conn.query(sql,[search], function (err, data, fields) {
    if(err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
 };
// delete User

exports.deleteUser = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No User id found", 404));
 }
 conn.query(
   "DELETE FROM user WHERE user_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "User deleted!",
     });
   }
 );
}








//nutritionist table

// get all nutritionist

exports.getAllNutritionists = (req, res, next) => {
    conn.query("SELECT * FROM nutritionist", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

// create nutritionist

exports.createNutritionist = (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));
 			
 			
        let sql = 'INSERT INTO nutritionist SET ?'
        let post = {
            nutritionist_firstname:req.body.nutritionist_firstname,
            nutritionist_lastname :req.body.nutritionist_lastname,
            nutritionist_description: req.body.nutritionist_description,
            nutritionist_degree: req.body.nutritionist_degree,
            nutritionist_username: req.body.nutritionist_username,
            nutritionist_email:req.body.nutritionist_email,
            nutritionist_password:req.body.nutritionist_password
        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "nutritionist created!",
                });
     
   
            })
    };

     //update nutritionist

   exports.updateNutritionist= (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No nutritionist id found", 404));
    }
    let sql = 'UPDATE nutritionist SET ? WHERE nutritionist_id=?'
    let put = {
        nutritionist_firstname:req.body.nutritionist_firstname,
        nutritionist_lastname :req.body.nutritionist_lastname,
        nutritionist_description: req.body.nutritionist_description,
        nutritionist_degree: req.body.nutritionist_degree,
        nutritionist_username: req.body.nutritionist_username,
        nutritionist_email:req.body.nutritionist_email,
        nutritionist_password:req.body.nutritionist_password
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "nutritionist updated!",
            });
 

        })
   };

//  get nutritionist

 exports.getNutritionist = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No nutritionist id found", 404));
    }
    conn.query(
      "SELECT * FROM nutritionist WHERE nutritionist_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

// delete nutritionist

exports.deleteNutritionist = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No nutritionist id found", 404));
 }
 conn.query(
   "DELETE FROM nutritionist WHERE nutritionist_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "nutritionist deleted!",
     });
   }
 );
}

//week table

// get all Week

exports.getAllWeeks = (req, res, next) => {
    conn.query("SELECT * FROM week", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

// create Week

exports.createWeek = (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));
 			

        let sql = 'INSERT INTO week SET ?'
        let post = {
            week_start :req.body.week_start,
            week_end: req.body.week_end

        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "week created!",
                });
     
   
            })
    };

     //update week

   exports.updateWeek = (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No week id found", 404));
    }
    let sql = 'UPDATE week SET ? WHERE week_id=?'
    let put = {
        week_start :req.body.week_start,
        week_end: req.body.week_end
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "week updated!",
            });
 

        })
   };

//  get week

 exports.getWeek = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No week id found", 404));
    }
    conn.query(
      "SELECT * FROM week WHERE week_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };
 
// delete Week

exports.deleteWeek = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No week id found", 404));
 }
 conn.query(
   "DELETE FROM week WHERE week_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "week deleted!",
     });
   }
 );
}

//payment table

// get all payment

exports.getAllPayments = (req, res, next) => {
    conn.query("SELECT * FROM payment", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
     
    });
   };

// create payment

exports.createPayment = (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));
						
        let sql = 'INSERT INTO payment SET ?'
        let post = {
            payment_cardholdername:req.body.payment_cardholdername,
            payment_number :req.body.payment_number,
            payment_date: req.body.payment_date,
            payment_cvv: req.body.payment_cvv,
            payment_user_id: req.body.payment_user_id           
        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "payment created!",
                });
     
   
            })
    };

     //update payment

   exports.updatePayment = (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No payment id found", 404));
    }
    let sql = 'UPDATE payment SET ? WHERE payment_id=?'
    let put = {
        payment_cardholdername:req.body.payment_cardholdername,
            payment_number :req.body.payment_number,
            payment_date: req.body.payment_date,
            payment_cvv: req.body.payment_cvv,
            payment_user_id: req.body.payment_user_id    
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "payment updated!",
            });
 

        })
   };

//  get payment

 exports.getPayment = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No payment id found", 404));
    }
    conn.query(
      "SELECT * FROM payment WHERE payment_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

// delete payment

exports.deletePayment = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No payment id found", 404));
 }
 conn.query(
   "DELETE FROM payment WHERE payment_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "payment deleted!",
     });
   }
 );
}

//calorie table

// get all calorie

exports.getAllCalories = (req, res, next) => {
    conn.query("SELECT * FROM calorie", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

// create calorie

exports.createCalorie = (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));
 		
        let sql = 'INSERT INTO calorie SET ?'
        let post = {
            calorie_user_id:req.body.calorie_user_id,
            calorie_consumedcalorie :req.body.calorie_consumedcalorie,
            calorie_day: req.body.calorie_day
           
        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "calorie created!",
                });
     
   
            })
    };

     //update calorie

   exports.updateCalorie = (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No calorie id found", 404));
    }
    let sql = 'UPDATE calorie SET ? WHERE calorie_id=?'
    let put = {
        calorie_user_id:req.body.calorie_user_id,
        calorie_consumedcalorie :req.body.calorie_consumedcalorie,
        calorie_day: req.body.calorie_day
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "calorie updated!",
            });
 

        })
   };

//  get calorie

 exports.getCalorie = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No calorie id found", 404));
    }
    conn.query(
      "SELECT * FROM calorie WHERE calorie_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

// delete calorie

exports.deleteCalorie = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No calorie id found", 404));
 }
 conn.query(
   "DELETE FROM calorie WHERE calorie_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "calorie deleted!",
     });
   }
 );
}

//user_nutritionist

// get all user_nutritionist

exports.getAllUNs = (req, res, next) => {
    conn.query("SELECT * FROM user_nutritionist", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

// create user_nutritionist

exports.createUN = (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));
 		

        let sql = 'INSERT INTO user_nutritionist SET ?'
        let post = {
            un_user_id:req.body.un_user_id,
            un_nutrionist_id :req.body.un_nutrionist_id          
        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "user_nutritionist created!",
                });
     
   
            })
    };

     //update user_nutritionist

   exports.updateUN = (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No user_nutritionist id found", 404));
    }
    let sql = 'UPDATE user_nutritionist SET ? WHERE un_id=?'
    let put = {
        un_user_id:req.body.un_user_id,
        un_nutrionist_id :req.body.un_nutrionist_id  
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "user_nutritionist updated!",
            });
 

        })
   };

//  get user_nutritionist

 exports.getUN = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No user_nutritionist id found", 404));
    }
    conn.query(
      "SELECT * FROM user_nutritionist WHERE un_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

// delete user_nutritionist

exports.deleteUN = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No user_nutritionist id found", 404));
 }
 conn.query(
   "DELETE FROM user_nutritionist WHERE un_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "user_nutritionist deleted!",
     });
   }
 );
}

//user_recipe_nutritionist

// get all user_recipe_nutritionist

exports.getAllURNs = (req, res, next) => {
    conn.query("SELECT * FROM user_recipe_nutritionist", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

// create user_recipe_nutritionist

exports.createURN = (req, res1, next) => {
 if (!req.body) return next(new AppError("No form data found", 404));

 				


        let sql = 'INSERT INTO user_recipe_nutritionist SET ?'
        let post = {
            urn_nutrionist_id:req.body.urn_nutrionist_id,
            urn_user_id :req.body.urn_user_id,
            urn_recipe_id: req.body.urn_recipe_id,
            urn_week_id: req.body.urn_week_id
        }
        conn.query(sql, post, (err, res) => {
            if (err) return next(new AppError(err, 500));

            res1.status(201).json({
                status: "success",
                message: "user_recipe_nutritionist created!",
                });
     
   
            })
    };

     //update user_recipe_nutritionist

   exports.updateURN = (req, res1, next) => {
    if (!req.params.id) {
      return next(new AppError("No user_recipe_nutritionist id found", 404));
    }
    let sql = 'UPDATE user_recipe_nutritionist SET ? WHERE urn_id=?'
    let put = {
        urn_nutrionist_id:req.body.urn_nutrionist_id,
        urn_user_id :req.body.urn_user_id,
        urn_recipe_id: req.body.urn_recipe_id,
        urn_week_id: req.body.urn_week_id
    }

    conn.query(sql, [put,req.params.id], (err, res) => {
        if (err) return next(new AppError(err, 500));

        res1.status(201).json({
            status: "success",
            message: "user_recipe_nutritionist updated!",
            });
 

        })
   };

//  get user_recipe_nutritionist

 exports.getURN = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No user_recipe_nutritionist id found", 404));
    }
    conn.query(
      "SELECT * FROM user_recipe_nutritionist WHERE urn_id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

// delete user_recipe_nutritionist

exports.deleteURN = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No user_recipe_nutritionist id found", 404));
 }
 conn.query(
   "DELETE FROM user_recipe_nutritionist WHERE urn_id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "user_recipe_nutritionist deleted!",
     });
   }
 );
}

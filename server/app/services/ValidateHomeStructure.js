const Joi = require("joi");

const homeStructureSchema = Joi.object({
  name: Joi.string().min(3).max(55).required(),
  lastname: Joi.string()
    .pattern(/^[a-zA-ZÀ-ÿ\s']+$/)
    .min(2)
    .max(55)
    .required(),
  firstname: Joi.string()
    .pattern(/^[a-zA-ZÀ-ÿ\s']+$/)
    .min(2)
    .max(55)
    .required(),
  phoneNumber: Joi.string().pattern(/[0-9]/).min(10).max(10).required(),
  location: Joi.string().min(3).max(255).required(),
  postalCode: Joi.string().min(5).max(5).required(),
  mail: Joi.string().email().required(),
  password: Joi.string().min(12).required(),
  capacity: Joi.number().min(1).required(),
  isProfessional: Joi.boolean().required(),
  cat: Joi.boolean().required(),
  dog: Joi.boolean().required(),
  price: Joi.number().required(),
  description: Joi.string().min(0).max(800),
});

const validateHomeStructure = (req, res, next) => {
  const { error } = homeStructureSchema.validate(req.body, {
    abortEarly: true,
  });

  if (!error === true) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

module.exports = validateHomeStructure;

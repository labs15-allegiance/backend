const Joi = require("@hapi/joi");

const userSchema = Joi.object().keys({
  username: Joi.string().alphanum(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  location: Joi.string()
    .alphanum()
    .required(),
  image: Joi.string().allow(null),
  banner_image: Joi.string().allow(null),
  bio: Joi.string().allow(null)
});

const groupSchema = Joi.object().keys({
  group_name: Joi.string().required(),
  privacy_setting: Joi.string()
    .required()
    .valid("public", "private", "hidden"),
  location: Joi.string()
    .alphanum()
    .required(),
  creator_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  image: Joi.string().allow(null)
});

const allegianceSchema = Joi.object().keys({
  allegiance_name: Joi.string().required(),
  image: Joi.string().allow(null),
  banner_image: Joi.string().allow(null),
  sport: Joi.string().allow(null)
});

const postSchema = Joi.object().keys({
  group_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  user_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  post_content: Joi.string().required()
});

const replySchema = Joi.object().keys({
  post_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  user_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  reply_content: Joi.string().required()
});

module.exports = {
  userSchema,
  groupSchema,
  allegianceSchema,
  postSchema,
  replySchema
};

const Joi = require("@hapi/joi");

const userSchema = Joi.object().keys({
  username: Joi.string().alphanum(),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  first_name: Joi.string()
    .alphanum()
    .allow(null),
  last_name: Joi.string()
    .alphanum()
    .allow(null),
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

const groupAllegianceSchema = Joi.object().keys({
  group_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  allegiance_id: Joi.number()
    .integer()
    .min(1)
    .required()
});

const groupUserSchema = Joi.object().keys({
  user_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  // Would like to add valid options below once we know what they are
  user_type: Joi.string().required(),
  group_id: Joi.number()
    .integer()
    .min(1)
    .required()
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

const postLikeSchema = Joi.object().keys({
  user_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  post_id: Joi.number()
    .integer()
    .min(1)
    .required()
});

const postTagSchema = Joi.object().keys({
  post_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  tagged_user_id: Joi.number()
    .integer()
    .min(1)
    .required()
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

const replyLikeSchema = Joi.object().keys({
  user_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  reply_id: Joi.number()
    .integer()
    .min(1)
    .required()
});

const replyTagSchema = Joi.object().keys({
  reply_id: Joi.number()
    .integer()
    .min(1)
    .required(),
  tagged_user_id: Joi.number()
    .integer()
    .min(1)
    .required()
});

module.exports = {
  userSchema,
  groupSchema,
  allegianceSchema,
  groupAllegianceSchema,
  groupUserSchema,
  postSchema,
  postLikeSchema,
  postTagSchema,
  replySchema,
  replyLikeSchema,
  replyTagSchema
};

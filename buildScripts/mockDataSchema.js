require('module');

const schema = {
    "type": "object",
    "properties": {
      "users": {
        "type": "array",
        "minItems": 50,
        "maxItems": 100,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "unique": true,
              "minimum": 1
            },
            "firstName": {
              "type": "string",
              "faker": "name.firstName"
            },
            "lastName": {
              "type": "string",
              "faker": "name.lastName"
            },
            "email": {
              "type": "string",
              "faker": "internet.email"
            }
          },
          "required": ["id", "firstName", "lastName", "email"]
        }
      }
    },
    "required": ["users"]
  };

  module.exports = schema;
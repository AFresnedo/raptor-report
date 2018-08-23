'use strict';
var bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Email must be a valid format.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 16],
          msg: 'Password must be between 8 and 16 characters long.'
        }
      }
    },
    dob: DataTypes.DATE,
    admin: DataTypes.BOOLEAN,
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: 'Not a valid img link.'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(pendingUser) {
        if (pendingUser && pendingUser.password) {
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash;
        }
      }
    }
  });
  user.associate = function(models) {
    // associations can be defined here
  };

  // helpers go here, after ^ stuff and before return
  user.prototype.isValidPassword = function(typedPassword) {
    return bcrypt.compareSync(typedPassword, this.password)
  }

  return user;
};

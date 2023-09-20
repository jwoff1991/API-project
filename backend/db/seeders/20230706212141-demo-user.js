'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        firstName: 'John',
        lastName: 'Academy',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Sam',
        lastName: 'Academy',
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'alice.smith@example.com',
        username: 'alice_smith',
        hashedPassword: bcrypt.hashSync('password1', 10)
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bob.johnson@example.com',
        username: 'bob_johnson',
        hashedPassword: bcrypt.hashSync('password2', 10)
      },
      {
        firstName: 'Charlie',
        lastName: 'Brown',
        email: 'charlie.brown@example.com',
        username: 'charlie_brown',
        hashedPassword: bcrypt.hashSync('password3', 10)
      },
      {
        firstName: 'David',
        lastName: 'Williams',
        email: 'david.williams@example.com',
        username: 'david_williams',
        hashedPassword: bcrypt.hashSync('password4', 10)
      },
      {
        firstName: 'Eva',
        lastName: 'Davis',
        email: 'eva.davis@example.com',
        username: 'eva_davis',
        hashedPassword: bcrypt.hashSync('password5', 10)
      },
      {
        firstName: 'Frank',
        lastName: 'Taylor',
        email: 'frank.taylor@example.com',
        username: 'frank_taylor',
        hashedPassword: bcrypt.hashSync('password6', 10)
      },
      {
        firstName: 'Grace',
        lastName: 'Miller',
        email: 'grace.miller@example.com',
        username: 'grace_miller',
        hashedPassword: bcrypt.hashSync('password7', 10)
      },
      {
        firstName: 'Henry',
        lastName: 'Brown',
        email: 'henry.brown@example.com',
        username: 'henry_brown',
        hashedPassword: bcrypt.hashSync('password8', 10)
      },
      {
        firstName: 'Isabella',
        lastName: 'Smith',
        email: 'isabella.smith@example.com',
        username: 'isabella_smith',
        hashedPassword: bcrypt.hashSync('password9', 10)
      },
      {
        firstName: 'Jack',
        lastName: 'Johnson',
        email: 'jack.johnson@example.com',
        username: 'jack_johnson',
        hashedPassword: bcrypt.hashSync('password10', 10)
      },
      {
        firstName: 'Katherine',
        lastName: 'Williams',
        email: 'katherine.williams@example.com',
        username: 'katherine_williams',
        hashedPassword: bcrypt.hashSync('password11', 10)
      },
      {
        firstName: 'Liam',
        lastName: 'Davis',
        email: 'liam.davis@example.com',
        username: 'liam_davis',
        hashedPassword: bcrypt.hashSync('password12', 10)
      },
      {
        firstName: 'Mia',
        lastName: 'Taylor',
        email: 'mia.taylor@example.com',
        username: 'mia_taylor',
        hashedPassword: bcrypt.hashSync('password13', 10)
      },
      {
        firstName: 'Nathan',
        lastName: 'Miller',
        email: 'nathan.miller@example.com',
        username: 'nathan_miller',
        hashedPassword: bcrypt.hashSync('password14', 10)
      },
      {
        firstName: 'Olivia',
        lastName: 'Brown',
        email: 'olivia.brown@example.com',
        username: 'olivia_brown',
        hashedPassword: bcrypt.hashSync('password15', 10)
      },
      {
        firstName: 'Patrick',
        lastName: 'Smith',
        email: 'patrick.smith@example.com',
        username: 'patrick_smith',
        hashedPassword: bcrypt.hashSync('password16', 10)
      },
      {
        firstName: 'Quinn',
        lastName: 'Johnson',
        email: 'quinn.johnson@example.com',
        username: 'quinn_johnson',
        hashedPassword: bcrypt.hashSync('password17', 10)
      },
      {
        firstName: 'Rachel',
        lastName: 'Williams',
        email: 'rachel.williams@example.com',
        username: 'rachel_williams',
        hashedPassword: bcrypt.hashSync('password18', 10)
      },
      {
        firstName: 'Samuel',
        lastName: 'Davis',
        email: 'samuel.davis@example.com',
        username: 'samuel_davis',
        hashedPassword: bcrypt.hashSync('password19', 10)
      },
      {
        firstName: 'Taylor',
        lastName: 'Taylor',
        email: 'taylor.taylor@example.com',
        username: 'taylor_taylor',
        hashedPassword: bcrypt.hashSync('password20', 10)
      },
      {
        firstName: 'Ursula',
        lastName: 'Miller',
        email: 'ursula.miller@example.com',
        username: 'ursula_miller',
        hashedPassword: bcrypt.hashSync('password21', 10)
      },
      {
        firstName: 'Vincent',
        lastName: 'Brown',
        email: 'vincent.brown@example.com',
        username: 'vincent_brown',
        hashedPassword: bcrypt.hashSync('password22', 10)
      },
      {
        firstName: 'William',
        lastName: 'Smith',
        email: 'william.smith@example.com',
        username: 'william_smith',
        hashedPassword: bcrypt.hashSync('password23', 10)
      },
      {
        firstName: 'Xena',
        lastName: 'Johnson',
        email: 'xena.johnson@example.com',
        username: 'xena_johnson',
        hashedPassword: bcrypt.hashSync('password24', 10)
      },
      {
        firstName: 'Yvonne',
        lastName: 'Williams',
        email: 'yvonne.williams@example.com',
        username: 'yvonne_williams',
        hashedPassword: bcrypt.hashSync('password25', 10)
      },
      {
        firstName: 'Zachary',
        lastName: 'Davis',
        email: 'zachary.davis@example.com',
        username: 'zachary_davis',
        hashedPassword: bcrypt.hashSync('password26', 10)
      },
      {
        firstName: 'Aaron',
        lastName: 'Taylor',
        email: 'aaron.taylor@example.com',
        username: 'aaron_taylor',
        hashedPassword: bcrypt.hashSync('password27', 10)
      },
      {
        firstName: 'Bella',
        lastName: 'Miller',
        email: 'bella.miller@example.com',
        username: 'bella_miller',
        hashedPassword: bcrypt.hashSync('password28', 10)
      },
      {
        firstName: 'Chris',
        lastName: 'Brown',
        email: 'chris.brown@example.com',
        username: 'chris_brown',
        hashedPassword: bcrypt.hashSync('password29', 10)
      },
      {
        firstName: 'Daniel',
        lastName: 'Smith',
        email: 'daniel.smith@example.com',
        username: 'daniel_smith',
        hashedPassword: bcrypt.hashSync('password30', 10)
      },
      {
        firstName: 'Emily',
        lastName: 'Johnson',
        email: 'emily.johnson@example.com',
        username: 'emily_johnson',
        hashedPassword: bcrypt.hashSync('password31', 10)
      },
      {
        firstName: 'Fiona',
        lastName: 'Williams',
        email: 'fiona.williams@example.com',
        username: 'fiona_williams',
        hashedPassword: bcrypt.hashSync('password32', 10)
      },
      {
        firstName: 'George',
        lastName: 'Davis',
        email: 'george.davis@example.com',
        username: 'george_davis',
        hashedPassword: bcrypt.hashSync('password33', 10)
      },
      {
        firstName: 'Hannah',
        lastName: 'Taylor',
        email: 'hannah.taylor@example.com',
        username: 'hannah_taylor',
        hashedPassword: bcrypt.hashSync('password34', 10)
      },
      {
        firstName: 'Ian',
        lastName: 'Miller',
        email: 'ian.miller@example.com',
        username: 'ian_miller',
        hashedPassword: bcrypt.hashSync('password35', 10)
      },
      {
        firstName: 'Jacob',
        lastName: 'Brown',
        email: 'jacob.brown@example.com',
        username: 'jacob_brown',
        hashedPassword: bcrypt.hashSync('password36', 10)
      },
      {
        firstName: 'Kylie',
        lastName: 'Smith',
        email: 'kylie.smith@example.com',
        username: 'kylie_smith',
        hashedPassword: bcrypt.hashSync('password37', 10)
      },
      {
        firstName: 'Landon',
        lastName: 'Johnson',
        email: 'landon.johnson@example.com',
        username: 'landon_johnson',
        hashedPassword: bcrypt.hashSync('password38', 10)
      },
      {
        firstName: 'Megan',
        lastName: 'Williams',
        email: 'megan.williams@example.com',
        username: 'megan_williams',
        hashedPassword: bcrypt.hashSync('password39', 10)
      },
      {
        firstName: 'Nathan',
        lastName: 'Davis',
        email: 'nathan.davis@example.com',
        username: 'nathan_davis',
        hashedPassword: bcrypt.hashSync('password40', 10)
      },
      {
        firstName: 'Olivia',
        lastName: 'Taylor',
        email: 'olivia.taylor@example.com',
        username: 'olivia_taylor',
        hashedPassword: bcrypt.hashSync('password41', 10)
      },
      {
        firstName: 'Peter',
        lastName: 'Miller',
        email: 'peter.miller@example.com',
        username: 'peter_miller',
        hashedPassword: bcrypt.hashSync('password42', 10)
      },
      {
        firstName: 'Quincy',
        lastName: 'Brown',
        email: 'quincy.brown@example.com',
        username: 'quincy_brown',
        hashedPassword: bcrypt.hashSync('password43', 10)
      },
      {
        firstName: 'Rachel',
        lastName: 'Smith',
        email: 'rachel.smith@example.com',
        username: 'rachel_smith',
        hashedPassword: bcrypt.hashSync('password44', 10)
      },
      {
        firstName: 'Samuel',
        lastName: 'Johnson',
        email: 'samuel.johnson@example.com',
        username: 'samuel_johnson',
        hashedPassword: bcrypt.hashSync('password45', 10)
      },
      {
        firstName: 'Thomas',
        lastName: 'Williams',
        email: 'thomas.williams@example.com',
        username: 'thomas_williams',
        hashedPassword: bcrypt.hashSync('password46', 10)
      },
      {
        firstName: 'Ursula',
        lastName: 'Davis',
        email: 'ursula.davis@example.com',
        username: 'ursula_davis',
        hashedPassword: bcrypt.hashSync('password47', 10)
      },
      {
        firstName: 'Victor',
        lastName: 'Taylor',
        email: 'victor.taylor@example.com',
        username: 'victor_taylor',
        hashedPassword: bcrypt.hashSync('password48', 10)
      },
      {
        firstName: 'William',
        lastName: 'Miller',
        email: 'william.miller@example.com',
        username: 'william_miller',
        hashedPassword: bcrypt.hashSync('password49', 10)
      },
      {
        firstName: 'Xander',
        lastName: 'Brown',
        email: 'xander.brown@example.com',
        username: 'xander_brown',
        hashedPassword: bcrypt.hashSync('password50', 10)
      },
      {
        firstName: 'Franco',
        lastName: 'Academy',
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'John',
        lastName: 'Academy',
        email: 'user7@user.io',
        username: 'FakeUser7',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        firstName: 'Artiendo',
        lastName: 'Academy',
        email: 'user100@user.io',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password10')
      },
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@mysite.com',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('Demo1234')
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};

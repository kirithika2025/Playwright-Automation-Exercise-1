let userCounter = 0;

function createUniqueUser() {
  
  return {
    name: `testkmj16${userCounter}`,
    email: `testuserkmj16${userCounter}@example.com`,
    passwordVal: 'Password123'
  };
}

function loginUserDetails() {
  return {
    name: 'testkmj61',
    email: 'testkmj61@example.com',
    passwordVal: 'Password123'
  };
}

const user = createUniqueUser();
const loginUser = loginUserDetails();

const EXPECTED_TEXTS = {
  HOME_TITLE: " Home",
  PRODUCTS_TITLE: "All Products",
  CATEGORY: "Category",
};

module.exports = { createUniqueUser, user, loginUser, EXPECTED_TEXTS };

export { createUniqueUser, user, loginUser, EXPECTED_TEXTS };
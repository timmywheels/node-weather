var getUser = (id, callback) => {
    var user = {
      id: id,
      name: 'Timothy'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(91, (userObject)=> {
    console.log(userObject);
});

// Callback Functions
// A callback function is a function that is passed as an argument,
// and is executed at some point withing the higher-order function
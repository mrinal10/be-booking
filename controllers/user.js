exports.userlogin = (req, res, next) => {

  const ads ={status: 'success'};
  const username = req.body.username;
  const password = req.body.password;
  console.log(username+"::"+password);
  res.send(ads);
};

exports.userlogout = (req, res, next) => {

  const ads ={status: 'logged out'};
  res.send(ads);
};
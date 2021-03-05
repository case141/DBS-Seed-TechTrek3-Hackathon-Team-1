const axios = require('axios');

exports.login = (req, res) => {
  const data = req.body;
  const config = {
    headers: {
      'x-api-key': process.env.TECHTREK_API_KEY,
    },
  };
  axios
    .post(
      'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
      data,
      config
    )
    .then(async (response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

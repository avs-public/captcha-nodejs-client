/*
    Voice CAPTCHA Node.js client library
    Copyright (C) 2017, Agile Voice Services, Inc.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const assert = require('assert');

var avsCaptchaClientFactory = require('./index.js');

var config = {"apiKey": "8ZorddayPS2A5iKK9o3q3M6xr2YffGM8e9RPDmr7"}; 
var client = avsCaptchaClientFactory.newClient(config);

var params = {"cc": 4};

client.getCaptcha(params)
    .then(function (result) {
	 assert(typeof result.url !== 'undefined' && result.url);
         console.log("get captcha result = " + JSON.stringify(result));
    })
    .catch(function (err) {
	 console.log(err);
    });


var body = {"url": "https://s3.amazonaws.com/avs-captchas/1/-6oGgIEZLn2QSzON3uJLhFT-K_o.mp3", "answer": "34"};
client.validateResponse(body)
   .then(function (result) {
	assert(typeof result !== 'undefined' && result);
	assert.equal(result.answerCorrect, true);
        console.log("validate captcha result = " + JSON.stringify(result));
   })
    .catch(function (err) {
	console.log(err);
    });

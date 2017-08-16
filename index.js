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

var request = require('request-promise');

const INVOKE_URL = "https://captcha.avs.cloud";

/*
 * Default configuration values.
 */
const DEFAULT_API_KEY = "8ZorddayPS2A5iKK9o3q3M6xr2YffGM8e9RPDmr7";
const DEFAULT_CONFIG_ID = 1;

var avsCaptchaClientFactory = {};
avsCaptchaClientFactory.newClient = function (config) {
    var client = {};
    if(config === undefined) {
	config = {
	    apiKey: DEFAULT_API_KEY
	};
    }
    if(config.apiKey === undefined) {
	config.apiKey = DEFAULT_API_KEY;
    }

    client.getCaptcha = function(params) {
      if(params === undefined) {
	  params = {
	      cc: DEFAULT_CONFIG_ID
	  };
      }
      if(params.cc === undefined) {
	  params.cc = DEFAULT_CONFIG_ID;
      }
      var pathComponent = "/captcha";
      var queryParams = "?cc=" + params.cc;
      return request({
	 "method":"GET", 
	 "uri": INVOKE_URL + pathComponent + queryParams,
	 "json": true,
	 "headers": {
	     "content-type": "application/json",
	     "x-api-key": config.apiKey
	 }
       });
    }

    client.validateResponse = function(body) {
       var pathComponent = "/captcha/validate";
       return request({
	  "method": "POST",
          "uri": INVOKE_URL + pathComponent,
          "json": true,
          "headers": {
	      "content-type": "application/json",
	      "x-api-key": config.apiKey
	  },
          "body": body
	});
    }

    return client;
}

module.exports.newClient = avsCaptchaClientFactory.newClient;

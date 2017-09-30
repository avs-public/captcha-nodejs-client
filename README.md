# captcha-nodejs-client
Voice CAPTCHA node.js client

This is a node.js client for the voice CAPTCHA service.
See the "test.js" file for the sample integrations.

The integration requires an API key. You can use a default key = "8ZorddayPS2A5iKK9o3q3M6xr2YffGM8e9RPDmr7" for testing.
For production usage, we ask that you obtain a dedicated key by going to https://www.avs.cloud/sound-captcha.

The API offers multiple CAPTCHA configurations and will add additional ones in the future.
We currently offer a CAPTCHA based on a number between 2 and 4 digits long.
You have a choice of whether to use CAPTCHA with or without background noise.
CAPTCHA clients can choose the CAPTCHA type in each service call.


------------------------------------------------------------------------
Type   | Length |     Characteritic             | API cc parameter value
------------------------------------------------------------------------
Number |    2   |   Different Voices            |      1

Number |    2   |   Different Voices / Noises   |      2

Number |    3   |   Different Voices		|      3

Number |    3   |   Different Voices / Noises  	|      4

Number |    4   |   Different Voices            |      5

Number |    4   |   Different Voices / Noises   |      6
------------------------------------------------------------------------


For any questions, custom CAPTCHA configurations, or integration support, please contact us by going to https://www.avs.cloud/sound-captcha.

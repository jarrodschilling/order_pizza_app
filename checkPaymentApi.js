const response1 = await fetch("https://order.dominos.com/power/paymentGatewayService/tokenizeTemplate?storeID=9115&cardType=VISA&retryCount=0", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=utf-8",
    "dpz-language": "en",
    "dpz-market": "UNITED_STATES",
    "market": "UNITED_STATES",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-dpz-d": "f4373b4e-3187-473d-bd9c-22c267a28bce"
  },
  "referrer": "https://order.dominos.com/assets/build/xdomain/proxy.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

const resData = await response1.json()
// console.log(resData.Request.Headers.Authorization)

const bearerToken = await resData.Request.Headers.Authorization
console.log(bearerToken)



const response2 = await fetch("https://directpost-acquirer-us.aciondemand.com/dp-rest/1.0/acquire", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "authorization": `${bearerToken}`,
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "https://www.dominos.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"accountNumber\":\"4242424242424242\",\"cardExpiryDate\":\"1234\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

const resDataFinal = await response2.text()
console.log(resDataFinal)
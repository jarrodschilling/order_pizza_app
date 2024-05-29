const response = await fetch("https://order.dominos.com/power/validate-order", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "content-type": "application/json; charset=UTF-8",
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
    "body": "{\"Order\":{\"Address\":{\"Street\":\"2890 E COTTONWOOD PKWY\",\"StreetName\":\"E COTTONWOOD PKWY\",\"StreetNumber\":\"2890\",\"UnitNumber\":\"400\",\"UnitType\":\"STE\",\"City\":\"SALT LAKE CITY\",\"Region\":\"UT\",\"PostalCode\":\"84121-7293\",\"Type\":\"Business\",\"OrganizationName\":\"Atomic Fi\"},\"Coupons\":[],\"CustomerID\":\"\",\"Email\":\"\",\"Extension\":\"\",\"FirstName\":\"\",\"FutureOrderTime\":\"2024-05-24 11:30:00\",\"LastName\":\"\",\"LanguageCode\":\"en\",\"OrderChannel\":\"OLO\",\"OrderID\":\"\",\"OrderMethod\":\"Web\",\"OrderTaker\":null,\"Payments\":[],\"Phone\":\"\",\"PhonePrefix\":\"\",\"Products\":[{\"Code\":\"14THIN\",\"Qty\":1,\"ID\":1,\"isNew\":true,\"Options\":{\"X\":{\"1/1\":\"1\"},\"C\":{\"1/1\":\"1\"},\"P\":{\"1/1\":\"1\"}}}],\"ServiceMethod\":\"Delivery\",\"SourceOrganizationURI\":\"order.dominos.com\",\"StoreID\":\"9115\",\"Tags\":{},\"Version\":\"1.0\",\"NoCombine\":true,\"Partners\":{},\"HotspotsLite\":false,\"OrderInfoCollection\":[]}}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

const resData = await response.json()
console.log(resData)
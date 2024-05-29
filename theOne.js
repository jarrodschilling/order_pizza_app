// Enter Location + Pizza Order

// Location
const firstName = "BOB"
const lastName = "BARKER"
const email = "BOB@EMAIL.COM"
const phoneNum = "3861686123"
const typeHomeOrBiz = "Business"
const locationName = "Harmons Grocery"
const street = "7755 S 700 E"
const streetNum = "7755"
const streetName = "S 700 E"
const addressLine2 = ""
const city = "MIDVALE"
const zipCode = "84047"
const region = "UT"

// Order
const pizzaSize = "12"
const pizzaCrust = "THIN"
const toppingOne = ""
const toppingTwo = ""
const tip = "3.00"
const orderTime = "2024-05-30 15:30:00"

const testOrderFunc = {
  Code: '14THIN',
  Qty: 1,
  ID: 1,
  isNew: 'true',
  Options: {
    X: { '1/1': 1 },
    C: { '1/1': 1 },
    H: { '1/1': 1 },
    P: { '1/1': 1 }
  }
}

const stringOrderTest = JSON.stringify(testOrderFunc)

// Payment Info
const cardType = "VISA"
const cardNumber = "4242424242424242"
const cardNumberX = "424242XXXXXX4242"
const cardExp = "1234"
const cardCode = "123"
const cardZip = "84047"


// Get store ID
const body = `{\"query\":\"\\n  query locateStores($input: StoreLocatorInput) {\\n    locateStores(input: $input) {\\n      Address {\\n        City\\n        PostalCode\\n        Region\\n        Street\\n        StreetName\\n        StreetNumber\\n        UnitNumber\\n        UnitType\\n      }\\n      Stores {\\n        AddressDescription\\n        AllowCarryoutOrders\\n        AllowDeliveryOrders\\n        AllowDuc\\n        AllowPickupWindowOrders\\n        ContactlessCarryout\\n        ContactlessDelivery\\n        HolidaysDescription\\n        HoursDescription\\n        IsDeliveryStore\\n        IsNEONow\\n        IsOnlineCapable\\n        IsOnlineNow\\n        IsOpen\\n        IsSpanish\\n        LanguageLocationInfo\\n        LocationInfo\\n        MaxDistance\\n        MinDistance\\n        Phone\\n        ServiceHoursDescription {\\n          Carryout\\n          Delivery\\n          DriveUpCarryout\\n        }\\n        ServiceIsOpen {\\n          Carryout\\n          Delivery\\n          DriveUpCarryout\\n        }\\n        ServiceMethodEstimatedWaitMinutes {\\n          Carryout {\\n            Max\\n            Min\\n          }\\n          Delivery {\\n            Max\\n            Min\\n          }\\n        }\\n        StoreCoordinates {\\n          StoreLatitude\\n          StoreLongitude\\n        }\\n        StoreID\\n      }\\n    }\\n  }\\n\",\"variables\":{\"input\":{\"AddressLine2\":\"${addressLine2}\",\"City\":\"${city}\",\"LocationName\":\"${locationName}\",\"Region\":\"${region}\",\"ServiceType\":\"DELIVERY\",\"Street\":\"${street}\",\"PostalCode\":\"${zipCode}\"}}}`

const response1 = await fetch("https://www.dominos.com/graphql", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://www.dominos.com/en/restaurants",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": body,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

const resData = await response1.json()
// console.log(resData)

console.log(resData.data.locateStores.Stores[0].StoreID)
const storeID = await resData.data.locateStores.Stores[0].StoreID


// Get Order ID

const response2 = await fetch("https://order.dominos.com/power/validate-order", {
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
    "body": `{\"Order\":{\"Address\":{\"Street\":\"${street}\",\"StreetName\":\"${streetName}\",\"StreetNumber\":\"${streetNum}\",\"UnitNumber\":\"${addressLine2}\",\"UnitType\":\"STE\",\"City\":\"${city}\",\"Region\":\"${region}\",\"PostalCode\":\"${zipCode}\",\"Type\":\"Business\",\"OrganizationName\":\"${locationName}\"},\"Coupons\":[],\"CustomerID\":\"\",\"Email\":\"\",\"Extension\":\"\",\"FirstName\":\"\",\"FutureOrderTime\":\"${orderTime}\",\"LastName\":\"\",\"LanguageCode\":\"en\",\"OrderChannel\":\"OLO\",\"OrderID\":\"\",\"OrderMethod\":\"Web\",\"OrderTaker\":null,\"Payments\":[],\"Phone\":\"\",\"PhonePrefix\":\"\",\"Products\":[${stringOrderTest}],\"ServiceMethod\":\"Delivery\",\"SourceOrganizationURI\":\"order.dominos.com\",\"StoreID\":\"${storeID}\",\"Tags\":{},\"Version\":\"1.0\",\"NoCombine\":true,\"Partners\":{},\"HotspotsLite\":false,\"OrderInfoCollection\":[]}}`,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

const resDataOrderId = await response2.json()
console.log(resDataOrderId.Order.OrderID)
const orderId = await resDataOrderId.Order.OrderID


// Pricing
const responsePricing = await fetch("https://order.dominos.com/power/price-order", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "dpz-language": "en",
    "dpz-market": "UNITED_STATES",
    "dpz-source": "DSSPaymentPage",
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
  "body": `{\"Order\":{\"Address\":{\"Street\":\"${street}\",\"StreetName\":\"${streetName}\",\"StreetNumber\":\"${streetNum}\",\"UnitNumber\":\"${addressLine2}\",\"UnitType\":\"STE\",\"City\":\"${city}\",\"Region\":\"${city}\",\"PostalCode\":\"${zipCode}\",\"Type\":\"${typeHomeOrBiz}\",\"OrganizationName\":\"${locationName}\"},\"Coupons\":[],\"CustomerID\":\"\",\"Email\":\"\",\"Extension\":\"\",\"FirstName\":\"\",\"FutureOrderTime\":\"${orderTime}\",\"LastName\":\"\",\"LanguageCode\":\"en\",\"OrderChannel\":\"OLO\",\"OrderID\":\"${orderId}\",\"OrderMethod\":\"Web\",\"OrderTaker\":null,\"Payments\":[],\"Phone\":\"\",\"PhonePrefix\":\"\",\"Products\":[{\"Code\":\"14THIN\",\"Qty\":1,\"ID\":1,\"isNew\":true,\"ShowBestPriceMessage\":false,\"Options\":{\"X\":{\"1/1\":\"1\"},\"C\":{\"1/1\":\"1\"},\"P\":{\"1/1\":\"1\"}}}],\"ServiceMethod\":\"Delivery\",\"SourceOrganizationURI\":\"order.dominos.com\",\"StoreID\":\"${storeID}\",\"Tags\":{},\"Version\":\"1.0\",\"NoCombine\":true,\"Partners\":{},\"HotspotsLite\":false,\"OrderInfoCollection\":[],\"metaData\":{\"dtmOrder\":false,\"orderFunnel\":\"payments\"}}}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

const resDataPrices = await responsePricing.json()

console.log(resDataPrices.Order.Amounts.Payment)
const customerPayment = await resDataPrices.Order.Amounts.Payment



// Authorize Payments

const response3 = await fetch(`https://order.dominos.com/power/paymentGatewayService/tokenizeTemplate?storeID=${storeID}&cardType=${cardType}&retryCount=0`, {
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

const resDataPmt1 = await response3.json()
// console.log(resData.Request.Headers.Authorization)

const bearerToken = await resDataPmt1.Request.Headers.Authorization
console.log(bearerToken)



const response4 = await fetch("https://directpost-acquirer-us.aciondemand.com/dp-rest/1.0/acquire", {
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
  "body": `{\"accountNumber\":\"${cardNumber}\",\"cardExpiryDate\":\"${cardExp}\"}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

const resDataPmt2 = await response4.json()
console.log(resDataPmt2.TOKEN_ID)
const finalToken = await resDataPmt2.TOKEN_ID


// Process Order

const responseOrder = await fetch("https://order.dominos.com/power/place-order", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
    "authorization": `${finalToken}`,
    "cache-control": "no-cache",
    "content-type": "application/json; charset=UTF-8",
    "dpz-language": "en",
    "dpz-market": "UNITED_STATES",
    "dpz-source": "DSSPlaceOrder",
    "market": "UNITED_STATES",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-dpz-captcha": "google-recaptcha-v3-enterprise-gnolo;token=03AFcWeA6D2Dvd9B6YVPz3MIrGmcNmRaZyltlgB_Fl2DWQYZ1ROXn_yttItEatJYAXxwu2xs2gvFCklSL4g9ZhOowJybzdluTtu4UL088uqVSYL7TatMCVIa-5phjbY8_pxtH-F1LsHbqG11YYgGC1RrBQ-79fI9-3QybvZmgzyveCmz7RAP8UsGMLbErS0sSeUXjkBd2M4-iAyVPdMcGYfCF079SV3es4pEE5DcheYVK6SlHbf7mGAYDAZpRIOj_EQln8wCuAh8OdlVJHq5T3o3TsmB-vIBf-jKM5O4vWcgl7bl23R_zyOAS-8mZ05inf0BNVFOIUplD-Su8_cXq9VWGaE9Uo3F9VKbrII2DsVlfAljb7cSCOJI9XkYPt3_M3KNiJLnXtzxKXWEtJJilC4Ut1z8BPQtomplTm_uaQh_0P6Io4QM9YG78yIc-V80qigRCUwSKvysyMtw2z-AdLCQv8nwsVlaOQXoj68OVCaJS8i_9s7osvqQShawbI5hf3bfJ-alw3jnRD9ty3Wi0_0aIh6lGjlYn-FQWdJE9qYHFhe95O7_XaiAC7AtDPr83uKedh6Yv8Eru_41cMFv9T5IRWZbVr_ggcUQHMzSxvDbW4ujbQyHXMhKHKfcsVawYXqsfVJtJ6RWwWlJW94ttQ3dbsoeIOJKAN4_nx7el4rgUJj-AHryPod1TY5HtqTMQJnDYMtrrLHhdVWe5JK3rlMA20crs65W0joR54vFfYHKJsZUTQYLMyNZbX5hvbCmnqyTMNz7l2q-ipFLtTGPD0B7xeAXw7ln4BOZjUmJeDDL5ix2hGl9z73lpwB9R79tieMf8ZGn46059YyScMqbaVyPHafUDiaqn0bqvPOXFgV17fNY4bcltZGAYsJYgN5b0BXKX2D9zWOv41C7L9OPlzaikp6IsU2L4ApNp_GjXmPEPF64UWvDJW2Ax0NfknDZBiWhfN00jOZqVd5hCWP4ko7r4UG9uGe2NcYyUf-ZXiI9bOItQhMF1kcwSs2kKKIgoyeuj9zR-JYFY91uIhNlI8-QliSEdgCjTsIRyse5hQA43rVYM2MDSse27JQBfhDPHAQYtzEQsgz49zxIahVLz57eBSF3Q1DZJvxydARikXaUyCc-GrUcSe9d91FDWjrmPgib0N800QZy6Cj3_72Y-qjz9Mk8rruX4PhPlOGjTozPhVZQyLq6L88BiEbzsMeopLmOH2RqabJ0-Mf2641zIaKiE7ZIT8KqNbQmKUl85klg7KcJ837Is2tsOXIVPpv-lIqAeD3TUfDMcFe3CQ1gm6awGW3DFKRsJx8bO4jfRFKzfIUIm1cbjkJXCtYGavH4AP5OOWhYXidGhgXet1mecTgiHUHPKoyxcXgxh-TWFSRc8nrpnCrK4w9hZjZw2aO6mAGCG01Ynw12JORUJFwBfQFtUCf1FgN1cb4bMKrpwywVhQ9eaVORvVgNNKoI3R5i3jPyt7BH1fcvxQhEUSv5Mlm5nU5qbq3wio0BguMIZLGy62PNqIwyr92TwwJ8bfgK8pnDQpfz2tN2gT4N67GXOxwcSZI0FO49umtatLCHywW8XpqN0qVLEKUGgFFFh71-QReAcLhGHMKL6dQy4PrmNgzFTnOGIcGwGEg6FQ4dcCht40BSSbWEn3TbmjoFFfyY5Zwnk6nEANxfpY85pnWJe8BkZcFg7RdAUD4vTVZTsUCwPZzfJQe-3FIGQ;action=payment",
    "x-dpz-d": "f4373b4e-3187-473d-bd9c-22c267a28bce"
  },
  "referrer": "https://order.dominos.com/assets/build/xdomain/proxy.html",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `{"Order":{"Address":{"Street":"${street}","StreetName":"${streetName}","StreetNumber":"${streetNum}","UnitNumber":"${addressLine2}","UnitType":"STE","City":"${city}","Region":"${region}","PostalCode":"${region}","Type":"${typeHomeOrBiz}","OrganizationName":"${locationName}"},"Coupons":[],"CustomerID":"","Email":"${email}","Extension":"","FirstName":"${firstName}","FutureOrderTime":"${orderTime}","LastName":"${lastName}","LanguageCode":"en","OrderChannel":"OLO","OrderID":"${orderId}","OrderMethod":"Web","OrderTaker":null,"Payments":[{"Type":"CreditCard","Amount":${customerPayment},"Number":"${cardNumberX}","CardType":"${cardType}","Expiration":"${cardExp}","SecurityCode":"${cardCode}","PostalCode":"${cardZip}","ProviderID":"","PaymentMethodID":"","OTP":"","gpmPaymentType":"","isNew":true,"TipAmount":${tip},"Token":"${finalToken}","TokenType":"ACI"}],"Phone":"${phoneNum}","PhonePrefix":"","Products":[{"Code":"14THIN","Qty":1,"ID":1,"isNew":true,"ShowBestPriceMessage":false,"Options":{"X":{"1/1":"1"},"C":{"1/1":"1"},"P":{"1/1":"1"}}}],"ServiceMethod":"Delivery","SourceOrganizationURI":"order.dominos.com","StoreID":"${storeID}","Tags":{},"Version":"1.0","NoCombine":true,"Partners":{},"HotspotsLite":false,"OrderInfoCollection":[],"NewUser":true,"metaData":{"dtmOrder":false,"DPZDNT":null,"DPZ_TTP":null,"DPZ_TTCALLBACK":null,"screen_dimensions":{"height":956,"width":1470},"PiePassPickup":false,"calculateNutrition":"true","orderFunnel":"payments","OrderReadyTime":{"source":"DELTA","deltaLowerBound":37,"deltaUpperBound":42},"isDomChat":0,"ABTests":["ECOM-89656-Ctrl","ECOM-87264-Ctrl","ECOM-79102-ExpB"]}}}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

const resDataOrder = await responseOrder.json()

console.log(resDataOrder)

console.log(resDataOrder.Order.Payments)
console.log(resDataOrder.Order.StatusItems)
console.log(resDataOrder.Order.Products)
console.log(resDataOrder.Order.Products[0].Options)
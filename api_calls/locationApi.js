// Enter Location + Pizza Order

const locationName = "Atomic Fi"
const street = "2890 E COTTONWOOD PKW"
const addressLine2 = "400"
const city = "SALT LAKE CITY"
const zipCode = "84121-7293"
const region = "UT"


const body = `{\"query\":\"\\n  query locateStores($input: StoreLocatorInput) {\\n    locateStores(input: $input) {\\n      Address {\\n        City\\n        PostalCode\\n        Region\\n        Street\\n        StreetName\\n        StreetNumber\\n        UnitNumber\\n        UnitType\\n      }\\n      Stores {\\n        AddressDescription\\n        AllowCarryoutOrders\\n        AllowDeliveryOrders\\n        AllowDuc\\n        AllowPickupWindowOrders\\n        ContactlessCarryout\\n        ContactlessDelivery\\n        HolidaysDescription\\n        HoursDescription\\n        IsDeliveryStore\\n        IsNEONow\\n        IsOnlineCapable\\n        IsOnlineNow\\n        IsOpen\\n        IsSpanish\\n        LanguageLocationInfo\\n        LocationInfo\\n        MaxDistance\\n        MinDistance\\n        Phone\\n        ServiceHoursDescription {\\n          Carryout\\n          Delivery\\n          DriveUpCarryout\\n        }\\n        ServiceIsOpen {\\n          Carryout\\n          Delivery\\n          DriveUpCarryout\\n        }\\n        ServiceMethodEstimatedWaitMinutes {\\n          Carryout {\\n            Max\\n            Min\\n          }\\n          Delivery {\\n            Max\\n            Min\\n          }\\n        }\\n        StoreCoordinates {\\n          StoreLatitude\\n          StoreLongitude\\n        }\\n        StoreID\\n      }\\n    }\\n  }\\n\",\"variables\":{\"input\":{\"AddressLine2\":\"${addressLine2}\",\"City\":\"${city}\",\"LocationName\":\"${locationName}\",\"Region\":\"${region}\",\"ServiceType\":\"DELIVERY\",\"Street\":\"${street}\",\"PostalCode\":\"${zipCode}\"}}}`

const response = await fetch("https://www.dominos.com/graphql", {
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

const resData = await response.json()
// console.log(resData)

console.log(resData.data.locateStores.Stores[0].StoreID)
const storeID = await resData.data.locateStores.Stores[0].StoreID
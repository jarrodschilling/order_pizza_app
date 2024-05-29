
// add quotes to body before using
const streetAddress = "2890 E COTTONWOOD PKWY"
const finalToken = ""



export const body = `{"Order":{"Address":{"Street":"${streetAddress}","StreetName":"E COTTONWOOD PKWY","StreetNumber":"2890","UnitNumber":"400","UnitType":"STE","City":"SALT LAKE CITY","Region":"UT","PostalCode":"84121-7293","Type":"Business","OrganizationName":"Atomic Fi"},"Coupons":[],"CustomerID":"","Email":"jarrodschilling@gmail.com","Extension":"","FirstName":"JARROD","FutureOrderTime":"2024-05-24 12:30:00","LastName":"SCHILLING","LanguageCode":"en","OrderChannel":"OLO","OrderID":"wuWcV9tPmU3ujJzKKiT8","OrderMethod":"Web","OrderTaker":null,"Payments":[{"Type":"CreditCard","Amount":23.38,"Number":"424242XXXXXX4242","CardType":"VISA","Expiration":"1234","SecurityCode":"123","PostalCode":"84121","ProviderID":"","PaymentMethodID":"","OTP":"","gpmPaymentType":"","isNew":true,"TipAmount":4.68,"Token":"${finalToken}","TokenType":"ACI"}],"Phone":"9415449629","PhonePrefix":"","Products":[{"Code":"P12IPAZA","Qty":1,"ID":1,"isNew":true,"ShowBestPriceMessage":false,"Options":{"X":{"1/1":"1"},"C":{"1/1":"1"},"Cp":{"1/1":"1"},"K":{"1/1":"1"}}}],"ServiceMethod":"Delivery","SourceOrganizationURI":"order.dominos.com","StoreID":"9115","Tags":{},"Version":"1.0","NoCombine":true,"Partners":{},"HotspotsLite":false,"OrderInfoCollection":[],"NewUser":true,"metaData":{"dtmOrder":false,"DPZDNT":null,"DPZ_TTP":null,"DPZ_TTCALLBACK":null,"screen_dimensions":{"height":956,"width":1470},"PiePassPickup":false,"calculateNutrition":"true","orderFunnel":"payments","OrderReadyTime":{"source":"DELTA","deltaLowerBound":37,"deltaUpperBound":42},"isDomChat":0,"ABTests":["ECOM-89656-Ctrl","ECOM-87264-Ctrl","ECOM-79102-ExpB"]}}}`

// export const body = {
//     "Order":
//         {"Address":
//             {"Street":"1754 PROSPECT ST",
//             "StreetName":"PROSPECT ST",
//             "StreetNumber":"1754","City":"SARASOTA",
//             "Region":"FL",
//             "PostalCode":"34239-2126",
//             "Type":"House"},
//         "Coupons":[],
//         "CustomerID":"",
//         "Email":"jarrodschilling@gmail.com",
//         "Extension":"",
//         "FirstName":"JARROD",
//         "FutureOrderTime":"2024-05-23 19:15:00",
//         "LastName":"SCHILLING",
//         "LanguageCode":"en",
//         "OrderChannel":"OLO",
//         "OrderID":"yW_8Av2r4rGN11TLn7-2",
//         "OrderMethod":"Web",
//         "OrderTaker":null,
//         "Payments":[
//             {"Type":"CreditCard",
//             "Amount":22.1,
//             "Number":"424242XXXXXX4242",
//             "CardType":"VISA",
//             "Expiration":"1234",
//             "SecurityCode":"123",
//             "PostalCode":"34239",
//             "ProviderID":"",
//             "PaymentMethodID":"",
//             "OTP":"",
//             "gpmPaymentType":"",
//             "isNew":true,
//             "TipAmount":4.42,
//             "Token":"85681514-7fd4-4c98-8abb-64a11d7e40b5",
//             "TokenType":"ACI"}
//         ],
//         "Phone":"9415449629",
//         "PhonePrefix":"",
//         "Products":[
//             {"Code":"14SCREEN",
//             "Qty":1,"ID":5,
//             "isNew":true,
//             "ShowBestPriceMessage":false,
//             "Options":{
//                 "X":{"1/1":"1"},
//                 "C":{"1/1":"1"},
//                 "H":{"1/1":"1"}
//             }
//             }
//         ],
//         "ServiceMethod":"Delivery",
//         "SourceOrganizationURI":"order.dominos.com",
//         "StoreID":"5041",
//         "Tags":{},
//         "Version":"1.0",
//         "NoCombine":true,
//         "Partners":{},
//         "HotspotsLite":false,
//         "OrderInfoCollection":[],
//         "NewUser":true,
//         "metaData":{"dtmOrder":false,
//         "DPZDNT":null,
//         "DPZ_TTP":null,
//         "DPZ_TTCALLBACK":null,
//         "screen_dimensions":{"height":956,"width":1470},
//         "PiePassPickup":false,
//         "calculateNutrition":"true",
//         "orderFunnel":"payments",
//         "OrderReadyTime":{
//             "source":"DELTA",
//             "deltaLowerBound":18,
//             "deltaUpperBound":29
//         },
//         "isDomChat":0,
//         "ABTests":[
//             "ECOM-89656-Ctrl",
//             "ECOM-87264-Ctrl",
//             "ECOM-79102-ExpB"
//             ]
//         }
//     }
// }
import { body } from "./order.js";
const response = await fetch("https://order.dominos.com/power/place-order", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9",
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
  "body": `${body}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

const resData = await response.json()

console.log(resData)

const body2 = {
    "Order": {
        "Address": {
            "Street": "7334 S UNION CREEK WAY",
            "StreetName": "S UNION CREEK WAY",
            "StreetNumber": "7334",
            "UnitNumber": "3S",
            "UnitType": "APT",
            "City": "MIDVALE",
            "Region": "UT",
            "PostalCode": "84047-5908",
            "Type": "House",
            "CountyName": "SALT LAKE",
            "CountyNumber": "035"
        },
        "Coupons": [],
        "CustomerID": "",
        "Email": "jarrodschilling@gmail.com",
        "Extension": "",
        "FirstName": "JARROD",
        "FutureOrderTime": "2024-05-23 12:45:00",
        "LastName": "SCHILLING",
        "LanguageCode": "en",
        "OrderChannel": "OLO",
        "OrderID": "_Z0JRca7QLHLtbH2DoZO",
        "OrderMethod": "Web",
        "Payments": [
            {
                "Type": "CreditCard",
                "Amount": 45,
                "Number": "424242XXXXXX4242",
                "CardType": "Visa",
                "Expiration": "1234",
                "SecurityCode": "123",
                "PostalCode": "34239",
                "ProviderID": "",
                "PaymentMethodID": "",
                "OTP": "",
                "gpmPaymentType": "",
                "isNew": true,
                "TipAmount": 9
            }
        ],
        "Phone": "9415449629",
        "PhonePrefix": "",
        "ServiceMethod": "Delivery",
        "SourceOrganizationURI": "order.dominos.com",
        "StoreID": "9115",
        "Tags": {},
        "Version": "1.0",
        "NoCombine": true,
        "Partners": {},
        "HotspotsLite": false,
        "OrderInfoCollection": [],
        "NewUser": true,
        "metaData": {
            "screen_dimensions": {
                "height": 956,
                "width": 1470
            },
            "PiePassPickup": false,
            "calculateNutrition": "true",
            "orderFunnel": "payments",
            "dtmOrder": false,
            "OrderReadyTime": {
                "source": "DELTA",
                "deltaLowerBound": 18,
                "deltaUpperBound": 29
            },
            "isDomChat": 0,
            "ABTests": [
                "ECOM-89656-Ctrl",
                "ECOM-87264-Ctrl",
                "ECOM-79102-ExpB"
            ],
            "googleRecaptchaScore": "1.0"
        },
        "IP": "207.108.162.114",
        "DpzSourceHeader": "DSSPlaceOrder",
        "UserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Market": "UNITED_STATES",
        "Currency": "USD",
        "Promotions": {
            "Redeemable": [],
            "Valid": []
        },
        "Status": -1,
        "StatusItems": [
            {
                "Code": "PosFailed",
                "PulseCode": 1,
                "PulseText": "Credit Card Error"
            }
        ],
        "Amounts": {
            "Menu": 41.95,
            "Discount": 0,
            "Surcharge": 4.99,
            "DeliveryFee": 4.99,
            "Adjustment": 0,
            "Net": 41.95,
            "Tax": 3.05,
            "Tax1": 3.05,
            "Tax2": 0,
            "Bottle": 0,
            "Customer": 45,
            "Payment": 45,
            "RoundingAdjustment": 0
        },
        "BusinessDate": "2024-05-23",
        "PulseOrderGuid": "eedbf871-7420-41dd-9583-d0378c04e540",
        "PricingFlag": "0",
        "Products": [
            {
                "ID": 1,
                "Code": "14THIN",
                "Qty": 1,
                "CategoryCode": "Pizza",
                "FlavorCode": "THIN",
                "Price": 20.98,
                "Amount": 20.98,
                "Status": 0,
                "LikeProductID": 0,
                "Name": "Large (14\") Thin Pizza",
                "IsNew": true,
                "NeedsCustomization": false,
                "AutoRemove": false,
                "Fulfilled": false,
                "SideOptions": [],
                "Tags": {},
                "Options": {
                    "P": {
                        "1/1": "1.5"
                    }
                },
                "descriptions": [
                    {
                        "portionCode": "1/1",
                        "value": "Extra Pepperoni, Robust Inspired Tomato Sauce, Cheese"
                    }
                ]
            }
        ],
        "Loyalty": {
            "EligibleForPOE": true
        },
        "StoreOrderID": "2024-05-23#52",
        "PlaceOrderTime": "2024-05-23 12:30:55",
        "PlaceOrderMs": 2187,
        "OrderAcknowledgedAt": "2024-05-23 16:30:57",
        "CorrectiveAction": {
            "Action": "Fix",
            "Code": "PickAlternatePayment",
            "Detail": "CreditCardError"
        }
    },
    "Status": -1,
    "Offer": {
        "CouponList": [],
        "ProductOffer": ""
    },
    "EmailHash": null,
    "DeviceId": "f4373b4e-3187-473d-bd9c-22c267a28bce",
    "NeedsInStoreProcessing": false,
    "StatusItems": [
        {
            "Code": "Failure"
        }
    ]
}
/*
Lingokids Unlock membership	
***************************
QuantumultX:
[rewrite_local]
^https:\/\/api\.lingokids\.com\/v1\/renovate_session url script-response-body https://raw.githubusercontent.com/laofun/PadoPada-hosts/main/QuantumultX/Scripts/lingokids.js

[mitm]
hostname = api.lingokids.com
*/
var obj = JSON.parse($response.body);

obj["info"]["subscriptions"] = [
  {
    "status": "active",
    "product": "unlimited",
    "duration_unit": "months",
    "id": 805063,
    "platform": "apple",
    "duration_value": 1,
    "starts_at": 1572617692,
    "ends_at": 4099821292,
    "auto_renew_status": true,
    "plan_id": "lk.ios.s1m.t1m.p15.v1",
    "state": "active"
  }
];
obj["info"]["customer"] = true;

console.log(obj);

$done({ body: JSON.stringify(obj) });

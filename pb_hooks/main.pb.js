/// <reference path="../pb_data/types.d.ts" />
console.log("CORS HOOK LOADED");
routerUse((e) => {
  e.response.headers.set("Access-Control-Allow-Origin", "*");
  e.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS",
  );
  e.response.headers.set("Access-Control-Allow-Headers", "*");

  if (e.request.method === "OPTIONS") {
    return e.json(200, {});
  }

  return e.next();
});

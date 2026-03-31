routerUse((e) => {
  e.response.headers.set("Access-Control-Allow-Origin", "*");
  e.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  e.response.headers.set("Access-Control-Allow-Headers", "*");
  e.response.headers.set("Access-Control-Allow-Credentials", "true");

  if (e.request.method === "OPTIONS") {
    return e.string(200, "OK");
  }

  return e.next();
});

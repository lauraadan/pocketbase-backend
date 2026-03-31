routerUse((e) => {
  e.response.headers.set("Access-Control-Allow-Origin", "*");
  e.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  e.response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  if (e.request.method === "OPTIONS") {
    return e.noContent(204);
  }

  return e.next();
});

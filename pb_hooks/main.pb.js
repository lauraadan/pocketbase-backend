onBeforeServe((app) => {
  app.router.add("OPTIONS", "/*", (c) => {
    c.response.headers.set("Access-Control-Allow-Origin", "*");
    c.response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    );
    c.response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );

    return c.noContent(204);
  });

  app.router.use((e) => {
    e.response.headers.set("Access-Control-Allow-Origin", "*");
    e.response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    );
    e.response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );

    return e.next();
  });
});

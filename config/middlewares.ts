export default [
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    {
        name: "strapi::cors",
        config: {
            origin: ["https://lejla-raguz.netlify.app", "http://localhost:1337"], // Allowed domains
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            headers: ["Content-Type", "Authorization", "Origin", "Accept"],
            credentials: true,
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];

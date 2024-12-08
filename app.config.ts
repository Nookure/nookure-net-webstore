// https://nuxt.com/docs/guide/directory-structure/app-config
// See index.d.ts for the full list of available options
export default defineAppConfig({
    // Shows in the <title> tag before the name of the page
    titlePrefix: "Tienda de Nookure Network",
    // The name of your store
    storeName: "Nookure Network",
    // Require the user to login before they add items?
    auth: true,
    // Use external auth methods, e.g. CFX, Steam (Set to false for minecraft stores)
    authExternal: false,
    // The unique ID of the store
    storeId: 1512524,
    // A link to your main site (optional)
    mainSiteUrl: "/",
    // A discord invite url (optional)
    discordUrl: "https://discord.gg/Q5bvpCnbUW",
    // A IP of your server which to display (optional)
    serverIp: "play.nookure.net",
    // Reveal the sidebar when an item is added to the cart?
    showCartOnAdd: true,
    // Show confetti after checkout?
    confetti: false,
    // Game type name to display on the store
    gameTypeName: "Minecraft",
    // Tebex.js settings see https://docs.tebex.io/developers/tebex.js/integration#config
    tebexJsConfig: {
        theme: "dark",
        colors: [
            {
                name: "primary",
                color: "#9cddf9",
            },
            {
                name: "secondary",
                color: "#F5F5F5",
            },
        ],
    },
});

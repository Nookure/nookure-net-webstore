export default defineI18nConfig(() => ({
    legacy: false,
    locale: "es-ES",
    numberFormats: {
        "es-ES": {
            currency: {
                style: "currency",
                currency: "EUR",
                notation: "standard",
            },
        }
    },
    messages: {
        "es-ES": {
            store_name: "Nookure Network",
            play: "play.nookure.net",
            index: {
                hero: {
                    title: "Tienda de Nookure Network",
                    subtitle: "Te damos la bienvenida a la tienda de Nookure Network. Aquí podrás comprar rangos, objetos y mucho más.",
                },
            },
            buttons: {
                checkout: "Continuar al pago",
                cart: "Cesta | Cesta ({n}) | Cesta ({n})",
                add_to_cart: "Añadir a la cesta",
                add_gift_to_cart: "Añadir regalo a la cesta",
                gift: "Regalar",
                login: "Iniciar sesión",
                logout: "Cerrar sesión",
                copied: "¡IP copiada!",
                home: "Inicio",
                menu: "Menú",
                go_to_top: "Volver arriba",
            },
            auth: {
                login: {
                    title: "Introduce tu nombre de usuario de {gameTypeName}:",
                },
                logout: {
                    title: "¿Estás seguro de que deseas cerrar sesión?",
                },
                login_redirect: {
                    title: "Haz click aquí para iniciar sesión",
                    method: "Iniciar sesión con {name}",
                },
                login_complete: {
                    title: "¡Sesión iniciada!",
                },
                username: "Usuario",
            },
            gift: {
                input_placeholder: "Introduce el nombre de usuario de {gameTypeName} del destinatario:",
            },
            error: {
                page_not_found: "Página no encontrada",
                cannot_add_package:
                    "No puedes comprar este paquete.",
            },
            footer: {
                join_our_discord: "Discord",
                copyright: "© 2024 {storeName}. Todos los derechos reservados. ",
                disclaimer: "Nookure Network no está asociada ni afiliada con Mojang, AB, ni cuenta con su respaldo.",
                tebex: {
                    description:
                        "Este sitio web y su proceso de pago son operados por nuestro revendedor en línea y comerciante registrado, Tebex Limited, quien también maneja consultas y reembolsos relacionados con pedidos.",
                    impressum: "Impressum",
                    privacy_policy: "Política de privacidad",
                    tos: "Términos del servicio",
                },
            },
            messages: {
                success: {
                    added_to_cart: "Se ha añadido {name} a la cesta",
                    removed_from_cart: "Se ha eliminado {name} de la cesta",
                },
            },
            sidebar: {
                menu: "Menú",
            },
            titles: {
                login: "Iniciar sesión",
                package: "{name}",
            },
            checkout: {
                completed: {
                    title: "¡Gracias por tu compra!",
                    subtitle:
                        "Recibirás tus objetos en el juego en unos minutos. En caso contrario, por favor, contacta con nuestro soporte.",
                },
            },
            cart: {
                title: "Cesta",
                empty: "Tu cesta está vacía",
                total: "Total",
                item: {
                    quantity: "x{quantity}",
                    gift_to: "Regalo para {username}",
                },
            },
            category: {
                image_alt: "Imagen de la categoría {name}",
            },
        }
    },
}));
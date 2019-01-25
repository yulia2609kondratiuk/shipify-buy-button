/*<![CDATA[*/

(function() {
    var scriptURL = 'storefont.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    var detailTemplate = '<div class="{{data.classes.product.details}}">' +
        '<span class="{{data.classes.product.price}}">{{data.selectedVariant.price}}</span>' +
        '<div class="{{data.classes.product.description}}">{{data.description}}</div>' +
        '</div>';
    var buttonStyles = {
        'background-color': 'rgba(0,0,0,0.8)',

        ':hover': {
            'display': 'block',
            'background-color': 'tomato'
        },
        ':focus': {
            'background-color': 'tomato'
        }
    }
    var productStyles = {
        ' position': 'relative',
        ' height': ' 280px',
        'outline': 'none',
        img: {
            'transition': '0.3s'

        },
        ':hover': {
            img: {
                'transform': 'scale(1.2)'
            }

        }

    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'lightbalancestore.myshopify.com',
            storefrontAccessToken: '7101615e5e5cd43667f98663107131b7',
        });

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            ui.createComponent('collection', {
                id: 106783047780,
                node: document.getElementById('collection-component-b7b839556d4'),
                moneyFormat: '%E2%82%B4%7B%7Bamount%7D%7D',
                options: {
                    "product": {

                        "buttonDestination": "modal",
                        "variantId": "all",
                        "isButton": false,
                        "contents": {
                            "imgWithCarousel": false,
                            "variantTitle": false,
                            "options": false,
                            "description": false,
                            "buttonWithQuantity": false,
                            "quantity": false
                        },
                        "text": {
                            "button": "DETAILS"
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(50% - 40px)",
                                    "margin-left": "40px",
                                    "margin-bottom": "50px",
                                    "width": "calc(50% - 40px)"
                                }
                            },
                            'options': {
                                'display': 'flex'
                            },
                            "button": {
                                "background-color": "#ff6347",
                                "font-family": "Gill Sans, sans-serif",
                                ":hover": {
                                    "background-color": "#e65940"
                                },
                                ":focus": {
                                    "background-color": "#e65940"
                                },
                                "font-weight": "normal"
                            },
                            "title": {
                                "font-family": "PT Sans, sans-serif"
                            }
                        },
                        "googleFonts": [
                            "PT Sans"
                        ]
                    },
                    product: {

                        isButton: true,
                        buttonDestination: 'modal',
                        iframe: false,
                        width: '350px',
                        height: '280px',
                        templates: {
                            // button: buttonTemplate,
                            price: '<p class="{{data.classes.product.price}}">PRICE: {{data.selectedVariant.price}}</p>'
                        },
                        text: {
                            button: 'DETAILS'
                        },
                        contents: {
                            button: true,
                            options: false,
                            // img: false,
                            // imgWithCarousel: true
                        },
                        styles: {
                            newBadge: {
                                'background-color': 'red',
                                'border-radius': '10px',
                                'color': 'yellow'
                            },
                            product: productStyles,
                            description: {
                                'color': 'white'
                            },

                            price: {
                                color: 'white',
                                'background-color': 'tomato',
                                'position': ' absolute',
                                'top': '50px',
                                'right': 0,
                                'padding': '10px'

                            },
                            title: {
                                'font-size': '40px',
                                'color': 'white'
                            },
                            compareAt: {
                                color: 'white'
                            },
                            button: Object.assign({}, buttonStyles, {
                                'position': 'absolute',
                                'top': '50%',
                                'left': '50%',
                                'width': '70%',
                                'border-radius': '35px',
                                'outline': ' none',
                                'transform': 'translateX(-50%)translateY(-50%)',
                            })

                        }
                    },
                    modal: {
                        styles: {
                            modal: {
                                'background-color': 'black',
                                option: {
                                    'color': 'white'
                                }
                            },


                        }
                    },
                    cart: {
                        variantTitle: true,
                        styles: {
                            button: {
                                'background-color': 'tomato'
                            },
                            ':hover': {
                                'background-color': 'red'
                            }
                        }
                    },
                    "cart": {
                        // 'iframe': false,
                        "contents": {
                            "button": true
                        },
                        "styles": {
                            "button": {
                                "background-color": "#ff6347",
                                "font-family": "Gill Sans, sans-serif",
                                ":hover": {
                                    "background-color": "#e65940"
                                },
                                ":focus": {
                                    "background-color": "#e65940"
                                },
                                "font-weight": "normal"
                            },
                            "footer": {
                                "background-color": "#ffffff"
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "buttonWithQuantity": true,
                            "button": false,
                            "quantity": false
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "background-color": "#ff6347",
                                "font-family": "Gill Sans, sans-serif",
                                ":hover": {
                                    "background-color": "#e65940"
                                },
                                ":focus": {
                                    "background-color": "#e65940"
                                },
                                "font-weight": "normal"
                            },
                            "title": {
                                "font-family": "PT Sans, sans-serif"
                            },
                            'variant-selectors': {
                                'dispay': 'flex'
                            },
                            'price': {
                                'padding': '10px'
                            }
                        },
                        "googleFonts": [
                            "PT Sans"
                        ]
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-family": "Gill Sans, sans-serif",
                                "background-color": "#ff6347",
                                ":hover": {
                                    "background-color": "#e65940"
                                },
                                ":focus": {
                                    "background-color": "#e65940"
                                },
                                "font-weight": "normal"
                            }
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-40px"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();
/*]]>*/
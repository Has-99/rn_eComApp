const PRODUCTS = [
    {
        id: 1,
        name: "Coca cola 1l",
        price: 350,
        image: require("../../assets/product_images/cocacola.jpg"),
        description: "Make your meals tastier with coke"
    },
    {
        id: 2,
        name: "Milo Drink 180ml",
        price: 130,
        image: require("../../assets/product_images/milo.jpg"),
        description: "Renowned for its unique delicious taste, MILO is one of the leading chocolate malt beverage. It is made with fresh milk, malt, cocoa, and enriched with vitamins B2 and B6."
    },
    {
        id: 3,
        name: "Kothmale Fresh Milk Full Cream 1l",
        price: 500,
        image: require("../../assets/product_images/freshmilk.jpg"),
        description: "Best fresh milk" 
    },
    {
        id: 4,
        name: "Kotmale Set Yoghurt   |  80g",
        price: 70,
        image: require("../../assets/product_images/yoghurt.jpg"),
        description:
          "Kotmale Yoghurt for a desert with great taste & goodness"
    },
    {
        id: 5,
        name: "Nutriline Oats 500g",
        price: 680,
        image: require("../../assets/product_images/oats.jpg"),
        description:
            "CBL Nutriline Instant Flaked, rolled oats for a fiber-rich, hearty and healthy breakfast for your busy mornings"
    },
    {
        id: 6,
        name: "MD tomato Sauce 200ml",
        price: 330,
        image: require("../../assets/product_images/sauce.jpg"),
        description: "Freshly made original tomato sauce"
    },
    {
        id: 7,
        name: "Keels KREST Chicken Sausage 250g",
        price: 650,
        image: require("../../assets/product_images/sausage.jpg"),
        description: "Chicken Sausages Offer A High Dose Of Protein And a protein-rich diet offers many health benefits like good metabolic health and aids in weight loss. It also helps one reduce the appetite and hunger levels as protein makes one feel full for longer."
    },  
    {
        id: 8,
        name: "Araliya Rice Keeri Samba 5kg",
        price: 1300,
        image: require("../../assets/product_images/keeriSamba.jpg"),
        description: "Araliya Supiri Keeri Samba the best keeri samba rice"
    },
    {
        id: 9,
        name: "Dhal   1kg",
        price: 430,
        image: require("../../assets/product_images/dhal.jpg"),
        description: "High quality Mysoor dhal"
    },
        

]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}
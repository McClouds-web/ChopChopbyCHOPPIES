// --- DATA STORE ---
const db = {
    categories: [
        { id: 'c1', name: 'Beverages', icon: 'fa-bottle-water' },
        { id: 'c2', name: 'Edible Groceries', icon: 'fa-wheat-awn' },
        { id: 'c3', name: 'CFC', icon: 'fa-drumstick-bite' },
        { id: 'c4', name: 'Ethnic Products', icon: 'fa-globe' },
        { id: 'c5', name: 'Fresh', icon: 'fa-apple-whole' },
        { id: 'c6', name: 'General Merchandise', icon: 'fa-store' },
        { id: 'c7', name: 'Household', icon: 'fa-house' },
        { id: 'c8', name: 'Perishable', icon: 'fa-snowflake' },
        { id: 'c9', name: 'Personal Care', icon: 'fa-pump-soap' },
        { id: 'c10', name: 'Pets', icon: 'fa-paw' }
    ],
    products: [
        // BEVERAGES
        { id: 'bev_1', catId: 'c1', name: 'Monster 500ml Khaos', desc: 'Monster Energy Khaos blend of juice and energy. 500ml.', price: 15.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38867.jpg', popular: true },
        { id: 'bev_2', catId: 'c1', name: 'Choppies Chill 500ml Energy Drink', desc: 'Choppies own brand energy drink. 500ml.', price: 7.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43987.jpg' },
        { id: 'bev_3', catId: 'c1', name: 'Red Bull 250ml Energy Drink', desc: 'The original Red Bull. Vitalizes body and mind. 250ml.', price: 10.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47619.png', popular: true },
        { id: 'bev_4', catId: 'c1', name: 'Red Bull 355ml Energy Drink', desc: 'Red Bull in a larger 355ml can.', price: 21.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47621.jpg' },
        { id: 'bev_5', catId: 'c1', name: 'Predator 500ml Energy', desc: 'Predator energy drink for the bold. 500ml.', price: 8.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//48393.jpg' },
        { id: 'bev_6', catId: 'c1', name: 'Powerade 500ml Naartje', desc: 'Powerade Naartjie sports drink. 500ml.', price: 11.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47647.jpg' },
        { id: 'bev_7', catId: 'c1', name: 'Energade 500ml Orange', desc: 'Energade Orange sports drink with electrolytes. 500ml.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41250.jpg' },
        { id: 'bev_8', catId: 'c1', name: 'Energade 500ml Naartjie', desc: 'Energade Naartjie sports drink. 500ml.', price: 11.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41251.jpg' },
        { id: 'bev_9', catId: 'c1', name: 'Energade 500ml Grape', desc: 'Energade Grape sports drink. 500ml.', price: 11.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41252.jpg' },
        { id: 'bev_10', catId: 'c1', name: 'Energade 500ml Tropical', desc: 'Energade Tropical sports drink. 500ml.', price: 11.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41253.jpg' },
        { id: 'bev_11', catId: 'c1', name: 'Energade 500ml Mixed Berry', desc: 'Energade Mixed Berry sports drink. 500ml.', price: 11.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41257.jpg' },
        { id: 'bev_12', catId: 'c1', name: 'Energade 500ml Lite Naartjie', desc: 'Energade Lite Naartjie — less sugar. 500ml.', price: 11.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44865.jpg' },
        { id: 'bev_13', catId: 'c1', name: 'Sprinterade 500ml Orange', desc: 'Sprinterade Orange sports drink. 500ml.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//48549.jpg' },
        { id: 'bev_14', catId: 'c1', name: 'Bullet 500ml Energy Drink', desc: 'Bullet energy drink to power through your day. 500ml.', price: 14.49, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38854.jpg' },
        { id: 'bev_15', catId: 'c1', name: 'Reboost 500ml Original', desc: 'Reboost Original energy drink. 500ml.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44831.jpg' },
        { id: 'bev_16', catId: 'c1', name: 'Coca Cola 2L', desc: "Ice cold Coca-Cola classic. The world's favourite soft drink. 2 Litre.", price: 21.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38906.png', popular: true, badge: 'Popular' },
        { id: 'bev_17', catId: 'c1', name: 'Schweppes 200ml Lemonade', desc: 'Schweppes Lemonade — crisp and refreshing. 200ml.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38919.jpg' },
        { id: 'bev_18', catId: 'c1', name: 'Schweppes 200ml Ginger Ale', desc: 'Schweppes Ginger Ale dry ginger taste. 200ml.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38920.jpg' },
        { id: 'bev_19', catId: 'c1', name: 'Schweppes 200ml Soda Water', desc: 'Schweppes Soda Water — the perfect mixer. 200ml.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38927.jpg' },
        { id: 'bev_20', catId: 'c1', name: 'Schweppes 200ml Dry Lemon', desc: 'Schweppes Dry Lemon — light and zingy. 200ml.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38928.jpg' },
        { id: 'bev_21', catId: 'c1', name: 'Jacobs Kronung 200G Instant Jar', desc: 'Jacobs Kronung rich roast instant coffee. 200g jar.', price: 149.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//45864.png' },
        { id: 'bev_22', catId: 'c1', name: 'Jacobs Kronung 200G Gold Instant', desc: 'Jacobs Kronung Gold blend instant coffee. 200g.', price: 149.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//46341.png' },
        { id: 'bev_23', catId: 'c1', name: 'Nescafe 200G Dawn Classic', desc: 'Nescafe Dawn Classic instant coffee. 200g jar.', price: 149.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//45823.jpg' },
        { id: 'bev_24', catId: 'c1', name: 'Choppies 250G Coffee Granules', desc: 'Choppies coffee granules. 250g.', price: 39.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//44017.jpg' },
        { id: 'bev_25', catId: 'c1', name: 'Choppies 250G Loose Tea', desc: 'Choppies loose tea. 250g.', price: 26.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//48755.jpg' },

        // EDIBLE GROCERIES
        { id: 'eg_1', catId: 'c2', name: 'Super A1 10KG Maize Meal', desc: 'Super A1 maize meal. 10kg bag.', price: 89.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//48698.jpg', popular: true },
        { id: 'eg_2', catId: 'c2', name: 'Choppies White Bread Flour 12.5KG', desc: 'Choppies white bread flour. 12.5kg.', price: 129.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//44521.png' },
        { id: 'eg_3', catId: 'c2', name: 'Excella 4L Cooking Oil', desc: 'Excella cooking oil. 4 litre.', price: 132.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//48475.jpg', popular: true },
        { id: 'eg_4', catId: 'c2', name: 'Jungle Oats 1KG', desc: 'Jungle Oats wholesome oatmeal. 1kg.', price: 44.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//40956.png' },
        { id: 'eg_5', catId: 'c2', name: 'Bokomo Weetbix 450G', desc: 'Bokomo Weetbix breakfast cereal. 450g.', price: 26.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//39465.png' },
        { id: 'eg_6', catId: 'c2', name: 'Choppies 2L Pure Sunflower Oil', desc: 'Choppies pure sunflower oil. 2 litre.', price: 54.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//47765.jpg' },
        { id: 'eg_7', catId: 'c2', name: 'Choppies Sorghum Meal 10KG', desc: 'Choppies sorghum meal. 10kg.', price: 82.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//43953.png' },
        { id: 'eg_8', catId: 'c2', name: 'Excella 10KG Thai Parboiled Rice', desc: 'Excella Thai parboiled rice. 10kg.', price: 119.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//44527.jpg' },
        { id: 'eg_9', catId: 'c2', name: 'E/T 1KG Red Kidney Beans', desc: 'Red kidney beans. 1kg.', price: 57.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43814.jpg' },
        { id: 'eg_10', catId: 'c2', name: 'Choppies Sugar Beans 500G', desc: 'Choppies sugar beans. 500g.', price: 22.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44004.png' },
        { id: 'eg_11', catId: 'c2', name: 'Choppies Sugar Beans 1KG', desc: 'Choppies sugar beans. 1kg.', price: 39.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44005.png' },
        { id: 'eg_12', catId: 'c2', name: 'Blue Diamond 500G Black Eye Beans', desc: 'Black eye beans. 500g.', price: 25.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44588.jpg' },
        { id: 'eg_13', catId: 'c2', name: 'E/T 1KG Chana Dhal', desc: 'Chana dhal lentils. 1kg.', price: 47.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43740.jpg' },
        { id: 'eg_14', catId: 'c2', name: 'E/T 1KG Green Moong', desc: 'Green moong lentils. 1kg.', price: 26.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43775.jpg' },
        { id: 'eg_15', catId: 'c2', name: 'E/T 1KG Oil Dhal', desc: 'Oil dhal lentils. 1kg.', price: 57.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43802.jpg' },
        { id: 'eg_16', catId: 'c2', name: 'E/T 1KG White Chana', desc: 'White chana chickpeas. 1kg.', price: 57.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43853.jpg' },
        { id: 'eg_17', catId: 'c2', name: 'E/T 1KG Yellow Moong Dhal', desc: 'Yellow moong dhal lentils. 1kg.', price: 55.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43864.jpg' },
        { id: 'eg_18', catId: 'c2', name: 'Blue Diamond 1KG Brown Lentils', desc: 'Brown lentils. 1kg.', price: 51.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44616.jpg' },
        { id: 'eg_19', catId: 'c2', name: 'Excel Nature 100G Peanuts Salted Boiled', desc: 'Salted boiled peanuts. 100g.', price: 16.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44995.jpg' },

        // CFC
        { id: 'cfc_1', catId: 'c3', name: 'Choppies Fried Chicken 2 Pce', desc: 'Crispy Choppies fried chicken. 2 pieces.', price: 29.99, image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=300&q=80', popular: true },
        { id: 'cfc_2', catId: 'c3', name: 'Choppies Fried Chicken 4 Pce', desc: 'Crispy Choppies fried chicken. 4 pieces.', price: 54.99, image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=300&q=80' },
        { id: 'cfc_3', catId: 'c3', name: 'Choppies Fried Chicken 8 Pce', desc: 'Crispy Choppies fried chicken. 8 pieces.', price: 99.99, image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=300&q=80' },

        // ETHNIC PRODUCTS
        { id: 'eth_1', catId: 'c4', name: 'Dabar Chyawanprash Sugar Free 500G', desc: 'Dabar Chyawanprash Sugar Free health supplement. 500g.', price: 85.49, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//46551.jpg' },
        { id: 'eth_2', catId: 'c4', name: 'Amul Lassi 200ml', desc: 'Amul refreshing lassi drink. 200ml.', price: 13.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//46563.jpg' },
        { id: 'eth_3', catId: 'c4', name: 'Vaidyaratnam 100ml Cough Syrup', desc: 'Vaidyaratnam Swasamrutham cough syrup. 100ml.', price: 29.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47156.jpg' },
        { id: 'eth_4', catId: 'c4', name: 'Vaidyaratnam 100G Dasamoolarasayanam', desc: 'Vaidyaratnam herbal health supplement. 100g.', price: 24.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47158.jpg' },

        // FRESH (Bakery + Fruits & Veg)
        { id: 'fr_1', catId: 'c5', name: 'French Loaf', desc: 'Freshly baked French loaf.', price: 9.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//37808.jpg' },
        { id: 'fr_2', catId: 'c5', name: 'Brown Bread Sliced', desc: 'Freshly sliced brown bread.', price: 9.49, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//37824.jpg' },
        { id: 'fr_3', catId: 'c5', name: 'Hamburger Rolls Jumbo 6S', desc: 'Jumbo hamburger rolls. Pack of 6.', price: 13.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//37876.jpg' },
        { id: 'fr_4', catId: 'c5', name: 'Hamburger Rolls 6S', desc: 'Hamburger rolls. Pack of 6.', price: 12.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//37892.png' },
        { id: 'fr_5', catId: 'c5', name: 'Butter Bread', desc: 'Soft butter bread loaf.', price: 10.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38129.jpg' },
        { id: 'fr_6', catId: 'c5', name: 'Maxi Hotdog Rolls 6S', desc: 'Maxi hotdog rolls. Pack of 6.', price: 17.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//43125.jpg' },
        { id: 'fr_7', catId: 'c5', name: 'Choppies Super Loaf White', desc: 'Choppies super white bread loaf.', price: 18.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44470.png', popular: true },
        { id: 'fr_8', catId: 'c5', name: 'Choppies Super Loaf Brown', desc: 'Choppies super brown bread loaf.', price: 16.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44471.png' },
        { id: 'fr_9', catId: 'c5', name: 'Maxi White Bread', desc: 'Maxi white bread loaf.', price: 19.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44711.jpg' },
        { id: 'fr_10', catId: 'c5', name: 'Maxi Super Brown Bread', desc: 'Maxi super brown bread loaf.', price: 18.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44712.jpg' },
        { id: 'fr_11', catId: 'c5', name: 'White Bread', desc: 'Fresh white bread loaf.', price: 10.49, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47749.jpg' },
        { id: 'fr_12', catId: 'c5', name: 'Ouma Bread', desc: 'Ouma traditional bread.', price: 8.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//37814.jpg' },
        { id: 'fr_13', catId: 'c5', name: 'Coconut Bun', desc: 'Sweet coconut bun.', price: 18.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//48199.jpg' },
        { id: 'fr_14', catId: 'c5', name: 'Naan Bread', desc: 'Freshly baked naan bread.', price: 16.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//48627.jpg' },
        { id: 'fr_15', catId: 'c5', name: 'Banana Package', desc: 'Fresh banana package.', price: 24.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//37759.png', popular: true },
        { id: 'fr_16', catId: 'c5', name: 'Potato Normal Medium Bag', desc: 'Fresh potatoes. Medium bag.', price: 64.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//47895.jpg' },
        { id: 'fr_17', catId: 'c5', name: 'Apple 3KG Red Package', desc: 'Fresh red apples. 3kg package.', price: 29.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//48272.jpg' },

        // GENERAL MERCHANDISE
        { id: 'gm_1', catId: 'c6', name: 'Shield 200ml Sheen Fresh Start', desc: 'Shield car sheen spray. Fresh Start. 200ml.', price: 41.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//42060.jpg' },
        { id: 'gm_2', catId: 'c6', name: 'Shield 200ml Sheen Strawberry', desc: 'Shield car sheen spray. Strawberry. 200ml.', price: 41.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//42061.jpg' },
        { id: 'gm_3', catId: 'c6', name: 'Shield 200ml Sheen Cherry', desc: 'Shield car sheen spray. Cherry. 200ml.', price: 41.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//42063.jpg' },
        { id: 'gm_4', catId: 'c6', name: 'Engen 500ml Multigrade 20W-50', desc: 'Engen multigrade engine oil 20W-50. 500ml.', price: 35.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41311.jpg' },
        { id: 'gm_5', catId: 'c6', name: 'Engen 500ml Oil Premium SAE40', desc: 'Engen premium SAE40 engine oil. 500ml.', price: 35.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41313.jpg' },
        { id: 'gm_6', catId: 'c6', name: 'Choppies LED Bulb 6W Warm White Screw', desc: 'Energy saving LED bulb. 6W warm white. Screw fitting.', price: 25.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44022.png' },
        { id: 'gm_7', catId: 'c6', name: 'Choppies LED Bulb 6W Cool White Screw', desc: 'Energy saving LED bulb. 6W cool white. Screw fitting.', price: 25.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44023.png' },
        { id: 'gm_8', catId: 'c6', name: 'Choppies LED Bulb 9W Warm White Screw', desc: 'Energy saving LED bulb. 9W warm white. Screw fitting.', price: 25.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44026.png' },
        { id: 'gm_9', catId: 'c6', name: 'Choppies LED Bulb 9W Cool White Pin', desc: 'Energy saving LED bulb. 9W cool white. Pin fitting.', price: 25.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44029.png' },

        // HOUSEHOLD
        { id: 'hh_1', catId: 'c7', name: 'OMO 2KG Washing Powder Auto Hygiene', desc: 'OMO auto hygiene washing powder. 2kg.', price: 89.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//40336.jpg', popular: true },
        { id: 'hh_2', catId: 'c7', name: 'OMO 2KG Multi Active Flexi with Comfort', desc: 'OMO multi active with Comfort. 2kg.', price: 48.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//40188.jpg' },
        { id: 'hh_3', catId: 'c7', name: 'Snowsoft 18S Luxury 2Ply', desc: 'Snowsoft luxury 2-ply toilet paper. 18 rolls.', price: 101.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//44442.jpg', popular: true },
        { id: 'hh_4', catId: 'c7', name: 'Porcelain White Mug', desc: 'Classic porcelain white mug.', price: 5.00, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38534.jpg' },
        { id: 'hh_5', catId: 'c7', name: 'Choppies Face Cloth', desc: 'Choppies face cloth.', price: 21.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44010.jpg' },

        // PERISHABLE (Dairy & Eggs)
        { id: 'per_1', catId: 'c8', name: 'Ultra Milk 1L Fresh Milk', desc: 'Ultra fresh full cream milk. 1 litre.', price: 22.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//47857.jpg', popular: true },
        { id: 'per_2', catId: 'c8', name: 'Clover 2L Fresh Milk', desc: 'Clover fresh full cream milk. 2 litre.', price: 39.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//41095.jpg', popular: true },
        { id: 'per_3', catId: 'c8', name: 'Choppies Eggs Size 1 Half Dozen', desc: 'Choppies size 1 eggs. Half dozen.', price: 21.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44431.png' },
        { id: 'per_4', catId: 'c8', name: 'Choppies Eggs Size 2 Half Dozen', desc: 'Choppies size 2 eggs. Half dozen.', price: 19.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44431.png' },
        { id: 'per_5', catId: 'c8', name: 'Star Poultry Size 2 Dozen x4', desc: 'Star Poultry size 2 eggs. 4 dozen.', price: 73.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47801.png' },
        { id: 'per_6', catId: 'c8', name: 'Star Poultry Size 3 Dozen x4', desc: 'Star Poultry size 3 eggs. 4 dozen.', price: 76.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//47845.jpg' },
        { id: 'per_7', catId: 'c8', name: 'Springbok 500G Unsalted Butter', desc: 'Springbok unsalted butter. 500g.', price: 88.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41198.jpg' },
        { id: 'per_8', catId: 'c8', name: 'Kefalos 300G Ghee Butter Tub', desc: 'Kefalos ghee butter. 300g tub.', price: 61.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//44409.jpg' },
        { id: 'per_9', catId: 'c8', name: 'Clover 500G Mooi River Salted Butter', desc: 'Clover Mooi River salted butter. 500g.', price: 91.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41197.jpg' },
        { id: 'per_10', catId: 'c8', name: 'Clover 500G Butro', desc: 'Clover Butro butter spread. 500g.', price: 74.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//41199.jpg' },

        // PERSONAL CARE
        { id: 'pc_1', catId: 'c9', name: 'Ingrams 450ml Herbal/Camphor Cream', desc: 'Ingrams herbal and camphor moisturising cream. 450ml.', price: 41.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//47927.jpg', popular: true },
        { id: 'pc_2', catId: 'c9', name: 'Aquafresh Toothpaste Mild & Mint 100ml', desc: 'Aquafresh mild and mint toothpaste. 100ml.', price: 17.99, image: 'https://33f9249e419a09a17aed-a5a2dfd1fb4a4b44fd0aa73478edad3b.ssl.cf1.rackcdn.com//39891.png' },
        { id: 'pc_3', catId: 'c9', name: 'Johnson & Johnson Baby Soap 175G', desc: "Johnson's Baby Soap. 175g bar.", price: 16.99, image: 'https://0e9888e15ff120042f30-8afe6499593a0c0cd36f211a1ceb9ca5.ssl.cf1.rackcdn.com//38320.png' },

        // PETS
        { id: 'pet_1', catId: 'c10', name: 'Choppies Dog Food 2KG', desc: 'Complete dry dog food. 2kg bag.', price: 54.99, image: 'https://images.unsplash.com/photo-1589924691995-400dc9a0a73e?auto=format&fit=crop&w=300&q=80' },
        { id: 'pet_2', catId: 'c10', name: 'Choppies Cat Food 2KG', desc: 'Complete dry cat food. 2kg bag.', price: 49.99, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=300&q=80' }
    ]
};

// --- APP STATE ---
const state = {
    cart: [],
    currentView: 'home',
    viewHistory: [],
    selectedCategory: null,
    selectedProduct: null
};

// --- APP CONTROLLER ---
const app = {
    init() {
        this.renderHome();
        this.renderCategories();
        
        // Show splash screen briefly
        setTimeout(() => {
            this.navigate('home', false);
        }, 1500);

        // Handle payment method toggle active UI
        document.querySelectorAll('.payment-option input').forEach(input => {
            input.addEventListener('change', (e) => {
                document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('border-active'));
                if(e.target.checked) {
                    e.target.closest('.payment-option').classList.add('border-active');
                }
            });
        });
    },

    navigate(viewId, pushHistory = true) {
        if(pushHistory && state.currentView !== 'splash') {
            state.viewHistory.push(state.currentView);
        }
        
        // Hide all views
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        // Show target view
        document.getElementById(`${viewId}-screen`).classList.add('active');
        state.currentView = viewId;
        
        // Update Bottom Nav
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.remove('active');
            if(el.dataset.target === viewId) el.classList.add('active');
        });

        // Scroll to top
        window.scrollTo(0, 0);

        // View specific logic
        if(viewId === 'cart') this.renderCart();
        if(viewId === 'checkout') this.renderCheckout();
    },

    goBack() {
        if(state.viewHistory.length > 0) {
            const prevView = state.viewHistory.pop();
            this.navigate(prevView, false);
        } else {
            this.navigate('home', false);
        }
    },

    // --- RENDERERS ---

    renderHome() {
        const qcContainer = document.getElementById('home-quick-categories');
        qcContainer.innerHTML = db.categories.map(c => `
            <div class="cat-item-quick" onclick="app.openCategory('${c.id}')">
                <div class="icon-box"><i class="fa ${c.icon}"></i></div>
                <span>${c.name}</span>
            </div>
        `).join('');

        const specials = db.products.filter(p => p.badge); // Specials have badges
        const specialsGrid = document.getElementById('home-specials-grid');
        specialsGrid.innerHTML = specials.map(p => this.createProductCard(p)).join('');

        const popular = db.products.filter(p => p.popular);
        const popularGrid = document.getElementById('home-popular-grid');
        popularGrid.innerHTML = popular.map(p => this.createProductCard(p)).join('');
    },

    renderCategories() {
        const clContainer = document.getElementById('category-list');
        clContainer.innerHTML = db.categories.map(c => `
            <div class="cat-card-large" onclick="app.openCategory('${c.id}')">
                <div class="icon-box"><i class="fa ${c.icon}"></i></div>
                <div class="info">
                    <h3>${c.name}</h3>
                    <p>Shop ${c.name.toLowerCase()} selection</p>
                </div>
                <i class="fa fa-chevron-right chevron"></i>
            </div>
        `).join('');
    },

    openCategory(catId) {
        state.selectedCategory = db.categories.find(c => c.id === catId);
        document.getElementById('plp-title').innerText = state.selectedCategory.name;
        
        const products = db.products.filter(p => p.catId === catId);
        const grid = document.getElementById('plp-grid');
        
        if(products.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">No products found.</p>`;
        } else {
            grid.innerHTML = products.map(p => this.createProductCard(p)).join('');
        }
        
        this.navigate('products');
    },

    openProduct(productId) {
        state.selectedProduct = db.products.find(p => p.id === productId);
        const p = state.selectedProduct;
        const cat = db.categories.find(c => c.id === p.catId);
        
        const container = document.getElementById('pdp-content');
        
        let html = `
            <div class="pdp-wrapper">
                <div class="pdp-image-container">
                    ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="pdp-details">
                    <div class="pdp-meta">
                        <span class="pdp-cat">${cat.name}</span>
                    </div>
                    <h2 class="pdp-title">${p.name}</h2>
                    <div style="margin-top:8px;">
                        <span class="pdp-price">BWP ${p.price.toFixed(2)}</span>
                        ${p.oldPrice ? `<span class="old-price">BWP ${p.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <p class="pdp-desc">${p.desc}</p>
                    
                    <div class="pdp-actions">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="app.updateTempQty('pdp-qty', -1)">-</button>
                            <input type="text" class="qty-input" id="pdp-qty" value="1" readonly>
                            <button class="qty-btn" onclick="app.updateTempQty('pdp-qty', 1)">+</button>
                        </div>
                        <button class="btn btn-primary pdp-add-btn" onclick="app.addToCartFromPDP()">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
        this.navigate('product-detail');
    },

    createProductCard(product) {
        return `
            <div class="product-card" onclick="app.openProduct('${product.id}')">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-img-wrap">
                    <img src="${product.image}" loading="lazy" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-desc-short">${product.desc}</div>
                    
                    <div class="product-price-row">
                        <div class="product-vals">
                            <span class="product-price">BWP ${product.price.toFixed(2)}</span>
                            ${product.oldPrice ? `<span class="old-price">BWP ${product.oldPrice.toFixed(2)}</span>` : ''}
                        </div>
                    </div>

                    <div class="product-card-actions" onclick="event.stopPropagation()">
                        <div class="qty-selector small-qty">
                            <button class="qty-btn" onclick="app.updateTempQty('qty-${product.id}', -1)">-</button>
                            <input type="text" class="qty-input" id="qty-${product.id}" value="1" readonly>
                            <button class="qty-btn" onclick="app.updateTempQty('qty-${product.id}', 1)">+</button>
                        </div>
                        <button class="btn btn-primary btn-sm add-to-cart-btn" onclick="app.addToCartFromCard('${product.id}')">
                            <i class="fa fa-shopping-cart"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    updateTempQty(inputId, change) {
        const input = document.getElementById(inputId);
        let val = parseInt(input.value) + change;
        if(val < 1) val = 1;
        input.value = val;
    },

    // --- CART LOGIC ---

    addToCart(productId, qty = 1) {
        const item = state.cart.find(i => i.id === productId);
        if(item) {
            item.qty += qty;
        } else {
            const p = db.products.find(p => p.id === productId);
            state.cart.push({ ...p, qty });
        }
        this.updateCartBadge();
        this.showToast();
    },

    addToCartFromPDP() {
        const qty = parseInt(document.getElementById('pdp-qty').value);
        this.addToCart(state.selectedProduct.id, qty);
        this.goBack();
    },

    addToCartFromCard(productId) {
        const qty = parseInt(document.getElementById(`qty-${productId}`).value);
        this.addToCart(productId, qty);
        // Reset card qty
        document.getElementById(`qty-${productId}`).value = 1;
    },

    updateCartQty(productId, change) {
        const item = state.cart.find(i => i.id === productId);
        if(item) {
            item.qty += change;
            if(item.qty < 1) {
                this.removeFromCart(productId);
            } else {
                this.updateCartBadge();
                this.renderCart();
            }
        }
    },

    removeFromCart(productId) {
        state.cart = state.cart.filter(i => i.id !== productId);
        this.updateCartBadge();
        this.renderCart();
    },

    updateCartBadge() {
        const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
        document.getElementById('mobile-cart-badge').innerText = count;
        document.getElementById('desktop-cart-badge').innerText = count;
    },

    renderCart() {
        const container = document.getElementById('cart-items');
        const summary = document.getElementById('cart-summary');
        
        if(state.cart.length === 0) {
            container.innerHTML = `
                <div class="cart-empty">
                    <i class="fa fa-basket-shopping"></i>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added any items yet.</p>
                    <button class="btn btn-primary mt-4" onclick="app.navigate('categories')">Start Shopping</button>
                </div>
            `;
            summary.innerHTML = '';
            return;
        }

        container.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div>
                        <div style="display:flex; justify-content:space-between">
                            <div class="cart-item-title">${item.name}</div>
                            <button class="cart-item-remove" onclick="app.removeFromCart('${item.id}')"><i class="fa fa-trash"></i></button>
                        </div>
                        <div class="cart-item-price">BWP ${(item.price * item.qty).toFixed(2)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="app.updateCartQty('${item.id}', -1)">-</button>
                            <input type="text" class="qty-input" value="${item.qty}" readonly>
                            <button class="qty-btn" onclick="app.updateCartQty('${item.id}', 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const deliveryFee = 15.00;
        const total = subtotal + deliveryFee;

        summary.innerHTML = `
            <div class="cart-summary-card">
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>BWP ${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Fee</span>
                    <span>BWP ${deliveryFee.toFixed(2)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total</span>
                    <span>BWP ${total.toFixed(2)}</span>
                </div>
                <button class="btn btn-primary btn-block mt-4" onclick="app.navigate('checkout')">Proceed to Checkout</button>
            </div>
        `;
    },

    renderCheckout() {
        if(state.cart.length === 0) {
            this.navigate('cart');
            return;
        }
        
        const summary = document.getElementById('checkout-summary');
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const deliveryFee = 15.00;
        const total = subtotal + deliveryFee;

        summary.innerHTML = `
            <div class="cart-summary-card" style="margin-top:0;">
                <h3 style="margin-bottom:16px;">Order Summary</h3>
                <div style="margin-bottom: 16px; border-bottom: 1px solid var(--color-border); padding-bottom: 16px;">
                    ${state.cart.map(item => `
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size: 0.9rem;">
                            <span>${item.qty}x ${item.name}</span>
                            <span>BWP ${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>BWP ${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery</span>
                    <span>BWP ${deliveryFee.toFixed(2)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total</span>
                    <span>BWP ${total.toFixed(2)}</span>
                </div>
                <div style="margin-top:16px; display:flex; align-items:center; gap:8px; color:var(--color-primary); font-weight:600; font-size:0.9rem; background:var(--color-primary-light); padding:12px; border-radius:8px;">
                    <i class="fa fa-clock"></i> Estimated delivery: 45-60 min
                </div>
            </div>
        `;
    },

    placeOrder() {
        state.cart = [];
        this.updateCartBadge();
        this.navigate('tracking');
        
        setTimeout(() => {
            const timelines = document.querySelectorAll('.timeline-item');
            if(timelines[1]) timelines[1].classList.add('active'); // Packing
        }, 3000);
    },

    showToast() {
        const toast = document.getElementById("toast");
        toast.className = "toast show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    app.init();
});

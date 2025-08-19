// =================================================================
// الكود النهائي والموحد: يعرض الميزات والمراجعات وأنواع المنتجات المختلفة
// =================================================================

if (!window.myProductPageInitialized) {
    window.myProductPageInitialized = true;
    console.log("تطبيق صفحة المنتج يعمل الآن.");

    document.addEventListener('DOMContentLoaded', () => {
        // --- 1. قاعدة البيانات المرنة (مع إضافة أنواع منتجات جديدة) ---
        const productsData = {
            // =================================================
            // القسم 1: منتجات بألوان وأحجام متعددة (كما هي)
            // =================================================
            'Cat-Bed-Pet-Winter': {
                title:'Cat Bed Pet Winter',
                word: 'CJJJCWMY01390',
                codeWord: 'PawHut',
                description: '2 In 1 Dog And Cat Bed Pet Winter Bed Round Plush Warm Bed House Soft Long Plush Pets Bed Pet Products.',
                features: [
                 '100% New design and high quality',
                 'Have a beautiful appearance',
                 'Suitable for winter',
                 'Bring comfort and warmth to pets',
                 'Specifications:Material: warm PP cotton/plush ●Inner-plush ●Inner-crystal velvet',
                 'Application: suitable for cats and dogs',
                 'Product size: 40cm, 50cm, 65cm, height 2cm',
                 'Package Content：1x Pet bed'
                ],
                reviews: [{ name: "ja*m", stars: 5, text: "the pet hair dryer come with 4 fan speed..." }, { name: "Halazia Market", stars: 1, text: "No CE available?." }],
                variants: [
                    // ... بيانات المنتجات الحالية تبقى هنا ...
                    { colorName: "Brown", colorCode: "#8B4513", size: "40cm", price: "£33.10", images: ["../assets/images/cat/Cat Bed Pet Winter/Cat Bed Pet Winter-brown-40.jpg"] },
                    { colorName: "Brown", colorCode: "#8B4513", size: "40cm SetA", price: "£35.58", images: ["../assets/images/cat/Cat Bed Pet Winter/Cat Bed Pet Winter-brown-40set.jpg"] },
                ]
            },
             
             'Round-Long-Hairy-Autumn': {
                title: 'Round Long Hairy Autumn  ',
                word: '  CJJJCWMY00276',
                codeWord: 'PawHut',
                description: 'Round Long Hairy Autumn And Winter Nest Pad Cat Mattress.',
                features: [
                 '1. The bed can be machine-washed or hand-washed for easy care. In addition, in order to keep the plush soft, smooth and fluffy, you can often dry it on sunny days.',
                 '2. The anti-slip bottom is designed with glue spots, which is anti-slip and durable.',
                 '3. Made of super soft and super warm plush, it really brings soft care to your pet. High-quality PP cotton allows your pet to have a good and deep sleep.',
                 '4. Suitable for small pets from cats to large dogs.',
                 'Feature: 1. Made of plush, super soft and very warm.',
                 'Feature: 2. Comfortable hand, 4 cm plush, pets love to sleep.',
                 'Feature: 3. Pure color, beautiful design, it is a beautiful bed.',
                 'Feature: 4. Lightweight',
                 'Feature: 5. Easy to clean and wash.',
                 'Feature: 6. Non-toxic and tasteless materials, easy for pets to adapt.',
                 'Product information: Material: cloth',
                 'Product information: Product category: cat litter, kennel',
                 'Product information: Color: red, dark gray, rubber, bright pink, light gray, white, leather pink, apricot, brown, dark green, beige, beige, blue',
                 'Product information: Size: outer diameter 40CM outer diameter 50CM outer diameter 60CM outer diameter 70CM outer diameter 80CM outer diameter 100CM outer diameter 110CM',
                 'Shape:  Washable ',
                 'Package Contents: 1 bed'
                 
                ],
                reviews: [{
                    name: "C***i",
                    stars: 5,
                    text: "tPillow just wonderful. So soft, just super!"
                }, {
                    name: "erebka tatek",
                    stars: 5,
                    text: " It has arrived very soon, and it is exactly what is described. My pets loved it."
                }],
                variants : [
                    { colorName: "A green", colorCode: "#008000", size: "60cm", price: "£28.08", images: ['../assets/images/cat/Round Long Hairy Autumn/Agreen.jpg'] },
                    { colorName: "A green", colorCode: "#008000", size: "70cm", price: "£39.81", images: ['../assets/images/cat/Round Long Hairy Autumn/Agreen.jpg'] },

                    { colorName: "Apricot", colorCode: "#FBCEB1", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Apricot.png'] },
                    { colorName: "Apricot", colorCode: "#FBCEB1", size: "70cm", price: "£54.12", images: ['../assets/images/cat/Round Long Hairy Autumn/Apricot.png'] },

                    { colorName: "Beige brown", colorCode: "#A52A2A", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Beige brown.png'] },
                    { colorName: "Beige brown", colorCode: "#A52A2A", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/Beige brown.png'] },

                    { colorName: "Bright powder", colorCode: "#FF69B4", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Bright powde.png'] },
                    { colorName: "Bright powder", colorCode: "#FF69B4", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/Bright powde.png'] },

                    { colorName: "Green", colorCode: "#228B22", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/green-1.png'] },
                    { colorName: "Green", colorCode: "#228B22", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/green-2.png'] },

                    { colorName: "Grey", colorCode: "#808080", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/gray.png'] },
                    { colorName: "Grey", colorCode: "#808080", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/gray.png'] },

                    { colorName: "Light coffee", colorCode: "#C19A6B", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Light Coffee.jpg'] },
                    { colorName: "Light coffee", colorCode: "#C19A6B", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/Light coffee.png'] },

                    { colorName: "Light grey", colorCode: "#D3D3D3", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Light grey.png'] },
                    { colorName: "Light grey", colorCode: "#D3D3D3", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/Light grey.png'] },

                    { colorName: "Pink", colorCode: "#FFC0CB", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Pink.png'] },
                    { colorName: "Pink", colorCode: "#FFC0CB", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/Pink.png'] },

                    { colorName: "Red", colorCode: "#FF0000", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/red.png'] },
                    { colorName: "Red", colorCode: "#FF0000", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/red1.png'] },

                    { colorName: "Rice pink", colorCode: "#FFDAB9", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Rice pink.png'] },
                    { colorName: "Rice pink", colorCode: "#FFDAB9", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/Rice pink.png'] },

                    { colorName: "Rubber color", colorCode: "#E97451", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/Rubber color.png'] },
                    { colorName: "Rubber color", colorCode: "#E97451", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/Rubber color.png'] },

                    { colorName: "White", colorCode: "#FFFFFF", size: "60cm", price: "£36.90", images: ['../assets/images/cat/Round Long Hairy Autumn/White.png'] },
                    { colorName: "White", colorCode: "#FFFFFF", size: "70cm", price: "£50.27", images: ['../assets/images/cat/Round Long Hairy Autumn/White.png'] },
                    ]

            },
             'Folding-Octagonal-Pet': {
                title: 'Folding Octagonal Pet  ',
                word: '  CJJJCWGY00115',
                codeWord: 'PawHut',
                description: 'Folding Octagonal Pet Fence Oxford Cloth Cat And Dog Kennel.',
                features: [
                 'Specifications:Highly recommended',
                 'Specifications:Material: 600D oxford Cloth+ Mesh',
                 'Highlights: Great for outdoor dogs',
                 'Waterproof',
                 'Breathable',
                 'Detachable skylight',
                 'Scratch resistance',
                 'anti-mosquito',
                 'Note : 1、About 2CM error is allowed due to manual measurement.',
                 'Note : 2、As different computers display different colors, the color of the actual item may vary slightly from the  image.'
                 
                 
                ],
              
                 variants : [
                // Blue
                { colorName: "Blue", colorCode: "#0000FF", size: "74x74x43CM", price: "£48.76", images: ['../assets/images/pet/Folding Octagonal Pet/Blue.png'] },
                { colorName: "Blue", colorCode: "#0000FF", size: "91x91x58CM", price: "£48.76", images: ['../assets/images/pet/Folding Octagonal Pet/Blue.png'] },
                

                // Coffee
                { colorName: "Coffee", colorCode: "#6F4E37", size: "74x74x43CM", price: "£48.59", images: ['../assets/images/pet/Folding Octagonal Pet/Coffee.jpg'] },
                { colorName: "Coffee", colorCode: "#6F4E37", size: "91x91x58CM", price: "£61.90", images: ['../assets/images/pet/Folding Octagonal Pet/Coffee.jpg'] },
                


               // Dark pink
                { colorName: "Dark pink", colorCode: "#FF1493", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/Dark pink.png'] },
                { colorName: "Dark pink", colorCode: "#FF1493", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/Dark pink.png'] },
                
                
                // Gray
                { colorName: "Gray", colorCode: "#808080", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/gray.png'] },
                { colorName: "Gray", colorCode: "#808080", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/gray.png'] },
                

                // Pink
                { colorName: "Pink", colorCode: "#FFC0CB", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/pink.png'] },
                { colorName: "Pink", colorCode: "#FFC0CB", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/pink.png'] },
               
                // Red
                { colorName: "Red", colorCode: "#FF0000", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/red.png'] },
                { colorName: "Red", colorCode: "#FF0000", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/red.png'] },
              
                // Yellow
                { colorName: "Yellow", colorCode: "#FFFF00", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/yallo.png'] },
                { colorName: "Yellow", colorCode: "#FFFF00", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/yallo.png'] },
                
                 ]


            },
             'Folding-Octagonal-Pet': {
                title: 'Folding Octagonal Pet  ',
                word: '  CJJJCWGY00115',
                codeWord: 'PawHut',
                description: 'Folding Octagonal Pet Fence Oxford Cloth Cat And Dog Kennel.',
                features: [
                 'Specifications:Highly recommended',
                 'Specifications:Material: 600D oxford Cloth+ Mesh',
                 'Highlights: Great for outdoor dogs',
                 'Waterproof',
                 'Breathable',
                 'Detachable skylight',
                 'Scratch resistance',
                 'anti-mosquito',
                 'Note : 1、About 2CM error is allowed due to manual measurement.',
                 'Note : 2、As different computers display different colors, the color of the actual item may vary slightly from the  image.'
                 
                 
                ],
              
                 variants : [
                // Blue
                { colorName: "Blue", colorCode: "#0000FF", size: "74x74x43CM", price: "£48.76", images: ['../assets/images/pet/Folding Octagonal Pet/Blue.png'] },
                { colorName: "Blue", colorCode: "#0000FF", size: "91x91x58CM", price: "£48.76", images: ['../assets/images/pet/Folding Octagonal Pet/Blue.png'] },
                

                // Coffee
                { colorName: "Coffee", colorCode: "#6F4E37", size: "74x74x43CM", price: "£48.59", images: ['../assets/images/pet/Folding Octagonal Pet/Coffee.jpg'] },
                { colorName: "Coffee", colorCode: "#6F4E37", size: "91x91x58CM", price: "£61.90", images: ['../assets/images/pet/Folding Octagonal Pet/Coffee.jpg'] },
                


               // Dark pink
                { colorName: "Dark pink", colorCode: "#FF1493", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/Dark pink.png'] },
                { colorName: "Dark pink", colorCode: "#FF1493", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/Dark pink.png'] },
                
                
                // Gray
                { colorName: "Gray", colorCode: "#808080", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/gray.png'] },
                { colorName: "Gray", colorCode: "#808080", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/gray.png'] },
                

                // Pink
                { colorName: "Pink", colorCode: "#FFC0CB", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/pink.png'] },
                { colorName: "Pink", colorCode: "#FFC0CB", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/pink.png'] },
               
                // Red
                { colorName: "Red", colorCode: "#FF0000", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/red.png'] },
                { colorName: "Red", colorCode: "#FF0000", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/red.png'] },
              
                // Yellow
                { colorName: "Yellow", colorCode: "#FFFF00", size: "74x74x43CM", price: "£49.28", images: ['../assets/images/pet/Folding Octagonal Pet/yallo.png'] },
                { colorName: "Yellow", colorCode: "#FFFF00", size: "91x91x58CM", price: "£62.19", images: ['../assets/images/pet/Folding Octagonal Pet/yallo.png'] },
                
                 ]


            },
              'LED-Dog-Collar': {
                title: 'LED Dog Collar  ',
                word: '  CJJJCWGX00001',
                codeWord: 'PawHut',
                description: 'LED Dog Collar Safety Adjustable Nylon Leopard Pet Collar',
                features: [
                'LED light glows and flashes in darkness.Helps to keep you and your dog & other pets safe during walking. ',
                'Provide safety for your dogs and pets while its out alone at night.',
                'Easy to use: simply pushing the control button makes the light ON/FLASH/OFF, Collar has 4 modes controlled with a switch on the collar Solid Light, Fash Blink, Slow Blink, and Off. ',
                'Specification :',
                'size : S: width 2.5cm adjustment range 30-40cm',
                'size : M: width 2.5cm adjustment range 38-50cm',
                'size : L: width 2.5cm adjustment range 48-60cm',
                'size : XL: width 2.5cm adjustment range 55-62cm',
                'Use time: about 40 hours of battery use',
                'Charging models:charge for half an hour, use for about 2-3 hours',
                'usage time:The battery model can be used for about 30-40 hours, and can be replaced by yourself The battery model uses 2 CR2032 button batteries and is shipped with batteries (built-in battery + insulation sheet)',
                'The charging model is charged for half an hour, about 2-3 hours of use, with a USB charging cable',
                'Package Content 1*pet collar ',
                'Note that this product is a battery style and cannot be charged'
                 
                ],
              
                variants : [
                    // Blue
                    { colorName: "Blue", colorCode: "#0000FF", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/blue.png"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/blue.png"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/blue.png"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/blue.png"] },

                    // Blue Rechargeable
                    { colorName: "Blue Rechargeable", colorCode: "#0000AA", size: "L", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/reg-blue.png"] },
                    { colorName: "Blue Rechargeable", colorCode: "#0000AA", size: "M", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/reg-blue.png"] },
                    { colorName: "Blue Rechargeable", colorCode: "#0000AA", size: "S", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/reg-blue.png"] },
                    { colorName: "Blue Rechargeable", colorCode: "#0000AA", size: "XL", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/reg-blue.png"] },
                    

                    // Green
                    { colorName: "Green", colorCode: "#008000", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/green.png"] },
                    { colorName: "Green", colorCode: "#008000", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/green.png"] },
                    { colorName: "Green", colorCode: "#008000", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/green.png"] },
                    { colorName: "Green", colorCode: "#008000", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/green.png"] },

                    // Green Rechargeable
                    { colorName: "Green Rechargeable", colorCode: "#006400", size: "L", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/green1.png"] },
                    { colorName: "Green Rechargeable", colorCode: "#006400", size: "M", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/green1.png"] },
                    { colorName: "Green Rechargeable", colorCode: "#006400", size: "S", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/green1.png"] },
                    { colorName: "Green Rechargeable", colorCode: "#006400", size: "XL", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/green1.png"] },

                    // Orange
                    { colorName: "Orange", colorCode: "#FFA500", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/orange.png"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/orange.png"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/orange.png"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/orange.png"] },

                    // Orange Rechargeable
                    { colorName: "Orange Rechargeable", colorCode: "#FF8C00", size: "L", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/orange1.png"] },
                    { colorName: "Orange Rechargeable", colorCode: "#FF8C00", size: "M", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/orange1.png"] },
                    { colorName: "Orange Rechargeable", colorCode: "#FF8C00", size: "S", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/orange1.png"] },
                    { colorName: "Orange Rechargeable", colorCode: "#FF8C00", size: "XL", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/orange1.png"] },

                    // Pink Rechargeable
                    { colorName: "Pink Rechargeable", colorCode: "#FF69B4", size: "L", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/pinkr.png"] },
                    { colorName: "Pink Rechargeable", colorCode: "#FF69B4", size: "M", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/pinkr.png"] },
                    { colorName: "Pink Rechargeable", colorCode: "#FF69B4", size: "S", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/pinkr.png"] },
                    { colorName: "Pink Rechargeable", colorCode: "#FF69B4", size: "XL", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/pinkr.png"] },

                    // Purple
                    { colorName: "Purple", colorCode: "#800080", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/purble.png"] },
                    { colorName: "Purple", colorCode: "#800080", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/purble.png"] },
                    { colorName: "Purple", colorCode: "#800080", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/purble.png"] },
                    { colorName: "Purple", colorCode: "#800080", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/purble.png"] },

                    // Random
                    { colorName: "Random", colorCode: "#CCCCCC", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/random.jpg"] },
                    { colorName: "Random", colorCode: "#CCCCCC", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/random.jpg"] },
                    { colorName: "Random", colorCode: "#CCCCCC", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/random.jpg"] },
                    { colorName: "Random", colorCode: "#CCCCCC", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/random.jpg"] },
                    { colorName: "Random", colorCode: "#CCCCCC", size: "XS", price: "£13.34", images: ["../assets/images/dogs/LED Dog Collar/random.jpg"] },

                    // Red
                    { colorName: "Red", colorCode: "#FF0000", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/red.png"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/red.png"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/red.png"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/red.png"] },

                    // Red Rechargeable
                    { colorName: "Red Rechargeable", colorCode: "#8B0000", size: "L", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/redr.png"] },
                    { colorName: "Red Rechargeable", colorCode: "#8B0000", size: "M", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/redr.png"] },
                    { colorName: "Red Rechargeable", colorCode: "#8B0000", size: "S", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/redr.png"] },
                    { colorName: "Red Rechargeable", colorCode: "#8B0000", size: "XL", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/redr.png"] },

                    // White
                    { colorName: "White", colorCode: "#FFFFFF", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/wihte.png"] },
                    { colorName: "White", colorCode: "#FFFFFF", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/wihte.png"] },
                    { colorName: "White", colorCode: "#FFFFFF", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/wihte.png"] },
                    { colorName: "White", colorCode: "#FFFFFF", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/wihte.png"] },

                    // Yellow
                    { colorName: "Yellow", colorCode: "#FFFF00", size: "L", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/yallowACV.png"] },
                    { colorName: "Yellow", colorCode: "#FFFF00", size: "M", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/yallowACV.png"] },
                    { colorName: "Yellow", colorCode: "#FFFF00", size: "S", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/yallowACV.png"] },
                    { colorName: "Yellow", colorCode: "#FFFF00", size: "XL", price: "£12.19", images: ["../assets/images/dogs/LED Dog Collar/yallowACV.png"] },

                    // Yellow Rechargeable
                    { colorName: "Yellow Rechargeable", colorCode: "#FFD700", size: "L", price: "£20.28", images: ["../assets/images/dogs/LED Dog Collar/yallowACVr.png"] },
                    { colorName: "Yellow Rechargeable", colorCode: "#FFD700", size: "M", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/yallowACVr.png"] },
                    { colorName: "Yellow Rechargeable", colorCode: "#FFD700", size: "MandM", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/yallowACVr.png"] },
                    { colorName: "Yellow Rechargeable", colorCode: "#FFD700", size: "S", price: "£19.73", images: ["../assets/images/dogs/LED Dog Collar/yallowACVr.png"] },
                ]



            },
              'Personalized-Dog-Harness': {
                title: 'Personalized Dog Harness ',
                word: '  CJJJCWGY02561',
                codeWord: 'PawHut',
                description: 'Personalized Dog Harness NO PULL Reflective Breathable Adjustable Pet Harness Vest For Small Large Dog Custom Patch Pet Supplies',
                features: [
                'Prevent dogs from being lost. ',
                'Super comfortable: Pulling pressure is evenly distributed to the body to prevent pulling and choking.',
                'The dog vest harness has an adjustable chest strap with a snap-on buckle, moves its body parts freely, can customized fits for your dogs growth do not need to always change it.',
                'Sturdy handle: The rugged nylon handle further enhances your distance from the dog and is more intimate with each other. It is also the best partner for service dogs and is easy to control your dog.',
                'Outdoor safety: Reflective straps to ensure your dog is highly visible and keep dogs safe at night. You can connect the dog leash on the D-ring and it is safer on crowded streets. The high-end harness is perfect for daily walking, running, hiking, training, hunting, outdoor adventure, and more.',
                'Specifications-> Type: Dogs',
                'Specifications-> Type: Harnesses',
                'Specifications-> Material: Nylon',
                'Specifications-> Season: All seasons',
                'Specifications-> Feature: Personalized',
                'Package Content: 1* Dog Chest strap',
                'size -> (Baby 1	:    25-31CM)',
                'size -> (Baby 2	:    30-41CM)',
                'size -> (XS	    :    36-50CM)',
                'size -> (S	        :    50-60CM)',
                'size -> (M	        :    55-65CM)',
                'size -> (L	        :    65-80CM)',
                'size -> (XL	    :    70-90CM)',
                'size -> (XXL	    :    90-120CM)',
                'Package Content: 1*Dog rope'

                 
                ],
              
               variants: [
                    // Black
                    { colorName: "Black", colorCode: "#000000", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },
                    { colorName: "Black", colorCode: "#000000", size: "Baby2", price: "£27.81", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },
                    { colorName: "Black", colorCode: "#000000", size: "L", price: "£30.32", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },
                    { colorName: "Black", colorCode: "#000000", size: "M", price: "£32.30", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },
                    { colorName: "Black", colorCode: "#000000", size: "S", price: "£36.59", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },
                    { colorName: "Black", colorCode: "#000000", size: "XL", price: "£32.00", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },
                    { colorName: "Black", colorCode: "#000000", size: "XS", price: "£31.96", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },
                    { colorName: "Black", colorCode: "#000000", size: "XXL", price: "£43.21", images: ["../assets/images/dogs/Personalized Dog Harness/black.jpg"] },

                    // Blue and stars
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "L", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "M", price: "£36.08", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "S", price: "£36.69", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "XL", price: "£31.47", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "XS", price: "£23.77", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },
                    { colorName: "Blue and stars", colorCode: "#1E90FF", size: "XXL", price: "£36.72", images: ["../assets/images/dogs/Personalized Dog Harness/Blue and stars.jpg"] },

                    // Blue
                    { colorName: "Blue", colorCode: "#0000FF", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "L", price: "£38.54", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "M", price: "£37.30", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "S", price: "£31.93", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "XL", price: "£38.27", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "XS", price: "£27.20", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },
                    { colorName: "Blue", colorCode: "#0000FF", size: "XXL", price: "£43.08", images: ["../assets/images/dogs/Personalized Dog Harness/blue.jpg"] },

                    // Camouflage Pink
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "L", price: "£30.74", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "M", price: "£28.81", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "S", price: "£33.87", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "XL", price: "£38.42", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "XS", price: "£26.19", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },
                    { colorName: "Camouflage Pink", colorCode: "#FFC0CB", size: "XXL", price: "£33.16", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage Pink.jpg"] },

                      // Camouflage blue
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "L", price: "£32.12", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "M", price: "£29.47", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "S", price: "£28.64", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "XL", price: "£34.12", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "XS", price: "£26.20", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },
                    { colorName: "Camouflage blue", colorCode: "#5F9EA0", size: "XXL", price: "£42.26", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage blue.jpg"] },

                    // Camouflage green
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "L", price: "£42.45", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "M", price: "£30.56", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "S", price: "£28.64", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "XL", price: "£31.47", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "XS", price: "£27.20", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },
                    { colorName: "Camouflage green", colorCode: "#556B2F", size: "XXL", price: "£33.16", images: ["../assets/images/dogs/Personalized Dog Harness/Camouflage green.png"] },

                    // Green
                    { colorName: "Green", colorCode: "#008000", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },
                    { colorName: "Green", colorCode: "#008000", size: "Baby2", price: "£26.69", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },
                    { colorName: "Green", colorCode: "#008000", size: "L", price: "£35.96", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },
                    { colorName: "Green", colorCode: "#008000", size: "M", price: "£34.81", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },
                    { colorName: "Green", colorCode: "#008000", size: "S", price: "£27.07", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },
                    { colorName: "Green", colorCode: "#008000", size: "XL", price: "£34.52", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },
                    { colorName: "Green", colorCode: "#008000", size: "XS", price: "£36.37", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },
                    { colorName: "Green", colorCode: "#008000", size: "XXL", price: "£38.50", images: ["../assets/images/dogs/Personalized Dog Harness/Green.jpg"] },

                    // Mosaic
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "L", price: "£32.86", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "M", price: "£29.11", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "S", price: "£29.01", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "XL", price: "£34.22", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "XS", price: "£26.69", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },
                    { colorName: "Mosaic", colorCode: "#DAA520", size: "XXL", price: "£33.16", images: ["../assets/images/dogs/Personalized Dog Harness/Mosaic.jpg"] },

                    // Orange
                    { colorName: "Orange", colorCode: "#FFA500", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Orange.jpg"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Orange.jpg"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "L", price: "£29.79", images: ["../assets/images/dogs/Personalized Dog Harness/Orange.jpg"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "M", price: "£27.40", images: ["../assets/images/dogs/Personalized Dog Harness/Orange.jpg"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "S", price: "£27.35", images: ["../assets/images/dogs/Personalized Dog Harness/Orange.jpg"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "XL", price: "£34.30", images: ["../assets/images/dogs/Personalized Dog Harness/Orange.jpg"] },
                    { colorName: "Orange", colorCode: "#FFA500", size: "XXL", price: "£33.16", images: ["../assets/images/dogs/Personalized Dog Harness/Orange.jpg"] },

                    // Pink
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "L", price: "£34.70", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "M", price: "£33.93", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "S", price: "£28.95", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "XL", price: "£32.00", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "XS", price: "£36.36", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },
                    { colorName: "Pink", colorCode: "#DDA0DD", size: "XXL", price: "£33.71", images: ["../assets/images/dogs/Personalized Dog Harness/Pink.jpg"] },


                     //  Purple
                    { colorName: " Purple", colorCode: "#800080", size: "Baby1", price: "£22.32", images: ["../assets/images/dogs/Personalized Dog Harness/Purple.jpg"] },
                    { colorName: " Purple", colorCode: "#800080", size: "Baby2", price: "£22.56", images: ["../assets/images/dogs/Personalized Dog Harness/ Purple.jpg"] },
                    { colorName: " Purple", colorCode: "#800080", size: "L", price: "£35.06", images: ["../assets/images/dogs/Personalized Dog Harness/ Purple.jpg"] },
                    { colorName: " Purple", colorCode: "#800080", size: "M", price: "£27.87", images: ["../assets/images/dogs/Personalized Dog Harness/ Purple.jpg"] },
                    { colorName: " Purple", colorCode: "#800080", size: "S", price: "£36.89", images: ["../assets/images/dogs/Personalized Dog Harness/ Purple.jpg"] },
                    { colorName: " Purple", colorCode: "#800080", size: "XL", price: "£36.54", images: ["../assets/images/dogs/Personalized Dog Harness/ Purple.jpg"] },
                    { colorName: " Purple", colorCode: "#800080", size: "XS", price: "£32.17", images: ["../assets/images/dogs/Personalized Dog Harness/ Purple.jpg"] },
                    { colorName: " Purple", colorCode: "#800080", size: "XXL", price: "£41.85", images: ["../assets/images/dogs/Personalized Dog Harness/ Purple.jpg"] },

                    // Red
                    { colorName: "Red", colorCode: "#FF0000", size: "L", price: "£36.62", images: ["../assets/images/dogs/Personalized Dog Harness/Red.jpg"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "M", price: "£36.85", images: ["../assets/images/dogs/Personalized Dog Harness/Red.jpg"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "S", price: "£36.79", images: ["../assets/images/dogs/Personalized Dog Harness/Red.jpg"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "XL", price: "£42.82", images: ["../assets/images/dogs/Personalized Dog Harness/Red.jpg"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "XS", price: "£32.17", images: ["../assets/images/dogs/Personalized Dog Harness/Red.jpg"] },
                    { colorName: "Red", colorCode: "#FF0000", size: "XXL", price: "£38.15", images: ["../assets/images/dogs/Personalized Dog Harness/Red.jpg"] },

                    // Rose Red
                    { colorName: "Rose Red", colorCode: "#C21E56", size: "L", price: "£33.21", images: ["../assets/images/dogs/Personalized Dog Harness/Rose Red.jpg"] },
                    { colorName: "Rose Red", colorCode: "#C21E56", size: "M", price: "£28.79", images: ["../assets/images/dogs/Personalized Dog Harness/Rose Red.jpg"] },
                    { colorName: "Rose Red", colorCode: "#C21E56", size: "S", price: "£31.63", images: ["../assets/images/dogs/Personalized Dog Harness/Rose Red.jpg"] },
                    { colorName: "Rose Red", colorCode: "#C21E56", size: "XL", price: "£32.00", images: ["../assets/images/dogs/Personalized Dog Harness/Rose Red.jpg"] },
                    { colorName: "Rose Red", colorCode: "#C21E56", size: "XS", price: "£23.47", images: ["../assets/images/dogs/Personalized Dog Harness/Rose Red.jpg"] },
                    { colorName: "Rose Red", colorCode: "#C21E56", size: "XXL", price: "£38.18", images: ["../assets/images/dogs/Personalized Dog Harness/Rose Red.jpg"] },
                                    
                    ]



            },
             'Removable-Pet-Litter-Dog': {
                title: 'Removable Pet Litter Dog   ',
                word: '  CJGY166517503CX',
                codeWord: 'PawHut',
                description: 'Removable Pet Litter Dog Beds Pet Supplies.',
                features: [
                 'Product Information  -->  Color: Dark grey',
                 'Specifications: No. S: Tedibo Meishnari Cat, etc. [Recommended in 10 kg], No. M: Tedibo Meibi Bear Faduoki, etc. [Recommended in 30 kg], No. L: Hashimo Golden Wood Dog, etc. [Recommended in 60 kg], XL: Hashimo Alaska, etc. [Recommended in 90 kg]',


                 
                ],
                reviews: [{
                    name: "Marc Kärkönen",
                    stars: 5,
                    text: "It is very amzing."
                }],
              
                 variants : [
                
                // Gray
                { colorName: "Gray", colorCode: "#808080", size: "L", price: "£122.99", images: ['../assets/images/dogs/Removable Pet Litter Dog/Removable Pet Litter Dog -1.jpg'] },
                { colorName: "Gray", colorCode: "#808080", size: "M", price: "£110.99", images: ['../assets/images/dogs/Removable Pet Litter Dog/Removable Pet Litter Dog -2.jpg'] },
                { colorName: "Gray", colorCode: "#808080", size: "S", price: "£101.99", images: ['../assets/images/dogs/Removable Pet Litter Dog/Removable Pet Litter Dog -3.jpg'] },
                { colorName: "Gray", colorCode: "#808080", size: "XL", price: "£140.99", images: ['../assets/images/dogs/Removable Pet Litter Dog/Removable Pet Litter Dog -4.jpg'] },
                
                 ]

            },
             'Dog-Chest-And-Back': {
                title: 'Dog Chest And Back    ',
                word: ' CJGY208647807GT',
                codeWord: 'PawHut',
                description: 'Dog Chest And Back Reflective Commuter Hand Holding Rope.',
                features: [
                 'Material : Cloth',
                 'Product  : Attributes Ordinary',
                 'Package Size  : 410*350*20(mm); 360*300*20(mm); 330*280*20(mm)',
                 'Product information --> Color: Orange, Army Green, gray, chocolate,',
                 'Product information -->Material: Oxford cloth',
                 'Product information --> Category: Pet chain rope',
                 'Packing list:Traction belt*1pc'


                 
                ],
               
              
                 variants : [
                // Army Green
                { colorName: "Army Green", colorCode: "#4B5320", size: "L",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Army Green-1.jpeg"] },
                { colorName: "Army Green", colorCode: "#4B5320", size: "M",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Army Green-1.jpeg"] },
                { colorName: "Army Green", colorCode: "#4B5320", size: "S",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Army Green-2.jpeg"] },
                { colorName: "Army Green", colorCode: "#4B5320", size: "XL", price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Army Green-2.jpeg"] },

                // Chocolate
                { colorName: "Chocolate", colorCode: "#7B3F00", size: "L",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Chocolate -1.jpeg"] },
                { colorName: "Chocolate", colorCode: "#7B3F00", size: "M",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Chocolate -1.jpeg"] },
                { colorName: "Chocolate", colorCode: "#7B3F00", size: "S",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Chocolate -2.jpeg"] },
                { colorName: "Chocolate", colorCode: "#7B3F00", size: "XL", price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Chocolate -2.jpeg"] },

                // Gray
                { colorName: "Gray", colorCode: "#808080", size: "L",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Gray-1.jpeg"] },
                { colorName: "Gray", colorCode: "#808080", size: "M",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Gray-1.jpeg"] },
                { colorName: "Gray", colorCode: "#808080", size: "S",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Gray-2.jpeg"] },
                { colorName: "Gray", colorCode: "#808080", size: "XL", price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Gray-2.jpeg"] },

                // Orange
                { colorName: "Orange", colorCode: "#FFA500", size: "L",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Orange-1.jpeg"] },
                { colorName: "Orange", colorCode: "#FFA500", size: "M",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Orange-1.jpeg"] },
                { colorName: "Orange", colorCode: "#FFA500", size: "S",  price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Orange-2.jpeg"] },
                { colorName: "Orange", colorCode: "#FFA500", size: "XL", price: "£51.00", images: ["../assets/images/dogs/Dog Chest And Back/Orange-2.jpeg"] },
                ]

            },

            // ... باقي منتجات الألوان والأحجام ...

            // =================================================
            // القسم 2: منتجات بألوان فقط (كما هي)
            // =================================================
            // =================================================
            // القسم 2: منتجات بألوان فقط
            // =================================================
            'Dog-bowl': {
                title: 'Dog-bowl',
                word: 'CJJJCWGY00676',
                codeWord: 'PawHut',
                description: 'The dog feeder is the one-stop solution for busy dogs. You can schedule up to 6 feedings.',
                features: [
                    'Name: Ball type automatic water refill bowl.',
                    'Material: stainless steel + plastic.',
                    'Color: vintage blue, smoke gray, ancient pink.'
                ],
                reviews: [
                    { name: "Julie Vits", stars: 4.5, text: "Is the water tank equipped with a filter?" },
                    { name: "Zsalondi Pope", stars: 5, text: "I believe Marble A is connected to the wrong photo." }
                ],
                variants: [
                    { colorName: "A Blue", colorCode: "#3A8FB7", size: "Standard", price: "£18.67", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-77.png'] },
                    { colorName: "A Gray", colorCode: "#A0A0A0", size: "Standard", price: "£18.67", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-2.png'] },
                    { colorName: "A Pink", colorCode: "#F4A7B9", size: "Standard", price: "£21.74", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-3.png'] },
                    { colorName: "B Blue", colorCode: "#4A90E2", size: "Standard", price: "£43.54", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-88.png'] },
                    { colorName: "B Pink", colorCode: "#FF6F91", size: "Standard", price: "£43.54", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-5.png'] },
                    { colorName: "Cherry powder", colorCode: "#FFB7C5", size: "Standard", price: "£42.33", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-6.png'] },
                    { colorName: "Gray", colorCode: "#A0A0A0", size: "Standard", price: "£23.30", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-3.png'] },
                    { colorName: "Green", colorCode: "#3CB371", size: "Standard", price: "£42.33", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-8.png'] },
                    { colorName: "Green A", colorCode: "#6DBE45", size: "Standard", price: "£42.33", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-8.png'] },
                    { colorName: "Marble", colorCode: "#E6E1D3", size: "Standard", price: "£42.33", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-66.png'] },
                    { colorName: "Marble A", colorCode: "#C9C0BB", size: "Standard", price: "£42.33", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-66.png'] },
                    { colorName: "Pink", colorCode: "#F4A7B9", size: "Standard", price: "£30.03", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-9.png'] },
                    { colorName: "Vintage blue", colorCode: "#7B9ACC", size: "Standard", price: "£23.30", originalPrice: "", images: ['../assets/images/dogs/Dog bowl/Dog bowl in-77.png'] },
                   
                ]
            },
            'Smart-Pet-Hair-Dryer-Dog': {
                title: 'Smart Pet Hair Dryer Dog  ',
                word: ' CJMY175296008HS',
                codeWord: 'PawHut',
                description: 'Smart Pet Hair Dryer Dog Golden Retriever Cat Grooming Hairdressing Blow & Comb Silent No Harm Pet Cleaning Supplies Pet Products.',
                features: [
                   'Material: ABS',
                   'Specifications: 【 Simple White 】 NEX Intelligent Blowing and Combing Integrated Machine, 【 Elegant Purple 】 NEX Intelligent Blowing and Combing Integrated Machine',
                   'Rated power: 300W',
                   'Rated power supply: 220V',
                   'Product size: 260 * 95 * 95mm',
                   'Speed: 40000 rpm',
                   'Product material: ABS+PA+30% GF',
                   'Net weight of product: approximately 400g',
                   'Product Color: Simple White Light Elegant Purple'
                ],
                reviews: [{
                    name: "ja*m",
                    stars: 5,
                    text: "the pet hair dryer come with 4 fan speed. can select temperature from 35 c degree to 60 c degree. there is one button to easy clean the fur from the comb. another button to dissamble the comb part from body. there is also a filter to prevent fur come inside the machine."
                }, {
                    name: "Halazia Market",
                    stars: 1,
                    text: "No CE available?."
                }],
                variants: [
                    { colorName: "Purple", colorCode: "#800080", size: "Standard", price: "£58.99",  images: [
                        '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog pu.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-1.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-2.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-3.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-4.png'
    
                    ] },
                    { colorName: "White", colorCode: "#ffffff", size: "Standard", price: "£58.99",  images: [
                     '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-1.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-2.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-3.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-4.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-5.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-6.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-7.jpg',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-8.png',
                         '../assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-9.jpg'

            
                    ] },
                    
                ]
            },
            // ... باقي منتجات الألوان فقط ...

            // =================================================
            // القسم 3: **جديد** - منتجات بألوان واستايلات (Color & Style)
            // =================================================
            'Pet-Cat-Brush-Dog-Slicker': {
                title: 'Pet Cat Brush Dog Slicker',
                word: 'CJMY168803104DW',
                codeWord: 'PawHut',
                description: 'Pet Cat Brush Dog Slicker Brush Double-headed Negative Ion One-button Self Cleaning Dog Cat Hair Removal Pets Products.',
                features: ['Durable canvas material', 'Mesh windows for ventilation', 'Removable fleece bed', 'Adjustable shoulder strap'],
                reviews: [{ name: "Fashion Pet", stars: 5, text: "So chic and my dog loves it!" }],
                variants: [
                    { colorName: "Blue", colorCode: "#0000FF", style: "Blue Light",      price: "£0.00", images: ['../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker blue-1.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker blue-2.jpg'] },
                    { colorName: "Blue", colorCode: "#0000FF", style: "Negative ion",    price: "£0.00", images: ['../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker blue-3.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker blue-4.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker blue-5.jpg'] },

                    // Grey
                    { colorName: "Grey", colorCode: "#808080", style: "Blue Light",      price: "£0.00", images: ['../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker gray-1.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker gray-2.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker gray-3.jpg'] },
                    { colorName: "Grey", colorCode: "#808080", style: "Negative ion",    price: "£0.00", images: ['../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker gray-4.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker gray-5.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker gray-6.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker gray-7.jpg'] },

                    // Pink
                    { colorName: "Pink", colorCode: "#FFC0CB", style: "Blue Light",      price: "£0.00", images: ['../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker pink-1.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker pink-2.jpg'] },
                    { colorName: "Pink", colorCode: "#FFC0CB", style: "Negative ion",    price: "£0.00", images: ['../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker pink-3.jpg','../assets/images/pet/Pet Cat Brush Dog Slicker/Pet Cat Brush Dog Slicker pink-6.jpg'] },
                    ]
            },
            'Dog-Leash-Retractable': {
                title: 'Dog Leash Retractable',
                word: 'CJGX122193009IR',
                codeWord: 'PawHut',
                description: 'Dog Leash Retractable Leash And Dog Collar Spotlight Automatic Pet Dog Cat Traction Rope For Small Medium Dogs Pet Product.',
                features: [
                   '100% Brand New and Top Quality.',
                   'Give your dog good reach and freedom of movement.',
                   'This belt is suitable for Small medium / large Pets.',
                   'One-handed braking and locking system keeps pets from moving forward.',
                   'Telescopic design, the belt can automatically stretch and pull out.',
                   'Button with the lock button.',
                   'The large handles are easy to grip.',
                   'Product information: Material: ABS',
                   'Product information: Scalable: Yes',
                   'Product information: Color: Dream Purple 3m, Sunshine Orange 3m, Mint Green 3m, Explosion-proof ★Dream Purple 5m, Explosion-proof ★Sunshine Orange 5m, Explosion-proof ★Mint Green 5m',
                   'Product information: Specifications (length * width): single traction rope (automatic telescopic one-button brake), traction rope + small collar, traction rope + medium collar, traction rope + large collar',
                   'Product information: Size: Small 17.5*9*4.8cm Large 18.5*11*5cm',
                   'Packing list: 1*towing rope/1*towing rope+1*collar'
                
                ],
                variants: [
                   // Green 3M
                { colorName: "Green 3M", colorCode: "#008000", style: "Single traction rope", price: "£48.61", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable-1.jpg'] },
                { colorName: "Green 3M", colorCode: "#008000", style: "Tow rope and small collar", price: "55.83", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable-2.jpg'] },

                // Green 5M
                { colorName: "Green 5M", colorCode: "#008000", style: "Single traction rope", price: "£55.08", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable green-1.jpg'] },
                { colorName: "Green 5M", colorCode: "#008000", style: "Tow rope and small collar", price: "£62.37", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable green-1.jpg'] },

                // Orange 3M
                { colorName: "Orange 3M", colorCode: "#FFA500", style: "Single traction rope", price: "£48.61", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable orang.jpg'] },
                { colorName: "Orange 3M", colorCode: "#FFA500", style: "Tow rope and small collar", price: "£55.83", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable orang.jpg'] },

                // Orange 5M
                { colorName: "Orange 5M", colorCode: "#FFA500", style: "Single traction rope", price: "£55.08", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable orange-1.jpg'] },
                { colorName: "Orange 5M", colorCode: "#FFA500", style: "Tow rope and small collar", price: "£59.95", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable orange-2.jpg'] },

                // Purple 3M
                { colorName: "Purple 3M", colorCode: "#800080", style: "Single traction rope", price: "£48.61", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable purbla-1.jpg'] },
                { colorName: "Purple 3M", colorCode: "#800080", style: "Tow rope and small collar", price: "£55.83", images: ['../assets/images/dogs/Dog Leash Retractable/Dog Leash Retractable purbla-2.jpg'] },

                // Purple 5M
                { colorName: "Purple 5M", colorCode: "#800080", style: "Single traction rope", price: "£59.45", images: ['../assets/images/dogs/Dog Leash Retractable/purble-1.jpg'] },
                { colorName: "Purple 5M", colorCode: "#800080", style: "Tow rope and small collar", price: "£59.95", images: ['../assets/images/dogs/Dog Leash Retractable/purble-2.jpg'] },
                ]
            },
            'Automatic-Pet-Feeder': {
                title: 'Automatic Pet Feeder',
                word: 'CJGX122193009IR',
                codeWord: 'PawHut',
                description: 'Automatic Pet Feeder Smart Food Dispenser For Cats Dogs Timer Stainless Steel Bowl Auto Dog Cat Pet Feeding Pets Supplies.',
                features: [
                  'Material : Plastic',
                  'Product Attributes   :  Electronic',
                  'Package Size    :  290*250*82(mm); 250*150*82(mm)',
                  '2-in-1 Gravity Food Feeder. A pet water feeder can hold a gallon of water.',
                  'Gravity cat feeder and Water dispenser natural gravity water supply and feeding system, do not need to use electricity. You can save electricity and be more secure.',
                  'Product Information: Specification: single meal, double meal',
                  'Product Information: Color: pink, gray',
                  'Product Information: Size: single meal 24 * 14 * 7.5cm, double meal 28.5 * 24.5 * 7.5cm',
                  'Packing List:  Feeder*1 '

                
                ],
                variants: [
                    // Grey
                    { colorName: "Grey", colorCode: "#808080", style: "Single meal", price: "£36.73", images: ['../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder gray single.png','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-1.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-2.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-3.jpg'] },
                    { colorName: "Grey", colorCode: "#808080", style: "Double meal", price: "£49.85", images: ['../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder gray double.png','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-4.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-5.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-6.jpg'] },

                    // Pink
                    { colorName: "Pink", colorCode: "#FFC0CB", style: "Single meal", price: "£36.73", images: ['../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder pink single.png','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-1.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-2.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-3.jpg'] },
                    { colorName: "Pink", colorCode: "#FFC0CB", style: "Double meal", price: "£49.85", images: ['../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder pink double.png','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-4.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-5.jpg','../assets/images/pet/Automatic Pet Feeder/Automatic Pet Feeder-6.jpg'] },
                    ]
                },

            // =================================================
            // القسم 4: **جديد** - منتجات بألوان وفورمات (Color & Format)
            // =================================================
            'New-Splice-Portable': {
                title: 'New Splice Portable',
                word: 'CJGY184816007GT',
                codeWord: 'TagMaster',
                description: 'New Splice Portable Pet Nest Portable Autumn And Winter Warm Dog Nest Moisture-proof Long Fur Cat Nest Cross Border Pet Nest.',
                features: [
                    'Material  :  Cloth',
                    'Product Attributes   : Ordinary',
                    'Package Size  :  400*350*120(mm)',
                    '1. Ultimate Comfort - This cat house is made of soft materials and its semi-enclosed design provides your cat with a safe rest and relaxation space, while also providing ample privacy.',
                    '2. Multi-functional and easy to clean - this cat house is not only suitable for resting but can also be used as a paradise for playing and frolicking. Cleaning is also very easy, just gently shake or wipe it.',
                    '3. Excellent decoration - This cat s nest villa is not only a functional product but also a beautiful decorative piece. Whether in the living room, bedroom, or balcony, this cats nest can add warmth and elegance.',
                    'Product Information: Color: splicing portable pink, splicing portable Gray, splicing portable Brown',
                    'Product Information: Specification: M(40*30*28) less than 10 Jin, L(50*40*34) less than 20 Jin',
                    'Product Information: Material: striped plush',
                    'Product Information: Applicable object: Dog',
                    'Packing List: Pet nestX1'
                ],
                reviews: [{ name: "T***m", stars: 5, text: "so warm!." }],
                variants: [
                     // Brown with stickers
                    { colorName: "Brown with stickers", colorCode: "#8B4513", format: "L", price: "£28.01", images: ['../assets/images/dogs/New Splice Portable/Brown with stickers.jpeg'] },
                    { colorName: "Brown with stickers", colorCode: "#8B4513", format: "M", price: "£28.01", images: ['../assets/images/dogs/New Splice Portable/Brown with stickers.jpeg'] },

                    // Grey with stickers
                    { colorName: "Grey with stickers", colorCode: "#808080", format: "L", price: "£36.48", images: ['../assets/images/dogs/New Splice Portable/Grey with stickers.jpg'] },
                    { colorName: "Grey with stickers", colorCode: "#808080", format: "M", price: "£27.93", images: ['../assets/images/dogs/New Splice Portable/Grey with stickers.jpg'] },

                    // Pink with stickers
                    { colorName: "Pink with stickers", colorCode: "#FFC0CB", format: "L", price: "£36.58", images: ['../assets/images/dogs/New Splice Portable/Pink with stickers.jpg'] },
                    { colorName: "Pink with stickers", colorCode: "#FFC0CB", format: "M", price: "£27.93", images: ['../assets/images/dogs/New Splice Portable/Pink with stickers.jpg'] },

                    // Splicing Portable Brown
                    { colorName: "Splicing Portable Brown", colorCode: "#A0522D", format: "L", price: "£35.58", images: ['../assets/images/dogs/New Splice Portable/Splicing Portable Brown.jpg'] },
                    { colorName: "Splicing Portable Brown", colorCode: "#A0522D", format: "M", price: "£33.42", images: ['../assets/images/dogs/New Splice Portable/Splicing Portable Brown.jpg'] },

                    // Splicing Portable Gray
                    { colorName: "Splicing Portable Gray", colorCode: "#696969", format: "L", price: "£35.58", images: ['../assets/images/dogs/New Splice Portable/Splicing Portable Gray.jpg'] },
                    { colorName: "Splicing Portable Gray", colorCode: "#696969", format: "M", price: "£29.42", images: ['../assets/images/dogs/New Splice Portable/Splicing Portable Gray.jpg'] },

                    // Splicing Portable Pink
                    { colorName: "Splicing Portable Pink", colorCode: "#FFB6C1", format: "L", price: "£46.98", images: ['../assets/images/dogs/New Splice Portable/Splicing Portable Pink.jpg'] },
                    { colorName: "Splicing Portable Pink", colorCode: "#FFB6C1", format: "M", price: "£35.29", images: ['../assets/images/dogs/New Splice Portable/Splicing Portable Pink.jpg'] },
                    ]
            }
        };

        // --- 2. تعريف عناصر الصفحة (مع إضافة عناصر جديدة) ---
        const pageElements = {
            productPage: document.querySelector('.product-page'),
            title: document.querySelector('.product-title'),
            currentPrice: document.querySelector('.current-price'),
            originalPrice: document.querySelector('.original-price'),
            descriptionText: document.getElementById('product-description-text'),
            brand: document.querySelector('.product-brand'),
            sku: document.querySelector('.product-sku'),
            mainImage: document.getElementById('main-product-image'),
            thumbnailList: document.querySelector('.thumbnail-list'),
            quantityInput: document.getElementById('quantity'),
            decreaseBtn: document.getElementById('decrease-quantity'),
            increaseBtn: document.getElementById('increase-quantity'),
            colorOptionsContainer: document.getElementById('color-options-container'),
            selectedColorName: document.getElementById('selected-color-name'),
            // **تعديل** عناصر الخيارات الثانوية
            secondaryOptionsContainer: document.getElementById('secondary-options-container'),
            selectedSecondaryOptionName: document.getElementById('selected-secondary-option-name'),
            secondarySelectorWrapper: document.getElementById('secondary-selector-wrapper'),
            secondarySelectorLabel: document.getElementById('secondary-selector-label'), // ليبل الخيار الثاني
            colorSelectorWrapper: document.getElementById('color-selector-wrapper'),
            reviewsContainer: document.getElementById('reviews-container'),
            featuresList: document.getElementById('product-features-list'),
            closeButton: document.getElementById('close-product-page'), // زر الإغلاق
        };

        // --- 3. دالة تحديث واجهة المستخدم (مُحسّنة لتكون مرنة) ---
        function updateUI(product) {
            // (أ) تحديث المعلومات الأساسية
            pageElements.title.textContent = product.title;
            pageElements.descriptionText.textContent = product.description;
            pageElements.brand.textContent = product.codeWord || 'N/A';
            pageElements.sku.textContent = product.word || 'N/A';
            pageElements.mainImage.src = product.images ? product.images[0] : (product.variants[0]?.images[0] || '');

            // (ب) عرض الميزات
            pageElements.featuresList.innerHTML = '';
            if (product.features && product.features.length > 0) {
                product.features.forEach(featureText => {
                    const listItem = document.createElement('li');
                    listItem.textContent = featureText;
                    pageElements.featuresList.appendChild(listItem);
                });
            }

            // (ج) عرض المراجعات
            pageElements.reviewsContainer.innerHTML = '';
            if (product.reviews && product.reviews.length > 0) {
                product.reviews.forEach(review => {
                    const reviewCard = document.createElement('div');
                    reviewCard.className = 'review-card';
                    let starsHTML = Array.from({ length: 5 }, (_, i) =>
                        i < Math.floor(review.stars) ? '<ion-icon name="star"></ion-icon>' :
                        i < review.stars ? '<ion-icon name="star-half-outline"></ion-icon>' :
                        '<ion-icon name="star-outline"></ion-icon>'
                    ).join('');
                    reviewCard.innerHTML = `
                        <div class="review-header">
                            <span class="reviewer-name">${review.name}</span>
                            <div class="review-stars">${starsHTML}</div>
                        </div>
                        <p class="review-text">${review.text}</p>`;
                    pageElements.reviewsContainer.appendChild(reviewCard);
                });
            } else {
                pageElements.reviewsContainer.innerHTML = '<p>لا توجد مراجعات لهذا المنتج حتى الآن.</p>';
            }

            // (د) التعامل مع خيارات المنتج (variants) بمرونة
            if (!product.variants || product.variants.length === 0) {
                pageElements.currentPrice.textContent = product.price || '';
                pageElements.originalPrice.textContent = product.originalPrice || '';
                pageElements.colorSelectorWrapper.style.display = 'none';
                pageElements.secondarySelectorWrapper.style.display = 'none';
                return;
            }

            // تحديد نوع الخيار الثاني (size, style, format, etc.)
            const secondaryOptionKey = Object.keys(product.variants[0]).find(key => key !== 'colorName' && key !== 'colorCode' && key !== 'price' && key !== 'images' && key !== 'originalPrice');

            let selectedColor, selectedSecondaryOption;
            const uniqueColors = [...new Map(product.variants.map(v => [v.colorName, v])).values()];
            const uniqueSecondaryOptions = secondaryOptionKey ? [...new Set(product.variants.map(v => v[secondaryOptionKey]))] : [];

            pageElements.colorSelectorWrapper.style.display = uniqueColors.length > 1 ? 'block' : 'none';
            pageElements.secondarySelectorWrapper.style.display = uniqueSecondaryOptions.length > 1 ? 'block' : 'none';

            if (secondaryOptionKey) {
                pageElements.secondarySelectorLabel.textContent = secondaryOptionKey.charAt(0).toUpperCase() + secondaryOptionKey.slice(1); // يجعل الحرف الأول كبيراً
            }

            function updateSelection() {
                const variant = product.variants.find(v =>
                    v.colorName === selectedColor &&
                    (!secondaryOptionKey || v[secondaryOptionKey] === selectedSecondaryOption)
                );

                if (variant) {
                    pageElements.currentPrice.textContent = variant.price || 'N/A';
                    pageElements.originalPrice.textContent = variant.originalPrice || '';
                    if (variant.images && variant.images.length > 0) {
                        pageElements.mainImage.src = variant.images[0];
                        renderThumbnails(variant.images);
                    }
                }
            }

            function renderThumbnails(images) {
                pageElements.thumbnailList.innerHTML = '';
                images.forEach((imgSrc, index) => {
                    const thumbItem = document.createElement('div');
                    thumbItem.className = 'thumbnail-item';
                    if (index === 0) thumbItem.classList.add('active');
                    const thumbImg = document.createElement('img');
                    thumbImg.src = imgSrc;
                    thumbImg.alt = `Thumbnail ${index + 1}`;
                    thumbItem.appendChild(thumbImg);
                    thumbItem.addEventListener('click', () => {
                        pageElements.mainImage.src = imgSrc;
                        document.querySelectorAll('.thumbnail-item.active').forEach(item => item.classList.remove('active'));
                        thumbItem.classList.add('active');
                    });
                    pageElements.thumbnailList.appendChild(thumbItem);
                });
            }

            // عرض الخيارات الثانوية (Size, Style, Format)
            pageElements.secondaryOptionsContainer.innerHTML = '';
            if (secondaryOptionKey) {
                uniqueSecondaryOptions.forEach((optionValue, index) => {
                    const optionButton = document.createElement('button');
                    optionButton.className = 'option-button'; // فئة موحدة
                    optionButton.textContent = optionValue;
                    optionButton.addEventListener('click', () => {
                        selectedSecondaryOption = optionValue;
                        pageElements.selectedSecondaryOptionName.textContent = optionValue;
                        document.querySelectorAll('#secondary-options-container .option-button.active').forEach(opt => opt.classList.remove('active'));
                        optionButton.classList.add('active');
                        updateSelection();
                    });
                    pageElements.secondaryOptionsContainer.appendChild(optionButton);
                    if (index === 0) {
                        optionButton.click();
                    }
                });
            }

            // عرض خيارات الألوان
            pageElements.colorOptionsContainer.innerHTML = '';
            uniqueColors.forEach((variant, index) => {
                const colorOption = document.createElement('div');
                colorOption.className = 'color-option';
                const colorInner = document.createElement('div');
                colorInner.className = 'color-inner';
                colorInner.style.backgroundColor = variant.colorCode;
                colorOption.appendChild(colorInner);
                colorOption.addEventListener('click', () => {
                    selectedColor = variant.colorName;
                    pageElements.selectedColorName.textContent = variant.colorName;
                    document.querySelectorAll('.color-option.active').forEach(opt => opt.classList.remove('active'));
                    colorOption.classList.add('active');
                    updateSelection();
                });
                pageElements.colorOptionsContainer.appendChild(colorOption);
                if (index === 0) {
                    colorOption.click();
                }
            });

            updateSelection();
        }



        // الحصول على العناصر من DOM
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const buyNowBtn = document.querySelector('.buy-now-btn');
const quantityInput = document.getElementById('quantity');
const productTitle = document.querySelector('.product-title').innerText;
const productPrice = document.querySelector('.current-price').innerText;

// دالة لإضافة المنتج إلى السلة
function addToCart() {
    const quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        // هنا يمكنك إضافة الكود الخاص بإضافة المنتج إلى السلة
        console.log(`Added ${quantity} of ${productTitle} to cart at ${productPrice}`);
        alert(`${quantity} of ${productTitle} has been added to your cart.`);
    } else {
        alert('Please select a valid quantity.');
    }
}

// دالة للشراء الآن
function buyNow() {
    const quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        // هنا يمكنك إضافة الكود الخاص بعملية الشراء
        console.log(`Proceeding to checkout for ${quantity} of ${productTitle} at ${productPrice}`);
        alert(`Proceeding to checkout for ${quantity} of ${productTitle}.`);
        // يمكنك توجيه المستخدم إلى صفحة الدفع هنا
    } else {
        alert('Please select a valid quantity.');
    }
}

// إضافة الأحداث للأزرار
addToCartBtn.addEventListener('click', addToCart);
buyNowBtn.addEventListener('click', buyNow);


        // --- 5. نقطة البداية والتحكم في الكمية وزر الإغلاق ---
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id') || 'Stylish-Pet-Carrier'; // منتج افتراضي لعرض المثال الجديد
        const product = productsData[productId];

        if (product) {
            updateUI(product);
        } else {
            pageElements.productPage.innerHTML = '<h1>عذراً، المنتج غير موجود.</h1>';
        }

        // التحكم بالكمية
        pageElements.increaseBtn.addEventListener('click', () => pageElements.quantityInput.value++);
        pageElements.decreaseBtn.addEventListener('click', () => {
            if (pageElements.quantityInput.value > 1) pageElements.quantityInput.value--;
        });

        // **جديد**: وظيفة زر الإغلاق
        pageElements.closeButton.addEventListener('click', () => {
           
            window.location.href = '../index.html';
        });
    });
}

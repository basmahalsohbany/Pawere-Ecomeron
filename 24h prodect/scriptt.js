
"use strict";


// detileis of project

// =================================================================
// الكود الجاهز والمعدل: قم بنسخ كل شيء من هنا فصاعدًا
// =================================================================

// استخدام علامة (flag) لمنع أي إعادة تنفيذ محتملة للكود
if (!window.myProductPageInitialized) {
    window.myProductPageInitialized = true;

    document.addEventListener('DOMContentLoaded', () => {

        // --- 1. قاعدة البيانات ---
        const productsData = {
            'Automatic-6-Meal': {
                title: 'Automatic Dog Bowl Feeder',
                word: 'CJFT233237201AZ',
                codeWord: 'PawHut',
                price: '£39.99',
                originalPrice: '£27.45',
                checkout : 'Shipping calculated at checkout',
                description: 'The dog feeder is the one-stop solution for busy dogs. You can schedule up to 6 feedings.',
                images: [
                    '../24h prodect/24h/image-1-2h4-1.jpg',
                    '../24h prodect/24h/image-1-2h4-2.jpg',
                    '../24h prodect/24h/image-1-2h4-3.jpg',
                    '../24h prodect/24h/image-1-2h4-4.jpg',
                    '../24h prodect/24h/image-1-2h4-5.jpg',
                    '../24h prodect/24h/image-1-2h4-6.jpg',
                    '../24h prodect/24h/image-1-2h4-7.jpg',
                    '../24h prodect/24h/image-1-2h4-8.jpg'
                ],
                features: [
                    'Schedules 6 meals.',
                    'Suitable for cats and dogs.',
                    'Easy-to-use LCD screen.',
                    'Removable and washable food tray.'
                ],
                reviews: [{
                    name: "Ahmed Seed",
                    stars: 4.5,
                    text: "A great product and very practical! It has helped me a lot in organizing my cat's meals. I highly recommend it."
                }, {
                    name: "Fatima Ali",
                    stars: 5,
                    text: "Excellent quality and easy to program. Works perfectly."
                }]
            },
            'Pet-Dog-Bed-Cat-Beds': {
                title: 'Pet Dog Bed Cat Beds',
                word: 'CJPN236233901AZ',
                codeWord: 'PawHut',
                price: '£98.22',
                originalPrice: '£78.22',
                checkout : 'Shipping calculated at checkout',
                description: 'Pet Dog Bed Cat Beds Luxury Soft Washable Puppy Cushion Warm Pet Basket- 90 70CM',
                images: [
                    '../24h prodect/24h/Pet Dog Bed Cat Beds -3.webp',
                    '../24h prodect/24h/Pet Dog Bed Cat Beds -4.webp',
                    '../24h prodect/24h/Pet Dog Bed Cat Beds 5.webp',
                    '../24h prodect/24h/Pet Dog Bed Cat Beds-2.jpg'
                ],
                features: [
                    "SOFT & COMFERTABLE DOG BED --- Feature for all season using, our pet bed for dog and cat made of both two sides using design,one side made of waterproof oxford fabric for the exterior ,suitable for Spring and Summer, the other side is soft warm fleece for the interior, suitable for Autumn and Winter.",
                    "SUPPLY HEAD AND NECK SUPPORT--- dog sleep cushion bed with the raised rim of the dog bolster bed creates a sense of security and provides them a secure feeling an d head & neck support while they are sleeping .",
                    "FOR CAT AND SMALL DOG --- dog bed pads with size asï¼  XXL - 90cm x 70cm x 15cm .  Our luxury dog mat bed is ideal for dogs and cats that like to feel a bed surround them contouring perfectly to your puppy and kitty for maximum comfort and a harmony night's sleep.",
                    "WATER-RESISTANT --- With the dog bed's waterproof oxford side, don't worry your dog and cat will knock over the water bowl and wet the pet bed, or the wet floors would make your dog and cat uncomfortable .",
                    "EASY CARE --- Machine wash, Line dry only .Do not use bleach, do not tumble dry, and do not dry clean or iron. Notice: The cover is not removable, just put the dog bed into the washing machine when you need to wash it .",
                    "Note: washable dog bed with soft fleece material, In order to maintain the three-dimensional effect, we recommend hand washing when cleaning.",
                    "WARM TIPS: The package you receive comes in a compressed package that can be reinstated after a few hours of leaving.",
                    "Main Features:",
                    "1. Premium grade quality:",
                    "Allows pet slumber luxuriously in a plush micro suede bolster bed;Super-soft polyester and furry material offer extreme comfort, cushy without being lumpy ,Soft fleece cover and comfortable polyester cushion, your pet would love it.",
                    "2. Supreme designed for Pe ts:",
                    "Healthy fabrics for all seasonsï¼ - Wear-resistant and non-slip, give pets better careï¼ - Soft and comfortable (breathable) warm keeper with durable design.",
                    "3. All-in-one design:",
                    "Adopt soft warm cotton cloth on the wall, washable and durable, Supports machine washable - Super easy to keep clean, fresh and like new.Create a comfortable bed for your pet's healthy sleeping and rest.",
                    "A product with a 50 percent discount. Buy now and it will be delivered to me within a maximum of 1-2 days. ❤️✅️"
                ],
                reviews: [{
                    name: "Omar hhhh",
                    stars: 5,
                    text: "My dog absolutely loves this bed! It's so soft and plush. He sleeps on it all the time. Great purchase."
                }, {
                    name: "Layla Hassan",
                    stars: 4,
                    text: "Good quality bed and the cover is washable which is a huge plus. It's a bit smaller than I expected, but my cat still likes it."
                }]
            },

            'Bird-Feeder-Squirrel-Resistant': {
                title: 'Bird Feeder Squirrel Resistant',
                word: 'CJFT238170601AZ',
                codeWord: 'PawHut',
                price: '£55.22',
                originalPrice: '£48.37',
                checkout : 'Shipping calculated at checkout',
                description: 'Bird Feeder Squirrel Resistant Bird Hanging Metal Feeding Station Green',
                images: [
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-2.webp',
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-3.webp',
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-4.webp',
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-5.webp',
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-6.webp',
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-7.webp',
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-8.webp',
                    '../24h prodect/24h/Bird-Feeder-Squirrel-Resistant-9.webp'
                ],
                features: [
                    "SQUIRREL PROOF DESIGN -- This large, heavy-duty feeder is expertly crafted to resist squirrels and large birds, ensuring your bird food is protected and smaller birds can feed peacefully. bird feeders; bird feeder; bird feeders for small birds; bird feeders hanging.",
                    "MATERIAL -- Made from high-quality heavy-duty metal, this feeder is built to withstand the elements and last for years, providing a reliable feeding station for your garden birds. bird seed feeder; hanging bird feeder; bird seed feeders hanging; wild bird feeders.",
                    "AMPLE SPACE -- With a full hanging height of 24cm and a diameter of 17cm, this feeder offers ample space for bird food, accommodating your wild bird seed. bird feeders amazon; garden bird feeders; bird feeder hanging; bird feeder.",
                    "EASY REFILLING -- The lid easily twists off, allowing for quick and hassle-free refilling without the need to take the entire feeder down from where it hangs. birdfeeders; bird seed feeders; bird feeder for small birds; outdoor bird feeders.",
                    "SIMPLE CLEANING -- Designed for convenience, the feeder's components can be easily disassembled and cleaned, ensuring a hygienic feeding environment for your birds. Seed bird feeder; birdfeeder; birdfeeder for garden; bird feeders for the garden.",
                    "A product with a 50% percent discount. Buy now and it will be delivered to me within a maximum of 1-2 days. ❤️✅️"
                ],
                reviews: [{
                    name: "samer mohmed",
                    stars: 5,
                    text: "My dog absolutely loves this bed! It's so soft and plush. He sleeps on it all the time. Great purchase."
                }, {
                    name: "Layla Hassan",
                    stars: 4,
                    text: "Good quality bed and the cover is washable which is a huge plus. It's a bit smaller than I expected, but my cat still likes it."
                }],
                
            },
            'Retractable-Lead-Leash': {
                title: 'Bird Feeder Squirrel Resistant',
                word: 'CJFT238170601AZ',
                codeWord: 'PawHut',
                price: '£55.22',
                originalPrice: '£48.37',
                checkout : 'Shipping calculated at checkout',
                description: 'Bird Feeder Squirrel Resistant Bird Hanging Metal Feeding Station Green',
                images: [
                    '../24h prodect/24h/Retractable Lead Leash-2.webp',
                    '../24h prodect/24h/Retractable Lead Leash-3.webp',
                    '../24h prodect/24h/Retractable Lead Leash-4.webp',
                    '../24h prodect/24h/Retractable Lead Leash-5.webp',
                    '../24h prodect/24h/Retractable Lead Leash-6.webp',
                    '../24h prodect/24h/Retractable Lead Leash-7.webp',
                    '../24h prodect/24h/Retractable Lead Leash-8.webp',
                    '../24h prodect/24h/Retractable Lead Leash-9.webp',
                ],
                features: [
                    "Feed your pet on schedule with this automatic 6-meal feeder. Ideal for cats and small dogs, it dispenses food at preset times—perfect for daily routines or holidays.",
                    "Specification:color: grey",
                    "Material: ABS",
                    "Capacity: 128ml" ,
                    "Power supply: 3 AA batteries (not included)",
                    "Dimensions: 30 x 7 cm",
                    "Suitable for: cats and dogs",
                    "Packing list:1* Pet Automatic Feeder（battery not included）1* Screwdriver"
                ],
                reviews: [{
                    name: "samer mohmed",
                    stars: 5,
                    text: "My dog absolutely loves this bed! It's so soft and plush. He sleeps on it all the time. Great purchase."
                }, {
                    name: "Layla Hassan",
                    stars: 4,
                    text: "Good quality bed and the cover is washable which is a huge plus. It's a bit smaller than I expected, but my cat still likes it."
                }],
                
            }
        };

        // --- 2. تعريف عناصر الصفحة ---
        const pageElements = {
            productPage: document.querySelector('.product-page'),
            title: document.querySelector('.product-title'),
            currentPrice: document.querySelector('.current-price'),
            originalPrice: document.querySelector('.original-price'),
            description: document.querySelector('.product-description p'),
            brand: document.querySelector('.product-brand'),
            sku: document.querySelector('.product-sku'),
            featuresList: document.getElementById('product-features-list'),
            reviewsContainer: document.getElementById('reviews-container'), // تمت إضافة حاوية التقييمات
            mainImage: document.getElementById('main-product-image'),
            thumbnailList: document.querySelector('.thumbnail-list'),
            quantityInput: document.getElementById('quantity'),
            decreaseBtn: document.getElementById('decrease-quantity'),
            increaseBtn: document.getElementById('increase-quantity'),
            zoomContainer: document.getElementById('zoom-container')
        };

        // --- 3. ربط الأحداث الثابتة (يعمل مرة واحدة فقط) ---
        pageElements.decreaseBtn.addEventListener('click', () => {
            let currentValue = parseInt(pageElements.quantityInput.value);
            if (currentValue > 1) {
                pageElements.quantityInput.value = currentValue - 1;
            }
        });

        pageElements.increaseBtn.addEventListener('click', () => {
            let currentValue = parseInt(pageElements.quantityInput.value);
            pageElements.quantityInput.value = currentValue + 1;
        });

        if (pageElements.zoomContainer) {
            pageElements.zoomContainer.addEventListener('mousemove', (e) => {
                const rect = pageElements.zoomContainer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                pageElements.mainImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
                pageElements.mainImage.style.transform = 'scale(1.75)';
            });

            pageElements.zoomContainer.addEventListener('mouseleave', () => {
                pageElements.mainImage.style.transform = 'scale(1)';
                pageElements.mainImage.style.transformOrigin = 'center center';
            });
        }

        // --- 4. دالة تحديث واجهة المستخدم ---
        function updateUI(product) {
            document.title = `صفحة المنتج - ${product.title}`;
            pageElements.title.textContent = product.title;
            pageElements.currentPrice.textContent = product.price;
            pageElements.originalPrice.textContent = product.originalPrice;
            pageElements.description.textContent = product.description;
            pageElements.brand.textContent = product.codeWord;
            pageElements.sku.textContent = product.word;
            pageElements.mainImage.src = product.images[0];

            // تحديث قائمة الميزات
            pageElements.featuresList.innerHTML = '';
            if (product.features && product.features.length > 0) {
                product.features.forEach(featureText => {
                    const listItem = document.createElement('li');
                    listItem.textContent = featureText;
                    pageElements.featuresList.appendChild(listItem);
                });
            }

            // ==========================================================
            // ==  الكود الجديد الخاص بتحديث التقييمات مضاف هنا  ==
            // ==========================================================
            pageElements.reviewsContainer.innerHTML = ''; // إفراغ الحاوية
            if (product.reviews && product.reviews.length > 0) {
                product.reviews.forEach(review => {
                    const reviewCard = document.createElement('div');
                    reviewCard.className = 'review-card';

                    const reviewHeader = document.createElement('div');
                    reviewHeader.className = 'review-header';

                    const reviewerName = document.createElement('span');
                    reviewerName.className = 'reviewer-name';
                    reviewerName.textContent = review.name;

                    const reviewStars = document.createElement('div');
                    reviewStars.className = 'review-stars';
                    for (let i = 1; i <= 5; i++) {
                        const starIcon = document.createElement('ion-icon');
                        if (i <= review.stars) {
                            starIcon.name = 'star';
                        } else if (i - 0.5 === review.stars) {
                            starIcon.name = 'star-half-outline';
                        } else {
                            starIcon.name = 'star-outline';
                        }
                        reviewStars.appendChild(starIcon);
                    }

                    const reviewText = document.createElement('p');
                    reviewText.className = 'review-text';
                    reviewText.textContent = review.text;

                    reviewHeader.appendChild(reviewerName);
                    reviewHeader.appendChild(reviewStars);
                    reviewCard.appendChild(reviewHeader);
                    reviewCard.appendChild(reviewText);

                    pageElements.reviewsContainer.appendChild(reviewCard);
                });
            } else {
                pageElements.reviewsContainer.innerHTML = '<p>لا توجد تقييمات لهذا المنتج حتى الآن.</p>';
            }
            // ==========================================================
            // ==          نهاية كود تحديث التقييمات          ==
            // ==========================================================


            // تحديث معرض الصور
            pageElements.thumbnailList.innerHTML = '';
            product.images.forEach((imgSrc, index) => {
                const thumbItem = document.createElement('div');
                thumbItem.className = 'thumbnail-item';
                if (index === 0) thumbItem.classList.add('active');
                const thumbImg = document.createElement('img');
                thumbImg.src = imgSrc;
                thumbImg.alt = `Thumbnail ${index + 1}`;
                thumbImg.className = 'thumbnail-img';
                thumbItem.appendChild(thumbImg);
                pageElements.thumbnailList.appendChild(thumbItem);
            });

            // إعادة ربط الأحداث للصور المصغرة
            const thumbnails = document.querySelectorAll('.thumbnail-item');
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', () => {
                    thumbnails.forEach(item => item.classList.remove('active'));
                    thumbnail.classList.add('active');
                    const newImageSrc = thumbnail.querySelector('.thumbnail-img').src;
                    pageElements.mainImage.src = newImageSrc;
                });
            });
        }

        // --- 5. نقطة البداية ---
        const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');
        const product = productsData[productId];

        if (product) {
            updateUI(product);
        } else {
            pageElements.productPage.innerHTML = '<h1> sorry , No prodect .</h1>';
        }
    });
}

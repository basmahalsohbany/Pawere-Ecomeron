// =================================================================
// الكود النهائي والموحد: هذا هو الملف الكامل
// =================================================================

// "use strict"; // يمكن وضعها مرة واحدة في الأعلى

// استخدام علامة (flag) لمنع أي إعادة تنفيذ محتملة للكود
if (!window.myProductPageInitialized) {
    window.myProductPageInitialized = true;

    console.log("تطبيق صفحة المنتج يعمل الآن (مرة واحدة فقط).");

    document.addEventListener('DOMContentLoaded', () => {

        // --- 1. قاعدة البيانات ---
        const productsData = {
            'Dog-bowl': {
                title: 'Dog Bowl ',
                word: 'CJJJCWGY00676',
                codeWord: 'PawHut',
                description: 'The dog feeder is the one-stop solution for busy dogs. You can schedule up to 6 feedings.',
                features: [
                    'Name: Ball type automatic water refill bowl.',
                    'Material: stainless steel + plastic.',
                    'Color: vintage blue, smoke gray, ancient pink.',
                    '300*140*150(mm); 200*230*340(mm); 310*210*310(mm)'
                ],
                reviews: [{
                    name: "Julie Vits",
                    stars: 4.5,
                    text: "Hello, I would like to have more information about this CJJCWGY00676-B Pink product. Is the water tank equipped with a filter? Is the water moving in the tank? Thank you for your response."
                }, {
                    name: "Zsalondi Pope",
                    stars: 5,
                    text: "I believe Marble A is connected to the wrong photo."
                }],
                variants: [{
                    colorName: "Pink",
                    colorCode: "#FFC0CB",
                    price: "£50.99",
                    originalPrice: "£42.33",
                    images: [
                        'E:/peware4u/project type/project/DOG bow pink-1.png',
                        'E:/peware4u/project type/project/DOG bow pink-2.png',
                        'E:/peware4u/project type/project/DOG bow pink-3.png',
                        'E:/peware4u/project type/project/DOG bow pink-4.jpg',
                    ]
                }, {
                    colorName: "Gray",
                    colorCode: "#808080",
                    price: "£39.99",
                    originalPrice: "£49.99",
                    images: [
                        'E:/peware4u/project type/project/DOG bow gray-1.jpg',
                        'E:/peware4u/project type/project/DOG bow gray-2.jpg',
                        'E:/peware4u/project type/project/DOG bow gray-3.png',
                        'E:/peware4u/project type/project/DOG bow gray-4.png'
                    ]
                }, {
                    colorName: "Blue",
                    colorCode: "#00FFFF",
                    price: "£42.99",
                    originalPrice: "£52.99",
                    images: [
                        'E:/peware4u/project type/project/Dog bowl-1.webp',
                        'E:/peware4u/project type/project/Dog bowl-2.webp',
                        'E:/peware4u/project type/project/Dog bowl-3.webp',
                        'E:/peware4u/project type/project/Dog bowl-4.webp',
                        'E:/peware4u/project type/project/Dog bowl-5.webp',
                        'E:/peware4u/project type/project/Dog bowl-6.webp',
                    ]
                }]
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
                variants: [{
                    colorName: "Purple",
                    colorCode: "#800080",
                    price: "£",
                    originalPrice: "£58.99",
                    images: [
                        'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog pu.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-1.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-2.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-3.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-4.png'
    
                    ]
                }, {
                    colorName: "White",
                    colorCode: "#ffffff",
                    price: "£39.99",
                    originalPrice: "£49.99",
                    images: [
                     'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-1.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-2.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-3.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-4.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-5.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-6.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-7.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-8.png',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-9.jpg'

            
                    ]
                }
                
            ]
            },
            'Smart-Pet-Hair-Dryer-Dog': {
                title: 'Cat Bed Pet Winter  ',
                word: '  CJJJCWMY01390',
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
                reviews: [{
                    name: "ja*m",
                    stars: 5,
                    text: "the pet hair dryer come with 4 fan speed. can select temperature from 35 c degree to 60 c degree. there is one button to easy clean the fur from the comb. another button to dissamble the comb part from body. there is also a filter to prevent fur come inside the machine."
                }, {
                    name: "Halazia Market",
                    stars: 1,
                    text: "No CE available?."
                }],
                variants: [{
                    colorName: "Purple",
                    colorCode: "#800080",
                    price: "£",
                    originalPrice: "£58.99",
                    images: [
                        'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog pu.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-1.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-2.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-3.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-4.png'
    
                    ]
                }, {
                    colorName: "White",
                    colorCode: "#ffffff",
                    price: "£39.99",
                    originalPrice: "£49.99",
                    images: [
                     'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-1.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-2.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-3.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-4.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-5.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-6.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-7.jpg',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-8.png',
                         'E:/peware4u/assets/images/dogs/Smart Pet Hair Dryer Dog/Smart-Pet-Hair-Dryer-Dog-white-9.jpg'

            
                    ]
                }
                
            ]
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
            reviewsContainer: document.getElementById('reviews-container'),
            mainImage: document.getElementById('main-product-image'),
            thumbnailList: document.querySelector('.thumbnail-list'),
            quantityInput: document.getElementById('quantity'),
            decreaseBtn: document.getElementById('decrease-quantity'),
            increaseBtn: document.getElementById('increase-quantity'),
            zoomContainer: document.getElementById('zoom-container'),
            colorOptionsContainer: document.getElementById('color-options-container'),
            selectedColorName: document.getElementById('selected-color-name')
        };

        // --- 3. ربط الأحداث الثابتة (هذا هو المكان الوحيد الذي يتم فيه ربط حدث الكمية) ---
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
            pageElements.description.textContent = product.description;
            pageElements.brand.textContent = product.codeWord;
            pageElements.sku.textContent = product.word;

            // تحديث قائمة الميزات
            pageElements.featuresList.innerHTML = '';
            if (product.features && product.features.length > 0) {
                product.features.forEach(featureText => {
                    const listItem = document.createElement('li');
                    listItem.textContent = featureText;
                    pageElements.featuresList.appendChild(listItem);
                });
            }

            // تحديث التقييمات
            pageElements.reviewsContainer.innerHTML = '';
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

            // تحديث الألوان والصور
            function selectVariant(variant) {
                pageElements.currentPrice.textContent = variant.price;
                pageElements.originalPrice.textContent = variant.originalPrice;
                pageElements.selectedColorName.textContent = variant.colorName;
                pageElements.mainImage.src = variant.images[0];
                pageElements.thumbnailList.innerHTML = '';
                variant.images.forEach((imgSrc, index) => {
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

            pageElements.colorOptionsContainer.innerHTML = '';
            product.variants.forEach((variant, index) => {
                const colorOption = document.createElement('div');
                colorOption.className = 'color-option';
                if (index === 0) colorOption.classList.add('active');
                const colorInner = document.createElement('div');
                colorInner.className = 'color-inner';
                colorInner.style.backgroundColor = variant.colorCode;
                colorOption.appendChild(colorInner);
                pageElements.colorOptionsContainer.appendChild(colorOption);
                colorOption.addEventListener('click', () => {
                    selectVariant(variant);
                    document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
                    colorOption.classList.add('active');
                });
            });

            if (product.variants && product.variants.length > 0) {
                selectVariant(product.variants[0]);
            }
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

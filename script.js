// 1. Data Object
const travelData = {
    "Tamil Nadu": {
        subtitle: "Experience the Rich Culture & Heritage",
        heroImg: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/img1_dcfvxp.jpgmg/img1.jpg",
        places: [
            { 
                name: "Ooty", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239791/img5_g7ovbn.webpg5.jpg", 
                desc: "Queen of Hill Stations.",
                attractions: ["Boat House", "Pykara Dam", "Pykara Lake", "Rose Garden", "Tea Museum", "Pine Forest", "Shooting Point", "Karnataka Garden", "Doddapetta Peak"]
            },
            { 
                name: "Kodaikanal", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239792/img6_pb9ann.jpg", 
                desc: "The Princess of Hill Stations.",
                attractions: ["Silver Falls", "Kodaikanal Lake", "Bryant Park", "Coakers Park", "Poombarai", "Kookal", "Pillar Rock", "Guna Caves"]
            },
            { 
                name: "Kanyakumari", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/img7_pmlqbt.jpg", 
                desc: "Meeting point of three oceans.",
                attractions: ["Thiruvalluvar Statue", "Vivekananda Memorial Rock", "Sunset View Point", "Beach", "Padmanabhapuram Palace", "Papanasam Temple", "Manimuthar Dam", "Kuttralam"]
            },
            { 
                name: "Pondicherry", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/img8_q9q4t1.jpg", 
                desc: "The French Riviera of the East.",
                attractions: ["French Colony", "Paradise Beach", "Sacred Heart Basilica", "Rock Beach", "Auroville Beach", "Promenade Beach", "Chunnambar Boat House"]
            },
            { 
                name: "Chennai", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239788/Chennai_pqoiyu.webp", 
                desc: "Gateway to South India.",
                attractions: ["Marina Beach", "Mahabalipuram", "Santhome Church", "Birla Planetorium", "Elliotts Beach", "Kapaleeshwar Temple", "VGP Amusement Park"]
            },
            { 
                name: "yercaud", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239860/yercaud_vplyl4.jpg", 
                desc: "Jewel of the South.",
                attractions: ["Yercaud Lake", "Pagoda Point", "Loop Road", "Bears Cave", "Kiliyur Water Falls", "Servarayan Temple"]
            }
            
        ]
    },
    "Kerala": {
        subtitle: "Relax in God's Own Country",
        heroImg: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769444611/img3_keunot.jpghttps://res.cloudinary.com/drlg1t6pk/image/upload/v1769444611/img3_keunot.jpg",
        places: [
            { 
                name: "Munnar", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/munar_mc80wo.webp", 
                desc: "Kashmir of South India.",
                attractions: ["Mattupetty Dam", "Tea Museum", "Echo Point", "Top Station", "Kundala Lake", "Photo Point", "Rose Garden"]
            },
            { 
                name: "Cochin", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/cochi_m11tfv.jpg", 
                desc: "Queen of the Arabian Sea.",
                attractions: ["Chotanikara Bhagavathy Temple", "Athi Rampadi Water Falls", "Cherai Beach", "Mattancherry Palace", "Hill Palace Museum", "Wonderla", "Bolgatti Palace", "Lulu Mall", "Vypen Beach"]
            },
            { 
                name: "Wayanad", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/Wayanad_uyjw0d.jpg", 
                desc: "eco-tourism and adventure camping.",
                attractions: ["Edakkal Caves", "Chembra Peak", "Lakkidi View Point", "Soochippara Water Falls", "Meenmutty Falls", "Banasurasagar Dam"]
            },
            { 
                name: "Alleppey", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769499860/Alleppey_mttbda.jpg", 
                desc: "Venice of the East",
                attractions: ["Backwaters", "Alappuzha Beach", "Light House", "St. Mary Forane Church", "Vembanad Lake"]
            },
            { 
                name: "Vagamon",  
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239860/Wayanad_m5cas0.webp", 
                desc: "Scotland of Asia",
                attractions: ["Thangalpara", "Kurushimala", "Pine Forest", "Vagamon Meadows", "Ulupunni Tunnel", "Echo Point", "Idukki Dam", "Marmala Falls"]
            },
            { 
                name: "Trivandrum", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239859/Trivandrum_i17o5x.jpg", 
                desc: "Evergreen City of India.",
                attractions: ["Padmanabha Swamy Temple", "Chithra Art Gallery", "Zoological Park", "Napier Museum", "Magic Planet", "Mall of Travancore", "Kovalam Light House", "Kovalam Beach"]
            },
            { 
                name: "Varkala", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239860/Varkala_it9rvu.webp", 
                desc: "Goa of Kerala.",
                attractions: ["Varkala Beach", "Varkala Cliff", "Odayam Beach", "Anjengo Fort Lighthouse"]
            },
            { 
                name: "Thekkady", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239859/Thekkady_zvi6b9.webp", 
                desc: "famous wildlife reserves in South India.",
                attractions: ["Periyar National Park", "Thekkady Lake", "Hill King", "Vandiperiyar"]
            }
        ]
    },
    "Karnataka": {
        subtitle: "Nature Sings in green hills",
        heroImg: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/Dandeli_j6pokq.webp",
        places: [
            { 
                name: "Mysore", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/mysore_jt2vdj.webp", 
                desc: "Cultural Capital of Karnataka.",
                attractions: ["Mysore Palace", "Mysore Zoo", "Shuka Vana", "Brindavan Garden", "Chamundeshwari Temple", "Balmuri Falls", "St. Philomena Church", "GRS Fantasy Amusement Park"]
            },
            { 
                name: "Coorg", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/Coorg_g6wtuj.jpg", 
                desc: "picturesque hill station in Karnataka.",
                attractions: ["Golden Temple", "Kaveri Nisargadhama", "Dubare Forest", "Harangi Dam", "White Water River Rafting", "Chiklihole Reservoir", "Abbey Falls", "Raja Seat", "Mandalpete Jeep Trekking"]
            },
            { 
                name: "Bangalore",
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239788/Bangalore_bcxmfa.webp", 
                desc: "Silicon Valley of India.",
                attractions: ["Wonderla", "Lalbagh Garden", "Bannerghatta National Park", "Bangalore Palace", "Cubbon Park", "Iskcon Temple", "Triusultan Palace", "Commercial Street Shopping", "Visvesvaraya Museum", "UB City Mall"]
            },
            { 
                name: "Chikmagalur", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/Chikmagalur_kserth.jpg", 
                desc: "A serene hill station.",
                attractions: ["Siri Statue", "Mullayanagiri", "Baba Budan Giri", "Seethalayangiri", "Z-Point Trekking", "Honnamana Halla", "Ukkada Water Falls", "Jhari Falls", "Bandi Kallu Gudda Sunset Point"]
            },
            { 
                name: "Mangalore", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239788/mang_mzbhe7.webp", 
                desc: "A vibrant coastal city famous for its beaches, temples, and delicious seafood cuisine.",
                attractions: ["Panambur Beach", "Pilikula Tourism", "Tannirbhavi Beach", "Mangaladevi Temple", "Someshwar Beach", "Forum Fiza Mall"]
            },
            { 
                name: "Murudeshwar", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/Mangalore_oesega.webp", 
                desc: "statue of Lord Shiva overlooking the Arabian Sea.",
                attractions: ["Shiva Temple", "Murudeshwar Beach", "Murudeshwar Fort", "Jog Falls"]
            },
            { 
                name: "Gokarna & Udupi", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239859/udipi_nrrgs1.jpg", 
                desc: "Spiritual and coastal destinations known for pristine beaches, ancient temples, and peaceful vibes.",
                attractions: ["Om Beach", "Paradise Beach", "Kudle Beach", "Mahabaleshwara Temple", "Water Sports", "Yana Caves", "Halfmoon Beach", "St. Mary's Island", "Krishna Temple", "Anantheshwara Temple"]
            },
            { 
                name: "Dandeli", 
                img: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/Dandeli_j6pokq.webp", 
                desc: "An adventure hotspot celebrated for river rafting, dense forests, and rich wildlife.",
                attractions: ["Moulangi Eco Park", "Disney Park", "Supa Dam", "Kali River Water Sports", "Zorbing", "Rafting", "Jacuzzi Bath", "Zipline Activities", "Trekking", "Kayaking"]
            }
        ]
    }
};

// 2. Variables & State
let selectedServiceType = "General Tour"; 

// 3. Core Navigation & Layout Functions
function toggleAbout(show) {
    const aboutPage = document.getElementById('aboutPage');
    aboutPage.style.display = show ? 'block' : 'none';
    document.body.style.overflow = show ? 'hidden' : 'auto';
}

function selectServiceAndScroll(serviceName) {
    selectedServiceType = serviceName; 
    // Use unified scroll helper
    scrollToSection('destinations');
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.locoScroll && typeof window.locoScroll.scrollTo === 'function') {
        window.locoScroll.scrollTo(el);
    } else {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}
// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('marqueeModal');
    if (event.target === modal) {
        closeMarqueeModal();
    }
});

/// 4. Destination Detail Page Logic (REPLACED VERSION)
function openDestinationPage(title) {
    const data = travelData[title];
    const detailPage = document.getElementById('detailPage');
    
    if (data) {
        document.getElementById('detail-title').innerText = title;
        document.getElementById('detail-subtitle').innerText = data.subtitle;
        const detailHeroEl = document.getElementById('detail-hero');
        // set background progressively
        detailHeroEl.dataset.bg = data.heroImg;
        detailHeroEl.style.backgroundImage = 'none';
        detailHeroEl.classList.add('bg-lazy');
        const heroHigh = new Image();
        heroHigh.src = data.heroImg;
        heroHigh.onload = function() {
            detailHeroEl.style.backgroundImage = `url('${data.heroImg}')`;
            detailHeroEl.classList.add('loaded');
            detailHeroEl.classList.remove('bg-lazy');
        };
        
        const grid = document.getElementById('places-grid');
        grid.innerHTML = ""; 

        data.places.forEach(place => {
    const card = document.createElement('div');
    card.className = "dest-card";
    
    // Inga dhaan unga existing HTML structure-a apply pandroom
    card.innerHTML = `
        <div class="dest-img" data-bg="${place.img}" style="background-image: url('${place.img}')"></div>
        <div class="dest-info">
            <h3 class="gold">${place.name}</h3>
            <p style="font-size: 0.9rem; color: #ccc;">${place.desc}</p>
            <div class="dest-buttons" style="display: flex; gap: 10px; margin-top: 10px;">
                <button class="view-btn-custom btn-card" style="flex: 1;">View Details</button>
                <button class="btn-card" onclick="openBookingOptions('${place.name}', '${title}')" style="flex: 1;">Book Now</button>
            </div>
        </div>
    `;

    // 1. Earkanavea irukkura andha 'View Details' button-a namma create panna loop-kulla pick pandroom
    const viewBtn = card.querySelector('.view-btn-custom');
    
    // 2. Adhula namma puthiya showPlaceDetails function-a attach pandroom
    viewBtn.onclick = () => {
        showPlaceDetails(place); // Indha function kulla andha place-oda full data pass aagum
    };

    grid.appendChild(card);
});    // After injecting, progressively load the newly added background images
        const newBgEls = grid.querySelectorAll('.dest-img');
        newBgEls.forEach(el => {
            const bg = el.dataset.bg;
            if (bg) {
                el.classList.add('bg-lazy');
                const high = new Image();
                high.src = bg;
                high.onload = function() {
                    el.style.backgroundImage = `url('${bg}')`;
                    el.classList.add('loaded');
                    el.classList.remove('bg-lazy');
                };
            }
        });

        const finalBtn = document.getElementById('final-wa-btn');
        finalBtn.innerText = `Book Full ${title} Package`;
        
        // Intha vari thaan WhatsApp/Email Modal-ai open pannum
        finalBtn.onclick = function() {
            openBookingOptions(`Full Package`, title);
        };

        detailPage.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}
// --- GSAP CONCAVE SLIDER LOGIC ---
// --- GSAP CONCAVE SLIDER LOGIC (Modified for Mobile) ---
document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.gsap-slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    
    if (!sliderWrapper || slides.length === 0) return;

    const numSlides = slides.length;
    const angleStep = 360 / numSlides; 
    
    // Mobile-la radius kammiya irukanum, Desktop-la 500 nalla irukum
    const radius = window.innerWidth < 768 ? 250 : 500; 

    slides.forEach((slide, index) => {
        gsap.set(slide, {
            rotationY: index * angleStep,
            z: radius,
            transformOrigin: `50% 50% ${-radius}px`
        });
    });

    const rotation = gsap.to(sliderWrapper, {
        rotationY: 360,
        duration: 50,
        ease: "none",
        repeat: -1,
    });
});
function closeDetailPage() {
    document.getElementById('detailPage').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Detail Image Modal Functions
function openDetailImageModal(placeName, imageUrl, description) {
    document.getElementById('detailModalPlaceName').textContent = placeName;
    document.getElementById('detailModalImage').src = imageUrl;
    document.getElementById('detailModalPlaceDesc').textContent = description;
    document.getElementById('detailImageModal').style.display = 'flex';
}

function closeDetailImageModal() {
    document.getElementById('detailImageModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('detailImageModal');
    if (event.target === modal) {
        closeDetailImageModal();
    }
});

function openBookingOptions(placeName, stateName) {
    const modal = document.getElementById('bookingModal');
    const displayTitle = `${selectedServiceType}: ${placeName}`;
    document.getElementById('selectedServiceName').innerText = displayTitle;
    
    // WhatsApp Action
    const waBtn = document.getElementById('modalWaBtn');
    waBtn.innerHTML = `<i class="fab fa-whatsapp"></i> WhatsApp Booking`;
    waBtn.onclick = function() {
        const phoneNumber = "+917010954360";
        const message = `Hi Fundun Holidays, I am interested in [${selectedServiceType}] for [${placeName}, ${stateName}].`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        closeBookingModal();
    };

    // Instagram Action
    const instaBtn = document.getElementById('modalMailBtn');
    instaBtn.innerHTML = `<i class="fab fa-instagram"></i> Instagram DM`;
    instaBtn.className = 'insta-btn-premium'; // New class for premium look
    instaBtn.onclick = function() {
        const instaUsername = "fundun_holidays"; 
        window.open(`https://www.instagram.com/${instaUsername}/`, '_blank');
        closeBookingModal();
    };

    modal.style.display = 'flex'; 
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ======== ATTRACTIONS MODAL FUNCTIONS ========
let currentAttractionPlace = null;
let currentAttractionState = null;

function openAttractionsModal(placeName, state) {
    const stateData = travelData[state];
    if (!stateData) return;
    
    const place = stateData.places.find(p => p.name === placeName);
    if (!place || !place.attractions) return;
    
    currentAttractionPlace = placeName;
    currentAttractionState = state;
    
    // Set title and description
    document.getElementById('attractionsTitle').textContent = placeName;
    document.getElementById('attractionsSubtitle').textContent = place.desc;
    
    // Populate attractions list
    const attractionsList = document.getElementById('attractionsList');
    attractionsList.innerHTML = '';
    
    place.attractions.forEach(attraction => {
        const item = document.createElement('div');
        item.className = 'attraction-item';
        item.innerHTML = `
            <div class="attraction-icon"><i class="fas fa-map-pin gold"></i></div>
            <div class="attraction-name">${attraction}</div>
        `;
        attractionsList.appendChild(item);
    });
    
    // Show modal
    document.getElementById('attractionsModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeAttractionsModal() {
    document.getElementById('attractionsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function bookPlaceAttraction() {
    if (currentAttractionPlace && currentAttractionState) {
        closeAttractionsModal();
        openBookingOptions(currentAttractionPlace, currentAttractionState);
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('attractionsModal');
    if (event.target === modal) {
        closeAttractionsModal();
    }
});

/// Intha function unga HTML-il irukura onclick="openMap()" oda connect aagum
function openMap() {
    // Neenga kudutha puthiya specific Google Maps link
    const googleMapsUrl = "https://maps.app.goo.gl/9dq2U7crYiuhfwqZA";
    
    // Puthiya tab-la map open aagum
    window.open(googleMapsUrl, '_blank');
}

// 6. Utility Functions
function whatsapp(topic) {
    const phoneNumber = "+917010954360"; 
    const message = `Hi Fundun Holidays, I'm interested in: ${topic}. Please share more details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}
function openMail() {
    const emailId = "fundunholidays@gmail.com";
    const subject = "Inquiry regarding Fundun Holidays";
    const body = "Hello Team,\n\nI am interested in your travel services. Please provide more information.";

    // Open Gmail compose in a new tab with prefilled recipient, subject and body
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailId)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
}

// 7. Event Listeners & Effects
window.onscroll = function() {
    // --- Section 7: Event Listeners & Effects (UPDATE THIS PART) ---

window.onscroll = function() {
    // 1. Navbar color change logic (Old)
    const navbar = document.getElementById("navbar");
    navbar.style.background = (window.scrollY > 50) ? "#000" : "rgba(0,0,0,0.8)";

    // 2. Scroll Reveal Logic (New)
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }    });
};
};

window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide-preloader');
    }, 1500); 
});
// Function to switch between Login and Signup forms
function switchAuth(type) {
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');
    
    if (type === 'signup') {
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    } else {
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
    }
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        toggleLoginModal(false);
    }
}
// Image Gallery Lightbox Functions
function openLightbox(element) {
    const lightbox = document.getElementById('imageLightbox');
    const fullImg = document.getElementById('fullImage');
    
    // Element-kulla irukkira img tag-oda src-ai edukkurom
    const imgSrc = element.querySelector('img').src;
    
    fullImg.src = imgSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Scroll-ai stop seiya
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Scroll-ai thirumba thodanga
}

// --- Enhanced UX: reveal animations, parallax, lazy/progressive loading, welcome popup ---
document.addEventListener('DOMContentLoaded', function() {
    // Helper: refresh animations and locomotive after content changes or image loads
    function refreshVisuals() {
        try {
            if (typeof AOS !== 'undefined') {
                if (typeof AOS.refreshHard === 'function') AOS.refreshHard();
                else if (typeof AOS.refresh === 'function') AOS.refresh();
            }
        } catch (e) { console.warn('AOS refresh failed', e); }
        try { if (window.locoScroll && typeof window.locoScroll.update === 'function') window.locoScroll.update(); } catch (e) { /* ignore */ }
    }

    // Helper: split text into letter spans and stagger animation
    function animateTextLetters(selector, delayMs = 40) {
        const elems = document.querySelectorAll(selector);
        elems.forEach(el => {
            if (el.classList.contains('animated-text')) return; // skip if already done

            // Build HTML while preserving existing child elements (so nested spans keep their classes)
            let charIndex = 0;
            const parts = [];
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent || '';
                    for (let i = 0; i < text.length; i++) {
                        const ch = text[i];
                        const span = document.createElement('span');
                        span.className = 'letter';
                        span.textContent = ch;
                        span.style.animationDelay = `${charIndex * delayMs}ms`;
                        parts.push(span.outerHTML);
                        charIndex++;
                    }
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    // Preserve element's markup as-is
                    parts.push(node.outerHTML);
                    // Increase index roughly by the element's text length so subsequent delays are offset
                    const innerText = node.textContent || '';
                    charIndex += innerText.length;
                }
            });

            // If no child nodes (fallback), handle whole textContent
            if (parts.length === 0) {
                const text = el.textContent || '';
                for (let i = 0; i < text.length; i++) {
                    const span = document.createElement('span');
                    span.className = 'letter';
                    span.textContent = text[i];
                    span.style.animationDelay = `${i * delayMs}ms`;
                    parts.push(span.outerHTML);
                }
            }

            el.innerHTML = parts.join('');
            el.classList.add('animated-text');
        });
    }

    /* 1) Reveal on scroll */
    const revealElems = document.querySelectorAll('.dest-card, .s-item, .contact-card, .offer-card, .gallery-item, .testimonial, .hero-content, .detail-hero-content');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElems.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    /* 2) Progressive / lazy loading for gallery images */
    const galleryImgs = document.querySelectorAll('.gallery-item img');
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            const src = img.dataset.src || img.src;
            // start blurred placeholder state
            img.classList.add('blur-up');
            img.loading = 'lazy';

            const high = new Image();
            high.src = src;
            high.onload = function() {
                img.src = high.src;
                img.classList.add('loaded');
                img.classList.remove('blur-up');
            };
            imgObserver.unobserve(img);
        });
    }, { rootMargin: '200px 0px' });

    galleryImgs.forEach(img => {
        // keep original src in data-src if not present
        if (!img.dataset.src) img.dataset.src = img.src;
        // optionally set a tiny inline placeholder (transparent pixel) to force lazy behavior
        // img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="16" height="9"%3E%3C/svg%3E';
        imgObserver.observe(img);
    });

    /* 3) Lazy/progressive backgrounds for .dest-img and .detail-hero */
    const bgElems = document.querySelectorAll('.dest-img, #detail-hero');
    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            // read data-bg or inline style
            let bg = el.dataset.bg;
            if (!bg) {
                const inline = el.style.backgroundImage || window.getComputedStyle(el).backgroundImage;
                if (inline && inline !== 'none') {
                    // extract url("...")
                    const m = inline.match(/url\(["']?(.*?)["']?\)/);
                    if (m) bg = m[1];
                }
            }
            if (bg) {
                el.classList.add('bg-lazy');
                const high = new Image();
                high.src = bg;
                high.onload = function() {
                    el.style.backgroundImage = `url('${bg}')`;
                    el.classList.add('loaded');
                    el.classList.remove('bg-lazy');
                };
            }
            bgObserver.unobserve(el);
        });
    }, { rootMargin: '300px 0px' });

    bgElems.forEach(el => {
        // move existing inline background to data-bg to avoid immediate load
        const inline = el.style.backgroundImage || window.getComputedStyle(el).backgroundImage;
        if (inline && inline !== 'none') {
            const m = inline.match(/url\(["']?(.*?)["']?\)/);
            if (m) {
                el.dataset.bg = m[1];
                // temporarily clear background so browser doesn't load it immediately
                el.style.backgroundImage = 'none';
            }
        }
        bgObserver.observe(el);
    });

    /* 4) Parallax for elements with data-parallax-speed */
    // set defaults on important elements
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) heroVideo.dataset.parallaxSpeed = -0.12;
    const detailHero = document.getElementById('detail-hero');
    if (detailHero) detailHero.dataset.parallaxSpeed = -0.08;

    const parallaxElems = () => document.querySelectorAll('[data-parallax-speed]');

    function handleParallax() {
        const y = window.scrollY;
        parallaxElems().forEach(el => {
            const speed = parseFloat(el.dataset.parallaxSpeed) || 0;
            const translate = Math.round(y * speed);
            el.style.transform = `translateY(${translate}px)`;
        });
    }
    window.addEventListener('scroll', handleParallax, { passive: true });
    handleParallax();

    /* 5) Small welcome popup (one-time per session) */
    const welcome = document.getElementById('welcomePopup');
    if (welcome) {
        const showWelcome = () => {
            if (sessionStorage.getItem('seenWelcome')) return;
            welcome.classList.add('open');
            sessionStorage.setItem('seenWelcome', '1');
        };
        // show after a short delay if user hasn't scrolled far
        let showed = false;
        setTimeout(() => { if (!showed) showWelcome(); }, 3000);
        window.addEventListener('scroll', function onScroll() { if (!showed && window.scrollY > 150) { showWelcome(); showed = true; window.removeEventListener('scroll', onScroll); } });
        // hook close button
        const closeBtn = welcome.querySelector('.close-welcome');
        if (closeBtn) closeBtn.addEventListener('click', () => welcome.classList.remove('open'));
    }

    // Promo popup behavior
    (function setupPromoPopup() {
        const popup = document.getElementById('promoPopup');
        if (!popup) return;
        const closeBtns = popup.querySelectorAll('.close-promo, #promoClose');
        const chatBtn = document.getElementById('promoChat');
        const exploreBtn = document.getElementById('promoExplore');
        const dontShow = document.getElementById('promoDontShow');

        const storageKey = 'promoPopupHidden_v1';
        // initialize checkbox from storage
        const hidden = localStorage.getItem(storageKey) === '1';
        if (dontShow) dontShow.checked = hidden;

        function openPopup() {
            if (localStorage.getItem(storageKey) === '1') return; // respect user's choice
            popup.classList.add('open');
            if (window.locoScroll && typeof window.locoScroll.stop === 'function') try { window.locoScroll.stop(); } catch(e){}
        }

function closePopup() {
    const popup = document.getElementById('promoPopup');
    popup.classList.remove('open'); // Idhu dhaan CSS-la namma ezhudhuna 'open' class-a remove pannum
}

closeBtns.forEach(b => b.addEventListener('click', closePopup));

        if (chatBtn) chatBtn.addEventListener('click', function() {
            whatsapp('Promo Popup Enquiry');
            if (dontShow && dontShow.checked) localStorage.setItem(storageKey, '1');
            closePopup();
        });

        if (exploreBtn) exploreBtn.addEventListener('click', function() {
            const offers = document.getElementById('offers');
            if (offers) {
                if (window.locoScroll && typeof window.locoScroll.scrollTo === 'function') window.locoScroll.scrollTo(offers);
                else offers.scrollIntoView({ behavior: 'smooth' });
            }
            if (dontShow && dontShow.checked) localStorage.setItem(storageKey, '1');
            closePopup();
        });

        if (dontShow) dontShow.addEventListener('change', function() {
            if (this.checked) localStorage.setItem(storageKey, '1'); else localStorage.removeItem(storageKey);
        });

        // Show popup after a delay if not previously hidden
        setTimeout(() => {
            if (!localStorage.getItem(storageKey)) openPopup();
        }, 4200);
    })();

    // Apply text letter animation to headings and large text blocks on page load
    animateTextLetters('h1, h2, h3, .bold-heading, .section-title');
    // Optionally animate paragraphs with class 'text-reveal'
    animateTextLetters('.text-reveal');

    // Hook into AOS to animate text when sections appear
    document.addEventListener('aos:in', function(event) {
        const revealed = event.detail;
        if (revealed) {
            const textElems = revealed.querySelectorAll('.text-reveal:not(.animated-text)');
            textElems.forEach(el => {
                try { animateTextLetters(el); } catch(e){}
            });
        }
    });

    // After images load, re-animate text if new content was injected
    const origAnimateText = animateTextLetters;
    window.animateTextLetters = function(sel, delay) {
        origAnimateText(sel, delay);
        try { refreshVisuals(); } catch(e){}
    };
});
document.addEventListener('DOMContentLoaded', () => {
    const studentOfferCard = document.querySelector('.student-offer-video-card');
    const offerVideo = studentOfferCard ? studentOfferCard.querySelector('.offer-video') : null;

    if (studentOfferCard && offerVideo) {
        // Play video when mouse enters the card
        studentOfferCard.addEventListener('mouseenter', () => {
            offerVideo.play().catch(error => {
                console.log("Video autoplay prevented:", error);
                // Handle autoplay prevention (e.g., show a play button)
            });
        });

        // Pause video when mouse leaves the card
        studentOfferCard.addEventListener('mouseleave', () => {
            offerVideo.pause();
        });

        // For touch devices, play on first tap and pause on second tap
        let isVideoPlaying = false;
        studentOfferCard.addEventListener('click', (event) => {
            // Prevent toggling if a button inside the card is clicked
            if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
                return;
            }
            if (isVideoPlaying) {
                offerVideo.pause();
                isVideoPlaying = false;
            } else {
                offerVideo.play().catch(error => {
                    console.log("Video autoplay prevented on click:", error);
                });
                isVideoPlaying = true;
            }
        });
    }
});
// Page refresh aagum pothu scroll-ah top-ku kondu poga
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Locomotive Scroll use pandreengana, ithu scroll-ah reset pannum
document.addEventListener("DOMContentLoaded", function() {
    if (typeof scroll !== 'undefined') {
        scroll.scrollTo(0, {duration: 0, disableLerp: true});
    } else {
        window.scrollTo(0, 0);
    }
});
// Step 1: விவரங்களைக் காட்டும் Modal-ஐ உருவாக்கும் பங்க்ஷன்
function showPlaceDetails(place) {
    const detailsModal = document.createElement('div');
    detailsModal.id = 'placeDetailsModal';
    // ஸ்டைலிங்: இது முழு திரையையும் மறைக்கும் கருப்பு நிற விண்டோ
    detailsModal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.95); z-index: 10003;
        overflow-y: auto; animation: fadeIn 0.3s ease;
    `;

    const content = document.createElement('div');
    content.style.cssText = `max-width: 900px; margin: 0 auto; padding: 40px 20px;`;

    // Close Button: விண்டோவை மூட
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: #D4AF37;
        border: none; color: white; font-size: 24px; padding: 10px 15px;
        cursor: pointer; border-radius: 50%; z-index: 10004; width: 50px; height: 50px;
    `;
    closeBtn.onclick = () => {
        detailsModal.remove();
        document.body.style.overflow = 'auto'; // ஸ்க்ரோலிங் மீண்டும் தொடங்கும்
    };

    // இடத்தின் புகைப்படம், தலைப்பு மற்றும் விவரங்களைச் சேர்த்தல்
    content.innerHTML = `
        <img src="${place.img}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px; margin-bottom: 30px;">
        <h1 style="color: #D4AF37; font-size: 40px; margin-bottom: 10px;">${place.name}</h1>
        <p style="color: #ccc; font-size: 18px; margin-bottom: 30px; line-height: 1.6;">${place.desc}</p>
        <h2 style="color: #D4AF37; font-size: 28px; margin-bottom: 20px;">Things to Do & See</h2>
    `;

    // Attractions: பார்க்க வேண்டிய இடங்களின் பட்டியலை உருவாக்குதல்
    if (place.attractions && place.attractions.length > 0) {
        const attractionsList = document.createElement('ul');
        attractionsList.style.cssText = "list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;";
        place.attractions.forEach(attr => {
            attractionsList.innerHTML += `
                <li style="padding: 12px 15px; background: #1a1a1a; border-left: 4px solid #D4AF37; color: #ccc; border-radius: 5px;">
                    <i class="fas fa-check" style="color: #D4AF37; margin-right: 10px;"></i>${attr}
                </li>`;
        });
        content.appendChild(attractionsList);
    }

    detailsModal.appendChild(content);
    detailsModal.appendChild(closeBtn);
    document.body.appendChild(detailsModal);
    document.body.style.overflow = 'hidden'; // விண்டோ திறந்திருக்கும் போது பின்னணி ஸ்க்ரோலிங்கை நிறுத்தும்
}
document.querySelectorAll('.dest-card').forEach(card => {
    card.onclick = function() {
        // Card-oda 'data-location' attribute-ai edukkurom
        let location = this.getAttribute('data-location');
        
        // Oru velai data-location illana, parent state-container-la irunthu kandu pidikalam
        if (!location) {
            const stateTitle = this.closest('.state-container').querySelector('.state-title').innerText;
            // "Tamil Nadu Culture" nu iruntha athula "Tamil Nadu" mattum edukka:
            if(stateTitle.includes("Tamil Nadu")) location = "Tamil Nadu";
            else if(stateTitle.includes("Kerala")) location = "Kerala";
            else if(stateTitle.includes("Karnataka")) location = "Karnataka";
        }

        console.log("Opening details for: " + location);
        openDestinationPage(location);
    };
});// --- Cloudinary Link Fixer (Add at the end of script.js) ---
(function fixCloudinaryLinks() {
    if (typeof travelData !== 'undefined') {
        // Tamil Nadu Fix
        if (travelData["Tamil Nadu"]) {
            travelData["Tamil Nadu"].heroImg = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/img1_dcfvxp.jpg";
            
            const tnPlaces = travelData["Tamil Nadu"].places;
            if (tnPlaces[0]) tnPlaces[0].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239791/img5_g7ovbn.webp"; // Ooty
            if (tnPlaces[1]) tnPlaces[1].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239792/img6_pb9ann.jpg"; // Kodaikanal
            if (tnPlaces[2]) tnPlaces[2].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/img7_pmlqbt.jpg"; // Kanyakumari
        }

        // Kerala Fix
        if (travelData["Kerala"]) {
            travelData["Kerala"].heroImg = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/Alleppey_wo9ngp.jpg";
            
            const klPlaces = travelData["Kerala"].places;
            if (klPlaces[0]) klPlaces[0].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/munar_mc80wo.webp"; // Munnar
            if (klPlaces[3]) klPlaces[3].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/Alleppey_wo9ngp.jpg"; // Alleppey
            if (klPlaces[2]) klPlaces[2].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239860/Wayanad_m5cas0.webp"; // Wayanad
        }

        // Karnataka Fix
        if (travelData["Karnataka"]) {
            travelData["Karnataka"].heroImg = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/mysore_jt2vdj.webp";
            
            const kaPlaces = travelData["Karnataka"].places;
            if (kaPlaces[0]) kaPlaces[0].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/mysore_jt2vdj.webp"; // Mysore
            if (kaPlaces[1]) kaPlaces[1].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239790/Coorg_g6wtuj.jpg"; // Coorg
            if (kaPlaces[2]) kaPlaces[2].img = "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239788/Bangalore_bcxmfa.webp"; // Bangalore
        }
        
        console.log("Cloudinary links patched successfully!");
    }
})();
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5000ms = 5 Seconds

    function nextSlide() {
        // Current slide-la irunthu 'active' class-ah remove panrom
        slides[currentSlide].classList.remove('active');
        
        // Adutha slide number-ah calculate panrom
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Adutha slide-ku 'active' class-ah add panrom
        slides[currentSlide].classList.add('active');
    }

    // Automatic transition start panrom
    setInterval(nextSlide, slideInterval);
});

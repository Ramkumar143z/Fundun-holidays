/*
╔══════════════════════════════════════════════════════════════╗
║  FUNDUN HOLIDAYS - SIMPLE CARD GRID (NO EFFECTS)            ║
║  Tamil: Destination page-la normal card grid mattum          ║
╚══════════════════════════════════════════════════════════════╝
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎯 SMOOTH SCROLL FOR NAVIGATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔧 ABOUT PAGE TOGGLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function toggleAbout(show) {
    const aboutPage = document.getElementById("aboutPage");
    if (!aboutPage) return;
    
    if (show) {
        aboutPage.style.display = "block";
        aboutPage.classList.add("active");
        document.body.classList.add("overlay-open");
        
        setTimeout(() => {
            aboutPage.style.opacity = "1";
        }, 10);
        
        console.log("✓ About page opened");
    } else {
        aboutPage.style.opacity = "0";
        aboutPage.classList.remove("active");
        document.body.classList.remove("overlay-open");
        
        setTimeout(() => {
            aboutPage.style.display = "none";
        }, 300);
        
        console.log("✓ About page closed");
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🗺️ DESTINATION DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const destinations = {
    "Tamil Nadu": {
        "title": "Tamil Nadu Destinations",
        "subtitle": "Explore the rich culture and natural beauty of Tamil Nadu",
        "places": {
            "Ooty": {
                description: "Ooty, also known as Udhagamandalam, is a popular hill station in Tamil Nadu famous for its tea estates, botanical gardens, and colonial architecture.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850347/Ooty_sm1awg.png",
                places: ["Boat House", "Pykara Dam", "Pykara Lake", "Rose Garden", "Tea Museum", "Pine Forest", "Shooting Point", "Karnataka Garden", "Doddapetta Peak"]
            },
            "Kodaikanal": {
                description: "Kodaikanal is a charming hill town known for its pristine lakes, waterfalls, and scenic viewpoints.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850389/kodaikanal_rrm80l.png",
                places: ["Silver Falls", "Kodaikanal Lake", "Bryant Park", "Coakers Park", "Poombarai", "Kookal", "Pillar Rock", "Guna Caves"]
            },
            "Yercaud": {
                description: "Yercaud is a serene hill station known for its coffee plantations, lakes, and panoramic views.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850504/yercadu_vpquei.png",
                places: ["Yercaud Lake", "Pagoda Point", "Loop Road", "Bears Cave", "Kiliyur Water Falls", "Servarayan Temple"]
            },
            "Kanyakumari": {
                description: "Kanyakumari is the southernmost tip of India, famous for its stunning sunrise and sunset views, temples, and memorials.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850491/Kannayakumari_dsszcl.png",
                places: ["Thiruvalluvar Statue", "Vivekananda Memorial Rock", "Sunset View Point", "Beach", "Padmanabhapuram Palace", "Papanasam Temple", "Manimuthar Dam", "Kuttralam"]
            },
            "Chennai": {
                description: "Chennai, the capital of Tamil Nadu, is a vibrant city with rich history, temples, beaches, and modern attractions.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850626/chennai_tyxhra.png",
                places: ["Marina Beach", "Mahabalipuram", "Santhome Church", "Birla Planetorium", "Elliotts Beach", "Kapaleeshwar Temple", "VGP Amusement Park"]
            },
            "Pondicherry": {
                description: "Pondicherry, a former French colony, offers a blend of Indian and French cultures with beautiful beaches and colonial architecture.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850641/pondicherry_ffgflu.png",
                places: ["French Colony", "Paradise Beach", "Sacred Heart Basilica", "Rock Beach", "Auroville Beach", "Promenade Beach", "Chunnambar Boat House"]
            }
        }
    },
    "kerala": {
        title: "Kerala Destinations",
        subtitle: "Experience God's Own Country with its backwaters and hills",
        places: {
            "Cochin": {
                description: "Cochin, also known as Kochi, is a vibrant city blending history, culture, and modernity with Chinese fishing nets and colonial architecture.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239789/cochi_m11tfv.jpg",
                places: ["Chotanikara Bhagavathy Temple", "Athi Rampadi Water Falls", "Cherai Beach", "Mattancherry Palace", "Hill Palace Museum", "Wonderla", "Bolgatti Palace", "Lulu Mall", "Vypen Beach"]
            },
            "Munnar": {
                description: "Munnar is a picturesque hill station famous for its sprawling tea plantations, misty mountains, and wildlife sanctuaries.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850359/munnar_bjo4pq.png",
                places: ["Mattupetty Dam", "Tea Museum", "Echo Point", "Top Station", "Kundala Lake", "Photo Point", "Rose Garden"]
            },
            "Wayanad": {
                description: "Wayanad is a district known for its wildlife, waterfalls, and ancient caves, offering a perfect blend of nature and adventure.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850416/wayanadu_gpawkt.png",
                places: ["Edakkal Caves", "Chembra Peak", "Lakkidi View Point", "Soochippara Water Falls", "Meenmutty Falls", "Banasurasagar Dam"]
            },
            "Alleppey": {
                description: "Alleppey, famous for its backwaters, is a serene destination for houseboat cruises and coastal relaxation.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850439/alleppey_eg4fs5.png",
                places: ["Backwaters", "Alappuzha Beach", "Light House", "St. Mary Forane Church", "Vembanad Lake"]
            },
            "Vagamon": {
                description: "Vagamon is a tranquil hill station with meadows, pine forests, and panoramic views of the Western Ghats.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850545/vagamon_xoktr4.png",
                places: ["Thangalpara", "Kurushimala", "Pine Forest", "Vagamon Meadows", "Ulupunni Tunnel", "Echo Point", "Idukki Dam", "Marmala Falls"]
            },
            "Trivandrum": {
                description: "Trivandrum, the capital of Kerala, is known for its temples, museums, and beautiful beaches.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850569/thiruvandrum_zxqmjj.png",
                places: ["Padmanabha Swamy Temple", "Chithra Art Gallery", "Zoological Park", "Napier Museum", "Magic Planet", "Mall of Travancore", "Kovalam Light House", "Kovalam Beach"]
            },
            "Varkala": {
                description: "Varkala is a coastal town famous for its red cliffs, pristine beaches, and Ayurvedic treatments.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850657/varkala_cjyrib.png",
                places: ["Varkala Beach", "Varkala Cliff", "Odayam Beach", "Anjengo Fort Lighthouse"]
            },
            "Thekkady": {
                description: "Thekkady is home to Periyar National Park, offering wildlife safaris and boat rides on the lake.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850674/thekkady_j99sk0.png",
                places: ["Periyar National Park", "Thekkady Lake", "Hill King", "Vandiperiyar"]
            }
        }
    },
    "karnataka": {
        title: "Karnataka Destinations",
        subtitle: "Discover the heritage and adventure in Karnataka",
        places: {
            "Mysore": {
                description: "Mysore, the cultural capital of Karnataka, is renowned for its palaces, gardens, and rich heritage.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769851229/mysore_aatmtu.png",
                places: ["Mysore Palace", "Mysore Zoo", "Shuka Vana", "Brindavan Garden", "Chamundeshwari Temple", "Balmuri Falls", "St. Philomena Church", "GRS Fantasy Amusement Park"]
            },
            "Coorg": {
                description: "Coorg, known as the Scotland of India, offers coffee plantations, waterfalls, and adventure activities.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769942817/coorg_hc1qce.jpg",
                places: ["Golden Temple", "Kaveri Nisargadhama", "Dubare Forest", "Harangi Dam", "White Water River Rafting", "Chiklihole Reservoir", "Abbey Falls", "Raja Seat", "Mandalpete Jeep Trekking"]
            },
            "Bangalore": {
                description: "Bangalore, the Silicon Valley of India, is a bustling city with parks, palaces, and modern attractions.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850454/Bangalore_ja0ghv.png",
                places: ["Wonderla", "Lalbagh Garden", "Bannerghatta National Park", "Bangalore Palace", "Cubbon Park", "Iskcon Temple", "Triusultan Palace", "Commercial Street Shopping", "Visvesvaraya Museum", "UB City Mall"]
            },
            "Chikmagalur": {
                description: "Chikmagalur is a coffee-growing region famous for its hills, waterfalls, and trekking spots.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850466/chikmangalore_e3duxj.png",
                places: ["Siri Statue", "Mullayanagiri", "Baba Budan Giri", "Seethalayangiri", "Z-Point Trekking", "Honnamana Halla", "Ukkada Water Falls", "Jhari Falls", "Bandi Kallu Gudda Sunset Point"]
            },
            "Mangalore": {
                description: "Mangalore is a coastal city known for its beaches, temples, and seafood cuisine.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850586/mangalore_xyki1k.png",
                places: ["Panambur Beach", "Pilikula Tourism", "Tannirbhavi Beach", "Mangaladevi Temple", "Someshwar Beach", "Forum Fiza Mall"]
            },
            "Murudeshwar": {
                description: "Murudeshwar is famous for its giant Shiva statue, beach, and the Murudeshwar Fort.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850601/murudeshwar_kr4vv6.png",
                places: ["Shiva Temple", "Murudeshwar Beach", "Murudeshwar Fort", "Jog Falls"]
            },
            "Gokarna & Udupi": {
                description: "Gokarna and Udupi offer pristine beaches, ancient temples, and spiritual retreats.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850700/gokarna_udupi_idsedu.png",
                places: ["Om Beach", "Paradise Beach", "Kudle Beach", "Mahabaleshwara Temple", "Water Sports", "Yana Caves", "Halfmoon Beach", "St. Mary's Island", "Krishna Temple", "Anantheshwara Temple"]
            },
            "Dandeli": {
                description: "Dandeli is an adventure hub with river rafting, wildlife, and eco-tourism activities.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769850712/dandeli_ebgqug.png",
                places: ["Moulangi Eco Park", "Disney Park", "Supa Dam", "Kali River Water Sports", "Zorbing", "Rafting", "Jacuzzi Bath", "Zipline Activities", "Trekking", "Kayaking"]
            }
        }
    },
    "Hyderabad": {
        title: "Hyderabad Destinations",
        subtitle: "Explore the city of pearls and its historical sites",
        places: {
            "Charminar": {
                description: "Charminar is an iconic monument symbolizing Hyderabad's rich history and architecture.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769666577/charmina_bpg1wb.jpg",
                places: ["Charminar", "Laad Bazaar", "Mecca Masjid", "Chowmahalla Palace"]
            },
            "Golconda": {
                description: "Golconda Fort is a magnificent fortress known for its acoustics and historical significance.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769666704/golgonda_aqxzrx.jpg",
                places: ["Fort Entrance", "Sound & Light", "Qutub Tombs", "Taramati Baradari"]
            },
            "Ramoji Film City": {
                description: "Ramoji Film City is Asia's largest film studio offering tours and entertainment.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769629047/ramoj_lhqfct.jpg",
                places: ["Film Sets", "Bahubali Set", "Studio Tour", "Adventure Park"]
            },
            "Hussain Sagar": {
                description: "Hussain Sagar is a large lake with the Buddha statue, perfect for boating and picnics.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769944988/hussian_duqbik.jpg",
                places: ["Hussain Sagar Lake", "Buddha Statue"]
            },
            "Birla Mandir": {
                description: "Birla Mandir is a beautiful Hindu temple made of white marble with intricate carvings.",
                image: "https://res.cloudinary.com/drlg1t6pk/image/upload/v1769945004/birla_nsnjea.jpg",
                places: ["Birla Temple", "Hindu Temple"]
            }
        }
    }
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎴 SIMPLE CARD GRID - NO SLIDER, NO EFFECTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function openDestinationPage(state) {
    const data = destinations[state];
    if (!data) {
        console.error(`❌ No data found for state: ${state}`);
        return;
    }

    const detailPage = document.getElementById("detailPage");
    const placesGrid = document.getElementById("places-grid");
    
    if (!detailPage || !placesGrid) {
        console.error("❌ Detail page or places grid not found");
        return;
    }
    
    // Set titles
    document.getElementById("detail-title").innerHTML = data.title;
    document.getElementById("detail-subtitle").innerText = data.subtitle;

    // Clear previous content
    placesGrid.innerHTML = "";
    
    // Simple grid container
    placesGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 30px;
        padding: 40px 20px;
        max-width: 1400px;
        margin: 0 auto;
    `;

    const placesArray = Object.entries(data.places);

    // Create simple cards - no effects, just grid
    placesArray.forEach(([city, cityData]) => {
        const card = document.createElement("div");
        card.className = "simple-destination-card";
        card.style.cssText = `
            background: linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(10, 10, 10, 0.95));
            border: 1px solid rgba(212, 175, 55, 0.3);
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
        `;

        // Image section
        const imageSection = document.createElement('div');
        imageSection.style.cssText = `
            background-image: url('${cityData.image}');
            background-size: cover;
            background-position: center;
            height: 250px;
            position: relative;
        `;

        const imageOverlay = document.createElement('div');
        imageOverlay.style.cssText = `
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
        `;
        imageSection.appendChild(imageOverlay);

        // Content section
        const contentSection = document.createElement('div');
        contentSection.style.cssText = `padding: 30px;`;

        contentSection.innerHTML = `
            <div style="margin-bottom: 8px;">
                <span style="display: inline-block; background: rgba(212, 175, 55, 0.15); 
                             border: 1px solid rgba(212, 175, 55, 0.3); padding: 5px 14px; 
                             border-radius: 20px; font-size: 11px; color: #d4af37; 
                             font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                    ${state}
                </span>
            </div>
            
            <h3 style="font-family: 'Poppins', sans-serif; font-size: 24px; font-weight: 700; 
                       color: #d4af37; margin-bottom: 15px; line-height: 1.2;">
                ${city}
            </h3>
            
            <p style="font-size: 14px; line-height: 1.7; color: #ccc; margin-bottom: 20px;
                      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
                      overflow: hidden;">
                ${cityData.description}
            </p>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="showBookingOptions('${state}', '${city}')" 
                        style="flex: 1; background: linear-gradient(135deg, #d4af37, #b8962e); 
                               color: #000; border: none; padding: 12px 20px; border-radius: 25px; 
                               font-size: 13px; font-weight: 700; text-transform: uppercase; 
                               cursor: pointer; transition: all 0.3s ease;">
                    <i class="fas fa-calendar-check"></i> BOOK NOW
                </button>
                
                <button onclick="viewCityDetails('${state}', '${city}')"
                        style="flex: 1; background: transparent; border: 2px solid #d4af37; 
                               color: #d4af37; padding: 12px 20px; border-radius: 25px; 
                               font-size: 13px; font-weight: 700; text-transform: uppercase; 
                               cursor: pointer; transition: all 0.3s ease;">
                    <i class="fas fa-map-marked-alt"></i> VIEW
                </button>
            </div>
            
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="font-size: 12px; color: #666;">
                    <i class="fas fa-map-marker-alt" style="color: #d4af37; margin-right: 6px;"></i>
                    ${cityData.places.length} Places to Visit
                </p>
            </div>
        `;

        // Hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.borderColor = 'rgba(212, 175, 55, 0.6)';
            card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.8)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        });

        card.appendChild(imageSection);
        card.appendChild(contentSection);
        placesGrid.appendChild(card);
    });

    // Open overlay
    detailPage.style.display = "block";
    detailPage.classList.add("active");
    document.body.classList.add("overlay-open");
    
    setTimeout(() => {
        detailPage.style.opacity = "1";
    }, 10);
    
    console.log(`✓ Destination page opened: ${state} (${placesArray.length} destinations)`);
}

// Close destination page
function closeDetailPage() {
    const detailPage = document.getElementById("detailPage");
    if (!detailPage) return;
    
    detailPage.style.opacity = "0";
    detailPage.classList.remove("active");
    document.body.classList.remove("overlay-open");
    
    setTimeout(() => {
        detailPage.style.display = "none";
    }, 300);
    
    console.log("✓ Destination page closed");
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  👁️ VIEW CITY DETAILS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function viewCityDetails(state, city) {
    const places = destinations[state]?.places[city]?.places;
    if (!places) return;
    
    const modal = document.createElement("div");
    modal.id = "city-details-modal";
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.95); display: flex; justify-content: center;
        align-items: center; z-index: 10001; backdrop-filter: blur(10px);
    `;

    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, rgba(20,20,20,0.98), rgba(5,5,5,0.98)); 
                    border: 2px solid rgba(212,175,55,0.4); padding: 40px; border-radius: 25px; 
                    text-align: center; max-width: 550px; width: 90%; max-height: 85%; 
                    overflow-y: auto; box-shadow: 0 30px 80px rgba(0,0,0,1);">
            
            <div style="text-align: center; margin-bottom: 30px;">
                <i class="fas fa-map-marked-alt" style="font-size: 48px; color: #d4af37; margin-bottom: 15px;"></i>
                <h3 style="color: #d4af37; margin: 0; font-family: 'Poppins', sans-serif; 
                           font-size: 28px; font-weight: 800; letter-spacing: 1px;">
                    ${city.toUpperCase()}
                </h3>
                <p style="color: #999; font-size: 14px; margin-top: 5px;">
                    ${places.length} Amazing Places to Explore
                </p>
            </div>
            
            <ul style="list-style: none; padding: 0; text-align: left; color: #fff;">
                ${places.map((place, index) => `
                    <li style="margin-bottom: 12px; padding: 15px 18px; 
                               background: rgba(212,175,55,0.05); 
                               border: 1px solid rgba(212,175,55,0.15);
                               border-radius: 15px; display: flex; align-items: center;
                               transition: all 0.3s ease; cursor: pointer;"
                        onmouseover="this.style.background='rgba(212,175,55,0.12)'; this.style.borderColor='rgba(212,175,55,0.3)'; this.style.transform='translateX(5px)';"
                        onmouseout="this.style.background='rgba(212,175,55,0.05)'; this.style.borderColor='rgba(212,175,55,0.15)'; this.style.transform='translateX(0)';">
                        <span style="display: inline-flex; align-items: center; justify-content: center;
                                     width: 30px; height: 30px; border-radius: 50%; 
                                     background: linear-gradient(135deg, #d4af37, #b8962e);
                                     color: #000; font-weight: 700; font-size: 12px;
                                     margin-right: 15px; flex-shrink: 0;">
                            ${index + 1}
                        </span>
                        <span style="font-size: 15px; font-weight: 500;">${place}</span>
                    </li>
                `).join("")}
            </ul>

            <button id="close-modal-btn" style="background: linear-gradient(135deg, #d4af37, #b8962e); 
                    color: #000; border: none; padding: 16px 50px; margin-top: 30px; 
                    border-radius: 50px; cursor: pointer; font-weight: 700; transition: 0.3s; 
                    text-transform: uppercase; letter-spacing: 1.5px; font-size: 14px;
                    font-family: 'Poppins', sans-serif; box-shadow: 0 10px 30px rgba(212,175,55,0.4);">
                <i class="fas fa-times"></i> CLOSE
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector("#close-modal-btn");
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📝 BOOKING & ENQUIRY FUNCTIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function showBookingOptions(state, city = '') {
    const location = city ? `${city}, ${state}` : state;
    
    const modal = document.createElement("div");
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.92); display: flex; justify-content: center;
        align-items: center; z-index: 10002; overflow-y: auto; backdrop-filter: blur(10px);
    `;
    modal.id = "bookingModal";

    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, rgba(20,20,20,0.95), rgba(5,5,5,0.95)); 
                    border: 2px solid rgba(212,175,55,0.3); padding: 45px; border-radius: 25px; 
                    max-width: 520px; box-shadow: 0 30px 80px rgba(0,0,0,0.9); color: #fff; margin: 20px;">
            
            <div style="text-align: center; margin-bottom: 25px;">
                <i class="fas fa-calculator" style="font-size: 48px; color: #d4af37; margin-bottom: 10px;"></i>
                <h2 style="color: #d4af37; margin: 10px 0; font-size: 28px; font-family: 'Poppins', sans-serif; font-weight: 800;">
                    PACKAGE CALCULATOR
                </h2>
                <p style="text-align: center; color: #aaa; margin: 5px 0; font-size: 15px;">
                    <i class="fas fa-map-marker-alt" style="color: #d4af37;"></i> ${location}
                </p>
            </div>
            
            <form id="bookingCalcForm" style="display: flex; flex-direction: column; gap: 18px;">
                <div>
                    <label style="display: block; margin-bottom: 10px; font-size: 14px; color: #d4af37; font-weight: 600;">
                        <i class="fas fa-user"></i> Full Name *
                    </label>
                    <input type="text" id="booking-name" placeholder="Enter your name" required 
                           style="width: 100%; padding: 14px; border-radius: 12px; border: 1px solid #333; 
                                  background: #0c0c0c; color: #fff; outline: none; font-family: inherit; 
                                  box-sizing: border-box; font-size: 15px; transition: all 0.3s ease;"
                           onfocus="this.style.borderColor='#d4af37'; this.style.boxShadow='0 0 10px rgba(212,175,55,0.3)';"
                           onblur="this.style.borderColor='#333'; this.style.boxShadow='none';">
                </div>
                
                <div>
                    <label style="display: block; margin-bottom: 10px; font-size: 14px; color: #d4af37; font-weight: 600;">
                        <i class="fab fa-whatsapp"></i> WhatsApp Number *
                    </label>
                    <input type="tel" id="booking-phone" placeholder="+91 XXXXXXXXXX" required 
                           style="width: 100%; padding: 14px; border-radius: 12px; border: 1px solid #333; 
                                  background: #0c0c0c; color: #fff; outline: none; font-family: inherit; 
                                  box-sizing: border-box; font-size: 15px; transition: all 0.3s ease;"
                           onfocus="this.style.borderColor='#d4af37'; this.style.boxShadow='0 0 10px rgba(212,175,55,0.3)';"
                           onblur="this.style.borderColor='#333'; this.style.boxShadow='none';">
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px;">
                    <div>
                        <label style="display: block; margin-bottom: 10px; font-size: 14px; color: #d4af37; font-weight: 600;">
                            <i class="fas fa-users"></i> Persons *
                        </label>
                        <input type="number" id="booking-persons" min="1" value="1" required 
                               style="width: 100%; padding: 14px; border-radius: 12px; border: 1px solid #333; 
                                      background: #0c0c0c; color: #fff; outline: none; font-family: inherit; 
                                      box-sizing: border-box; font-size: 15px; transition: all 0.3s ease;"
                               onfocus="this.style.borderColor='#d4af37'; this.style.boxShadow='0 0 10px rgba(212,175,55,0.3)';"
                               onblur="this.style.borderColor='#333'; this.style.boxShadow='none';">
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 10px; font-size: 14px; color: #d4af37; font-weight: 600;">
                            <i class="fas fa-calendar-alt"></i> Days *
                        </label>
                        <input type="number" id="booking-days" min="1" value="3" required 
                               style="width: 100%; padding: 14px; border-radius: 12px; border: 1px solid #333; 
                                      background: #0c0c0c; color: #fff; outline: none; font-family: inherit; 
                                      box-sizing: border-box; font-size: 15px; transition: all 0.3s ease;"
                               onfocus="this.style.borderColor='#d4af37'; this.style.boxShadow='0 0 10px rgba(212,175,55,0.3)';"
                               onblur="this.style.borderColor='#333'; this.style.boxShadow='none';">
                    </div>
                </div>
                
                <button type="submit" style="background: linear-gradient(135deg, #d4af37, #b8962e); 
                        color: #000; border: none; padding: 16px; border-radius: 30px; font-weight: 700; 
                        cursor: pointer; font-size: 15px; transition: all 0.3s ease; font-family: 'Poppins', sans-serif;
                        text-transform: uppercase; letter-spacing: 1px; margin-top: 10px;
                        box-shadow: 0 10px 30px rgba(212,175,55,0.4);"
                        onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 15px 40px rgba(212,175,55,0.6)';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(212,175,55,0.4)';">
                    <i class="fab fa-whatsapp"></i> SEND ENQUIRY VIA WHATSAPP
                </button>
                
                <button type="button" onclick="closeBookingModal()" 
                        style="background: transparent; border: 1px solid #666; color: #aaa; 
                               padding: 12px; border-radius: 30px; cursor: pointer; transition: 0.3s; 
                               font-family: inherit; font-size: 14px;"
                        onmouseover="this.style.borderColor='#d4af37'; this.style.color='#d4af37';"
                        onmouseout="this.style.borderColor='#666'; this.style.color='#aaa';">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    
    document.getElementById("bookingCalcForm").addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById("booking-name").value;
        const phone = document.getElementById("booking-phone").value;
        const persons = document.getElementById("booking-persons").value;
        const days = document.getElementById("booking-days").value;
        
        const msg = `Hi Fundun Holidays! 🌴\n\nI'm ${name} and I want to book a package:\n\n📍 Location: ${location}\n👥 Persons: ${persons}\n📅 Days: ${days}\n📱 Contact: ${phone}\n\nPlease send me the package details and pricing. Thank you!`;
        sendToWhatsApp(msg);
        closeBookingModal();
    });
    
    window.closeBookingModal = () => {
        const bookingModal = document.getElementById("bookingModal");
        if (bookingModal && bookingModal.parentNode) {
            document.body.removeChild(bookingModal);
        }
    };
}

function quickQuote(packageName) {
    showBookingOptions(packageName);
}

function sendToWhatsApp(message) {
    const phone = "919585575354";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function whatsapp(message) {
    const phone = "919585575354";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent("Hi Fundun Holidays, " + message)}`;
    window.open(url, "_blank");
}

function openMail() {
    window.location.href = "mailto:dineshcse142@gmail.com";
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

function openQuickCalculator() {
    showBookingOptions('General Enquiry');
}

function openServiceBooking(serviceName) {
    showBookingOptions(serviceName);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ⭐ HERO REVIEWS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const heroReviews = [
    { name: "Arun", stars: 5, text: "Amazing trip planning and great support!" },
    { name: "Priya", stars: 5, text: "Best travel experience ever." },
    { name: "Karthik", stars: 4, text: "Very smooth and well-organized tour." },
    { name: "Meena", stars: 5, text: "Friendly team and excellent service." }
];

let reviewIndex = 0;

function renderSingleReview() {
    const reviewSlider = document.getElementById("reviewSlider");
    if (!reviewSlider) return;

    reviewSlider.innerHTML = "";
    const review = heroReviews[reviewIndex];

    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
        <div class="review-header">
            <div class="review-avatar">${review.name.charAt(0)}</div>
            <div>
                <div class="review-name">${review.name}</div>
                <div class="review-stars">${"★".repeat(review.stars)}</div>
            </div>
        </div>
        <div class="review-text">${review.text}</div>
    `;

    reviewSlider.appendChild(card);
    reviewIndex = (reviewIndex + 1) % heroReviews.length;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎬 HERO CAROUSEL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function setupHeroCarousel() {
    const heroImages = [
        'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769239861/POSTER_bvgobj.png',
        'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769595950/hero_image_2_dxwrxu.png',
        'https://res.cloudinary.com/drlg1t6pk/image/upload/v1769620540/img_post_rbz4dd.png',
    ];

    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;

    heroImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');
        if (index === 0) slide.classList.add('active');
        slide.style.backgroundImage = `url('${img}')`;
        carouselContainer.appendChild(slide);
    });

    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📱 MOBILE MENU
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function setupMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🧭 NAVBAR SCROLL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    }, { passive: true });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🎯 DESTINATION FILTERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function setupDestinationFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const stateContainers = document.querySelectorAll('.state-container');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            stateContainers.forEach(container => {
                if (filter === 'all') {
                    container.style.display = 'block';
                } else {
                    const category = container.getAttribute('data-category');
                    container.style.display = category === filter ? 'block' : 'none';
                }
            });
        });
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🚀 INITIALIZE ON LOAD
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.addEventListener("DOMContentLoaded", function() {
    
    console.log("🌴 Fundun Holidays - Simple Grid Layout Loading...");
    
    // Setup everything
    setupHeroCarousel();
    setupMobileMenu();
    setupDestinationFilters();
    
    // Start review rotation
    renderSingleReview();
    setInterval(renderSingleReview, 3500);
    
    console.log("✓ All systems ready!");
    console.log("✓ Simple card grid activated - no slider effects!");
    console.log("✓ Clean & simple layout!");
});

/*
╔══════════════════════════════════════════════════════════════╗
║  ✨ SIMPLE GRID - NO EFFECTS, CLEAN LAYOUT! ✨              ║
║  Tamil: Ippo normal grid mattum - slider illa!               ║
╚══════════════════════════════════════════════════════════════╝
*/
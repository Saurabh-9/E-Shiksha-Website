// Updated Course Data
const coursesData = [
    {
        title: "Web Development Bootcamp",
        description: "Master HTML, CSS, JavaScript & React",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        tag: "Bestseller",
        duration: "12 weeks",
        price: "$499"
    },
    {
        title: "Python for Data Science",
        description: "Learn Python, Pandas & Machine Learning",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        tag: "Hot",
        duration: "16 weeks",
        price: "$599"
    },
    {
        title: "UI/UX Design Mastery",
        description: "Create stunning user interfaces with Figma",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        tag: "New",
        duration: "10 weeks",
        price: "$449"
    },
    {
        title: "Digital Marketing Pro",
        description: "Master SEO, SEM & Social Media",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
        tag: "Popular",
        duration: "8 weeks",
        price: "$399"
    },
    {
        title: "App Development with Flutter",
        description: "Build iOS & Android apps",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        tag: "Trending",
        duration: "14 weeks",
        price: "$549"
    },
    {
        title: "Artificial Intelligence",
        description: "Deep Learning & Neural Networks",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
        tag: "Advanced",
        duration: "20 weeks",
        price: "$699"
    },
    {
        title: "Blockchain Development",
        description: "Smart Contracts & DApps",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
        tag: "New",
        duration: "16 weeks",
        price: "$649"
    },
    {
        title: "Cybersecurity Fundamentals",
        description: "Network Security & Ethical Hacking",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        tag: "Essential",
        duration: "15 weeks",
        price: "$599"
    },
    {
        title: "Cloud Computing AWS",
        description: "Master Amazon Web Services",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        tag: "Professional",
        duration: "12 weeks",
        price: "$549"
    },
    {
        title: "Game Development Unity",
        description: "Create 3D Games from Scratch",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
        tag: "Creative",
        duration: "18 weeks",
        price: "$649"
    }
];

// Updated Testimonial Data
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Web Developer",
        image: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=",
        text: "E Shikhsha transformed my career. The practical projects and supportive community made learning enjoyable.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Data Analyst",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLXGVOByPdPaKy75tt5W3ege8iewGhx8GD2DrND8oD1iGyNiU4jjQSL9aktTukOXSETA&usqp=CAU",
        text: "Best investment in my education. The course content is up-to-date and the instructors are excellent.",
        rating: 5
    },
    {
        name: "John Doe",
        role: "Data Scientist",
        image: "https://cdn.shopify.com/s/files/1/0408/1067/6377/files/iStock-1182967311_2_resized.jpg?v=1613518353",
        text: " Greatest learning experience of my life taking this course and im so glad i took it",
        rating: 5
    },  {
        name: "Jenny Smith",
        role: "Research Assistant",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DpVh7BlKhbZP05KXK0X9W95LrfB6NtIH7QREH2rFpBUVceES1byv5zpFBq-1kABWtVE&usqp=CAU",
        text: "Enchanced my skills and knowledge in the field of research and data analysis and i would recommend this course to anyone",
        rating: 5
    },  
    // Add more testimonials...
];

// Navigation Menu
const navLinks = document.getElementById('navLinks');
const showMenu = document.getElementById('showMenu');
const closeMenu = document.getElementById('closeMenu');

showMenu.addEventListener('click', () => {
    navLinks.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Generate Course Cards
function createCourseCards() {
    const courseTrack = document.querySelector('.course-track');
    coursesData.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-content">
                <span class="course-tag">${course.tag}</span>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-stats">
                    <span><i class="far fa-clock"></i> ${course.duration}</span>
                    <span><i class="far fa-user"></i> ${course.students}</span>
                </div>
                <div class="course-price">
                    <strong>${course.price}</strong>
                </div>
            </div>
        `;
        courseTrack.appendChild(card);
    });
}

// Generate Testimonial Cards
function createTestimonialCards() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-image">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                </div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-quote">
                <p>${testimonial.text}</p>
            </div>
            <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}
            </div>
        `;
        testimonialTrack.appendChild(card);
    });
}

// Slider functionality
function initializeSlider(trackClass, prevBtn, nextBtn) {
    const track = document.querySelector(trackClass);
    const prev = document.querySelector(prevBtn);
    const next = document.querySelector(nextBtn);
    let position = 0;

    next.addEventListener('click', () => {
        const cards = track.children;
        const cardWidth = cards[0].offsetWidth + 32; // Including gap
        const visibleCards = Math.floor(track.offsetWidth / cardWidth);
        const maxPosition = -(cards.length - visibleCards) * cardWidth;

        position = Math.max(position - cardWidth, maxPosition);
        track.style.transform = `translateX(${position}px)`;
    });

    prev.addEventListener('click', () => {
        const cardWidth = track.children[0].offsetWidth + 32;
        position = Math.min(position + cardWidth, 0);
        track.style.transform = `translateX(${position}px)`;
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createCourseCards();
    createTestimonialCards();
    initializeSlider('.course-track', '.courses-prev', '.courses-next');
    initializeSlider('.testimonial-track', '.testimonial-prev', '.testimonial-next');
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    e.target.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Function to create course cards
function createCourseCard(course) {
    return `
        <div class="course-card">
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <span class="tag">${course.tag}</span>
            </div>
            <div class="course-info">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="duration"><i class="far fa-clock"></i> ${course.duration}</span>
                    <span class="price">${course.price}</span>
                </div>
                <button class="enroll-btn">Enroll Now</button>
            </div>
        </div>
    `;
}

// Function to create testimonial cards
function createTestimonialCard(testimonial) {
    return `
        <div class="testimonial-card">
            <div class="testimonial-image">
                <img src="${testimonial.image}" alt="${testimonial.name}">
            </div>
            <div class="testimonial-content">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <h4>${testimonial.name}</h4>
                <p class="role">${testimonial.role}</p>
            </div>
        </div>
    `;
}

// Initialize sliders
document.addEventListener('DOMContentLoaded', () => {
    const courseTrack = document.querySelector('.course-track');
    const testimonialTrack = document.querySelector('.testimonial-track');
    
    courseTrack.innerHTML = coursesData.map(course => createCourseCard(course)).join('');
    testimonialTrack.innerHTML = testimonials.map(testimonial => createTestimonialCard(testimonial)).join('');
});

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    
    const runCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                el.textContent = Math.round(current);
                setTimeout(updateCounter, 10);
            } else {
                el.textContent = target;
            }
        };
        
        updateCounter();
    };

    // Intersection Observer for stats
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));

    // Scroll to top button
    const scrollTop = document.getElementById('scrollTop');
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTop.style.opacity = '1';
            scrollTop.style.pointerEvents = 'all';
        } else {
            scrollTop.style.opacity = '0';
            scrollTop.style.pointerEvents = 'none';
        }
    });
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
}

// Trigger animation when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.stats'));

// Add this to your existing script.js
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        
        // Close other open items
        document.querySelectorAll('.faq-item').forEach(item => {
            if(item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.getElementById('showMenu');
    const closeBtn = document.getElementById('closeMenu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    });

    // Mobile menu
    menuBtn.addEventListener('click', () => {
        navLinks.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Active link highlighting
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navLinks.classList.remove('active');
        });
    });
});

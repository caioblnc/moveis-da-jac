// Sample products data
const products = [
    {
        id: 1,
        name: "Sofá 3 Lugares",
        price: "R$ 1.200,00",
        description: "Sofá em couro legítimo, cor marrom, excelente estado. Muito confortável e bem conservado.",
        image: "https://picsum.photos/seed/sofa1/400/300"
    },
    {
        id: 2,
        name: "Mesa de Jantar",
        price: "R$ 800,00",
        description: "Mesa de jantar em madeira maciça, acomoda 6 pessoas. Inclui 6 cadeiras.",
        image: "https://picsum.photos/seed/mesa1/400/300"
    },
    {
        id: 3,
        name: "Guarda-Roupa",
        price: "R$ 600,00",
        description: "Guarda-roupa 4 portas com espelho, muito espaçoso e em perfeito estado.",
        image: "https://picsum.photos/seed/guarda1/400/300"
    },
    {
        id: 4,
        name: "Estante de Livros",
        price: "R$ 300,00",
        description: "Estante moderna em madeira, 5 prateleiras. Ideal para livros e decoração.",
        image: "https://picsum.photos/seed/estante1/400/300"
    },
    {
        id: 5,
        name: "Cama Box Casal",
        price: "R$ 900,00",
        description: "Cama box casal com colchão ortopédico, pouco uso. Excelente conforto.",
        image: "https://picsum.photos/seed/cama1/400/300"
    },
    {
        id: 6,
        name: "Rack de TV",
        price: "R$ 450,00",
        description: "Rack de TV moderno com gavetas e espaço para aparelhos. Muito prático.",
        image: "https://picsum.photos/seed/rack1/400/300"
    }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

function loadProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="col-md-6 col-lg-4">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <div class="product-body">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">${product.price}</div>
                        <p class="product-description">${product.description}</p>
                        <button class="btn btn-contact" onclick="contactProduct('${product.name}')">
                            <i class="bi bi-whatsapp"></i> Interessado
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

function contactProduct(productName) {
    const message = `Olá! Tenho interesse no(a) ${productName}. Gostaria de mais informações.`;
    const whatsappUrl = `https://wa.me/5512996513538?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for navigation links
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

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.padding = '1rem 0';
    }
});

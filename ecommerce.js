// E-Commerce Page Functionality

document.addEventListener('DOMContentLoaded', function() {
    const wishlistBtns = document.querySelectorAll('.btn-wishlist');
    const checkoutBtns = document.querySelectorAll('.btn-checkout');
    const wishlistBadge = document.querySelector('.nav-icons .badge:first-child');
    const cartBadge = document.querySelector('.nav-icons .badge:last-child');

    let wishlistCount = 0;
    let cartCount = 0;

    // Wishlist functionality
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            wishlistCount++;
            wishlistBadge.textContent = wishlistCount;
            
            // Visual feedback
            this.style.background = '#dc2626';
            this.style.color = 'white';
            this.innerHTML = '<i class="fas fa-heart"></i> Added to Wishlist';
            
            setTimeout(() => {
                this.style.background = 'linear-gradient(135deg, #fef3c7 0%, #fee2e2 100%)';
                this.style.color = '#dc2626';
                this.innerHTML = '<i class="fas fa-heart"></i> Wishlist';
            }, 2000);

            // Smooth scroll to wishlist section
            setTimeout(() => {
                document.getElementById('wishlist').scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    });

    // Checkout functionality
    checkoutBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            cartCount++;
            cartBadge.textContent = cartCount;
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            this.innerHTML = '<i class="fas fa-check"></i> Added to Cart';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            }, 2000);

            // Smooth scroll to checkout section
            setTimeout(() => {
                document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
            }, 500);
        });
    });

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cartCount > 0) {
                alert(`Proceeding to checkout with ${cartCount} item(s) in your cart!`);
            } else {
                alert('Your cart is empty. Please add items first!');
            }
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = this.getAttribute('href');
            if (target.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // CTA button
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }

    console.log('E-commerce page loaded successfully!');
});
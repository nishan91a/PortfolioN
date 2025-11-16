// Real-Time Events Functionality

document.addEventListener('DOMContentLoaded', function() {
    const notificationsContainer = document.querySelector('.notifications-container');
    const statCounters = {
        transaction: document.querySelector('.stat-card:nth-child(1) .stat-count'),
        email: document.querySelector('.stat-card:nth-child(2) .stat-count'),
        whatsapp: document.querySelector('.stat-card:nth-child(3) .stat-count')
    };

    let counts = {
        transaction: 0,
        email: 0,
        whatsapp: 0
    };

    const notificationMessages = {
        transaction: [
            { title: '💳 Transaction Successful', message: 'Payment of $99.99 processed successfully' },
            { title: '✅ Order Confirmed', message: 'Your order #ORDER-2025-001 has been confirmed' },
            { title: '💰 Refund Processed', message: 'Refund of $49.99 has been initiated to your account' },
            { title: '🛒 Purchase Complete', message: 'Thank you for your purchase! Order total: $159.99' }
        ],
        email: [
            { title: '📧 Order Confirmation Email', message: 'Email sent to nisha@example.com - Order placed successfully' },
            { title: '📬 Invoice Received', message: 'Your invoice has been sent to your registered email' },
            { title: '💌 Welcome Email', message: 'Welcome to Shoppers Store! Check your inbox for exclusive offers' },
            { title: '📮 Shipping Notification', message: 'Your order is on the way! Tracking link sent to email' }
        ],
        whatsapp: [
            { title: '💬 WhatsApp: Money Sent', message: 'Payment of ₹5000 sent successfully to your contact' },
            { title: '📱 WhatsApp: Order Status', message: 'Your order is being prepared. You will receive it soon!' },
            { title: '💵 WhatsApp: Payment Received', message: 'Payment received! Thank you for shopping with us' },
            { title: '📲 WhatsApp: Delivery Update', message: 'Your package will be delivered today between 2-6 PM' }
        ]
    };

    function getTimeString() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    function createNotification(type) {
        const messages = notificationMessages[type];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        let icon = '';
        if (type === 'transaction') {
            icon = '<i class="fas fa-exchange-alt notification-icon"></i>';
        } else if (type === 'email') {
            icon = '<i class="fas fa-envelope notification-icon"></i>';
        } else if (type === 'whatsapp') {
            icon = '<i class="fab fa-whatsapp notification-icon"></i>';
        }

        notification.innerHTML = `
            ${icon}
            <div class="notification-content">
                <div class="notification-title">${randomMessage.title}</div>
                <div class="notification-message">${randomMessage.message}</div>
            </div>
            <div class="notification-time">${getTimeString()}</div>
        `;

        notificationsContainer.appendChild(notification);

        // Update counter
        counts[type]++;
        statCounters[type].textContent = counts[type];

        // Remove notification after animation completes
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    function generateRandomNotification() {
        const types = ['transaction', 'email', 'whatsapp'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        createNotification(randomType);
    }

    // Generate notifications at random intervals (2-5 seconds)
    function scheduleNextNotification() {
        const delay = Math.random() * 3000 + 2000; // 2-5 seconds
        setTimeout(() => {
            generateRandomNotification();
            scheduleNextNotification();
        }, delay);
    }

    // Start the notification system
    scheduleNextNotification();

    // Generate first notification immediately
    generateRandomNotification();

    console.log('Real-time event processing system initialized!');
});
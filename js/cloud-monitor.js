// Cloud Monitor Dashboard Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Sample server data
    const allServersData = [
        {
            status: 'online',
            name: 'us-east-db1',
            owner: 'Victoria',
            yield: '1 bits per sec',
            lastUpdate: '2025-11-16 13:54:00'
        },
        {
            status: 'online',
            name: 'us-south-ec2',
            owner: 'James',
            yield: '4.6 bits per sec',
            lastUpdate: '2025-11-16 13:53:45'
        },
        {
            status: 'restarting',
            name: 'eu-west-web1',
            owner: 'Sarah',
            yield: '2.3 bits per sec',
            lastUpdate: '2025-11-16 13:52:30'
        },
        {
            status: 'online',
            name: 'ap-south-api1',
            owner: 'Raj',
            yield: '3.8 bits per sec',
            lastUpdate: '2025-11-16 13:54:15'
        },
        {
            status: 'offline',
            name: 'us-west-cache1',
            owner: 'Emily',
            yield: '0 bits per sec',
            lastUpdate: '2025-11-16 13:00:00'
        },
        {
            status: 'online',
            name: 'eu-central-db2',
            owner: 'Michael',
            yield: '5.2 bits per sec',
            lastUpdate: '2025-11-16 13:54:22'
        },
        {
            status: 'online',
            name: 'ap-east-web2',
            owner: 'Lisa',
            yield: '2.1 bits per sec',
            lastUpdate: '2025-11-16 13:53:50'
        },
        {
            status: 'restarting',
            name: 'us-east-api2',
            owner: 'David',
            yield: '1.9 bits per sec',
            lastUpdate: '2025-11-16 13:52:10'
        },
        {
            status: 'online',
            name: 'eu-west-cache2',
            owner: 'Anna',
            yield: '4.4 bits per sec',
            lastUpdate: '2025-11-16 13:54:00'
        },
        {
            status: 'offline',
            name: 'ap-south-db3',
            owner: 'John',
            yield: '0 bits per sec',
            lastUpdate: '2025-11-16 12:30:00'
        }
    ];

    const itemsPerPage = 5;
    let currentPage = 1;

    // Populate servers table
    function populateTable(page) {
        const tbody = document.getElementById('servers-tbody');
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = allServersData.slice(startIndex, endIndex);

        tbody.innerHTML = '';
        pageData.forEach(server => {
            const row = document.createElement('tr');
            const statusClass = `status-${server.status}`;
            const statusText = server.status.charAt(0).toUpperCase() + server.status.slice(1);

            row.innerHTML = `
                <td>
                    <span class="status-badge ${statusClass}">
                        <span class="status-dot"></span>
                        ${statusText}
                    </span>
                </td>
                <td>${server.name}</td>
                <td>${server.owner}</td>
                <td>${server.yield}</td>
                <td>${server.lastUpdate}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Generate pagination
    function generatePagination() {
        const totalPages = Math.ceil(allServersData.length / itemsPerPage);
        const pageNumbers = document.getElementById('page-numbers');
        pageNumbers.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = 'page-number';
            btn.textContent = i;
            if (i === currentPage) {
                btn.classList.add('active');
            }
            btn.addEventListener('click', () => {
                currentPage = i;
                populateTable(currentPage);
                generatePagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbers.appendChild(btn);
        }
    }

    // Previous button
    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            populateTable(currentPage);
            generatePagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Next button
    document.getElementById('next-btn').addEventListener('click', () => {
        const totalPages = Math.ceil(allServersData.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            populateTable(currentPage);
            generatePagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Tab switching
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabName = item.getAttribute('data-tab');
            
            // Remove active class from all items and tabs
            menuItems.forEach(m => m.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            // Add active class to clicked item and corresponding tab
            item.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });

    // Initialize
    populateTable(currentPage);
    generatePagination();

    console.log('Cloud Monitor Dashboard initialized!');
});
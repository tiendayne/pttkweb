// Smooth scrolling when clicking on navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngừng hành động mặc định (cuộn)
        
        // Cuộn mượt đến phần tương ứng
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Thiết lập hiệu ứng cuộn mượt
        });
    });
});

// Cập nhật hành động thanh toán khi nhấn nút "Thanh Toán"
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('checkoutButton').addEventListener('click', function () {
        window.location.href = 'payment.html'; // Chuyển hướng đến trang thanh toán (ví dụ payment.html)
    });
});

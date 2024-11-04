document.addEventListener('DOMContentLoaded', () => {
    const notWantButton = document.getElementById('not-want');
    const wantButton = document.getElementById('want');
    const backhomeButton = document.getElementById('backhome');

    // Nếu không có nút "trở về" trên trang chính, bỏ qua phần này
    if (backhomeButton) {
        backhomeButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Chuyển về trang chính
        });
    }

    notWantButton.addEventListener('click', () => {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        notWantButton.style.position = 'absolute'; // Đặt vị trí thành tuyệt đối
        notWantButton.style.left = randomX + 'px'; // Thiết lập vị trí ngẫu nhiên theo chiều ngang
        notWantButton.style.top = randomY + 'px'; // Thiết lập vị trí ngẫu nhiên theo chiều dọc
    });

    wantButton.addEventListener('click', () => {
        window.location.href = 'result.html'; // Chuyển đến trang kết quả
    });
});

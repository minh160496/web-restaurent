## MÔ TẢ DỰ ÁN

# Cấu trúc dự án

1. Tạo ra globalstyle để add các css global
2. Tạo layout chứa các component và các kiểu layout trong trang

- LayoutDefault: Có 2 dạng có navigator và không có navigator (xử lý bằng props navigator của component LayoutDefault)
- LayoutNavBar: có 2 kiểu navbarleft và right căn cứ vào props truyền vào cho component LayoutNavBar (chỗ này dùng useContext để component Main cũng nhận được props của cha nó là LayoutNavBar)

3. Xử lý logic propper history

- Hiện proper dùng visible={boolean}: tạo result là mảng chứa các kết quả tìm kiếm, hiện khi result.length > 0

- Ẩn khi click khỏi propper

* Dùng props onClickOutSide của tippy, khi đó lại setResult là mảng rỗng và setValueInput=""

- logic không nhập đuọc ký tự cách đầu tiên: Khi e.target.value mà rỗng thì setPromtInput('')

- Để Tippy có thể absoute với thẻ cha gắn nó hãy cho thẻ cha nó có thuộc tính pos-relative

5. Tạo file until để tạo các request như get, post, put API
6. Tạo file apiServices để lấy các api của từng component sử dụng các method từ request

7. Responsive: Lắng nghe sự kiện onsize của window nếu window.innerWidth >= 992 thì hủy sự kiện click vào iconsearch đã gán trước đó nếu <= 992 thì lại lắng nghe lại

## MÔ TẢ DỰ ÁN

# Cấu trúc dự án

1. Tạo ra globalstyle để add các css global
2. Tạo layout chứa các component và các kiểu layout trong trang

- LayoutDefault: Có 2 dạng có navigator và không có navigator (xử lý bằng props navigator của component LayoutDefault)
- LayoutNavBar: có 2 kiểu navbarleft và right căn cứ vào props truyền vào cho component LayoutNavBar (chỗ này dùng useContext để component Main cũng nhận được props của cha nó là LayoutNavBar)

3. Xử lý logic propper

- Hiện proper dùng visible={boolean}: tạo result là mảng chứa các kết quả tìm kiếm, hiện khi result.length > 0

- Ẩn khi click khỏi propper

* Dùng props onClickOutSide của tippy, khi đó lại setResult là mảng rỗng và setValueInput=""

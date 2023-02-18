# NHỮNG RÚT RA TỪ WEB TIKTOK

## XÂY DỰNG DỰ ÁN

### Trong file root tạo file .env.local để tạo các biến môi trường

- Để ghi đè một biết môi trường ví dụ đổi POST từ 3000 sang 3001: POST=3001

### Tùy chỉnh CRA (custom CRA)

- Sử dụng thư viện customize CRA

* cài thư viện customize-cra và react-app-rewired
* Đọc DOC về rewire làm theo, đọc DOC về customize-cra và lam theo

### Cài đặt babel-plugin-module-resolver: để import với cú pháp gọn gàng thêm tùy chọn có gợi ý

### Cấu hình prettier

- Tạo file .prettierrc.json để cấu hình
- tạo .vscode/settings.json để app format khi save

### install reactspnistes

### install HTMLtagwrap (alt+w)

### Cấu hình và sử dụng css/scss

1. Tạo Global style component

2. Delete file not need

3. install Sass -D

4. resset css with nomailize npm

### install list googlefont what you need

- import font to Globalstyle.css

### GET information and into variable

- font-size
- color
- add text-rendering (too uu toc do hien thi font)

## PHÂN TÍCH TỔNG QUAN LAYOUT TRANG WEB

- XEM TRANG ĐÓ CÓ MẤY LAYOUT ĐÂU LÀ LAYOUT CHÍNH, LAYOUT PHỤ

- CÀI ĐẶT THƯ VIỆN REACT-ROUTER-DOM WITH NPM

- ĐƯA CẤU HÌNH ROUTER RA BÊN NGOÀI

- Xây dựnG folde Layout để chứa các loại layout
- THƯ MỤC LAYOUT NÊN ĐƯA RA BÊN NGOÀI

## CHECK LẠI LAYOUT BẰNG SOURCE COLTROL TRƯỚC KHI PUSH LÊN

### TẠO KHUNG SƯỜN CHI TIẾT HƠN CHO DEFAULT LAYOUT

- ĐO CÁC KÍCH THƯỚC TRƯỚC, đặt biến trên global
- Test kỹ lại layout

### Tạo các thành phần

- Lưu ý tạo file assets để chứa các img, svg

- thêm spellcheck = false để bỏ đỏ chân

### install font-awesome, sử dụng component không dùng thẻ i

"@fortawesome/fontawesome-svg-core": "^1.3.0",
"@fortawesome/free-brands-svg-icons": "^6.0.0",
"@fortawesome/free-regular-svg-icons": "^6.0.0",
"@fortawesome/free-solid-svg-icons": "^6.0.0",
"@fortawesome/react-fontawesome": "^0.1.17",

###### Note

- :forcus-withthin khi focus thẻ div
- set màu con chuột khi focus: carlet: #color
- select input khi mất placeholder: input:not(:placehoder)
- select class khi click chuôt: class:active

### XÂY DỤNG GIAO DIỆN CỤ THỂ

XÂY DỰNG UI PHẦN HÊADER

- tải font trên devtool network cltr s tải về đưa vào vào font
  #1. Sử dụng thư viện tippy js react github để tạo ô lich sử tìm kiếm
- dùng để làm các toolip các proper và dropdown
- tra cứu các props của tippy để sử dụng

* content: nội dung nhiển thị
* placement: vị trí (top, end, bottom, start)
* delay: thời gian hiện bị delay
* onHide: method thực hiện khi hiện lên tippy
* import css tippy
* ofset={[left, right]}: set vị trí cho tippy
* onclick outside (ấn ra ngoài)
* hideonclick={true} (ẩn khi click)
* dùng headless tippy để hiển thị ô lịch sử tìm kiếm, dùng props render để hiện ra nội dung
* có thể dùng thêm promotion để tạo animation ô lịch sử tìm kiếm
* có thể custum control để focus vào nó hiện thôi thêm props visible vào
* interactive để cho phép select trong nội dung tìm kiếm
* user-select=none không select được text bên trong

* debugger để không bị ẩn hover
* đưa các phần giống nhau vào layout chung
* Các nút
* dùng rest và spreed để truyền props cho component tăng giá trị sử dụng
* làm các trang thái của button: active, disable
* Menu đa cấp tư duy nó là mảng cứ render ra cái cuối cùng của mảng là được (trướcdđos push nó vào mảng)
* convert sang boolean. cho 2 dấu not phía trước
* dùng padding để handle xử lý chiều cao của button
* Luôn phát huy param mặc định

## Làm xong một buổi nhớ reveew nha

- tạo component Img (để mỗi khi ảnh lỗi thì hiện một cái ảnh mặc định) và component svg(vì svg cần đổi mầu còn img thì không)

* img có props onError= method(khi lỗi làm gì)
* để sử dụng thì sử dụng @font-face{ font-famile, url} trong file scss

* chú ý: tipy hay thư viện nào cũng lấy ref của các thẻ trong DOM thật cho nên nếu truyền vào Compone nó sẽ không nhận nên phải dùng forwardref ( HOC đưa ref của ReactEl ra ngoài ReactComp)

- EndcodeURI: Mã hóa ký tự trùng với backend(?, …)
- xem git theo code mới nhất click dot

* LUÔN CHÚ Ý TRƯỜNG HỢP CONTENT TRONG DIV RẤT DÀI ( TRONG LIST, SỐ CHỮ )
* khi set dislay flex nó có mặc định flex shirk làm các item con bị co lại, để fix set flex-shirk=0
* overflow=overlay để cho thanh cuộn nổi lên không chiếm diện tích body

##LOGIC PHẦN HEADER

- Tim kiếm

* Khi onimput chưa request ngay mà khi người dùng ấn xong dùng lại mới resquest
* Không cho viết chữ cái cách đầu tiên trong ô input

- Dùng kỹ thuật Debounce

* LÀM ĐẸP LẠI THANH CUỘN Ở CÁC VỊ TRÍ VỚI THƯ VIỆN

- custom Hook (useDebounce)

* Phần search nên tách riêng ra vì nó sẽ rerender khi state thay đổi mà logo và các phần khác vẫn không thay đổi (rerender không cần thiết)

- Dùng thư viện axios_github (super assign) để gói fetch để tiện bảo trì và tái sử dụng, cú pháp gọn gàng hơn (không phải nối chuỗi)

* tạo file request trong folder until để tạo các instance endpoin của api và dùng nó ở mọi chỗ khi gọi api

- Bên trong file request tạo luôn hàm getApi và export ra ngoài

* Sử lý lỗi call APi với try catch
* Có thể tách phần gọi API ra ngoài src đặt nó là service để thực hiện các phương thức với API

- Tạo một file config(. src)/row : dùng để defined những tuyến đường != file routers để không fixed cứng các địa chỉ router ( TƯ TƯỞNG KHÔNG BAO GIỜ HACK CODE)
- Lỗi img không nằm giữa hoặc full cứ cho thằng cha dislay flex là ok
- reactNode là tất cả những cái gì có thể render được

- SÀI ESLINT EXTENDSION GẠCH CHÂN NHỮNG BIẾN KHÔNG SỬ DỤNG

- Tạo file mội trường khi desloy

* Tại file .env.production
  .env.development : trong này lưu đường dẫn API (nó nằm trong oblect prosess.env)

- SỬ DỤNG THƯ VIỆN PROPTYPES ĐỂ XÁC ĐỊNH TYPE BẮT BUỘC CHO PROPS QUA ĐÓ DỄ DANG PHÁT HIỆN LỖI SAI CỦA PROPS ĐỂ KHOANH VÙNG VÀ XỬ LÝ

* chú ý type dạng note là quy định props là những cái gì có thể render được (thường dùng với children)
* viết dưới function Component ()
* chú ý method isRequire

- Khắc phục có quá nhiều file index.js

* Tạo file index làm trung gian thôi, vừa import vừa export ra file component.js

\*\* useCallback nên sử dụng khi có nhiều state trong 1 component, mỗi lần 1 state thay đổi có những state không thay đổi

##XÂY DỰNG UI PHẦN SIDEBAR

1. Link không hỗ trợ active còn NavLink hỗ trợ active(active thì setStyle khác)
2. Navlink có hỗ trợ khi truyền classname = function return ra giá trị

- Dùng khi muốn set NavLink có active

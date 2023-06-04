let bai = parseInt(prompt("Nhập bài"));
switch (bai){
    case 1:
        let number = parseInt(prompt("Nhập số lượng số Fibonacci"))
        let f1 = 1;
        let f2=1;
        let f3;
        document.write(f1 + " ");
        document.write(f2 + " ");
        for ( let count = 3; count<=number; count++){
            f3=f1+f2;
            f1=f2;
            f2=f3;
            document.write(f3+" ");
        }
    break;
    case 2:
        let giaiThua = parseInt(prompt("Nhập số nguyên dương cần tìm giai thừa"));
        document.write("Giai thừa của "+giaiThua+" ="+dequy(giaiThua));
        function dequy (giaiThua){
            if (giaiThua==1){
                return 1;
            }else{
                return dequy(giaiThua-1)*giaiThua;
            }
        }
    break;
    case 3:
        let nDong = parseInt (prompt("Nhập số dòng tạo thành tam giác"));
        let i,j;
        let goc = prompt("Nhập góc (-) hoặc (+) của tam giác");
        let huong = prompt("Nhập bên góc vuông sẽ nằm, nhập 'trai' hoặc 'phai'")
        if (goc=="+" && huong=="trai") {
            for (i = 1; i <= nDong; i++) {
                for (j = 1; j <= i; j++) {
                    document.write("*");
                }
                document.write("<br>");
            }
        }
        if (goc=="-" && huong=="trai") {
            for (i = nDong; i >= 1; i--) {
                for (let j = 1; j <= i; j++) {
                    document.write("*");
                }
                document.write("<br>");
            }
        }

        if (goc=="+" && huong=="phai") {
            for (i = nDong; i >= 1; i--) {
                for (j = 1; j <= nDong; j++) {
                    if (j < i) {
                        document.write("&nbsp;&nbsp");
                    } else {
                        document.write("*");
                    }
                }
                document.write("<br>");
            }
        }

        if (goc=="-" && huong=="phai") {
            for (i = nDong; i >= 1; i--) {
                for (j = nDong; j >= 1; j--) {
                    if (j > i) {
                        document.write("&nbsp;&nbsp");
                    } else {
                        document.write("*");
                    }
                }
                document.write("<br>");
            }
        }
    break;
    case 4:
        let cr = +prompt('nhap chieu rong');
        let cd = +prompt('nhap chieu dai');
        for (let i = 0; i < cd; i++) {
            for (let j = 0; j < cr; j++) {
                if (i === 0 || j === 0 || i === cd - 1 || j === cr - 1) {
                    document.write("*");
                } else
                    document.write("&ensp;");
            }
            document.write("<br>");
        }
    break;
    case 5:
        let InvestMoney = parseInt(prompt("Nhập số tiền bạn muốn đầu tư ban đầu"));
        let month = parseInt(prompt("Nhập số tháng bạn muốn cho vay hoặc gửi tiết kiệt"));
        let interestRate = parseFloat(prompt("Nhập lãi xuất hàng năm"))/12;
        let after=1;
        let j_5 = 1
        for (let i_5=1 ; i_5 <=month; i_5++){
            after *= (1+interestRate)**j_5;
        }
            after = after * InvestMoney;
        document.write("Số tiền lãi sau thời hạn dự định sẽ là "+ after +" đồng")
}
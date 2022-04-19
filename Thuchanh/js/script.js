function myFunctionXoa() {

    document.getElementById("btn1").onclick = function () {
        document.getElementById("b1").style.display = 'none';
        alert('Xóa thành công')
    };

    document.getElementById("btn2").onclick = function () {
        document.getElementById("b2").style.display = 'none';
        alert('Xóa thành công')
    };

    document.getElementById("btn3").onclick = function () {
        document.getElementById("b3").style.display = 'none';
        alert('Xóa thành công')
    };

    document.getElementById("btn4").onclick = function () {
        document.getElementById("b4").style.display = 'none';
        alert('Xóa thành công')
    };
    document.getElementById("btn5").onclick = function () {
        document.getElementById("b5").style.display = 'none';
        alert('Xóa thành công')
    };
    document.getElementById("btn6").onclick = function () {
        document.getElementById("b6").style.display = 'none';
        alert('Xóa thành công')
    };
    document.getElementById("btn7").onclick = function () {
        document.getElementById("b7").style.display = 'none';
        alert('Xóa thành công')
    };
    document.getElementById("btn8").onclick = function () {
        document.getElementById("b8").style.display = 'none';
        alert('Xóa thành công')
    };
}
function myFunction() {
  //khai bao va gan gia tri
   var input, filter, table, tr, td, i;
   input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("datalist");
  tr = table.getElementsByTagName("tr");

//so sanh
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
       }
   } 
   }
 }

function myFunctionLuu() {
    var inpHoten, selDiachi, txtHoTen, txtDiachi, txtGioitinh;
    inpHoten = document.getElementById("inpHoTen");
   selDiachi = document.getElementById("DiaChi2");
   var rdoGioiTinh = document.getElementsByName("Chon_gioitinh");
   var Mota=document.getElementById("txtaMota2");
   var Ngaysinh =document.getElementById("dateNgaysinh2");
   var chkSothich =document.getElementsByName("SoThich2");
   var Gmail=document.getElementById("email1");
   
   var ngaysinh=document.getElementById("Ngaysinh");
    var   txtMota=document.getElementById("Mota");
       txtGioitinh = document.getElementById("GioiT");
       txtHoTen = document.getElementById("txtTen");
       txtDiachi = document.getElementById("txtDC");
    var   txtSothich=document.getElementById("Sothich");
    var txtgmail=document.getElementById("txtGmail");

    var result = "";
    
    var rdoGioiTinh = document.getElementsByName("Chon_gioitinh");
    for (var i = 0; i < rdoGioiTinh.length; i++) {
        if (rdoGioiTinh[i].checked === true) {
            txtGioitinh.innerHTML = rdoGioiTinh[i].value;
        }
    }    
    for (var i = 0; i < chkSothich.length; i++){
        if (chkSothich[i].checked === true){
            result +=  chkSothich[i].value + ',';            
        }       
    }          
    ngaysinh.innerHTML=Ngaysinh.value;
    txtMota.innerHTML=Mota.value;
    txtSothich.innerHTML=result;
    txtHoTen.innerHTML = inpHoten.value;
    txtDiachi.innerHTML = selDiachi.value;
    txtgmail.innerHTML=Gmail.value;
    alert('sửa thành công');
    DongDLSuahs();
console.log(Hoten,Diachi )

}


var data = []
function add() {

    var hoten = document.getElementById("HoTen").value;
    var diachi = document.getElementById("DiaChi").value;
    var mota = document.getElementById("txtaMota").value;
    var Ngaysinh = document.getElementById("dateNgaysinh").value;
    var Emali=document.getElementById("email").value;
    
    var txtGioitinh;
    var rdoGioiTinh = document.getElementsByName("Chon_gioitinh");
    for (var i = 0; i < rdoGioiTinh.length; i++) {
        if (rdoGioiTinh[i].checked === true) {
            txtGioitinh = rdoGioiTinh[i].value;
        }
    }
    var chkSothich =document.getElementsByName("SoThich");
    var result = "";
                 
               
        for (var i = 0; i < chkSothich.length; i++){
            if (chkSothich[i].checked === true){
                result +=  chkSothich[i].value + ',';            
            }       
        }        
    var danhsach = {
        "hoten": hoten,
        "diachi": diachi,
        "GioiTinh":txtGioitinh,
        "Sothich":result,
        "Ngaysinh":Ngaysinh,
        "mota":mota,
        "Gmail":Emali
    };
    data.push(danhsach);

    var datalisstTag = document.getElementById("datalist");
    datalisstTag.innerHTML += "<tr>" +
        "<td class='cangiua'><input type='checkbox' />" + "</td>" +
        "<td>" + hoten + "</td>" +
        "<td>" + Emali + "</td>" +
        "<td>" + diachi + "</td>" +
        "<td>" + txtGioitinh + "</td>" +
        "<td>" + result + "</td>" +
        "<td>" + Ngaysinh + "</td>" +
        "<td>" + mota + "</td>" +
        "<td class='cangiua'><input type='button' value='Sửa' />" + "</td>" +
        "<td class='cangiua'><input type='button' id='btn1' value='Xóa' />" + "</td>" +
        "</tr>";
        console.log(hoten,diachi,txtGioitinh)
        alert('Thêm thành công')
        DongDLThemhs();
}
 var Themhs = document.getElementById("ThemHS");
     
  function ModialogThemhs(){  
    var ThemhsDialog =document.getElementById("confirm-ThemHS") ;
     ThemhsDialog.open=true;
  }
  
     
   function DongDLThemhs(){
       var can=document.getElementById("cancel");
       var ThemhsDialog =document.getElementById("confirm-ThemHS") ;
       ThemhsDialog.open=false;
   }
    
    
    
    
   function ModialogSuahs(){  
    var SuahsDialog =document.getElementById("confirm-SuaHS") ;
    SuahsDialog.open=true;

    var Hoten, Diachi, txtHoTen, txtDiachi, txtGioitinh;
     inpHoten = document.getElementById("inpHoTen");
    selDiachi = document.getElementById("DiaChi2");
    var rdoGioiTinh = document.getElementsByName("Chon_gioitinh");
    var Mota=document.getElementById("txtaMota2");
    var Ngaysinh =document.getElementById("dateNgaysinh2");
    var chkSothich =document.getElementsByName("SoThich2");
    var ngaysinh=document.getElementById("Ngaysinh");
     var   txtMota=document.getElementById("Mota");
        txtGioitinh = document.getElementById("GioiT");
        txtHoTen = document.getElementById("txtTen");
        txtDiachi = document.getElementById("txtDC");
     var   txtSothich=document.getElementById("Sothich");
     var txtgmail=document.getElementById("txtGmail");
     var gmail=document.getElementById("email1");
        
        inpHoten.value = txtHoTen.innerHTML;
        Mota.value=txtMota.innerHTML;
        Ngaysinh.value=ngaysinh.innerHTML;
        selDiachi.value =txtDiachi.innerHTML ;
        gmail.value=txtgmail.innerHTML;
        
        for (var i = 0; i < rdoGioiTinh.length; i++) {
            if (rdoGioiTinh[i].value === txtGioitinh.innerHTML) {
                rdoGioiTinh[i].checked = true;
            }
        }
        var result = "";
                 
               
        for (var i = 0; i < chkSothich.length; i++){
            if (chkSothich[i].value === txtSothich.innerHTML){
                chkSothich[i].checked = true;            
            }       
        }      
       
  }
  
     
   function DongDLSuahs(){
       var can=document.getElementById("can");
       var SuahsDialog =document.getElementById("confirm-SuaHS") ;
       SuahsDialog.open=false;
   }
    
   function myFunction() {
    // Get the value of the input field with id="HoTen"
    let x = document.getElementById("HoTen").value;
   
  
    let text;
    if (x=="" ) {
      text = "Không bỏ trống";
    } else {
      text = "OK";
    }
 
    document.getElementById("form-message").innerHTML = text;

  }
  //-----------
function kt(){
  
    var Hoten=document.getElementById("HoTen").value;
        var Email=document.getElementById("email").value;
        var Ngaysinh=document.getElementById("dateNgaysinh").value;
        if(Hoten!=""&&Email!=""&&Ngaysinh!=""){
            add();
        };
    
}
function kt2(){
   
    var Hoten=document.getElementById("inpHoTen").value;
        var Email=document.getElementById("email1").value;
        var Ngaysinh=document.getElementById("dateNgaysinh2").value;
        if(Hoten!=""&&Email!=""&&Ngaysinh!=""){
            myFunctionLuu();
        };
    
}

function validator(options){

    var selectorRules={};
    var btnthem=document.getElementById("BtnThem");
    var Hoten=document.getElementById("HoTen").value;
        var Email=document.getElementById("email").value;
        var Ngaysinh=document.getElementById("dateNgaysinh").value;
    //ham thuc hien validate
    function validate(inputElement,rule){
       
        var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        //lấy ra các rules của select
        var rules=selectorRules[rule.selector];
        //lặp qua từng rules và kiểm tra
        //gặp lỗi thì dùng
        var j;
        for(var i=0;i<rules.length;i++){
          
            errorMessage=rules[i](inputElement.value);
            if(errorMessage) break;
            j++;
        }
        console.log(j);
        
        if(errorMessage){
            errorElement.innerText=errorMessage;
            inputElement.parentElement.classList.add('invalid');
            
            
        }else{
            errorElement.innerText='';
            inputElement.parentElement.classList.remove('invalid');

        }

    }


    //ham lay element cua form can validate
    var formElement=document.querySelector(options.form);

    if(formElement){

        formElement.onsubmit=function(e){
            e.preventDefault();
            // lăp qua tung ru va validate
            options.rules.forEach(function(rule){
                var inputElement=formElement.querySelector(rule.selector);
                validate(inputElement,rule);
              
            });
            
           

        }
       

        //lặp lại mỗi rules và xử lý
        options.rules.forEach(function(rule){
            //lưu lại các rules cho moi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }else{
                selectorRules[rule.selector]=[rule.test];
            }
           var inputElement=formElement.querySelector(rule.selector);
          
           if(inputElement){
               //xu ly truong hop blur ra ngoai input
               inputElement.onblur=function(){
                validate(inputElement,rule);
               }
               //xu ly moi khi nguoi dung nhap input
               inputElement.oninput=function(){
                var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
                errorElement.innerText='';
                inputElement.parentElement.classList.remove('invalid');
             
            }
                         
           }
        });
        
        
       
    }  
       
    
}

//nguen tac cua rules
//co loi tra va messg loi
//ko co loi ko tra ve cai j(undefined)
validator.isRequired=function(selector,message){
    return {
        selector:selector,
        test: function(value){
            return value.trim() ?undefined:message||'vui long nhap truong nay';
        }
    };

}

validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || 'Trường này phải là email';
        }
    };
}



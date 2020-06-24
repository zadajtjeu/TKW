function xlDangky() {
	var kq="";
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var repass = document.getElementById('repass');
	var name = document.getElementById('name');
	var gender = document.getElementById('gender');
	var birthday = document.getElementById('birthday');
	var jobs = document.getElementById('jobs');
	var mail = document.getElementById('mail');
	var phone = document.getElementById('phone');
	var note = document.getElementById('note');

	var check = 1;

	if (username.value == "") {
		document.getElementById('logusername').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}
	if (password.value == "") {
		document.getElementById('logpass').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}
	if (repass.value == "") {
		document.getElementById('logrepass').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}
	if (name.value == "") {
		document.getElementById('logname').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}
	if (gender.value == "") {
		document.getElementById('loggender').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}
	if (birthday.value == "") {
		document.getElementById('logdate').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}if (jobs.value == "") {
		document.getElementById('logjob').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}
	if (mail.value == "") {
		document.getElementById('logmail').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}
	if (phone.value == "") {
		document.getElementById('logphone').innerHTML = " *Vui lòng nhập mục này!";
		check = 0;
	}

	if (password.value != repass.value) {
		document.getElementById('logrepass').innerHTML = " *Mật khẩu nhập lại không khớp!";
		check = 0;
	}
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(mail.value)) {
    	document.getElementById('logmail').innerHTML = " *Địa chỉ email kgoong hợp lệ!";
		check = 0;
    }


	if (check == 1) {
		kq += "<stong> Tên đăng nhập: "+ username.value +"</strong><br>";
		kq += "<stong> Mật khẩu: "+ password.value +"</strong><br>";
		kq += "<stong> Họ tên: "+ name.value +"</strong><br>";
		kq += "<stong> Phái: "+ gender.value +"</strong><br>";
		kq += "<stong> Ngày sinh: "+ birthday.value +"</strong><br>";
		kq += "<stong> Nghề nghiệp: "+ jobs.value +"</strong><br>";
		kq += "<stong> Email: "+ mail.value +"</strong><br>";
		kq += "<stong> ĐIện thoại: "+ phone.value +"</strong><br>";
		kq += "<stong> Ghi chú: "+ note.value +"</strong><br>";
	}
	return kq;
}

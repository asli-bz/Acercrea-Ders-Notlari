function KontrolEt()
{
var theForm = document.form1; //Hangi form kontrol edilecek - formun ismi
if ( theForm.tahmin.value.length == 0 ) { // Form nesnenizin ismi
alert( 'Lütfen bir kullanıcı ismi giriniz!' );
theForm.kullanici.focus();
return;
}
if ( theForm.sifre.value.length == 0 ) {
alert( 'Lütfen şifre giriniz!' );
theForm.sifre.focus();
return;
}
theForm.submit();
}
function getRandom(arr) {return arr[Math.floor(Math.random() * arr.length)]};
var phonenumber = ['6281386267897'];
var phone = getRandom(phonenumber);
var walink2 = 'Hallo saya ingin membeli produk Anda dengan keterangan sebagai berikut:';
var text_no = 'Isi semua Formulir lalu klik Send.';
var text_yes = 'Terkirim.';

$(document).on('click','.send_form', function(){ 
var input_simple = document.getElementById('wa_nama'); 
 
/* Whatsapp Settings */ 
var walink = 'https://web.whatsapp.com/send'; 
 
/* Smartphone Support */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
} 
 
if("" != input_simple.value){ 
 
 /* Call Input Form */ 
 cartItem = '';
 counter = 1;
 waItems = JSON.parse(localStorage.getItem('simpleCart_items'));
 waItems = Object.values(waItems);
 waItems.forEach((item,i)=>{   
    cartItem += '*'+counter+'.  '+item.name+'* %0A';
    cartItem += '▪️ Harga Satuan : '+angkaToRp(item.price)+' %0A';
    cartItem += '▪️ '+item.size+' %0A';
    cartItem += '▪️ Jumlah : '+item.quantity+' %0A';
    cartItem += '▪️ Sub Total : '+angkaToRp(item.price * item.quantity)+' %0A';
    cartItem += '▪️ Link Produk : '+item.link+' %0A'; 
    cartItem += '=============================%0A%0A';
    counter++;
 });
var input_opsi = $("#courier :selected").text(),
    input_kodekurrir = $('#result-2').text(),
    input_pembayaran = $("#wa_pembayaran :selected").text(), 
    input_nama = $("#wa_nama").val(), 
    input_email = $("#wa_email").val(),
    input_nomor = $("#wa_nomor").val(),  
    input_alamat = $("#wa_alamat").val(),
    input_catatan = $("#wa_catatan").val(),
    input_info = $('.simpleCart_items').text(), 
    input_total = $('.harga-total .simpleCart_total').text(),
    input_totalharga = $('.simpleCart_grandTotal').text(),
    input_berat = $('span.hidden').text();

/* Final Whatsapp URL */ 
var simple_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + 
    '*DATA PEMBELI* %0A' +
    '=============================%0A' +
    '*Nama* : ' + input_nama + '%0A' + 
    '*Nomor HP* :  ' + input_nomor + '%0A' +
    '*Email* :  ' + input_email + '%0A' +
    '*Opsi Pengiriman* : ' + input_opsi + ' ' + input_kodekurrir + '%0A' +
    '*Metode Pembayaran* : ' + input_pembayaran + '%0A' +  
    '*Alamat Lengkap* : ' + input_alamat + '%0A' + 
    '=============================%0A' + '%0A' +
    '*DAFTAR BELANJAAN* %0A' +
    '=============================%0A' + input_info +
    '*Total Berat* : ' + input_berat + '%0A' +
    '*Total Harga* : ' + input_total + '%0A' +
    '*Total Pembayaran* : ' + input_totalharga + '%0A' + '%0A' +
    '=============================%0A' + '%0A' +
    '*Catatan Pembeli* : ' + input_catatan + '%0A' +
    '=============================%0A';
 
/* Whatsapp Window Open */ 
window.open(simple_whatsapp,'_blank'); 
localStorage.removeItem('simpleCart_items');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>'; 
} else { 
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>'; 
} 
});

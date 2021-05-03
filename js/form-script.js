//<![CDATA[
function getRandom(arr) {return arr[Math.floor(Math.random() * arr.length)]};
var phonenumber = ['6281386267897'];
var phone = getRandom(phonenumber);
var walink2 = 'Hallo saya ingin membeli produk Anda dengan keterangan sebagai berikut:';
var text_no = 'Isi semua Formulir lalu klik Send.';
var text_yes = 'Terkirim.';

$('.datainput .validate').each(function() {
    title = $(this).attr('name');
    label = $(this).parents('.datainput');
    $('<span class="validasi"><b>' + title + '</b> diperlukan</span>').appendTo(label);
});
   $(document).on('keyup', '.datainput .validate', function() {
    if ($(this).val() != '') {
        $(this).removeClass('focus');
        $(this).parents('.datainput').find('.validasi').removeClass('show');
    }
});
$(document).on('change', '.datainput select', function() {
    $(this).removeClass('focus');
    $(this).parents('.datainput').find('.validasi').removeClass('show');
});
$('.send_form').click(whatsappchat);
function whatsappchat() { 
if ($('#namalengkap').val() == '') { // Nama Lengkap
			    $('#namalengkap').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#namalengkap').focus();
        return false;
    } else if ($('#nomorWA').val() == '') { // No Whatsapp
			    $('#nomorWA').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#nomorWA').focus();
        return false;
    } else if ($('#kurir').val() == 'default') { // Kurir
			    $('#kurir').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#kurir').focus();
        return false;
    } else if ($('#pembayaran').val() == 'default') { // Pembayaran
			    $('#pembayaran').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#pembayaran').focus();
        return false;
    } else if ($('#alamatLengkap').val() == '') { // Alamat
			    $('#alamatLengkap').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#alamatLengkap').focus();
        return false;
    } else {

/* Whatsapp Settings */ 
var walink = 'https://web.whatsapp.com/send'; 
 
/* Smartphone Support */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
} 
 
 /* Call Input Form */ 
 cartItem = '';
 counter = 1;
 waItems = JSON.parse(localStorage.getItem('simpleCart_items'));
 waItems = Object.values(waItems);
 waItems.forEach((item,i)=>{ 
    beratTotal = item.berat * item.quantity+' %0A';    
    cartItem += '*'+counter+'.  '+item.name+'* %0A';
    cartItem += '▪️ Harga Satuan : '+angkaToRp(item.price)+' %0A';
    cartItem += '▪️ Warna : '+item.color+' %0A';
    cartItem += '▪️ Model : '+item.tali+' %0A';
    cartItem += '▪️ Jumlah : '+item.quantity+' %0A';
    cartItem += '▪️ Sub Total : '+angkaToRp(item.price * item.quantity)+' %0A';
    cartItem += '▪️ Link Produk : '+item.link+' %0A'; 
    cartItem += '=============================%0A%0A';
    counter++;
 });
var input_opsi = $("#kurir :selected").text(),
    input_pembayaran = $("#pembayaran :selected").text(),
    input_kodepos = $("#kodepos").val(),
    input_nama = $("#namalengkap").val(), 
    input_nomor = $("#nomorWA").val(),  
    input_alamat = $("#alamatLengkap").val(),
    input_catatan = $("#catatan").val(),
    input_kupon = $("#kupon").val(),
    input_info = cartItem, 
    input_total = $('.simpleCart_total').text(),
    input_kurrir = $('#ongkos :selected').text(),
    input_totalshipping = $('.simpleCart_shipping').text(),
    input_totalharga = $('.simpleCart_grandTotal').text(),
    input_tanggal = $('#hasil').text(),
    input_waktu = $('#jam-digital').text(),
    input_berat = $('span.hidden').text();

/* Final Whatsapp URL */ 
var simple_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + 
    '🙋️ *DATA PEMBELI* %0A' +
    '=============================%0A' +
    '▪️ *Nama* : ' + input_nama + '%0A' + 
    '▪️ *Nomor HP* :  ' + input_nomor + '%0A' +
    '▪️ *Opsi Pengiriman* : ' + input_opsi + '%0A' +
    '▪️ *Metode Pembayaran* : ' + input_pembayaran + '%0A' +  
    '▪️ *Alamat Lengkap* : ' + input_alamat + '%0A' + 
    '▪️ *Tanggal Order* : ' + input_tanggal + ' ,Pukul ' + input_waktu + '%0A' + 
    '=============================%0A' + '%0A' +
    '🛒 *DAFTAR BELANJAAN* %0A' +
    '=============================%0A'+ input_info + 
    '💵️ *Total Harga* : ' + input_total + '%0A' +
    '=============================%0A' + '%0A' +
    '📌 *Catatan Pembeli* : ' + input_catatan + '%0A' +
    '=============================%0A';
var simple_whatsapp2 = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' + 
    '🙋️ *DATA PEMBELI* %0A' +
    '=============================%0A' +
    '▪️ *Nama* : ' + input_nama + '%0A' + 
    '▪️ *Nomor HP* :  ' + input_nomor + '%0A' +
    '▪️ *Opsi Pengiriman* : ' + input_opsi + '%0A' +
    '▪️ *Metode Pembayaran* : ' + input_pembayaran + '%0A' +  
    '▪️ *Alamat Lengkap* : ' + input_alamat + '%0A' + 
    '=============================%0A' + '%0A' +
    '🛒 *DAFTAR BELANJAAN* %0A' +
    '=============================%0A'+ input_info + 
    '🏷️ *Kode Kupon* : ' + input_kupon + '%0A' +
    '💵️ *Total Harga* : ' + input_total + '%0A' +
    '🚛️ *Ongkos Kirim* : ' + input_totalshipping + '%0A' +
    '💰️ *Total Pembayaran* : ' + input_totalharga + '%0A' + '%0A' +
    '=============================%0A' + '%0A' +
    '📌 *Catatan Pembeli* : ' + input_catatan + '%0A' +
    '=============================%0A';
 
/* Whatsapp Window Open */ 
if ($('#kupon').val() == ''){
window.open(simple_whatsapp,'_blank');
 } else {
window.open(simple_whatsapp2,'_blank');
}
localStorage.removeItem('simpleCart_items');
window.location.href = url;
return false;
  }
};
$('.send-reseller').click(reseller);
function reseller() { 
if ($('#namalengkap1').val() == '') { // Nama Lengkap
			    $('#namalengkap1').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#namalengkap1').focus();
        return false;
    } else if ($('#nomorWA1').val() == '') { // No Whatsapp
			    $('#nomorWA1').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#nomorWA1').focus();
        return false;
    } else if ($('#email1').val() == '') { // Email
			    $('#email1').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#email1').focus();
        return false;
    } else if ($('#alamatlengkap1').val() == '') { // Alamat
			    $('#alamatlengkap1').each(function() {
			        $(this).addClass('focus');
                    $(this).parents('.datainput').find('.validasi').addClass('show');
			    });
        $('#alamatLengkap1').focus();
        return false;
    } else {

/* Whatsapp Settings */ 
var walink = 'https://web.whatsapp.com/send'; 
 
/* Smartphone Support */ 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 
var walink = 'whatsapp://send'; 
} 
 
 /* Call Input Form */
var noHP = getRandom(phonenumber);
var textReseller = textPembuka; 
var nama1 = $("#namalengkap1").val(), 
    nomor1 = $("#nomorWA1").val(), 
    email1 = $("#email1").val(),  
    namatoko1 = $("#namatoko1").val(),
    alamattoko1 = $("#alamatlengkap1").val();

/* Final Whatsapp URL */ 
var resellerWA1 = walink + '?phone=' + noHP + '&text=' + textReseller + '%0A%0A' + 
    '👜 *DATA RESELLER* %0A' +
    '=============================%0A' +
    '▪️ *Nama* : ' + nama1 + '%0A' + 
    '▪️ *Nomor HP* :  ' + nomor1 + '%0A' +
    '▪️ *Email* : ' + email1 + '%0A' +  
    '▪️ *Alamat* : ' + alamattoko1 + '%0A' +
    '=============================%0A';

var resellerWA2 = walink + '?phone=' + noHP + '&text=' + textReseller + '%0A%0A' + 
    '👜 *DATA RESELLER* %0A' +
    '=============================%0A' +
    '▪️ *Nama* : ' + nama1 + '%0A' + 
    '▪️ *Nomor HP* :  ' + nomor1 + '%0A' +
    '▪️ *Email* : ' + email1 + '%0A' +  
    '▪️ *Nama Toko* : ' + namatoko1 + '%0A' + 
    '▪️ *Alamat* : ' + alamattoko1 + '%0A' +
    '=============================%0A';
 
/* Whatsapp Window Open */
 if ($('#namatoko1').val()==''){
window.open(resellerWA1,'_blank');
 } else {
window.open(resellerWA2,'_blank');
}
window.location.href = url;
return false;
  }
};
//]]>

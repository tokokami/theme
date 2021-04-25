//<![CDATA[
$('#Admin').val('0813-0000-0000');// Nomor Tujuan
$('.whatsapp-btn').click(function () {
$('#whatsapp').toggleClass('toggle');});
// Fungsi Tombol Whatsapp Kirim!
		$('#whatsapp .submit').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
// Fungsi Data Tulisan yang dikirim
function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .nama').val() == '') { // Cek Nama
				ph = $('#whatsapp .nama').attr('placeholder');
				alert(ph + ' Wajib Diisi');
				$('#whatsapp .nama').focus();
				return false;
			} else if ($('#whatsapp .alamat').val() == '') { // Cek alamat
				ph = $('#whatsapp .alamat').attr('placeholder');
				alert(ph + ' Mohon Diisi');
				$('#whatsapp .alamat').focus();
                return false;
            } else if ($('#whatsapp .nomor').val() == '') { // Cek nomor
                ph = $('#whatsapp .nomor').attr('placeholder');
                alert(ph + ' Harus Terisi');
                $('#whatsapp .nomor').focus();
				return false;
            } else if ($('#whatsapp .qty').val() == '') { // Cek jumlah
                ph = $('#whatsapp .qty').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .qty').focus();
				return false;
            } else if ($('#whatsapp .bayar').val() == '') { // Cek bayar
				ph = $('#whatsapp .bayar').attr('placeholder');
				alert(ph + ' Metode?');
				$('#whatsapp .bayar').focus();
				return false;
			} else if ($('#whatsapp .warna').val() == '') { // Cek warna
				ph = $('#whatsapp .warna').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .warna').focus();
				return false;
			} else if ($('#whatsapp .tali').val() == '') { // Cek tali
				ph = $('#whatsapp .tali').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .tali').focus();
				return false;
			} else if ($('#whatsapp .informasi').val() == '') { // Cek dari
				ph = $('#whatsapp .informasi').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .informasi').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				// Get Value
				var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
                    bayar =$('#whatsapp .bayar').val(),
		            nama = $('#whatsapp .nama').val(),
		            alamat = $('#whatsapp .alamat').val(),
		            nomor = $('#whatsapp .nomor').val(),
		            qty = $('#whatsapp .qty').val(),
                    warna = $('#whatsapp .warna').val(),
                    tali = $('#whatsapp .tali').val(),
		            informasi = $('#whatsapp .informasi').val();
				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +

               '%2AHallo kak, saya mau order produk ini...%2A%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
               ' %0A%2ABayar Via%2A: ' + bayar + '%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
               ' %0A%2ANama%2A: ' + nama + 
               ' %0A%2ANo. WhatsApp%2A: ' + nomor +
               ' %0A%2AAlamat%2A: ' + alamat + '%0A' + 
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
               ' %0A%2AWarna Pilihan%2A: ' + warna +
               ' %0A%2AModel Tali%2A: ' + tali + '%0A' +
               ' %0A%2AQty%2A: ' + qty + '%0A' +
               ' %0A%2AJasa Kirim%2A: ' + informasi + '%0A' +
               '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A' +
               ' %2AOrder Lewat%2A ' + via_url + '%0A' +
               ' %0A%2ACatatan%2A: ');
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}//]]>

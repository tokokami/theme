//<![CDATA[
$('#AdminToko').val('0813-8626-7897');
$('.whatsapp-btn').click(function () {
$('#whatsapp-order').toggleClass('toggle');});

		$('#whatsapp-order .order').click(WhatsApp);
		$("#whatsapp-order input, #whatsapp-order textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function WhatsApp() {
			var ph = '';
			if ($('#whatsapp-order .nama').val() == '') {
				ph = $('#whatsapp-order .nama').attr('placeholder');
				alert(ph + ' Wajib Dicantumkan');
				$('#whatsapp-order .nama').focus();
				return false;
			} else if ($('#whatsapp-order .alamat').val() == '') {
				ph = $('#whatsapp-order .alamat').attr('placeholder');
				alert(ph + ' Mohon Diisi Sesuai Lokasi Pengiriman');
				$('#whatsapp-order .alamat').focus();
                return false;
            } else if ($('#whatsapp-order .nomor').val() == '') {
                ph = $('#whatsapp-order .nomor').attr('placeholder');
                alert(ph + ' Harus Tercantum');
                $('#whatsapp-order .nomor').focus();
				return false;
            } else if ($('#whatsapp-order .qty').val() == '') {
                ph = $('#whatsapp-order .qty').attr('placeholder');
                alert('Jumlah Item Tidak Boleh ' + ph + ' pcs');
                $('#whatsapp-order .qty').focus();
				return false;
            } else if ($('#whatsapp-order .bayar').val() == '') {
				ph = $('#whatsapp-order .bayar').attr('placeholder');
				alert(ph + ' Metode?');
				$('#whatsapp-order .bayar').focus();
				return false;
			} else if ($('#whatsapp-order .warna').val() == '') {
				ph = $('#whatsapp-order .warna').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp-order .warna').focus();
				return false;
			} else if ($('#whatsapp-order .tali').val() == '') {
				ph = $('#whatsapp-order .tali').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp-order .tali').focus();
				return false;
			} else if ($('#whatsapp-order .note').val() == '') {
				ph = $('#whatsapp-order .note').attr('placeholder');
				alert('Silahkan tambahkan ' + ph);
				$('#whatsapp-order .note').focus();
				return false;
			} else if ($('#whatsapp-order .informasi').val() == '') {
				ph = $('#whatsapp-order .informasi').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp-order .informasi').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
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
				// Get Value
				var order = $('#whatsapp-order .order').val(),
                    input_info = cartItem, 
                    input_total = $('.simpleCart_total').text(),
		            nama = $('#whatsapp-order .nama').val(),
		            alamat = $('#whatsapp-order .alamat').val(),
		            nomor = $('#whatsapp-order .nomor').val(),
                    note = $('#whatsapp-order .note').val(),
		            informasi = $('#whatsapp-order .informasi').val();
				$(this).attr('href', url_wa + '?phone=62 ' + order + '&text=' +

               '%2AHallo kak, saya mau order produk ini...%2A%0A' +
               '=============================%0A' +
               '🛒 *DAFTAR BELANJAAN* %0A' +
               '=============================%0A'+ input_info + 
               '💵️ *Total Harga* : ' + input_total + '%0A' +
               '=============================%0A' +
               '%2APengiriman ke...%2A%0A' +
               ' %0A%2ANama%2A: ' + nama + 
               ' %0A%2ANo. WhatsApp%2A: ' + nomor +
               ' %0A%2AAlamat%2A: ' + alamat + '%0A' + 
               '=============================%0A' +
               ' %0A%2AJasa Kirim%2A: ' + informasi + '%0A' +
               '=============================%0A' +
               ' %0A%2ACatatan%2A: ' + note );
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
localStorage.removeItem('simpleCart_items');
				return false;
			}
		}//]]>

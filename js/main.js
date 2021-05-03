simpleCart({
	cartColumns: [
{ attr: "thumb", label: false, view: "thumb" },
{ attr: "name", label: false, view: "link" },
{ view: "remove", text: false, label: !1 },
{ attr: "price", label: false, view: "harga" },
{ attr: "berat", label: false, view: "berat" },
{ attr: "color", label: 'Warna', view: "color" },
{ attr: "tali", label: 'Model', view: "tali" },
{ view: "decrement", label: false },
{ attr: "quantity", label: false, view: "jumlah" },
{ view: "increment", label: false },
{ attr: "totalberat", label: false, view: "totalberat" },
{ attr: "total", label: false, view: "currency" },
{ attr: "link", label: false, view: "link" },
],
	currency: "IDR",
});

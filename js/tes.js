function formatHarga(t) {
    for (var i = "", a = t.toString().split("").reverse().join(""), r = 0; r < a.length; r++) r % 3 == 0 && (i += a.substr(r, 3) + ".");
    return (
        "Rp" +
        i
            .split("", i.length - 1)
            .reverse()
            .join("")
    );
}
$(".post-body").each(function () {
    var t,
        i = $(".item_price", this).attr("data-discount"),
        a = $(".item_price", this).attr("data-price");
    null != i && 0 != i ? ((t = a - (a * i) / 100), $(".item_price", this).attr("data-price", t), $(".item_price", this).text(formatHarga(t))) : $(".item_price", this).text(formatHarga(a));
}),
    $(document).ready(function () {
        $(".pilihan-varian1-satu, .pilihan-varian1-dua").each(function () {
            $(this).find("li:first").trigger("click");
        });
    }),
    $(".pilihan-varian1-satu li").each(function () {
        var t = $(this).attr("data-price"),
            i = $(this).parents(".post-body").find(".item_price").attr("data-normal-price");
        (0 != t && null != t) || $(this).attr("data-price", i);
    }),
    $(".post-body").each(function () {
        $(".min", this).on("click", function () {
            var t = $(this).parents(".post-body").find(".item_Quantity"),
                i = $(this).parents(".post-body").find(".item_Quantity").val(),
                a = Number(i) - 1;
            a <= 1 ? $(t).val(1) : $(t).val(a);
        }),
            $(".plus", this).on("click", function () {
                var t = $(this).parents(".post-body").find(".item_Quantity"),
                    i = $(this).parents(".post-body").find(".item_Quantity").val(),
                    a = Number(i) + 1;
                $(t).val(a);
            }),
            $(".item_Quantity", this).on("change blur", function () {
                (value = $(this).val()), value <= 1 && $(this).val(1);
            }),
            $(".pilihan-varian1-satu li", this).on("click", function () {
                $(this).text();
                var t = $(this).attr("data-price");
                $(this).parents(".pilihan-varian1-satu").find("li").removeClass("item_size"), $(this).addClass("item_size");
                var i,
                    a = $(this).parents(".post-body").find(".item_price").attr("data-discount");
                null != t && 0 != t && null != a && 0 != a
                    ? ((i = t - (t * a) / 100),
                      $(this).parents(".post-body").find(".item_price").attr("data-price", i),
                      $(this).parents(".post-body").find(".item_price").text(formatHarga(i)),
                      $(this).parents(".post-body").find(".widget-harga-produk .strike").text(formatHarga(t)),
                      $(this)
                          .parents(".post-body")
                          .find(".widget-harga-produk .discount")
                          .html("<b>" + a + "%</b> OFF"))
                    : ($(this).parents(".post-body").find(".item_price").attr("data-price", t), $(this).parents(".post-body").find(".item_price").text(formatHarga(t)));
            }),
            $(".pilihan-varian1-dua li", this).on("click", function () {
                $(this).text();
                $(this).parents(".pilihan-varian1-dua").find("li").removeClass("item_size"), $(this).addClass("item_size");
            });
    });

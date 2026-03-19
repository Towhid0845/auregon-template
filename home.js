
let countryCode = $("#hdnCnCode").val();
let appDomain = $("#appDomain").val();
//TODO - change all url to dynamic.
let isCountryCodeLoading = true;
$(document).ready(function () {
    console.log("appDomain", appDomain)

    // setCulture();
    $('.slide1RegBoxLi').hide();
    $('.ch-only-region').hide();
    if (isChOnly == "true" || isChOnly == true) {
        $('.ch-only-region').show(); //it will open letter when correctly get lang data and close the bel
        $('.slide1RegBoxLi').show();
    }
    else {
        $('.slide1RegBoxLi').show();
    }

    $('#owl-demo').owlCarousel({

        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: 2000,
        navText: ['', ''],
        nav: false,
        autoplay: false,
        autoplayTimeout: 14000,
        items: 1,
        margin: 30,
        smartSpeed: 2000,
        lazyLoad: true,
        autoplayHoverPause: null,
    });



    (async () => {

        //CE:Abdur rahamn
        //$('.slide1Img1').attr('src', await determineImagePath(1, 1));
        //$('.slide2Img1').attr('src', await determineImagePath(1, 2));
        //$('.slide3Img1').attr('src', await determineImagePath(1, 3));

        let imagePath1 = await determineImagePath(1, 1)
        let imagePath2 = await determineImagePath(1, 2)
        let imagePath3 = await determineImagePath(1, 3)

        $('.slide1Img1').attr('src', imagePath1);
        $('.slide2Img1').attr('src', imagePath2);
        $('.slide3Img1').attr('src', imagePath3);


        $('.slide1Img1Srcset').attr('srcset', imagePath1);
        $('.slide2Img1Srcset').attr('srcset', imagePath2);
        $('.slide3Img1Srcset').attr('srcset', imagePath3);
        //End


    })();

    setTimeout(() => {
        let pageLoader = document.getElementById("page_loader");
        if (pageLoader) {
            let display = window.getComputedStyle(pageLoader).display;
            if (display !== "none") {
                pageLoader.style.display = "none";
            }
        }
    }, 2000);


    let previousPosition = 0;
    let currentPosition = 0;
    let bannerSlider1 = 0;
    let bannerSlider2 = 0;
    let bannerSlider3 = 0;

    $('#owl-demo').on('changed.owl.carousel', function (event) {

        try {
            if (!event || event.item['index'] <= 0) return;
            currentPosition = event.page.index;
            if (currentPosition < previousPosition) {
                setTimeout(() => {
                    bannerImageSet();
                }, 100)
            }
            else {
                setTimeout(() => {
                    bannerImageSet();
                }, currentPosition < previousPosition && 100)
            }
            previousPosition = currentPosition;
        }
        catch (error) {
            // console.log(error);
        }

    });

    async function bannerImageSet() {
        const parentElement = document.getElementById('homeBannerSlider');
        const activeOwlDots1 = parentElement.querySelector(
            '.owl-dots button:nth-child(1).active'
        );
        const activeOwlDots2 = parentElement.querySelector(
            '.owl-dots button:nth-child(2).active'
        );
        const activeOwlDots3 = parentElement.querySelector(
            '.owl-dots  button:nth-child(3).active'
        );

        if (activeOwlDots1) {

            //CA:Abdur rahamn
            //if (bannerSlider1 === 3) {
            //    bannerSlider1 = 1;
            //} else {
            //    bannerSlider1 = bannerSlider1 + 1;
            //}

            if (bannerSlider1 === 3) {
                bannerSlider1 = 1;
            } else if ( bannerSlider1 === 0) {
                bannerSlider1 = 2;
            } else {
                bannerSlider1 = bannerSlider1 + 1;
            }
        }
            

        if (activeOwlDots2) {
            if (bannerSlider2 === 3) {
                bannerSlider2 = 1;
            } else {
                bannerSlider2 = bannerSlider2 + 1;
            }
        }
        if (activeOwlDots3) {
            if (bannerSlider3 === 3) {
                bannerSlider3 = 1;
            } else {
                bannerSlider3 = bannerSlider3 + 1;
            }
        }


        let imagePath1 = await determineImagePath(bannerSlider1, 1);
        let imagePath2 = await determineImagePath(bannerSlider2, 2);
        let imagePath3 = await determineImagePath(bannerSlider3, 3);

        $('.slide1Img1').attr('src', imagePath1);
        $('.slide2Img1').attr('src', imagePath2);
        $('.slide3Img1').attr('src', imagePath3);

        //CA: abdur rahman
        $('.slide1Img1Srcset').attr('srcset', imagePath1);
        $('.slide2Img1Srcset').attr('srcset', imagePath2);
        $('.slide3Img1Srcset').attr('srcset', imagePath3);
        //end
    }
    async function determineImagePath(index, slideNo) {
        //CA: abdur rahman
        let display = window.getComputedStyle(document.getElementById("page_loader")).display;
        if (display !== "none") {
            document.getElementById("page_loader").style.display = "none";
        }
        //end

        let contCodePath = countryCode;
        const includesImgs = new Set(["ae", "at", "bd", "ch", "de", "in", "my", "sa", "za"]);

        if (!includesImgs.has(countryCode.toLowerCase())) {
            contCodePath = "default";
        }


        if (countryCode && countryCode != '') {
            if (slideNo == 1 && index == 1) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_1.webp`;
                return countryImageUrl;
            }
            if (slideNo == 1 && index == 2) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_2.webp`;
                return countryImageUrl;
            }
            if (slideNo == 1 && index == 3) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_3.webp`;
                return countryImageUrl;
            }

            if (slideNo == 2 && index == 1) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_4.webp`;
                return countryImageUrl;
            }
            if (slideNo == 2 && index == 2) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_5.webp`;
                return countryImageUrl;
            }
            if (slideNo == 2 && index == 3) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_6.webp`;
                return countryImageUrl;
            }

            if (slideNo == 3 && index == 1) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_7.webp`;
                return countryImageUrl;
            }
            if (slideNo == 3 && index == 2) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_8.webp`;
                return countryImageUrl;
            }
            if (slideNo == 3 && index == 3) {
                const countryImageUrl = `/assets/images/cover-by-country/${contCodePath}/cover_img_9.webp`;
                return countryImageUrl;
            }

        } else {
            switch (true) {
                case slideNo == 1 && index == 1:
                    return '/assets/images/cover-by-country/default/cover_img_1.webp';
                case slideNo == 1 && index == 2:
                    return '/assets/images/cover-by-country/default/cover_img_2.webp';
                case slideNo == 1 && index == 3:
                    return '/assets/images/cover-by-country/default/cover_img_3.webp';

                case slideNo == 2 && index == 1:
                    return '/assets/images/cover-by-country/default/cover_img_4.webp';
                case slideNo == 2 && index == 2:
                    return '/assets/images/cover-by-country/default/cover_img_5.webp';
                case slideNo == 2 && index == 3:
                    return '/assets/images/cover-by-country/default/cover_img_6.webp';

                case slideNo == 3 && index == 1:
                    return '/assets/images/cover-by-country/default/cover_img_7.webp';
                case slideNo == 3 && index == 2:
                    return '/assets/images/cover-by-country/default/cover_img_8.webp';
                case slideNo == 3 && index == 3:
                    return '/assets/images/cover-by-country/default/cover_img_9.webp';
                default:
                    return '';
            }
        }
    }

    $('#owl-demo1').owlCarousel({
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        navSpeed: false,
        navText: ['', ''],
        nav: false,
        autoplay: true,
        autoplayTimeout: 10000,
        items: 3,
        margin: 2,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        center: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });


    document.querySelectorAll("#owl-demo .owl-dot").forEach((dot, index) => {
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.setAttribute("type", "button");

        if (dot.classList.contains("active")) {
            dot.setAttribute("aria-current", "true");
        }

        dot.addEventListener("click", function () {
            document.querySelectorAll("#owl-demo .owl-dot").forEach(btn => btn.removeAttribute("aria-current"));
            this.setAttribute("aria-current", "true");
        });
    });

    document.querySelectorAll("#owl-demo1 .owl-dot").forEach((dot, index) => {
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.setAttribute("type", "button");

        if (dot.classList.contains("active")) {
            dot.setAttribute("aria-current", "true");
        }

        dot.addEventListener("click", function () {
            document.querySelectorAll("#owl-demo .owl-dot").forEach(btn => btn.removeAttribute("aria-current"));
            this.setAttribute("aria-current", "true");
        });
    });


    try {
        let items = $('.partner-image-url');
        items.each(function () {
            let img = $(this)[0];
            img.onerror = () => {
                img.src = 'assets/icon/filled-tick.webp';
            };
        });
    } catch (error) { }





    let totalImageLength;
    let ImagesLength = 10;
    let CounCode = countryCode ? countryCode.toLocaleLowerCase() : "ch"
    //let CounCode = "th"
    let brand_logos_container = document.getElementById('brand-logos-container');
    let loopLimit = totalImageLength;
    let time = 7 * 24 * 60 * 60 * 1000;
    let arrayList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let arrayList2 = [10, 11, 12, 13, 14, 15, 16, 17, 18]
    let arrayList3 = [19, 20, 21, 22, 23, 24, 25, 26, 27]
    let arrayList = [];
    let logo_group = localStorage.getItem('jd_brand_logo_group')
    let locCounCode = localStorage.getItem('jd_country_code');
    let lastUpdateTime = JSON.parse(localStorage.getItem('jd_brand_logo_Update_Time')) || Date.now();


    if (logo_group == "arrayList1") {
        arrayList = arrayList1;
    } else if (logo_group == "arrayList2") {
        arrayList = arrayList2;
    } else if (logo_group == "arrayList3") {
        arrayList = arrayList3;
    }


    if (!locCounCode) {
        localStorage.setItem('jd_country_code', CounCode);
    }
    if (locCounCode != CounCode) {
        localStorage.setItem('jd_country_code', CounCode);
        localStorage.setItem('jd_brand_logo_group', "arrayList1");
        localStorage.setItem('jd_brand_logo_Update_Time', JSON.stringify(Date.now()));
        arrayList = arrayList1;
    }

    if (CounCode.toLocaleLowerCase() == 'my') {
        totalImageLength = 9
    } else if (CounCode.toLocaleLowerCase() == 'ch') {
        totalImageLength = 34
    } else if (CounCode.toLocaleLowerCase() == 'in') {
        totalImageLength = 10
    } else if (CounCode.toLocaleLowerCase() == 'sg') {
        totalImageLength = 9
    } else if (CounCode.toLocaleLowerCase() == 'th') {
        totalImageLength = 9
    } else if (CounCode.toLocaleLowerCase() == 'bd') {
        totalImageLength = 10
    } else {
        totalImageLength = 10
        CounCode = "ch"
    }

    if (CounCode.toLocaleLowerCase() == 'ch' || CounCode.toLocaleLowerCase() == 'bd') {
        updateArrayList();
    }

    function updateArrayList() {
        if (Date.now() - lastUpdateTime >= time) {
            if (logo_group == "arrayList1") {
                arrayList = arrayList2;
                localStorage.setItem('jd_brand_logo_group', "arrayList2");
                localStorage.setItem('jd_brand_logo_Update_Time', JSON.stringify(Date.now()));
            } else if (logo_group == "arrayList2" && CounCode == "ch") {
                arrayList = arrayList3;
                localStorage.setItem('jd_brand_logo_group', "arrayList3");
                localStorage.setItem('jd_brand_logo_Update_Time', JSON.stringify(Date.now()));
            } else {
                arrayList = arrayList1;
                localStorage.setItem('jd_brand_logo_group', "arrayList1");
                localStorage.setItem('jd_brand_logo_Update_Time', JSON.stringify(Date.now()));
            }
        }
    }


    if (!arrayList) {
        localStorage.setItem('jd_brand_logo_group', "arrayList1");
        localStorage.setItem('jd_brand_logo_Update_Time', JSON.stringify(Date.now()));
        arrayList = arrayList1;
    }

    if (brand_logos_container) {
        for (let i = 0; i <= ImagesLength; i++) {
            let imgL = arrayList[i]
            if (imgL) {
                let logoUrl = `assets/images/home/top-banner-logo/${CounCode}/brand_logo_${CounCode}_${imgL}.webp`;
                let imgElement = document.createElement("img");
                imgElement.src = logoUrl;
                imgElement.id = "brand-logo-" + (i + 1);
                imgElement.alt = "Brand Logo";
                imgElement.width = "120";
                imgElement.height = "60";

                imgElement.onload = function () {
                    brand_logos_container.appendChild(imgElement);
                };
            }
        }
    }

    const buttons = [
        { id: "homeSection1htmlLabel1A", label: "_home-section1-html-label" },
        { id: "homeSection1htmlLabel1B", label: "_home-section1-html-label" },
        { id: "homeSection2htmlLabel2A", label: "_home-section2-html-label" },
        { id: "homeSection2htmlLabel2B", label: "_home-section2-html-label" },
        { id: "homeSection3htmlLabel3A", label: "_home-section3-html-label" },
        { id: "homeSection3htmlLabel3B", label: "_home-section3-html-label" },
        { id: "homeSection4htmlLabel4A", label: "_home-section4-html-label" },
        { id: "homeSection4htmlLabel4B", label: "_home-section4-html-label" },
        { id: "homeSection5htmlLabel5A", label: "_home-section5-html-label" },
        { id: "homeSection5htmlLabel5B", label: "_home-section5-html-label" },
        { id: "homeSection6htmlLabel6A", label: "_home-section6-html-label" },
        { id: "homeSection6htmlLabel6B", label: "_home-section6-html-label" },
        { id: "homeSection7htmlLabel7A", label: "_home-section7-html-label" },
        { id: "homeSection7htmlLabel7B", label: "_home-section7-html-label" },
        { id: "homeSection8htmlLabel8A", label: "_home-section8-html-label" },
        { id: "homeSection8htmlLabel8B", label: "_home-section8-html-label" },
        { id: "homeSection9htmlLabel9A", label: "_home-section9-html-label" },
        { id: "homeSection9htmlLabel9B", label: "_home-section9-html-label" }
    ];

    buttons.forEach(button => {
        let element = document.getElementById(button.id);
        if (element) {
            element.addEventListener("click", () => {
                try {
                    openModalExtraData();
                } catch (error) {
                    /*console.error(`Error occurred for ${button.id}:`, error);*/ 
                }
            });
        } else {
             /*console.warn(`Warning: Button with ID ${button.id} not found.`);*/
        }
    });


})
//function ImageExist(url) {
//    var img = new Image();
//    img.src = url;
//    return img.height != 0;
//}
//function ImageExist(url) {
//    if (url) {
//        var req = new XMLHttpRequest();
//        req.open('GET', url, false);
//        req.send();
//        return req.status == 200;
//    } else {
//        return false;
//    }
//}

//async function ImageExist(url) {
//    if (!url) return false;

//    try {
//        const response = await fetch(url, { method: 'HEAD' });
//        return response.ok;
//    } catch (error) {
//        return false;
//    }
//}

let selectedAccountType = 1;
let emptyMail1 = false;
let emptyMail2 = false;
let emptyMail3 = false;


document.querySelectorAll("#SelectedLang1, #SelectedLang2")
    .forEach(btn => {
        if (btn) {
            btn.addEventListener("click", () => {
                try {
                    openLanguageChangeModal();
                } catch (error) {
                    console.error(error);
                }
            });
        } else {
            console.warn("Warning: Found an undefined button.");
        }
    });

function openModalExtraData(data) {
    // debugger
    $('#extraDataModal').modal('show');
    $('#extraDataModal').modal({
        size: 'sm',
        windowClass: 'modal-getstarted-ch'
    });
    $('#extraData').text(data);
}

//document.querySelectorAll("#btnViewAllFeature1, #btnViewAllFeature2, #btnViewAllFeature3, #btnViewAllFeature4, #btnViewAllFeature5, #btnViewAllFeature6, #btnViewAllFeature7, #btnViewAllFeature8, #btnViewAllFeature9")
//    .forEach(btn => {
//        if (btn) {
//            btn.addEventListener("click", () => {
//                try {
//                    $('#getStartedCH').modal('show');
//                    $('#getStartedCH').modal({
//                        size: 'lg',
//                        windowClass: 'modal-getstarted-ch'
//                    });
//                } catch (error) {
//                    console.error(error);
//                }
//            });
//        } else {
//            console.warn("Warning: Found an undefined button.");
//        }
//    });


document.addEventListener("DOMContentLoaded", () => {
    let floatingDemo = document.getElementById("floatingDemo");
    let btnChOnlyRegion1 = document.getElementById("btn-ch-only-region-1");
    let btnChOnlyRegion2 = document.getElementById("btn-ch-only-region-2");
    let btnChOnlyRegion3 = document.getElementById("btn-ch-only-region-3");
    let btnViewAllFeature1 = document.getElementById("btnViewAllFeature1");
    let btnViewAllFeature2 = document.getElementById("btnViewAllFeature2");
    let btnViewAllFeature3 = document.getElementById("btnViewAllFeature3");
    let btnViewAllFeature4 = document.getElementById("btnViewAllFeature4");
    let btnViewAllFeature5 = document.getElementById("btnViewAllFeature5");
    let btnViewAllFeature6 = document.getElementById("btnViewAllFeature6");
    let btnViewAllFeature7 = document.getElementById("btnViewAllFeature7");
    let btnViewAllFeature8 = document.getElementById("btnViewAllFeature8");
    let btnViewAllFeature9 = document.getElementById("btnViewAllFeature9");

    let elements = [floatingDemo, btnChOnlyRegion1, btnChOnlyRegion2, btnChOnlyRegion3, btnViewAllFeature1, btnViewAllFeature2, btnViewAllFeature3, btnViewAllFeature4, btnViewAllFeature5, btnViewAllFeature6, btnViewAllFeature7, btnViewAllFeature8, btnViewAllFeature9]
    elements.forEach(btn => {
        if (btn) {
            btn.addEventListener("click", () => {
                try {
                    $('#getStartedCH').modal('show');
                    $('#getStartedCH').modal({
                        size: 'lg',
                        windowClass: 'modal-getstarted-ch'
                    });
                } catch (error) {
                    console.error(error);
                }
            });
        }
    });
});


function openModalCH(type) {
    $('#getStartedCH').modal('show');
    $('#getStartedCH').modal({
        size: 'lg',
        windowClass: 'modal-getstarted-ch'
    });
}
function openSignUpModal(accountType, tempMail, inptSelector) {
    let hdnCnCode = $("#hdnCnCode").val().toLowerCase();

    $('.slide1EmailInput').hide();
    if (tempMail == '' || tempMail == undefined) {
        tempMail = $("#" + inptSelector).val();
    }
    if (tempMail == '' || tempMail == undefined) {
        $("." + inptSelector).each(function (i, v) {
            if ($(this).val()) {
                tempMail = $(this).val();
                return;
            }

        });
    }


    // console.log('tempMail', tempMail, validateEmail(tempMail))
    if (tempMail && tempMail != '' && tempMail !== undefined && ValidateEmail(tempMail)) {
        if (accountType == 'candidate') {
            selectedAccountType = 2;
        } else if (accountType == 'recruiter') {
            selectedAccountType = 1;
        } else if (accountType == 'company') {
            selectedAccountType = 3;
        }

        // this.signUpForm.controls['email'].setValue(this.tempMail);

        if (hdnCnCode == 'ch') {

        } else {
            $("#signupModalEmail").val(tempMail)
            $("#chked_" + selectedAccountType).prop('checked', true);
            $('#signUpModal').modal('show');
            getCountries();
            getAccountType();
            if ($('#signupModalEmail').val() && $('#signupModalEmail').val() != '') {
                $('#signupModalEmail').addClass('focus')
            }


            $('#signUpModal').modal({
                windowClass: 'signUpMod'
            });
        }
        // mixpanel.track('Get-Started-Clicked', {
        //     email: tempMail,
        //     ip: geoLocationInfo.ip,
        //     countryCode: geoLocationInfo.countryCode
        // });
    }
    else {
        if (accountType == 'company') {
            emptyMail1 = true;
        } else if (accountType == 'recruiter') {
            emptyMail2 = true;
        } else if (accountType == 'candidate') {
            emptyMail3 = true;
        }

        $('.slide1EmailInput').show();
    }

}
$("#signupModalLastName").keyup(function () {
    if ($('#signupModalLastName').val() && $('#signupModalLastName').val() != '') {
        $('#signupModalLastName').addClass('focus')
    }
    else {
        $('#signupModalLastName').removeClass('focus')
    }
})

$("#signupModalfirstName").keyup(function () {
    if ($('#signupModalfirstName').val() && $('#signupModalfirstName').val() != '') {
        $('#signupModalfirstName').addClass('focus')
    }
    else {
        $('#signupModalfirstName').removeClass('focus')
    }
})

$("#registerComNameCH").keyup(function () {
    if ($('#registerComNameCH').val() && $('#registerComNameCH').val() != '') {
        $('#registerComNameCH').addClass('focus')
    }
    else {
        $('#registerComNameCH').removeClass('focus')
    }
})
$("#registerFullNameCH").keyup(function () {
    if ($('#registerFullNameCH').val() && $('#registerFullNameCH').val() != '') {
        $('#registerFullNameCH').addClass('focus')
    }
    else {
        $('#registerFullNameCH').removeClass('focus')
    }
})

$("#registerEmailCH").keyup(function () {
    if ($('#registerEmailCH').val() && $('#registerEmailCH').val() != '') {
        $('#registerEmailCH').addClass('focus')
    }
    else {
        $('#registerEmailCH').removeClass('focus')
    }
})

$("#registerPhoneCH").keyup(function () {
    if ($('#registerPhoneCH').val() && $('#registerPhoneCH').val() != '') {
        $('#registerPhoneCH').addClass('focus')
    }
    else {
        $('#registerPhoneCH').removeClass('focus')
    }
})


$('#slideEmailBox').keydown(function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        openSignUpModal('company', $(this).val());
        return false;
    }
});
$('.sildeMailBoxRecr').keydown(function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        openSignUpModal('recruiter', $(this).val());
        return false;
    }
});

$('.openModalCand').keydown(function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        openSignUpModal('candidate', $(this).val());
        return false;
    }
});

$('#slideEmailBox').on('click', function (e) {
    $('#owl-demo').trigger('stop.owl.autoplay');
})
$('.sildeMailBoxRecr').on('click', function (e) {
    $('#owl-demo').trigger('stop.owl.autoplay');
})

$('.openModalCand').on('click', function (e) {
    $('#owl-demo').trigger('stop.owl.autoplay');
})




function handleFeature() {
    let hdnCnCode = $("#hdnCnCode").val().toLowerCase();
    if (hdnCnCode === 'bd') {
        window.location.href = '/MobileApp';
    } else {
        $('#getStartedCH').modal('show');
        $('#getStartedCH').modal({
            size: 'lg',
            windowClass: 'modal-getstarted-ch'
        });
    }
}



let signupSwitch = 'email';
let isBDSelected = false;
let justSignedUp = false;
let clicked = false;
let ClientIP = '@(ViewBag.ClientIP)';


function switchSignUpTo(opt) {
    if (opt == 'mobile') {
        signupSwitch = 'mobile';
    }

    // console.log('signupSwitch', signupSwitch)
}

$("#signupModalCountry").change(function () {
    var value = $(this).val()
    getCountryById(value)
})

function getCountryById(value) {
    $.ajax({
        url: '/Home/GetCountryById',
        type: 'GET',
        async: false,
        contentType: 'application/json',
        data: { id: value },
        success: function (res) {
            // console.log('res', res);
            if (res) {
                CountryCode = res[0].iso2;
                if (res[0].countryId != 24) {
                    switchSignUpTo('email');
                }
                else {
                    isBDSelected = true;
                }
            }
            // console.log('isBDSelected', isBDSelected)
            // console.log('signupSwitch', signupSwitch)
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function makeRandomString(length) {
    var result = '';
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getRandomImageUrl(countryCode, bPoint) {
    var imageUrl;
    if (bPoint === 'xs') {
        switch (countryCode) {
            case 'ch':
                var n = Math.floor(Math.random() * 3 + 1);
                imageUrl = 'assets/images/home/top-banner-logo/xs/home_top_brand_img_ch_' + n + '_xs.webp';
                break;
            case 'bd':
                var n = Math.floor(Math.random() * 2 + 1);
                imageUrl = 'assets/images/home/top-banner-logo/xs/home_top_brand_img_bd_' + n + '_xs.webp';
                break;
            case 'sg':
                imageUrl = 'assets/images/home/top-banner-logo/xs/home_top_brand_img_sg_xs.webp';
                break;
            case 'my':
                imageUrl = 'assets/images/home/top-banner-logo/xs/home_top_brand_img_my_xs.webp';
                break;
            case 'in':
                imageUrl = 'assets/images/home/top-banner-logo/xs/home_top_brand_img_in_xs.webp';
                break;
            default:
                imageUrl = 'assets/images/home/top-banner-logo/xs/home_top_brand_img_ch_1_xs.webp';
                break;
        }
    } else if (bPoint === 'sm') {
        switch (countryCode) {
            case 'ch':
                var n = Math.floor(Math.random() * 3 + 1);
                imageUrl = 'assets/images/home/top-banner-logo/sm/home_top_brand_img_ch_' + n + '_sm.webp';
                break;
            case 'bd':
                var n = Math.floor(Math.random() * 2 + 1);
                imageUrl = 'assets/images/home/top-banner-logo/sm/home_top_brand_img_bd_' + n + '_sm.webp';
                break;
            case 'sg':
                imageUrl = 'assets/images/home/top-banner-logo/sm/home_top_brand_img_sg_sm.webp';
                break;
            case 'my':
                imageUrl = 'assets/images/home/top-banner-logo/sm/home_top_brand_img_my_sm.webp';
                break;
            case 'in':
                imageUrl = 'assets/images/home/top-banner-logo/sm/home_top_brand_img_in_sm.webp';
                break;
            default:
                imageUrl = 'assets/images/home/top-banner-logo/sm/home_top_brand_img_ch_1_sm.webp';
                break;
        }
    } else {
        switch (countryCode) {
            case 'ch':
                var n = Math.floor(Math.random() * 3 + 1);
                imageUrl = 'assets/images/home/top-banner-logo/lg/home_top_brand_img_ch_' + n + '.webp';
                break;
            case 'bd':
                var n = Math.floor(Math.random() * 2 + 1);
                imageUrl = 'assets/images/home/top-banner-logo/lg/home_top_brand_img_bd_' + n + '.webp';
                break;
            case 'sg':
                imageUrl = 'assets/images/home/top-banner-logo/lg/home_top_brand_img_sg.webp';
                break;
            case 'my':
                imageUrl = 'assets/images/home/top-banner-logo/lg/home_top_brand_img_my.webp';
                break;
            case 'in':
                imageUrl = 'assets/images/home/top-banner-logo/lg/home_top_brand_img_in.webp';
                break;
            default:
                imageUrl = 'assets/images/home/top-banner-logo/lg/home_top_brand_img_ch_1.webp';
                break;
        }
    }
    return imageUrl;
}

function clearChModal() {
    $("#registerEmailCH").val('');
    $("#registerFullNameCH").val('');
    $("#registerComNameCH").val('');
    $("#registerPhoneCH").val('');

    $('input[name="wir_Sind"]').each(function () {
        $(this).prop('checked', false);

    });

    $("#chComErr > span").text('');
    $("#chNameErr > span").text('');
    $("#chPhoneErr > span").text('');
    $("#chEmailReq").text('');
    $("#chEmailInvalid").text('');
}
$("#chModalClose").on('click', function () {
    clearChModal();
})
let submitted = false;
let err = true;
let isSubmitting = false;



let ghSubmitEnable = document.getElementById("ghSubmitEnable");
if (ghSubmitEnable) {
    ghSubmitEnable.addEventListener("click", () => {
        onSubmit();
    });
}

function onSubmit() {
     debugger 
    let url = `https://www.jobdesk.com/api/HomeApp/ContactRequest`; 
    submitted = true;
    err = false;
    isSubmitting = true;

    //$('input[name="wir_Sind"]').each(function () {
    //    var sThisVal = (this.checked ? $(this).val() : "");
    //    console.log(sThisVal);

    //});
    $("#chComErr").hide();
    $("#chNameErr").hide();
    $("#chEmailReq").hide();
    $("#chEmailInvalid").hide();
    $("#chPhoneErr").hide();
    let companyName = $("#registerComNameCH").val();
    let email = $("#registerEmailCH").val();
    let name = $("#registerFullNameCH").val();
    let phone = $("#registerPhoneCH").val();

    if (!companyName || companyName == '') {
        $("#chComErr").show();
        return;
    }
    if (!name || name == '') {
        $("#chNameErr").show();
        return;
    }
    if (!email || email == '') {
        $("#chEmailReq").show();
        return;
    }


    if (!ValidateEmail(email)) {
        $("#chEmailInvalid").show();
        return;
    }
    if (!phone || phone == '') {
        $("#chPhoneErr").show();
        return;
    }


    var request1 = $('input[name="wir_Sind"]:checked').map(function () {
        return $(this).val();
    }).get().join(', ');
    var request2 = $('input[name="wir_Wunschen"]:checked').map(function () {
        return $(this).val();
    }).get().join(', ');

    let message = "<br/>Phone Number: " + $("#registerPhoneCH").val() +
        "<br/><b>Request 1:</b> " + request1 +
        "<br/><b>Request 2:</b> " + request2;

    const model = {};
    model.Email = $("#registerEmailCH").val();
    model.Name = $("#registerFullNameCH").val();
    model.CompanyName = $("#registerComNameCH").val();
    model.Phone = $("#registerPhoneCH").val();
    model.SubjectId = 5;
    model.Message = message;

    // Get Turnstile response
    //const turnstileResponse = document.querySelector('.cf-turnstile input[name="cf-turnstile-response"]').value;
    //model.TurnstileResponse = turnstileResponse;



    //$("#ghSubmitLabel").hide();
    //$("#ghSubmitSpin").show();

    $("#ghSubmitEnable").hide();
    $("#ghSubmitDisable").show();



    $.ajax({
        url: url,
        type: 'POST',
        //async: false,
        contentType: 'application/json',
        data: JSON.stringify(model),
        success: function (res) {
            //$("#ghSubmitSpin").hide();
            //$("#ghSubmitLabel").show();
            $("#ghSubmitEnable").show();
            $("#ghSubmitDisable").hide();
            $("#modal-msg-2").show();
            $('#getStartedCH').modal('toggle');
        },
        error: function (xhr, status, error) {
            console.error(error);
            //$("#ghSubmitSpin").hide();
            //$("#ghSubmitLabel").show();
            $("#ghSubmitEnable").show();
            $("#ghSubmitDisable").hide();
            $("#modal-msg-1").show();
        }
    })
}

let signupModalSubmit = document.getElementById("signupModalSubmit")
if (signupModalSubmit) {
    signupModalSubmit.addEventListener("click", () => {
        try {
            onFormSubmit();
        } catch (error) {
            console.error(error);
        }
    });
}

function onFormSubmit() {
    let signupModalfirstName = $("#signupModalfirstName").val().trim();
    let signupModalLastName = $("#signupModalLastName").val();
    let signupModalEmail = $("#signupModalEmail").val();
    let signupModalCountry = $("#signupModalCountry").val();

    if (!signupModalfirstName || signupModalfirstName == '') {
        $("#signupModalfirstName").css('border', '1px solid tomato');
        return;
    }
    else {
        $("#signupModalfirstName").css('border', '1px solid #dddee2');
    }
    if (!signupModalLastName || signupModalLastName == '') {
        $("#signupModalLastName").css('border', '1px solid tomato');
        return;
    }
    else {
        $("#signupModalLastName").css('border', '1px solid #dddee2');
    }
    let pass = makeRandomString(8);

    let firstname = '', lastname = '';

    if (signupModalfirstName.indexOf(' ') > -1) {
        firstname = signupModalfirstName.substr(0, signupModalfirstName.indexOf(' '));
        lastname = signupModalfirstName.substr(signupModalfirstName.indexOf(' ') + 1);
    } else {
        firstname = signupModalfirstName;
    }

    getCountryById(signupModalCountry);

    let user = {
        AccountType: $("input[name='accType']:checked").val(),
        CountryCode: CountryCode,
        CountryId: signupModalCountry,
        Password: pass,
        ConfirmPassword: pass,
        Username: signupModalEmail,
        FirstName: firstname,
        LastName: lastname,
        LastLoginIP: ClientIP,
        LastLoginCountryCode: null,
        LastLoginRegionCode: null,
        IsMobile: false
    };
    // console.log('user', user);
    $.ajax({
        url: appDomain + '/api/Register',
        type: 'POST',
        async: false,
        contentType: 'application/json',
        data: { payload: user },
        success: function (res) {
            // console.log(res);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    })

}


function getCountries() {
    $("#signupModalCountry").empty();
    $.ajax({
        url: '/Home/GetCountries',
        type: 'GET',
        async: false,
        contentType: 'application/json',
        data: {},
        success: function (res) {

            var dropdown = $("#signupModalCountry");
            dropdown.empty();
            res.forEach((v) => {
                dropdown.append($('<option>').text(v.name).attr('value', v.value));
            });

        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function getAccountType() {
    $("#signUpModalAccType").empty();
    $.ajax({
        url: '/Home/GetAccountType',
        type: 'GET',
        async: false,
        contentType: 'application/json',
        data: {},
        success: function (res) {

            res.forEach((v) => {
                $('#signUpModalAccType').append(`
                <label class="mr-auto">' +
                '    <input type="radio" name="accType" value="${v.value}" id="chked_${v.value}" />' +
                '    <span class="text-truncate">${v.name}</span>' +
                '</label>
                `);
            });

        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}


//$("#styled-checkbox-workingat3").on('click', function () {
//    if ($(this).is(':checked')) {
//        $("#chOtherspan").show();
//    } else {
//        $("#chOtherspan").hide();
//    }
//})

//$("#styled-checkbox-workinginfo3").on('click', function () {
//    if ($(this).is(':checked')) {
//        $("#chWhitePaperspan").show();
//    } else {
//        $("#chWhitePaperspan").hide();
//    }
//})

function updateOther(v) {

    if (v && v != '') {
        $('#styled-checkbox-workingat3').prop('checked', true);
    }
    else {
        $('#styled-checkbox-workingat3').prop('checked', false);
    }
}

function updateWeitere(v) {

    if (v && v != '') {
        $('#styled-checkbox-workinginfo3').prop('checked', true);
        $('#styled-checkbox-workinginfo3').val(v)
    }
    else {
        $('#styled-checkbox-workinginfo3').prop('checked', false);
    }
}




// check validate Email 
function ValidateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailPattern.test(email);
}


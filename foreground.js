var previousUrl = ''
setInterval(() => {
    if (document.location.href.includes('aeps-2') && !previousUrl.includes(document.location.href)) {
        const intervalId = setInterval(function () {
            const ekycCancelBtn = document.querySelector('.swal2-cancel.swal2-styled')
            if (document.querySelector('.swal2-container.swal2-center.swal2-fade.swal2-shown') == null || ekycCancelBtn != null) {
                clearInterval(intervalId);
                checkApp();
            }
        }, 100)
    }
    previousUrl = document.location.href;
}, 100)

function checkApp() {
    const ekycCancelBtn = document.querySelector('.swal2-cancel.swal2-styled')
    if (!!ekycCancelBtn) {
        ekycCancelBtn.click();
    }
    setTimeout(() => {
        const intervalId = setInterval(function () {
            if (document.querySelector('.swal2-container.swal2-center.swal2-fade.swal2-shown') == null) {
                clearInterval(intervalId);
                runApp();
            }
        }, 100)
    }, 1000)
}

function runApp() {
    const aadharEl = document.querySelector('[formcontrolname="aadhaar"]');
    const phoneEl = document.querySelector('[formcontrolname="mobileNumber"]');
    const amountEl = document.querySelector('[formcontrolname="amount"]');
    const bankListEl = document.querySelector('[formcontrolname="bankName"]');
    const captureFingerPrint = document.querySelector('#profile-img');
    const balanceEnquiry = document.querySelector('#submitBtnEnq');
    const withdraw = document.querySelector('#submitBtnCash');
    const miniStmnt = document.querySelector('#submitBtnMiniStmt');


    const deviceSelectorEl = document.querySelectorAll('[name="selectedDevice"]')[1]
    deviceSelectorEl.click();
    setTimeout(e => {
        const mantraEl = document.getElementById('mantra').parentElement.parentElement
        mantraEl.click();
        aadharEl.focus()
        bindEnters();
        // loadAndPrintDetails();
        appendSibling(captureFingerPrint, 'F2');
        appendSibling(balanceEnquiry, 'F3');
        appendSibling(withdraw, 'F4');
        appendSibling(miniStmnt, 'F5');
    }, 100);

    function appendSibling(el, content) {
        const div = document.createElement('h3');
        div.style.textAlign = 'center';
        div.style.margin = '4px';
        div.innerText = content || "";
        el.parentNode.appendChild(div);
    }

    function bindEnters() {
        aadharEl.addEventListener('keydown', moveToPhoneNumber);
        phoneEl.addEventListener('keydown', moveToAmount);
        amountEl.addEventListener('keydown', openBankList);
        document.addEventListener('keydown', functionKeys);
    }

    function moveToAmount(event) {
        if (this.value.length < 10) {
            return;
        }
        if (event.code === "Enter") {
            amountEl.focus();
        }
    }

    function moveToPhoneNumber(event) {
        if (this.value.length < 12) {
            return;
        }
        if (event.code === "Enter") {
            copyContent(this);
            phoneEl.value = '9' + (Math.floor(10000000 + Math.random() * 90000000));
            phoneEl.focus();
        }
    }

    function openBankList(event) {
        if (event.code === "Enter") {
            bankListEl.click();
        }
    }

    function functionKeys(event) {
        switch (event.which) {
            case 113:
                captureFingerPrint.click();
                break;
            case 114:
                balanceEnquiry.click();
                break;
            case 115:
                withdraw.click();
                break;
            case 116:
                miniStmnt.click();
                break;
        }
    }

    // miniStmnt.addEventListener('click', e => {
    //     const aadharElVal = aadharEl.value;
    //     const phoneElVal = phoneEl.value;
    //     let bankVal;
    //     const dropdownEl = document.querySelectorAll('.ng-tns-c11-7.ng-star-inserted')[2];
    //     if (!!dropdownEl) {
    //         bankVal = dropdownEl.innerText;
    //     }
    //     if (!!aadharElVal && !!phoneElVal && !!bankVal) {
    //         localStorage.setItem('lastItem', JSON.stringify({aadharElVal, phoneElVal}));
    //         loadAndPrintDetails();
    //     } else {
    //         console.log('error')
    //     }
    // })

    // function loadAndPrintDetails() {
    //     const renderEl = document.querySelector('.panel-body+.col-sm-6');
    //     $removeElsInPar(renderEl.firstElementChild);
    //
    //
    //     const localStorageItem = localStorage.getItem('lastItem');
    //     console.log({localStorageItem})
    //     // if (!!localStorageItem) {
    //     //     const {aadharElVal, phoneElVal} = JSON.parse(localStorageItem);
    //     //     aadharEl.value = aadharElVal;
    //     //     phoneEl.value = phoneElVal;
    //     //     bankListEl.click();
    //     //     document.querySelector('#mat-option-10').click();
    //     //     console.log(aadharEl)
    //     //     aadharEl.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Control'}));
    //     //     aadharEl.dispatchEvent(new KeyboardEvent('keyup', {'key': 'Control'}));
    //     //     aadharEl.dispatchEvent(new KeyboardEvent('keypress', {'key': 'Control'}));
    //     //     phoneEl.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Control'}));
    //     // }
    // }

    function copyContent(copyText) {
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
    }
}

// function $removeElsInPar(par) {
//     var child = par.firstElementChild;
//     while (child) {
//         var nextChild = child.nextElementSibling;
//         child.parentNode.removeChild(child);
//         child = nextChild;
//     }
// }


// setInterval(() => {
//     chrome.runtime.sendMessage({from: "script1", message: "hello!"});
// }, 100);
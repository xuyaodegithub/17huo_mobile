$( function () {
    var addOrno=true;
    const oList=$('.mo_seachList').eq(0)
    document.addEventListener('scroll',()=>{
        const scrTop = document.documentElement.scrollTop || document.body.scrollTop,
            clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
            pageHeight = document.documentElement.scrollHeight;
        if(scrTop+clientHeight>pageHeight-50 && addOrno){
            addOrno=false;
            let oStr=$(` <div class="flex mobile_item" href="1" onclick="seclect(event)">
            <img src="https://img.alicdn.com/bao/uploaded/i1/2200705294285/O1CN01YZMHnp1hWZi6v9XDe_!!2200705294285.jpg_400x400.jpg" alt="">
            <div class="mobile_right flex">
                <p class="mobile_title over2">ins超火的牛仔裤男生直筒裤子复古色韩版休闲潮流阔腿裤K705-P35 可退</p>
                <div class="flex a-i mobile_chen">
                    <i>诚</i> <span class="mobile_tag">3年店</span><span class="mobile_tag">回头率20%</span>
                    <img src="images/mobilecar.png" alt="">
                </div>
                <div class="flex a-i mobile_btn">
                    <span>新人券5元</span>
                    <span>一件代发</span>
                </div>
                <div class="mobile_price flex">
                    ￥82.00 <span>成交61件</span><span>杭州市滨江区</span>
                </div>
            </div>
        </div>`)
            setTimeout(()=>{
                // oList.append(oStr)
                // $('.loadingItem').hide()
                // $('.loadingText').show()
                addOrno=true
                console.log(111)
            },1500)
        }
    })
} )

function seclect(e) {
    console.log( e )
    const oA = e.target || e.srcElement
    console.log( oA.nodeName.toLowerCase(),oA.getAttribute('href')+'---',oA )
}
function closes(){
    $('._mobile_alla').hide()
}

$( function () {
    var addOrno=true;
    const oList=$('.stalls_list').eq(0)
    document.addEventListener('scroll',()=>{
        const scrTop = document.documentElement.scrollTop || document.body.scrollTop,
            clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
            pageHeight = document.documentElement.scrollHeight;
        if(scrTop+clientHeight>pageHeight-50 && addOrno){
            addOrno=false;
            let oStr=$(`  <a href="">
            <div class=" mobile_item" >
                 <div class="item_img">
                    <img src="https://img.alicdn.com/bao/uploaded/i1/2200705294285/O1CN01YZMHnp1hWZi6v9XDe_!!2200705294285.jpg_400x400.jpg" alt="">
                </div>
                <div class="mobile_bottom ">
                    <h2 class="mobile_title over">ins超火的牛仔裤男生直筒裤子复古色韩版休闲潮流阔腿裤K705-P35 可退</h2>
                    <div class="mobile_price">
                        ￥82.00
                    </div>
                </div>
            </div>
        </a>`)
            setTimeout(()=>{
                    oList.append(oStr)
                // $('.loadingItem').hide()
                // $('.loadingText').show()
                addOrno=true
            },1500)
        }
    })
} )

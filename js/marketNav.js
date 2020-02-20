$(function(){
    var addOrno=true;
    const oList=$('.market_list').eq(0)
    document.addEventListener('scroll',()=>{
        const scrTop = document.documentElement.scrollTop || document.body.scrollTop,
            clientHeight = document.documentElement.clientHeight || document.body.clientHeight,
            pageHeight = document.documentElement.scrollHeight;
        if(scrTop+clientHeight>pageHeight-50 && addOrno){
            addOrno=false;
            let oStr=$(`<a href="">
            <div class=" market_item" >
                <div class="mar_title flex a-i">
                    <div>
                        <h2>钱塘大厦4029</h2>
                        <div class="tag">
                            <span>杭州</span>
                            <span>2年店</span>
                        </div>
                    </div>
                    <img src="images/to_right.png" alt="">
                </div>
                <div class="mar_bottom flex">
                   <div>
                       <div class="mar_img"><img src="https://img.alicdn.com/bao/uploaded/i1/2200705294285/O1CN01YZMHnp1hWZi6v9XDe_!!2200705294285.jpg_400x400.jpg" alt=""></div>
                       <div class="mar_price">￥139.00</div>
                   </div>
                    <div>
                        <div class="mar_img"><img src="https://img.alicdn.com/bao/uploaded/i1/2200705294285/O1CN01YZMHnp1hWZi6v9XDe_!!2200705294285.jpg_400x400.jpg" alt=""></div>
                        <div class="mar_price">￥139.00</div>
                    </div>
                    <div>
                        <div class="mar_img"><img src="https://img.alicdn.com/bao/uploaded/i1/2200705294285/O1CN01YZMHnp1hWZi6v9XDe_!!2200705294285.jpg_400x400.jpg" alt=""></div>
                        <div class="mar_price">￥139.00</div>
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
})

<template>
    <li>
        <img :src="items1.images.small" alt="羞羞的的铁拳" class="fl"/>
        <div class="rightLi fl">
            <h2>{{items1.title}}</h2>
            <p class="director margin-top">导演：{{items1.directors.length ? items1.directors[0].name:"无"}}</p>
            <p class="actor">主演：{{toStar}}</p>
        </div>
        <div class="ticket fr">
            <p class = "color-active">{{getNumberSeen}}人想看</p>
            <button class = "color-active">想看</button>
        </div>
    </li>
</template>

<script>
    export default {
        props:['items1'],
        computed:{
            getNumberSeen(){
                //console.log( Math.round(this.items.collect_count/10000*10)/10 )
                if( this.items1.collect_count < 10000 ){
                    return this.items1.collect_count
                }else{
                    return Math.round(this.items1.collect_count/10000*10)/10 + '万'
                }
            },
            toStar(){
                
                let str = this.items1.casts;
                //console.log(str.length)
                if(str.length === 0){
                    return '暂无信息'
                }else if(str.length > 1){
                    let a = this.items1.casts[0].name
                    for( let i = 1 ; i < str.length ; i++ ){
                        a += ` / ${ this.items1.casts[i].name }` 
                    }
                    return a
                }else{
                    return `${ this.items1.casts[0].name }`
                }
                
                
            }
        }
    }
</script>
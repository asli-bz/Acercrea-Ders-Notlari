let maaslar = {
    ali:100,
    ayse:300,
    ahmet:250
};
    if(maaslar.ahmet > maaslar.ali && maaslar.ahmet > maaslar.ayse){
        console.log("Maaş ahmet");
    }
    else if(maaslar.ali>maaslar.ahmet && maaslar.ali>maaslar.ayse){
        console.log("Maaş ali");
    }
    else{
        console.log("Maaş ayşe");
    }
    // const {ali:a,ayse:b,ahmet:c} = maaslar;
    // console.log(a,b,c);
    //for in kullanırsak
    // for (let i in maaslar) {//of kullanmama sebebimiz forof sadece array map dizilerde dolanabiliyor olmamamız
    //     console.log(typeof i);
    // }
    // for of ile kullanmak için önce objeyi arraya atmamız gerekli
    const array = Object.keys(maaslar);
    for (const i of array) {
        console.log(i);
    }
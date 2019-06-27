export function changeImg(e) {
    if (e instanceof Object) {
        if (e.reason == '口碑人气好店') {
            return image(e.image_hash)
        }
    } else {
        return image(e)
    }
}
function image(e) {
    let a = e.substring(0, 1);
    let b = e.substring(1, 3);
    let c = e.substring(3);
    let isD = e.charAt(e.length - 2)
    let imgPath = "https://fuss10.elemecdn.com/" + a + "/" + b + "/" + c
    if (isD == 'e') {
        return imgPath + ".jpeg";
    } else {
        return imgPath + ".png";
    }
}

export function changePhone(e) {
    let a = e.substring(0, 3);
    let b = e.substring(8)
    return a + '****' + b
}

export function changeRange(e){
    let str = e.toString()
    if (str.length > 3){
        let a = str.substring(0, 1);
        let b = str.substring(1, 3);
        return a + '.' + b + 'km'
    }else{
        return str + 'm'
    }

}
export function strSub(e) {
    if (e.length > 15){
        return e.substring(0, 15) + '...';
    }else if(e.length < 15){
        return e
    }else{
        return e.substring(0, 9) + "...";
    }
  }

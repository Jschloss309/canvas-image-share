// Canvas Object
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    // load image from data url
    imageObj = new Image(),
    data = null,
    blob = null,
    collection = [],
    cl = null,
    n = 0;

imageObj.onload = function() {
  ctx.drawImage(this, 0, 0);
};

imageObj.src = 'sunglasses-smiley.png';

function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]),
        ab = new ArrayBuffer(byteString.length),
        ia = new Uint8Array(ab),
        i = 0,
        length = byteString.length;

    while (i < length){
         ia[i] = byteString.charCodeAt(i);
         i = i + 1;
    }
    return new Blob([ab], {type: 'image/png'});
}

// this would get passed into whatever function needs a data url
// in the example at     http://gorigins.com/posting-a-canvas-image-to-facebook-and-twitter/
// it is in the Twitter example in the callback at `data.append`
data = document.getElementById('canvas').toDataURL("image/png");
collection.push(data)

// this would get passed into whatever function needs a blob
// in the example at http://gorigins.com/posting-a-canvas-image-to-facebook-and-twitter/
// it is `postImageToFacebook` and
blob = dataURItoBlob(data);
collection.push(blob);
cl = collection.length;

while ( n < cl){
  console.log(collection[n]);
  n = n + 1;
}

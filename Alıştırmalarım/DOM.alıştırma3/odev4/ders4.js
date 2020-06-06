/*<div class="media">
        <img class="mr-3" src="..." alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0">Media heading</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
    </div>*/
let yorum = document.getElementById("yorum");
let yor = document.getElementById("yu")
function fonk() {
    let label;
    label = document.createElement("label");
    label.appendChild(document.createTextNode(yorum.value));
    console.log(label);
    let array = [yor.textContent.split(" ")];
    let regex = /^(mal\(şişko))$/
    for (var index = 0; index < array.length; index++) {
        if (regex.test(array[index] == true)) {
            var res = label.replace("mal","***");
            yor.appendChild(document.createTextNode(res));

        }
        else {
            yor.appendChild(document.createTextNode(label.textContent));
            }
    }
}
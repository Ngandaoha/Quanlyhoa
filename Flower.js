class Flower {
    constructor (id, name, prices, description, type, img) {
        this.id = id;
        this.name = name;
        this.prices = prices;
        this.description = description;
        this.type = type;
        this.img = img;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrices() {
        return this.prices;
    }
    getDescription(){
        return this.description;
    }
    getType() {
        return this.type;
    }
    getImg() {
        return this.img;
    }
    setID(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setPrices(prices) {
        this.prices = prices;
    }
    setDescription(description) {
        this.description = description;
    }
    setType(type) {
        this.type = type;
    }
    setImg(img){
        this.img = img;
    }

    edit(id, name, prices, description, type, img){
        this.id = id;
        this.name = name;
        this.prices = prices;
        this.description = description;
        this.type = type;
        this.img = img;
    }
}

let flower = new Flower('01', "Thuần khiết", '550,000', 'Sản phẩm bao gồm: 10 cẩm chướng đơn xanh bơ, 1 cát tường trắng, 3 cúc calimero trắng, 10 white Ohara.','Hoa tốt nghiệp','thuankhiet.jpg' );
let flower1 = new Flower('02','Tươi mắt biếc','1,200,000','Sản phẩm bao gồm: 10 Cúc calimero trắng, 5 Cúc mẫu đơn xanh dương NK, 1 Green bell, 10 Hồng trắng cổ', 'Hoa tình yêu','tuoimatbiec.jpg');
let flower2 = new Flower('03','Tana baby','350,000','Bó tana gồm cúc tana và baby được trồng tại xứ sở hoa Đà lạt. Đây chắc chắn sẽ là món quà cực kì dễ thương cho những ai yêu thích loài hoa "cúc dại" mộc mạc này.','Hoa 8-3','tanababy.jpg');
let arr =[flower, flower1, flower2];
let manage = new FlowerManagement(arr);

function validateForm() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let prices = document.getElementById("prices").value;
    let description = document.getElementById("description").value;
    let type = document.getElementById("type").value;
    let img = document.getElementById("img").value;

    if (!id) {
        alert("ID không được để trống");
        return false;
    }
    if (!name) {
        alert("Tên sản phẩm không được để trống");
        return false;
    }
    if(!prices) {
        alert("Hãy điền giá sản phẩm");
        return false;
    }
    if(!description) {
        alert("Mô tả không được để trống");
        return false;
    }
    if(!type) {
        alert("Hãy điền loại hoa");
        return false;
    }
    if(!img) {
        alert("Hãy chọn hình ảnh");
        return false;
    }
    return true;
}

function addFlower(){
    if (!validateForm()) {
        return;
    }
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let prices = document.getElementById('prices').value;
    let description = document.getElementById('description').value;
    let type = document.getElementById('type').value;
    let fileInput = document.getElementById('img').files[0].name;
    //document.getElementById('image').src = fileInput[0].name;
    let flower = new Flower(id,name,prices,description,type,fileInput);
    manage.addFlower(flower);
    manage.showList();
    clear();
}

function clear(){
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('prices').value = '';
    document.getElementById('description').value = '';
    document.getElementById('type').value = '';
    document.getElementById('img').value= '';
}

function deleteFlower(id) {
    manage.delete(id);
    manage.showList();
}

let flowerId = 0;
function editFlower(id){
    let flower = manage.findFlowerById(id);
    document.getElementById('id').value = flower.id;
    document.getElementById('name').value = flower.name;
    document.getElementById('prices').value = flower.prices;
    document.getElementById('description').value = flower.description;
    document.getElementById('type').value = flower.type;
    document.getElementById('img').value = flower.img;

    flowerId = id;
}

function updateFlower(){
    if(!validateForm()){
        return;
    }
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let prices = document.getElementById('prices').value;
    let description = document.getElementById('description').value;
    let type = document.getElementById('type').value;
    let fileInput = document.getElementById('img').files;
    document.getElementById('image').src = fileInput[0].name;
    let flower = manage.findFlowerById(flowerId);
    manage.edit(flower, id, name, prices, description, type, fileInput);
    manage.showList();
    clear();
}

manage.showList();
class FlowerManagement {
    constructor(arr) {
        this.flowers = arr;
    }
    showList() {
        let table = '';
        for (let i = 0; i < this.flowers.length; i++) {
            table += '<tr>';
            table += '<td>';
            table += this.flowers[i].id;
            table += '</td>';

            table += '<td>';
            table += this.flowers[i].name;
            table += '</td>';

            table += '<td>';
            table += this.flowers[i].prices;
            table += '</td>';

            table += '<td>';
            table += this.flowers[i].description;
            table += '</td>';

            table += '<td>';
            table += this.flowers[i].type;
            table += '</td>';

            table += '<td>';
            table += '<img width="100px" height="100px" src="' + this.flowers[i].img + '" alt="hình ảnh minh hoạ" id="img"/>';
            // table += '<img width="100px" height="100px" src=" ' + this.flowers[i].img + '"/>';
            table += '</td>';

            table += '<td>' +
                '<button style="background-color: orange; color: white" type="button" onclick="editFlower(' + i + ')">Sửa</button>' +
                '<button style="background-color: brown; color: white "  type="button" onclick="deleteFlower(' + i + ')">Xoá</button>' + '</td>';
            table += '</tr>';
        }
        document.getElementById('list-flower').innerHTML = table;
    }

    delete(id) {
        let check = confirm('Bạn có chắc chắn muốn xoá không?');
        if(check){
            this.flowers.splice(id, 1);
        }
    }

    addFlower(flower) {
        this.flowers.push(flower);
    }

    edit(flower, id, name, prices, description, type, img) {
        let check = confirm('Bạn có chắc chắn muốn sửa không?');
        if (check) {
            flower.edit(id, name, prices, description, type, img);
        }
    }

    findFlowerById(id) {
        return this.flowers[id];
    }
}
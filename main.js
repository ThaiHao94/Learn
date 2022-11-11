const str = 'Thai Hao';
const clone = str.replace('Thai', 'A');

console.log(clone);


// Regex

let test1 = [
  {
    input: 'https://cdn.shopify.com/e.jpg?v=15',
    size: '100x',
    output: 'https://cdn.shopify.com/e_100x.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e_100x200.jpg?v=15',
    size: 'x200',
    output: 'https://cdn.shopify.com/e_x200.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e-jpg_200x100.jpg?v=15',
    size: '100x',
    output: 'https://cdn.shopify.com/e-jpg_100x.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15',
    size: 'x100',
    output: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15'
  },
  {
    input: 'https://cdn.shopify.com/e-800x600-jpg.jpg?v=15',
    size: '100x200',
    output: 'https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15'
  }
]

// Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn.
// Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:
//  Lưu ý: Một số đặc điểm của kích thước
//  1. Các định dạng: _100x, _x100, _100x100

//  2. Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg

// const regex = /Thai/;

// const regex2 = new RegExp('Thai');

// const isExist = regex.test(str);

// const isexist = str.match(regex);

// console.log(isExist);

// console.log(isexist);

let test2 = [
    {
      input: 'https://cdn.shopify.com/e.jpg?v=15', // => /e_100x.jpg
      size: '100x',
    },
    {
      input: 'https://cdn.shopify.com/e_100x200.jpg?v=15', // => e_x200.jpg
      size: 'x200',
    },
    {
      input: 'https://cdn.shopify.com/e-jpg_200x100.jpg?v=15', // => e-jpg_100x
      size: '100x',
    },
    {
      input: 'https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15', // result _x100.jpg 
      size: 'x100',
    },
    {
      input: 'https://cdn.shopify.com/e-800x600-jpg.jpg?v=15', // => -jpg_100x200.jpg
      size: '100x200',
    }
  ]

const resizeImageItem = (arr) => {
    return arr.map(item => {
        const regex = /_?(\d+)?x?(\d+)?\.jpg\?v=15/
        return {
            ...item,
            output: item.input.replace(regex, `_${item.size}.jpg?v=15`)
        }
    })
}

console.log(resizeImageItem(test2));

// Lập trình hướng đối tượng

class Rectangle {
    static height = 0;
    width;
    
    constructor(height, width) {
        this.height;
        this.width;
    }

    static displayHeight() {
        return this.height;
    }

    render () {
        
    }
}

// const rec = new Rectangle();
// console.log(rec);

const rec2 = new Rectangle (20, 10);
console.log(rec2);
// console.log(rec2.#height);

console.log(Rectangle.displayHeight());

// const rect = new Rectangle();
// console.log(rect.displayHeight());

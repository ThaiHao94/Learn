test = [
    { id: 1, input: "https://cdn.shopify.com/e.jpg?v=15", size: 15 },
    { id: 2, input: "https://cdn.shopify.com/e.jpg?v=152", size: 27 },
    { id: 3, input: "https://cdn.shopify.com/e.jpg?v=32", size: 32 },
    { id: 4, input: "https://cdn.shopify.com/e.jpg?v=50", size: 50 },
    { id: 5, input: "https://cdn.shopify.com/e.jpg?v=24", size: 24 },
    { id: 6, input: "https://cdn.shopify.com/e.jpg?v=35", size: 35 },
  ];
  
  // Lọc và in ra phần tử có size lớn hơn 30.
  test.forEach(element => {
    if (element.size >30 ) {
        console.log(element);
      }
  });

  console.log(test[0].size)
  
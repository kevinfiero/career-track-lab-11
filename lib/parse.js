
const parse = document => {

  const books = document.querySelectorAll('.product_pod');
  
  return [...books].map(book => ({
    title: book.querySelector('h3 > a').title,
    coverImage: book.querySelector('.image_container > a > img').src,
    rating: textToNumber(book.querySelector('.star-rating').className.replace(/^[^\s]*\s/, '')),
    price: Number(book.querySelector('.product_price > .price_color').textContent.replace('£', '')),
    inStock: !!book.querySelector('.product_price > .instock > i')
  }));
  
};

const textToNumber = (textRating) => {
  if(textRating === 'One'){
    return 1;
  } else if(textRating === 'Two'){
    return 2;
  } else if(textRating === 'Three'){
    return 3;
  } else if(textRating === 'Four'){
    return 4;
  } else if(textRating === 'Five'){
    return 5;
  }
  else {
    return 0;
  }

};

module.exports = parse;

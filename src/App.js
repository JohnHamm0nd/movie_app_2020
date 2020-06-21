import React from 'react';
import PropTypes from 'prop-types';


//인자가 오브젝트로 넘어오기 때문에
//사용 할때 props.변수명 이나
//인자를 받을 때 {}(오브젝트 사용 의미) 를 사용하여 {변수명} 을 하면 된다
//props(속성값)
function Food({name, image, rating}) {
  //console.log(props.fav);
  //console.log(fav);
  return (
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating} / 5.0</h4>
      <img src={image} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  //타입체크
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
  //isRequired 은 필수인지 아닌지, 없으면 인자가 없어도 된다
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.0
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function renderFood(dish) {
  //console.log(dish);
  return <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      {/*
        <Food name='kimchi'/>
        <Food name='ramen'/>
        <Food name='pizza'/>
        <Food name='chicken'/>
        하드코딩 방법은 데이터가 몇개인지 모르는 경우 코딩할수가 없다
        동적인 데이터를 추가 할 수 있는 방법이 필요하다
        */}
      {/*
        자바스크립트의 map 함수를 사용함(map 함수는 Array 의 element 들을 차례대로 불러와 함수를 호출, return 이 있는 경우 Array 를 return 함)
        Array.map(element- Array 안에 있는 각 요소:오브젝트임 => {})
      */}
      {/*
        {foodILike.map(food => <Food name={food.name} image={food.image}/>)}
      */}
      {/*
        다른방법, 함수를 바로 사용하지 않고 만들어 놓고 사용
      */}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;

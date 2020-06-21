import React from 'react';
//import PropTypes from 'prop-types';

//클래스 컴포넌트는 return 을 가지고 있지 않다
//클래스 컴포넌트(React Component class)는 render method 가 있고 여기서 return
//리액트는 자동으로 class component 의 render method 를 실행한다 그래서 결과값이 나오는 것
class App extends React.Component {
    state = {
        count: 0
    };
    //리액트는 state 를 직접 변경하면 변경을 감지하지 못한다
    //값을 변경해도 변경을 감지하지 못해 render 를 다시 하지 않기 때문에 브라우저 UI 에서 값이 변하지 않음
    //setState 를 사용하여 변경해주면 render 를 호출한다
    //참고: setState 는 비동기 동작이라고 한다
    //클래스 컴포넌트를 쓰는 이유는 state 관리와 Life cycle method 때문
    //리액트에서 이제 Hook 을 통해 함수형 컴포넌트 에서도 state 관리와 Life cycle method 를 지원함(useState, useEffect)
    //공부할 때에는 클래스형 컴포넌트와 함수형 컴포넌트를 모두 사용해보고
    //실제 서비스를 만든다면 함수형 컴포넌트를 쓰는게 좋다(성능, 안전성 등)
    //컴포넌트 생명주기
    //REACT.md 파일 참고
    add = () => {
        //좋은 방법은 아님(성능, state 상태)
        this.setState({count: this.state.count + 1});
    }
    minus = () => {
        //더 좋은방법(최근 state 을 받아서 사용)
        this.setState(current => ({count: current.count - 1}));
    }
    componentDidMount() {
        console.log('component rendered');
    }
    componentDidUpdate() {
        console.log('component updated');
    }
    componentWillUnmount() {
        console.log('component unmounted');
    }
    render () {
        console.log('Rendering...');
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App

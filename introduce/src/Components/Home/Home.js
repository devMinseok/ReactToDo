import React, { Component } from 'react';
import styled from "styled-components";

const HomeContainer = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    width: 620px;
    height: 420px;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
`;

class Home extends Component {
    render() {
        return (
            <div>
                <HomeContainer>
                    <h1>3학년 2반 5번 강민석</h1>
                </HomeContainer>
            </div>
        );
    }
}

export default Home;
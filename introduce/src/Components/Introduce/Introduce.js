import React, { Component } from 'react';
import styled from "styled-components";

const IntroduceContainer = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    width: 620px;
    height: 420px;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
`;

class Introduce extends Component {
    render() {
        return (
            <div>
                <IntroduceContainer>
                    <h1>취업 분야</h1>
                    <h2>iOS 앱 개발</h2>
                    <h3>iOS 앱 개발의 큰 범주는 모바일 앱 개발 이라고 할 수 있습니다. <br/>
                        모바일 앱 개발에는 Android와 iOS가 있습니다. <br/>
                        iOS는 주로 Swift를 사용하여 개발하며, Android는 Java와 Kotlin으로 개발합니다.
                    </h3>
                </IntroduceContainer>
            </div>
        );
    }
}

export default Introduce;
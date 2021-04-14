import React, { Component } from 'react';
import styled from "styled-components";
import Header from "./Header";
import Routes from "./Routes";

const ProjectContainer = styled.div`
    margin: 0 auto;
    margin-top: 40px;
    width: 620px;
    height: 420px;
    box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
`;

class Project extends Component {
    render() {
        return (
                <ProjectContainer>
                    <div>
                        현재 진행중인 프로젝트
                        <Routes />
                    </div>
                </ProjectContainer>
        );
    }
}

export default Project;
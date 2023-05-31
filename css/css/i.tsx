import styled, { css } from 'styled-components';
    
type propsStyle = {
        modo?: string;
};
export const Style = styled.button`
    /** propriedades globais*/
                                    width: 400px;
                                    height: 400px;
                                    @media only screen and (max-width: 320px) {
                                            background-color: red;
                                    }
                                    @media only screen and (min-width: 321px) and (max-width: 480px) {
                                            background-color: blue;
                                    }
                                    @media only screen and (min-width: 481px) and (max-width: 768px) {
                                            background-color: orange;
                                    }
                                    @media only screen and (min-width: 769px) and (max-width: 1024px) {
                                            background-color: yellow;
                                    }
                                    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
                                            background-color: lightblue;
                                    }
                                    @media only screen and (min-width: 1201px) {
                                            background-color: white;
                                    }
    
    ${(props: propsStyle) => {
                switch (props.modo) {
                        case 'background':
                            return css`
                                    &:hover {
                                            background: red;
                                    }
                                    &.classe-qualquer {
                    background: green;
                                    }
                            `;
                            case 'nobackground':
                            return css`
                                    &:hover {
                                              background: red;
                                    }
                                    &.classe-qualquer {
                                              background: green;
                                    }
                            `;
            }
        }}
`;
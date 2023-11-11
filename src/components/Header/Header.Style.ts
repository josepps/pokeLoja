import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 18vh;
    background: #eccd54 ;

    .containerHeader {
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        a h2 {
            font-family: 'Alfa Slab One';
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: #395AA8;
            font-size: 2em;
            color: #FFCC01;
            text-align: center;
        }

        .containerInputHeader {
            width: 40%;
            height: 50%;
            background: #FFCC01;
            border-radius: 30px;
            position: relative;

            input {
                width: 100%;
                height: 100%;
                border-radius: 30px;
                border: 0 none;
                outline: 0;
                padding-left: 6%;
                background: rgba(0, 0, 0, 0.2);
                color: #fff;
                font-size: 1rem;

                &::placeholder {
                    color: #fff;
                }
            }

            button {
                position: absolute;
                top: 50%;
                right: 5%;
                transform: translate(0, -50%);
                background: none;
                border: none;
                color: #395AA8;
                font-size: 1.8rem;
                cursor: pointer;

                :hover {
                    color: #5f7aba;
                }
            }
        }
    }

    .navHeader {
        width: 100%;
        height: 30%;
    }
`;
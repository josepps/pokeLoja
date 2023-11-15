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

        .containerContatoHeader {
            display: flex;
            position: relative;
            padding-bottom: 5px;
            cursor: default;

            span {
                margin-right: 5px;
                font-size: 1.2rem;
                color: #395AA8;
            }

            p span {
                position: relative;
                top: 10%;
                color: #000;
                font-size: 0.8rem;
            }

            .popUpContatoHeader {
                display: none;
                width: auto;
                position: absolute;
                top: 100%;
                right: 0;
                background: #f5f5f5;
                padding: 7% 20%;
                border-radius: 6px;
                white-space: nowrap;
                text-align: center;

                &::before {
                    content: "";
                    width: 0; 
                    height: 0; 
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    border-bottom: 7px solid #f5f5f5;
                    position: absolute;
                    bottom: 99%;
                    right: 15px;
                }

                h5 {
                    font-size: 1rem;
                    margin-bottom: 5px;
                }

                a p {
                    border-bottom: 1px #c8c8c8 solid;
                    padding-bottom: 7px;
                    margin-bottom: 10px;
                    color: #000;

                    span {
                        font-size: 1.3rem;
                        position: relative;
                        top: 5px;
                    }

                    &:hover {
                        color: #a0a0a0;
                    }
                }

                p {
                    color: #a0a0a0;
                }
            }

            &:hover {
                .popUpContatoHeader {
                    display: block;
                }
            }
        }
    }

    .navHeader {
        width: 100%;
        height: 30%;
    }
`;
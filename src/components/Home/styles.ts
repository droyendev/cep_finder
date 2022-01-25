import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1c1b24;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Title = styled.h1`
    font: 600 4vw 'Poppins',sans-serif;
    color: #fff;
    margin-bottom: 1vw;
`

export const SearchBox = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled.input`
    background: #292833;
    border: none;
    padding: 1vw;
    border-radius: 0.9vw;
    color: #fff;
    font: 400 1.2vw 'Poppins',sans-serif;
    outline-style: none;
`

export const Search = styled.button`
    height: 100%;
    padding: 0 1.4vw;
    font: 400 1.2vw 'Poppins',sans-serif;
    border-radius: 0.9vw;
    border: none;
    outline-style: none;
    margin-left: 1vw;
    background: #4dd674;
    color: #203626;
    box-shadow: 0 0 0.05vw rgba(80, 217, 118,0.4), 0 0 0.1vw rgba(80, 217, 118,0.7), 0 0 1.1vw rgba(80, 217, 118,1);
    transition: .2s;

    &:hover {
        box-shadow: 0 0 0.2vw rgba(59, 212, 101,0.4), 0 0 0.5vw rgba(59, 212, 101,0.7), 0 0 1.5vw rgba(59, 212, 101,1);
        background: #3bd465;
    }

    &:disabled {
        color: rgba(255, 255, 255,0.2);
        background: #32313d;
        box-shadow: none;
    }
`

export const CepBox = styled.div`
    margin-top: 2vw;
    align-self: center;
    width: 30vw;
    background: #292833;
    border-radius: 0.9vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CepNumber = styled.h2`
    font: 500 2vw 'Poppins',sans-serif;
    color: #fff;
    margin: 1vw 0;
`

export const CepInfos = styled.p`
    font: 400 1.4vw 'Poppins',sans-serif;
    margin-bottom: 1.4vw;
    text-align: center;
    color: #e3e3e3;
`

export const Color = styled.span`
    color: ${(props) => props.color ? props.color : 'e3e3e3'};
`
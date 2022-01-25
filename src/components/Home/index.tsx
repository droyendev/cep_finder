
import { useState } from 'react';
import { api } from '../../services/api';

import { 
    Container,
    Title,
    SearchBox,
    Input,
    Search,
    CepBox,
    CepNumber,
    CepInfos,
    Color
} from './styles'

export function Home(){

    const [ input,setInput ] = useState('');
    const [ cep,setCep ] = useState({} as any);
    

    async function handleFindCep(){
        try {
            const response = await api.get(`${input}/json`)
            setCep(response.data.erro ? {} : response.data);
        } catch (error) {
            setCep({})            
        }
        setInput('')
    }

    return(
        <Container>
            <Title>CEP Finder</Title>
            <SearchBox>
                <Input 
                    type="text" 
                    placeholder="enter a CEP" 
                    onChange={(e) => {
                            setInput(e.target.value)
                        }
                    } 
                    value={input}
                />
                <Search disabled={Number(input) ? input.length < 8 : true} onClick={handleFindCep}>Find CEP</Search>
            </SearchBox>
            
            {Object.keys(cep).length > 0 && (
                <CepBox>
                    <CepNumber>CEP: <Color color="rgb(80, 217, 118)">{cep.cep}</Color></CepNumber>
                    <CepInfos>Bairro: <Color color="rgb(80, 217, 118)">{cep.bairro}</Color></CepInfos>
                    <CepInfos>Localidade: <Color color="rgb(80, 217, 118)">{cep.localidade}</Color></CepInfos>
                    <CepInfos>Rua: <Color color="rgb(80, 217, 118)">{cep.logradouro}</Color></CepInfos>
                    <CepInfos>Estado: <Color color="rgb(80, 217, 118)">{cep.uf}</Color></CepInfos>
                    <CepInfos>DDD: <Color color="rgb(80, 217, 118)">{cep.ddd}</Color></CepInfos>
                </CepBox>
            )}
        </Container>
    )
}
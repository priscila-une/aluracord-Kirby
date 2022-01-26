import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    // Sua lógica vai aqui
    const [message, setMessage] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    function handleNovaMensagem(novaMensagem){
      const mensagem ={
        id: listaDeMensagens.length + 1,
        de: 'priscila-une',
        texto: novaMensagem,
      };
      
      setListaDeMensagens([
        mensagem,
        ...listaDeMensagens,
      ]);

      setMessage('');
    }
 
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://cdn.wallpaperjam.com/1c39c052560aa26f8957df90d56c7da2a5d1a564/nintendo-kirby-video-games-faces.png)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 80%)',
                    opacity: 0.9,
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                  <MessageList mensagens={listaDeMensagens} />
                    
                    {/*{listaDeMensagens.map((mensagemAtual) => {
                      return(
                        <li key={mensagemAtual.id}> 
                            {mensagemAtual.de}: {mensagemAtual.texto}
                        </li>
                      )
                    })} */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={message}
                            onChange={(event)=> {
                                const valor = event.target.value;
                                setMessage(valor);
                            }}
                            onKeyPress={(event) =>{
                              if(event.key === 'Enter'){
                                event.preventDefault();
                                handleNovaMensagem(message);
                              }
                            }}
                            
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        <Button
                            onClick={(e) => {
                            e.preventDefault();
                            handleNovaMensagem(message);
                            }}
                            label='Enviar'
                            styleSheet={{
                            maxWidth: '200px',
                            height: '50px',
                            
                          }}
            
                          buttonColors={{
                            contrastColor: appConfig.theme.colors.neutrals["000"],
                            mainColor: appConfig.theme.colors.primary[600],
                            mainColorLight: appConfig.theme.colors.primary[400],
                            mainColorStrong: appConfig.theme.colors.primary[500],
                          }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
              return(
                <Text
                key={mensagem.id}
                tag="li"
                styleSheet={{
                    borderRadius: '5px',
                    padding: '6px',
                    marginBottom: '12px',
                    hover: {
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }
                }}
            >
                <Box
                    styleSheet={{
                        marginBottom: '8px',
                    }}
                >
                    <Image
                        styleSheet={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'inline-block',
                            marginRight: '8px',
                        }}
                        src={`https://github.com/${mensagem.de}.png`}
                    />
                    <Text tag="strong">
                        {mensagem.de}
                    </Text>
                    <Text
                        styleSheet={{
                            fontSize: '10px',
                            marginLeft: '8px',
                            color: appConfig.theme.colors.neutrals[300],
                        }}
                        tag="span"
                    >
                        {(new Date().toLocaleDateString())}
                    </Text>
                </Box>
                {mensagem.texto}
            </Text>
          );
      })}
            
    </Box>
  )
}
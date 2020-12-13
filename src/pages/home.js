import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/button'
;

function Home() {
  return (
    <div>  
      <Header /> 
      <Row style={{padding:"1% 8%"}}>
        <h3>Objetivo</h3>
        <p> Este é a plataforma desenvolvida para o trabalho final da disciplina Tópicos de Redes 3.</p>
        <p> Criamos um prótotipo de um Chat. Temos duas páginas iniciais, uma para que pessoas se cadastrem na nossa plataforma e outro para quem já tem cadastro somente fazer log-in.</p>
        <Button><Link to="/sign-in">Sign In</Link></Button>
        <Button><Link to="/sign-up">Sign Up</Link></Button>
        <h3>Quem somos ?</h3>
        <p>Nosso grupo é composto pelos estudantes Mariana Martins Pessoa Costa, Phelipe Resende e Natália. Para nos avaliar tem o projeto do github e o vídeo do youtube.</p>
        <Button><Link to="https://github.com/PhelipeSR/youme-backend/blob/main/package.json">GitHub</Link></Button>
        <Button><Link to="/sign-up">Youtube</Link></Button>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;

import './footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <h2 className="footer_titulo">Páginas</h2>
      <ul className="footer_links">
        <li className='footer_link'><a href="/">Home</a>&nbsp;&nbsp;&nbsp;</li>
        <li className='footer_link'><a href="/sobre">Sobre</a>&nbsp;&nbsp;&nbsp;</li>
        <li className='footer_link'><a href="/contato">Contato</a></li>
      </ul>
      <p>
        Imagens usadas do site :  <a href="https://coexistjoias.com.br/"> COEXISTJOIAS</a>
      </p>
    </div>
  );
}

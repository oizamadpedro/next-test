import './index.css';
import '../../static/font-awesome-4.7.0/css/font-awesome.min.css';
export default function Footer() {
    return (
        <footer>
            <div>

            </div>
            <div id="contact-us">
                <h1>Contate-nos:</h1>
                <br></br>
                <p>oizamadpedro@gmail.com</p>
                <p>+55 27998629065</p>
                <p>Rua Fitness, 123 - Cidade do Bem-Estar, Estado da Saúde</p>
            </div>
            <div>
                <h1>Redes Sociais</h1>
                <div class="botao-rs facebook">
                    <a href="#" title="Facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <span>Facebook</span>
                    </a>
                </div>
                <div class="botao-rs instagram">
                    
                    <a href="#" title="Instagram">    
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                        <span>Instagram</span>
                    </a>
                </div>
                <div class="botao-rs twitter">
                    
                    <a href="#" title="Twitter">
                        <i class="fa fa-twitter"></i>
                        <span>Twitter</span>
                    </a>
                </div>
                <div class="botao-rs pinterest">
                    
                    <a href="#" title="Pinterest">
                        <i class="fa fa-pinterest"></i>
                        <span>Pinterest</span>
                    </a>
                
                </div>
                <div class="botao-rs whatsapp">
                    
                    <a href="#" title="whatsApp">    
                        <i class="fa fa-whatsapp"></i>
                        <span>whatsApp</span>
                    </a>
                
                </div>
            </div>
        </footer>
    )
}
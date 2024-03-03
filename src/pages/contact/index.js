import Header from "@/app/components/Header";
import '../../app/globals.css';
import './index.css';
import React, { useState, onSubmit } from 'react';

export default function Contact(){
    const [errorMessages, setErrorMessages] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessages('');

        const name = event.target.elements.name.value.trim();
        const email = event.target.elements.email.value.trim();
        const message = event.target.elements.message.value.trim();

        if (name === '') {
        showError('Por favor, digite seu nome.');
        return;
        }

        if (!isValidEmail(email)) {
        showError('Por favor, digite um e-mail válido.');
        return;
        }

        if (message === '') {
        showError('Por favor, digite uma mensagem.');
        return;
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const showError = (message) => {
        setErrorMessages(message);
    };
    return(
        <div id="contact-page">
            <Header />
            <div id="form-container">
                <div id="contact-form">
                    <h1>Contate-nos!</h1>
                    <form id="contactForm" class="max-w-md mx-auto p-8 rounded-md shadow-md" onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label for="name" class="block text-white font-bold mb-2">Nome</label>
                            <input type="text" id="name" name="name" class="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:border-blue-500" placeholder="Digite seu nome" />
                        </div>

                        <div class="mb-4">
                            <label for="email" class="block text-white font-bold mb-2">E-mail</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500" placeholder="Digite seu e-mail" />
                        </div>

                        <div class="mb-4">
                            <label for="message" class="block text-white font-bold mb-2">Mensagem</label>
                            <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500" placeholder="Digite sua mensagem"></textarea>
                        </div>

                        <div class="mb-4">
                            <label for="reason" class="block text-white font-bold mb-2">Motivo do Contato</label>
                            <select id="reason" name="reason" class="w-full px-4 py-2 border rounded-md focus:outline-none text-black focus:border-blue-500">
                                <option value="suporte">Suporte</option>
                                <option value="vendas">Vendas</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>
                        <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" style={{width: '100%'}}>Enviar</button>
                    </form>
                    {errorMessages && (
                        <div className="mt-4 text-red-500" style={{textAlign: 'center'}}>{errorMessages}</div>
                    )}
                </div>
            </div>
        </div>
    )
}
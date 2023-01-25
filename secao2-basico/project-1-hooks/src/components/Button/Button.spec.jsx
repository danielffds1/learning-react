//Button.spec.jsx o nome do arquivo pode ser Home.test.jsx dentro da pasta Button -> components -> src


import {fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Button } from '.';


describe('<Button text="Load more/>', () => {
   //Este botão tem um texto
   it('should render the button with the text "Load more"', () => {
       render(<Button text="Load more"/>);

       expect.assertions(1);

       //Ver que isto abaixo é uma expressão regular que irá procurar uma parte do texto
       const button = screen.getByRole('button', {name: /load more/i});
      
       expect(button).toBeInTheDocument();
   });


   //Teste para ver quando é clicado
   it('should call function on button click', () => {
       //Fazendo o jest criar um mock simples
       const fn = jest.fn();
       render(<Button text="Load more" onClick={fn} />);

       const button = screen.getByRole('button', {name: /load more/i});
      
       userEvent.click(button)

       expect(fn).toHaveBeenCalledTimes(1);
   });


   //Ver se o botão está desabilitado
   it('should be disabled when disabled is true', () => {
       render(<Button text="Load more" disabled={true} />);

       const button = screen.getByRole('button', {name: /load more/i});

       expect(button).toBeDisabled();
   });

   //Ver se o botão está ativo
   it('should be enabled when disabled is true', () => {
       render(<Button text="Load more" disabled={false} />);

       const button = screen.getByRole('button', {name: /load more/i});

       expect(button).toBeEnabled();
   });

   //teste do snapshot do botão
   it('should match snapshot', () => {
      const fn = jest.fn();
      const { container } = render(<Button text="Load more" disabled={false} />);
       expect(container.firstChild).toMatchSnapshot();
   });
});

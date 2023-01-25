//TextInput.spec.jsx dentro da pasta TextInput -> components -> src
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.'

describe('<TextInput />', () => {
   //Testando a busca se o valor está mudando e a função está mudando a cada tecla pressionada
 it('should have a value of searchValue', () => {
   const fn = jest.fn();
   render(<TextInput handleChange={fn} searchValue={'testando'} />);

   const input = screen.getByPlaceholderText(/type your search/i);
    
   //Verificando se o valor do imput é testando
   expect(input.value).toBe('testando');
 });


 //A cada tecla clicada ele irá chamar a função
 it('should call handleChange function on each key pressed', () => {
   const fn = jest.fn();
   render(<TextInput handleChange={fn} />);

   const input = screen.getByPlaceholderText(/type your search/i);
   const value = 'o valor';

   //Simular um valor para o input
   userEvent.type(input, value);

   expect(input.value).toBe(value);

   expect(fn).toHaveBeenCalledTimes(value.length);
 });

 //Realizando o teste do snapshot
 it('should match snapshot', () => {
   const fn = jest.fn();
   const { container } = render(<TextInput handleChange={fn} />);
  
   expect(container).toMatchSnapshot();
 });
});

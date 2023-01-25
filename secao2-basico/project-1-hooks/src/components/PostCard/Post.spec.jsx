//PostCard.spec.jsx o nome do arquivo pode ser PostCard.test.jsx dentro da pasta PostCard -> components -> src
import {render, screen} from '@testing-library/react';
import {PostCard} from '.';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock

describe('<PostCard />', () =>{
   it('should render PostCard correctly', () => {
       render(<PostCard {...props} />);
       //Estou testando se a imagem existe e se tem o atributo cover
       expect(screen.getByRole('img', {name: /title 1/i}))
       .toHaveAttribute('src', props.cover);

       expect(screen.getByRole('heading', {name: /title 1/i}))
       .toBeInTheDocument();

       //Estou testando o paragrafo
       expect(screen.getByText('body 1')).toBeInTheDocument();
   });

   //Teste de SnapShot
   it('should match snapshot', () => {
       const { container } = render(<PostCard {...props} />);
       expect(container.firstChild).toMatchSnapshot();
     });
})


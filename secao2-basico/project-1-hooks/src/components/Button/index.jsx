//index.jsx dentro da pasta Button -> src
import P from 'prop-types';
import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
//Quando não passar que é requido então aplico uma prototype padrão
Button.defaultProps = {
  disabled: false,
};
//Tipando as props
Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

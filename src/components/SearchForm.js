import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSreachTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const sreachCoctail = () => {
    setSreachTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={sreachCoctail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

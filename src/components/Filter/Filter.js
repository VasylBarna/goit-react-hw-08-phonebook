import { useDispatch } from 'react-redux';
import { handleFilter } from '../../redux/Phonebook/phonebook-actions';
import styles from './Filter.module.scss';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <label className={styles.find}>
      Find contacts by name
      <input
        type="text"
        onChange={event => dispatch(handleFilter(event.target.value))}
      />
    </label>
  );
}

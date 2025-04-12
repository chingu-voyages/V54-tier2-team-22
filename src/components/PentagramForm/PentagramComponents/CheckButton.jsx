import { LightBulbSVG } from '../../../icons/LightBulbSVG';

export function CheckButton({ state, onClick }) {
  const colors = {
    idle: 'text-neutral-400 dark:text-Neutral-600 ',
    typing: 'text-Yellow-700 dark:text-Yellow-500',
    valid: 'text-Green-700 dark:text-Green-500',
    invalid: 'dark:text-Orange-500  text-Orange-800 ',
  };

  return (
    <button type="button" onClick={onClick} className={`${colors[state]} cursor-pointer`}>
      <LightBulbSVG />
    </button>
  );
}

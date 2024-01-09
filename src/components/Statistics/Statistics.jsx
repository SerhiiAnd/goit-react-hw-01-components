import css from './Statistics.module.css';

const Statistics = ({ stats, title = '' }) => {
  return (
    <section className={css.sectionStati}>
      {title?.length > 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css.listStati} style={{ '': Math.min(stats.length, 4) }}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

export { Statistics };

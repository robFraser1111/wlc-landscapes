import styles from "../styles/ServiceOverview.module.css";

export default function ServiceOverview(props) {
  return (
    <section className={styles.service}>
      <div className={styles.overivew}>
        <h2>Service overview</h2>
        <p>{props.serviceOverview}</p>
      </div>

      <div className={styles.includes}>
        <h2>Service includes</h2>
        <ul>
          {props.serviceIncludes.map((serviceInclude) => (
            <li>{serviceInclude}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

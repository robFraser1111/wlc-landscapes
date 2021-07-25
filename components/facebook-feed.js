import styles from "../styles/Facebook.module.css";

export default function FacebookFeed() {

  return (
    <section className={styles.feed}>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/wlclandscapes"
        data-tabs="timeline"
        data-width={(screen.width > 600) ? 500 : 400}
        data-height="800"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/wlclandscapes"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/wlclandscapes">
            <u>WLC Facebook Page</u>
          </a>
        </blockquote>
      </div>
    </section>
  );
}

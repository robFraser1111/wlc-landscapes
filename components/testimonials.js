import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {

    const testimonials = [
        {
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel enim quis ligula congue elementum eu eu nulla.',
            name: 'John Doe'
        },
        {
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel enim quis ligula congue elementum eu eu nulla.',
            name: 'Some guy'
        },
        {
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel enim quis ligula congue elementum eu eu nulla.',
            name: 'Some girl'
        }
    ]

    return (

        <section className={styles.testimonials}>
            {testimonials.map((testimonial) => (
                <div className={styles.testimonial} key={ testimonial.name }>
                    <blockquote>
                        <h5>{ testimonial.testimonial }</h5>
                    </blockquote>
                    <p>
                        <small>{ testimonial.name }</small>
                    </p>
                </div>
            ))}
        </section>

    )
}





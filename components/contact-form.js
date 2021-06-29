import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
    return (

        <section className={ styles.section }>

            <form className={ styles.form }>

                <input type="text" id="name" name="name" placeholder="Name" required />
                <input type="text" id="suburb" name="suburb" placeholder="Suburb" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="text" id="phone" name="phone" placeholder="Phone" />

                <select id="contact" name="contact" required>
                    <option value="">Preferred contact method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>

                <select id="urgency" name="urgency" required>
                    <option value="">Urgency</option>
                    <option value="asap">As soon as possible</option>
                    <option value="next-month">Next month</option>
                    <option value="not-urgent">Not urgent</option>
                </select>

                <textarea name="message" rows="10" cols="30" placeholder="Type of work required" required >

                </textarea>

                <button type="button">Submit</button> 

            </form>
        </section>

    )
}





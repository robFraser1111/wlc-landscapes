import { useState, useEffect } from "react";

import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
  // Array of Testimonial objects
  const testimonials = [
    {
      testimonial: `Excellent workmanship. Highly recommend Steve! Won't be disapointed.`,
      name: "Bek Nesta",
    },
    {
      testimonial:
        "Would highly recommend WLC Landscapes. Professional team. Beautiful work and craftsmanship. They work well with the client to ensure an amazing outcome that the client is happy with. Nothing is too much trouble. I’m thrilled with their work.",
      name: "Amanda Ferreira",
    },
    {
      testimonial:
        "Steve and Stu have just completed a complete renovation of our backyard and the result is spectacular. Their professionalism and attention to detail has been outstanding throughout the work.",
      name: "Erik Schanssema",
    },
  ];

  // REACT State Hook used to dynamically update the Testimonial that's displayed
  let [currentTestimonial, setTestimonial] = useState(testimonials[0]);

  // Function that gets called on load then loops through Testimonials Array and updates State
  function Carousel(items) {
    let counter = 0;
    const length = items.length;
    let classes = document.getElementById("classes");

    setInterval(function () {
      if (counter == length - 1) {
        counter = 0;
      } else {
        counter++;
      }

      console.log("Start Fade");
      setTimeout(() => { classes.classList.add("fade"); }, 8000);

      console.log("Change Testimonial");
      setTestimonial(testimonials[counter]);

      console.log("End Fade");
      setTimeout(() => { classes.classList.remove("fade"); }, 200);

      console.log("Counter " + counter);
    }, 8200);
  }

  useEffect(() => {
    Carousel(testimonials);
  }, []); // <-- empty dependency array so function only runs once on load

  return (
    <section id="classes" className={styles.testimonials}>
      <blockquote>
        <h5>{currentTestimonial.testimonial}</h5>
      </blockquote>
      <p>
        <small>{currentTestimonial.name}</small>
      </p>
    </section>
  );
}

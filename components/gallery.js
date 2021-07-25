import Image from 'next/image';

import React, { useState } from "react";

import styles from "../styles/Gallery.module.css";

export default function Gallery(props) {

    // onClick method changes the main image to the thumbnail clicked
    let [main, setImage] = useState(props.images[0]);

    return (
        <section className={styles.gallery}>

            <div className={styles.main}>
                <Image src={main} alt={main.src} />
            </div>

            <div className={styles.thumbnails}>
                {props.images.map((image) => (
                    <div className={styles.thumbnail} key={props.images[image]} onClick={() => setImage(image)}>
                        <Image className={(main === image)? styles.highlight : ""} src={image} alt={image.src}/>
                    </div>
                ))}
            </div>

        </section>
    );

}
import { motion } from "motion/react";
import img1 from "../assets/images/regenerated_image_1779410457242.png";
import img2 from "../assets/images/regenerated_image_1779410470503.jpg";
import img3 from "../assets/images/regenerated_image_1779410466325.jpg";
import img4 from "../assets/images/regenerated_image_1779410472368.jpg";
import img5 from "../assets/images/regenerated_image_1779410475023.jpg";
import img6 from "../assets/images/regenerated_image_1779410468293.jpg";
import img7 from "../assets/images/regenerated_image_1779410473621.jpg";
import img8 from "../assets/images/regenerated_image_1779410476523.jpg";
import img9 from "../assets/images/regenerated_image_1781817083197.png";
import img10 from "../assets/images/regenerated_image_1779410479325.jpg";
import img11 from "../assets/images/regenerated_image_1781817973709.png";
import img12 from "../assets/images/regenerated_image_1781817974768.png";
import img13 from "../assets/images/regenerated_image_1781817975983.png";
import img14 from "../assets/images/regenerated_image_1781817978291.png";
import img15 from "../assets/images/regenerated_image_1781817980404.png";
import img16 from "../assets/images/regenerated_image_1781817982161.png";

export function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16
  ];

  return (
    <section className="bg-[#111] py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="break-inside-avoid"
            >
              <img
                src={img}
                alt={`Galeria ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import HText from "@/shared/HText";
import { ClassType, SelectedPages } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque placeat, ex sit explicabo earum a corrupti vero distinctio ad aliquam.",
    image: image1
  },
  {
    name: "Yoga Classes",
    image: image2
  },
  {
    name: "Ab Core Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque placeat, ex sit explicabo earum a corrupti vero distinctio ad aliquam.",
    image: image3
  },
  {
    name: "Adventure Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque placeat, ex sit explicabo earum a corrupti vero distinctio ad aliquam.",
    image: image4
  },
  {
    name: "Fitness Classes",
    image: image5
  },
  {
    name: "Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque placeat, ex sit explicabo earum a corrupti vero distinctio ad aliquam.",
    image: image6
  },
]

type Props = {
  setSelectedPage: (value: SelectedPages) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="bg-primary-100 w-full py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPages.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <div className="md:w-3/5">
                <HText>OUR CLASSES</HText>
                <p className="py-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim, magni mollitia modi quo, quos saepe placeat nihil expedita rerum autem dicta fugit atque amet velit est tenetur molestias voluptates.
                </p>
            </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

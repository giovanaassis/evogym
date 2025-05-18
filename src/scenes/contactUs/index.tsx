/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectedPages } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { useForm } from "react-hook-form";
import { useRef } from "react";

type Props = {
  setSelectedPage: (value: SelectedPages) => void;
  onSubmit?: (data: any) => void;
};

const ContactUs = ({ setSelectedPage, onSubmit }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formRef = useRef<HTMLFormElement>(null);

  const submitHandler = async (data: any) => {
    if (onSubmit) {
      onSubmit(data); // para testes
    } else {
      formRef.current?.submit(); // para produção
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPages.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            molestias quaerat assumenda ipsam, libero eum dolorem accusamus, ab
            exercitationem nisi quasi voluptatibus ratione dolore.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              ref={formRef}
              target="_self"
              onSubmit={handleSubmit(submitHandler)}
              method="POST"
              role="form"
              {...(!onSubmit && {
                action:
                  "https://formsubmit.co/ec9031f0ff9ceea364825579d87b7a0e",
              })}
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-primary-500 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-primary-500 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "This email is invalid."}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="text-primary-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}

              <input
                type="hidden"
                name="_subject"
                value="Novo contato via Evogym"
              />
              <input type="hidden" name="_captcha" value="false" />

              <input type="hidden" name="_next" value="https://evogym-psi.vercel.app/" />

              <button
                type="submit"
                className="bg-secondary-500 mt-5 cursor-pointer rounded-lg px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full before:absolute before:-right-10 before:-bottom-20 before:z-[1] md:before:content-[url('./assets/EvolveText.png')]">
              <img
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
                className="w-full"
                aria-label="contactUsPageGraphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

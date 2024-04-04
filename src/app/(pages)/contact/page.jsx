import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Контакты",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
    return (
        <>
            <PageBanner pageTitle={"Всегда рады знакомству"} breadTitle={"Контакты"} bgImage={"/img/photo/17.jpg"} />

            {/* about */}
            <section>
                <div className="container mil-p-120-60">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">

                            <div className="mil-mb-90">
                                <h2 className="mil-upper mil-up mil-mb-30">Связь с нами</h2>
                                <p className="mil-up mil-mb-40">Перед посещением офиса просьба предупредить по телефону</p>
                            </div>

                        </div>
                        <div className="col-lg-4 mil-relative">

                            <div className="mil-contact-sidebar">

                                <img src="img/photo/18.jpg" alt="img" style={{ "width": "100%", "height": "200px", "objectFit": "cover", "objectPosition": "0 -60px" }} className="mil-mb-30" />

                                <div className="mil-sidebar-info">

                                    <h6 className="mil-upper mil-up mil-mb-30">Офис</h6>
                                    <ul className="mil-list mil-dark mil-up mil-mb-30">
                                        <li>Республика Беларусь</li>
                                        <li>Минская область</li>
                                        <li>д. Дроздово</li>
                                    </ul>
                                    <h6 className="mil-upper mil-up mil-mb-30">Телефон</h6>
                                    <ul className="mil-list mil-dark mil-up mil-mb-30">
                                        <li>+37529-6309509</li>

                                    </ul>
                                    <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                                    <ul className="mil-list mil-dark mil-up">
                                        <li>drozdovosk@tut.by</li>

                                    </ul>

                                </div>

                            </div>

                        </div>
                        {/* <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="mil-up mil-mb-60">
                                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Wills Point</span>
                                        <p className="mil-up">10233 Gaillard Lake Est <br />Suite 420 <br />Houston, TX 75169 <br />(903) 560 - 9830</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mil-up mil-mb-60">
                                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Chicago</span>
                                        <p className="mil-up">10233 Gaillard Lake Est <br />Suite 420 <br />Houston, TX 75169 <br />(903) 560 - 9830</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mil-up mil-mb-60">
                                        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Harriman</span>
                                        <p className="mil-up">10233 Gaillard Lake Est <br />Suite 420 <br />Houston, TX 75169 <br />(903) 560 - 9830</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* map */}
            <div className="mil-map-frame mil-up">
                <div className="mil-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1972.5388150193453!2d27.62494360451503!3d53.989334295784936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc89f643d24bb%3A0xd4a5f4460580db87!2z0JTRgNC-0LfQtNC-0LLQviwg0JzQuNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwgMjIzMDUzLCDQkdC10LvQsNGA0YPRgdGM!5e0!3m2!1sru!2sru!4v1712247623863!5m2!1sru!2sru"
                        style={{ "border": "0" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            {/* map end */}

            {/* contact */}
            <section className="mil-relative">
                <div className="container mil-p-120-30">
                    <div className="mil-background-grid mil-softened"></div>
                    <div className="row justify-content-between">
                        <div className="col-lg-4">

                            <div className="mil-mb-90">
                                <h2 className="mil-upper mil-up mil-mb-30">Давайте обсудим</h2>
                                <p className="mil-up mil-mb-30">Есть вопросы? Мы хотели бы услышать от вас. Отправьте нам сообщение, чтобы начать разговор. Особенно о строительстве и ремонте.</p>
                                <div className="mil-divider-lg mil-up mil-mb-30"></div>
                                <p className="mil-up mil-mb-30">Хотите у нас работать?</p>
                                <div className="mil-up">
                                    <Link href="/team" className="mil-link mil-upper">Присоединиться <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7">

                            <ContactForm />

                        </div>
                    </div>
                </div>
            </section>
            {/* contact end */}
        </>
    );
};
export default Contact;

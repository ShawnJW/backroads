import React from "react";
import Title from "./Title";
import { services } from "../data";

export default function Services() {
    return (
        <section className="section services" id="services">
            <div className="section-title">
                <Title title="our" subTitle="services" />
            </div>
            <div className="section-center services-center">
                {/* single service */}
                {services.map((service) => {
                    const { id, icon, title, text } = service;
                    return (
                        <article key={id} className="service">
                            <span className="service-icon"><i className={icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title">{title}</h4>
                                <p className="service-text">{text}</p>
                            </div>
                        </article>
                    );
                })
                }

            </div>
        </section>

    )
}
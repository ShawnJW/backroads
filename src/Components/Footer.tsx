import React from "react";
import {pageLinks, socialLinks} from "../data";

export default function Footer() {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map((link) => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} rel="noreferrer" className="footer-link">{link.text}</a>
                            </li>
                        )

                    }
                )}

            </ul>
            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    const {id, href, icon} = link;
                        return (
                            <li key={id}>
                                <a href={href} rel="noreferrer" className="footer-link"><i className={icon}></i> </a>
                            </li>
                        )

                    }
                )}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
}
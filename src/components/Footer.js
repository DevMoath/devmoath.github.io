import React from "react";
import moment from "moment";

const Footer = () => {
    return (
        <section className="py-4 row bg-light text-dark text-center text-uppercase">
            <div className="w-100">
                © {moment().format("YYYY")} Moath Alhajri.
            </div>
        </section>
    );
};

export default Footer;

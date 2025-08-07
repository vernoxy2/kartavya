import React from 'react';

const Map = () => {
  return (
    <section data-aos="fade-up" className="w-full h-[500px] container xl:px-0 py-12">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.455133299313!2d72.95196480677549!3d20.59172181566292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3bdd46352cb%3A0xb318e29624cbcfa4!2sKALAJI%20BUSINESS%20CENTER!5e0!3m2!1sen!2sin!4v1753964439130!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;

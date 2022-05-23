import React from 'react';
import './Services.css'

const Services = () => {
    const allServices = [
      {
        id: 1,
        title: "Best Quality Products",
        desc: "The prior high-quality product enabled intel to keep customers happy despite a weak service organization.",
        img: "https://i.ibb.co/mT8bcRX/quality.png",
      },
      {
        id: 2,
        title: "Fast & Free Shipping",
        desc: "Our Logistics team ensures that your order is delivered to you as soon as possible. And for that we have a dedicated delivery team.",
        img: "https://i.ibb.co/48Crb9B/shipping.png",
      },
      {
        id: 3,
        title: "Secure Payments",
        desc: "Payment service providers (PSPs) are third-party companies that help business owners accept online payment methods, such as online banking, credit cards, debit cards, and electronic wallet applications.",
        img: "https://i.ibb.co/nRDxr9p/secure.png",
      },
      {
        id: 4,
        title: "24/7 Support",
        desc: "Got Lost? Facing any issues on the website? We have a dedicated support team that is always ready to help you. We are always there for you.",
        img: "https://i.ibb.co/VYmCt4z/support.png",
      },
      {
        id: 5,
        title: "Returns and Refunds",
        desc: "Cancel an accidental book order within seven days. Approved refunds are credited to the original payment source within three to five days.",
        img: "https://i.ibb.co/xCLyJCg/returns.png",
      },
      {
        id: 6,
        title: "Track Your Package",
        desc: "You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking information.",
        img: "https://i.ibb.co/PQxvqKw/track.png"
      },
    ];
    return (
      <div>
        <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] px-4 lg:px-0">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                  <span className="font-semibold text-lg text-black mb-2 block">
                    Our Services
                  </span>
                  <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-slate-900 mb-4">
                    What We Offer
                  </h2>
                  <p className="text-base text-slate-800">
                    We offer various types of services to make our clients
                    happy. Here are some of them.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              {allServices.map((service) => (
                <div
                  className="w-full md:w-1/2 lg:w-1/3 px-4  hover:scale-105 transition-all"
                  key={service.id}
                >
                  <div className="card p-10 md:px-7 xl:px-10 rounded-[10px] shadow-md cursor-pointer mb-8 ">
                    <div className="w-[80px] h-[80px] flex items-center justify-center mx-auto rounded-2xl mb-8 img-wrapper">
                      <img src={service.img} alt="" />
                    </div>
                    <h4 className="font-semibold text-xl text-dark mb-3 text-center">
                      {service.title}
                    </h4>
                    <p className="text-body-color text-center">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default Services;
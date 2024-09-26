import Data from "@data/sections/advantages.json";

const AdvantagesSection = () => {
  return (
    <>
        {/* advantages */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-center">
                    <div className="col-12">

                        <div className="mil-center mil-mb-90">
                            <h2 className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h6 className="mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-up" dangerouslySetInnerHTML={{__html : Data.description}} />
                        </div>

                    </div>
                    {Data.items.map((item, key) => (
                    
                    <div key={`advantages-item-${key}`} className="col-md-6 col-lg-2 d-flex justify-content-center">
                        <div className="mil-advantage mil-icon-box mil-center mil-up mil-mb-60">
                            <h5 className="mil-upper mil-mb-30 text-center" dangerouslySetInnerHTML={{__html : item.title}}></h5>
                            <div className="mil-icon mil-icon-border mil-mb-30 d-flex justify-content-center">
                            <img src="/img/icons/6.svg" alt="icon" />
                            </div>
                            <p className="text-center">{item.text}</p>
                        </div>
                    </div>

                    ))}
                </div>
            </div>
        </section>
        {/* advantages end */}
    </>
  );
};

export default AdvantagesSection;
import PageTemplate from "@/components/PageTemplate";
import Quote from "@/components/Quote";
import { contacts } from "@/data/contact";

const Contact = () => {
  return (
    <PageTemplate
      metaContent="How to contact Emmanuel Jemeni"
      metaTitle="Contact | Emmanuel Jemeni"
      pageSectionTitle="Contact"
    >
      <section>
        <Quote
          author="Garrison Keillor"
          quote="Be well, do good work, and keep in touch."
          cite_link="https://quotefancy.com/quote/1011786/Garrison-Keillor-Be-well-do-good-work-and-keep-in-touch"
        />
      </section>
      {["Social Media", "Email", "Instant Messaging", "Communities"].map(
        (category) => (
          <section key={category} className="my-6">
            <p className="text-left ml-[10%] text-5xl">{category}</p>
            <div className="grid justify-items-center grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] gap-x-4 gap-y-8 my-8 mx-0">
              {contacts
                .filter((contact) => contact.category === category)
                .map((contact, index) => (
                  <div
                    key={`${index}__${contact.category}__${contact.name}`}
                    className="flex items-center rounded py-6 px-3"
                  >
                    <div className="flex justify-center">
                      <contact.image
                        size="50%"
                        title={contact.image_attribution || contact.name}
                      />
                    </div>
                    <div className="text-4xl text-center">
                      <p className=" underline-offset-[16px] transition-underline-offset ease-in-out duration-200 hover:underline hover:underline-offset-8">
                        <a href={contact.url} target="_blank">
                          {contact.name}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )
      )}
    </PageTemplate>
  );
};

export default Contact;

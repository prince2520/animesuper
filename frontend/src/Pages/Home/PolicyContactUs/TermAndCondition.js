import "./PolicyContactUs.css";

// Term and Conditions
const conditions = [
  {
    title: `Terms`,
    content: `By accessing this Website, accessible from https:// superanime.com, you are agreeing to be bound by
                    these Website Terms and Conditions of Use and agree that you are responsible for the agreement with
                    any applicable local laws. If you disagree with any of these terms, you are prohibited from
                    accessing this site. The materials contained in this Website are protected by copyright and trade
                    mark law.`,
  },
  {
    title: `Use License`,
    content: (
      <>
        <ul>
          <li>modify or copy the materials; </li>
          <li>
            use the materials for any commercial purpose or for any public
            display;
          </li>
          <li>
            attempt to reverse engineer any software contained on Super Anime's
            Website;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transferring the materials to another person or "mirror" the
            materials on any other server.
          </li>
        </ul>
        This will let Super Anime to terminate upon violations of any of these
        restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format. These Terms of
        Service has been created with the help of the Terms Of Service Generator
        and the Privacy Policy Generator.
      </>
    ),
  },
  {
    title: `Disclaimer`,
    content: `All the materials on Super Anime’s Website are provided "as is". Super Anime makes no warranties,
                   may it be expressed or implied, therefore negates all other warranties. Furthermore, Super Anime
                   does not make any representations concerning the accuracy or reliability of the use of the materials
                   on its Website or otherwise relating to such materials or any sites linked to this Website.
        `,
  },
  {
    title: `Limitations`,
    content: `Super Anime or its suppliers will not be hold accountable for any damages that will arise with the
                    use or inability to use the materials on Super Anime’s Website, even if Super Anime or an authorize
                    representative of this Website has been notified, orally or written, of the possibility of such
                    damage. Some jurisdiction does not allow limitations on implied warranties or limitations of
                    liability for incidental damages, these limitations may not apply to you.
        
        `,
  },
  {
    title: `Revisions and Erratae`,
    content: `The materials appearing on Super Anime’s Website may include technical, typographical, or
                    photographic errors. Super Anime will not promise that any of the materials in this Website are
                    accurate, complete, or current. Super Anime may change the materials contained on its Website at any
                    time without notice. Super Anime does not make any commitment to update the materials.
        
        `,
  },
  {
    title: `Links`,
    content: `Super Anime has not reviewed all of the sites linked to its Website and is not responsible for the
        contents of any such linked site. The presence of any link does not imply endorsement by Super Anime
        of the site. The use of any linked website is at the user’s own risk.
        
        `,
  },
  {
    title: `Site Terms of Use Modifications`,
    content: `Super Anime may revise these Terms of Use for its Website at any time without prior notice. By using
                    this Website, you are agreeing to be bound by the current version of these Terms and Conditions of
                    Use.
        `,
  },
  {
    title: `Your Privacy`,
    content: `Please read our Privacy Policy.`,
  },
  {
    title: `Governing Law`,
    content: `Any claim related to Super Anime's Website shall be governed by the laws of bq without regards to
        its conflict of law provisions.`,
  },
];

const TermAndCondition = () => {
  return (
    <div className="term-and-condition-page">
      <div className="route">
        <h3 className="color-text-light">
          Policy > <span className="color-text">Term and Conditions</span>
        </h3>
      </div>
      <div className="flex-center terms">
        {conditions.map((cond, index) => (
          <div className="flex-center term">
            <h4 className="color-text-light">
              {index + 1}. {cond.title}
            </h4>
            <p>{cond.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermAndCondition;

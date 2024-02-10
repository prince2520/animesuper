import "./PolicyContactUs.css";

// DMCA Condition
const conditions = [
  {
    title: `DMCA take down request requirements-`,
    content: ` We take the intellectual property rights of others seriously and require that our Users
        do the same. The Digital Millennium Copyright Act (DMCA) established a process for addressing
        claims of copyright infringement. If you own a copyright or have authority to act on behalf of
        a copyright owner and want to report a claim that a third party is infringing that material on
        or through GitLab's services, please submit a DMCA report on our Contact page, and we will take
        appropriate action.`,
  },
  {
    title: `DMCA Report requirements -`,
    content: (
      <>
        <ul>
          <li>
            A description of the copyrighted work that you claim is being
            infringed;
          </li>
          <li>
            A description of the material you claim is infringing and that you
            want removed or access to which you want disabled and the URL or
            other location of that material;
          </li>
          <li>
            Your name, title (if acting as an agent), address, telephone number,
            and email address;
          </li>
          <li>
            The following statement: "I have a good faith belief that the use of
            the copyrighted material I am complaining of is not authorized by
            the copyright owner, its agent, or the law (e.g., as a fair use)";
          </li>
          <li>
            The following statement: "The information in this notice is accurate
            and, under penalty of perjury, I am the owner, or authorized to act
            on behalf of the owner, of the copyright or of an exclusive right
            that is allegedly infringed";
          </li>
          <li>
            An electronic or physical signature of the owner of the copyright or
            a person authorized to act on the owner's behalf.
          </li>
        </ul>
        Your DMCA take down request should be submit here:
        https://superanime.com/contact <br />
        We will then review your DMCA request and take proper actions, including
        removal of the content from the website.
      </>
    ),
  },
];

const DMCA = () => {
  return (
    <div className="dmca-page">
      <div className="route">
        <h3 className="color-text-light">
          Policy > <span className="color-text">DMCA</span>
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

export default DMCA;

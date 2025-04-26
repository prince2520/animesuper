export const categoryType = ["Anime", "Manga"];

export const animeCategory = [
  {
    title: "Airing",
    slug: "airing",
  },
  {
    title: "Tv Series",
    slug: "tv",
  },
  {
    title: "Movies",
    slug: "movie",
  },
  {
    title: "Popular",
    slug: "bypopularity",
  },
  {
    title: "Favorite",
    slug: "favorite",
  },
  {
    title: "Upcoming",
    slug: "upcoming",
  },
];

export const mangaCategory = [
  {
    title: "Manga",
    slug: "manga",
  },
  {
    title: "Novels",
    slug: "novels",
  },
  {
    title: "One-shots",
    slug: "oneshots",
  },
  {
    title: "Manhwa",
    slug: "manhwa",
  },
  {
    title: "Manhua",
    slug: "manhua",
  },
  {
    title: "Popular",
    slug: "bypopularity",
  },
];

export const animeStatus = [
  "All Anime",
  "Dropped",
  "Currently Watching",
  "Complete",
  "On Hold",
  "Plan to watch",
];

export const mangaStatus = [
  "All Manga",
  "Dropped",
  "Currently Reading",
  "Complete",
  "On Hold",
  "Plan to read",
];

export const detail_links = ["Information", "Overview", "Related"];

export const policiesData = [
  {
    to: "terms-and-condition",
    name: "Term of conditions",
  },
  {
    to: "dmca",
    name: "DMCA",
  },
  {
    to: "contact-us",
    name: "Contact Us",
  },
];

export const sideBarData = (isAuth) => {
  return [
    {
      categoryTitle: "Category",
      subCategoryData: [
        {
          name: "Anime",
          icon: "bx:movie-play",
          to: "anime",
        },
        {
          name: "Manga",
          icon: "material-symbols:menu-book-outline-rounded",
          to: "manga",
        },
      ],
      isAuth: true,
    },
    {
      categoryTitle: "Library",
      subCategoryData: [
        {
          name: "Watchlist",
          icon: "ph:book-bookmark",
          to: "my-watchlist/anime",
        },
        {
          name: "Favorite",
          icon: "mdi:cards-heart",
          to: "my-favorite/anime",
        },
      ],
      isAuth: isAuth,
    },
  ];
};

export const favoriteItemData = (value) => {
  return [
    {
      heading: "Score: ",
      value: value.score,
    },
    {
      heading: "Types: ",
      value: value.type,
    },
    {
      heading: "Year: ",
      value: value.year,
    },
  ];
};

export const watchlistHeadings = [
    {
        width: '5%',
        title: '#'
    },
    {
        width: '15%',
        title: 'Image'
    },
    {
        width: '24%',
        title: 'Title'
    },
    {
        width: '26%',
        title: 'Progress/Episodes'
    },
    {
        width: '10%',
        title: 'Type'
    },
    {
        width: '10%',
        title: 'Delete'
    },
    {
        width: '10%',
        title: 'Edit'
    }
];


export const watchlistColors = [
    {
        className:'completed',
        title:'completed'
    },
    {
        className:'dropped',
        title:'dropped'
    },
    {
        className:'on-hold',
        title:'on hold'
    },
    {
        className:'currently-watching',
        title:'currently watching'
    },
    {
        className:'plan-watch',
        title:'plan to watch'
    },
];

export const contactLinkData = [
    {
      icon: "logos:facebook",
      name: "Facebook",
    },
    {
      icon: "logos:reddit-icon",
      name: "Reddit",
    },
    {
      icon: "logos:twitter",
      name: "Twitter",
    },
  ];

  // DMCA Condition
export const dmcaConditions = [
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


  
// Term and Conditions
export const termAndConditions = [
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
  

  
export const getStatusColor = (status) => {
    let color;
    switch (status) {
        case 'Currently Watching' || 'Currently Reading':
            color = '#178D14';
            break;
        case 'Complete':
            color = '#1877F2';
            break;
        case 'Dropped':
            color = '#B42323'
            break;
        case 'On Hold':
            color = '#D3A913'
            break;
        case 'Plan to Watch' || 'Plan to Read':
            color = '#178D14'
            break;
        default:
            color = '#636262';
    }
    return color;
}
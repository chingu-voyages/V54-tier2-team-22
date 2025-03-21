import GitHub from '../icons/GitHub';
import Logo from './Header/HeaderComponents/Logo';

function Footer() {
  const team = [
    { name: 'Jim Medlock', github: 'jdmedlock' },
    { name: 'Shaimaa', github: 'Shaimaa01' },
    { name: 'Ademola Kujore', github: 'Dhemmyhardy' },
    { name: 'QueenHub555', github: 'QueenHub555' },
    { name: 'Jyotirmoy Das', github: 'jdx-code' },
    { name: 'Nati Gebregorgis', github: 'NatiG25' },
    { name: 'Oluwasemilore', github: 'shemigam1' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute bottom-0 w-full dark:bg-Neutral-900 bg-Neutral-100 border-t border-Neutral-200 dark:border-Neutral-700  px-8 max-sm:px-[16px] ">
      <div className="flex justify-between items-center  gap-6 max-sm:flex-col pb-4 pt-6">
        <Logo />

        {/* Team */}
        <div className="">
          <h3 className="text-neutral-0 dark:text-neutral-100 text-lg font-bold mb-3 max-sm:text-center">
            Our Team
          </h3>
          <ul className="grid grid-cols-auto-fit grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:gap-3 md:gap-2 ">
            {team.map((member) => (
              <li
                key={member.github}
                className="flex items-center  gap-2 hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-md transition-colors w-fit"
              >
                <a
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name}'s GitHub Profile`}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-Orange-500 dark:hover:text-Orange-500"
                >
                  <GitHub className="w-5 h-5" />
                </a>
                <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                  {member.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Repo Link */}
        <div>
          <a
            href="https://github.com/chingu-voyages/V54-tier2-team-22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PentaGo GitHub Repository"
            className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 px-4 py-2 rounded-full hover:bg-Orange-500 hover:text-neutral-0 dark:hover:bg-Orange-800 dark:hover:text-neutral-100 transition-colors"
          >
            <GitHub className="w-5 h-5" />
            <span className="text-sm font-medium">Repo</span>
          </a>
        </div>
      </div>
      {/* Copyright & Chingu Voyagers */}
      <div className="mt-4 text-center text-neutral-500 dark:text-neutral-400 text-sm">
        © {currentYear} Built by{' '}
        <a
          href="https://chingu.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-Orange-500  hover:underline"
          aria-label="Chingu Voyagers"
        >
          Chingu Voyagers
        </a>{' '}
        V54-tier2-team22
      </div>
    </footer>
  );
}

export default Footer;

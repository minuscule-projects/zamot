import React from 'react';

const dummyLinks = [
  {
    title: 'footer muito lindo',
    links: [
      { title: 'react', to: 'https://reactjs.org/tutorial/tutorial.html' },
      { title: 'nextJs', to: 'https://nextjs.org/learn/basics/create-nextjs-app' },
      { title: 'tailwindCss', to: 'https://tailwindcss.com/docs' },
    ],
  },
  {
    title: 'Ainda mais giro',
    links: [
      { title: 'casa da mae', to: 'somewhere' },
      { title: 'casa do pai', to: 'somewhere' },
    ],
  },
];

const MnFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mn-container flex justify-between align-top py-6">
        <div className="flex justify-between">
          {dummyLinks.map((linkObj) => (
            <div className="flex flex-col mr-24 font-medium" key={`${linkObj.title}`}>
              <p className={'text-base text-primary'}>{linkObj.title.toUpperCase()}</p>
              <div className="flex flex-col mt-4">
                {linkObj.links &&
                  linkObj.links.map((link) => (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.title}
                      href={link.to}
                      className={'text-xs mt-3'}
                    >
                      {link.title.toUpperCase()}
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MnFooter;
